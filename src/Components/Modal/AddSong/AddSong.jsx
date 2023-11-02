import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function AddSong({plId, setSongs}) {
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    const handleClose = () => {
        setShow(false);
        setSelectedSong(null);
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://cors-anywhere.herokuapp.com/api.deezer.com/search?q=${search}`
                );

                if (response.status === 200) {
                    setResults(response.data.data);
                } else {
                }
            } catch (error) {
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [search]);

    const handleSongSelect = (song, e) => {
        e.preventDefault(); 
        setSelectedSong(song);
    };

    const handleAdd = async () => {
        let { 
            title: name, 
            preview, 
            artist: { name: artist }, 
            album: { title: album, cover_medium: imgUrl} 
        } = selectedSong;
        let res = await axios.post(`/api/addnewsong/${plId}`, { name, preview, artist, album, imgUrl })
        setSongs(res.data)
    };

    return (
        <>
            <button className='button' onClick={handleShow}>
                Add New Song
            </button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Dialog className='body'>
                    <Modal.Header className='head'>
                        <Modal.Title className='text'>Add Songs</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='body'>
                        <Form>
                            <Form.Label className='text'>Search Song</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter song here"
                                onChange={(e) => setSearch(e.target.value)}
                                autoFocus
                                className='form text'
                            />
                            <Form.Label className='text'>Results</Form.Label>
                            {results && results.length > 0 ? (
                                <ul className='mButton'>
                                    {results.map((song) => (
                                        <li key={song.id}>
                                            <button className='mButton'
                                                onClick={(e) => handleSongSelect(song, e)}
                                            >
                                                {song.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No results found.</p>
                            )}
                        </Form>

                        {selectedSong && (
                            <div>
                                <h3>{selectedSong.title}</h3>
                                <p>{selectedSong.album.title}</p>
                                <img
                                    src={selectedSong.album.cover_medium}
                                    alt={selectedSong.title}
                                />
                            </div>
                        )}
                    </Modal.Body>

                    <Modal.Footer className='foot'>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="info" onClick={handleAdd}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    );
}

export default AddSong;

