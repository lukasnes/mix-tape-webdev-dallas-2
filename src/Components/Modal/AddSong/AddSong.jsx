import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import '../AddSong/AddSong.css';

function AddSong() {
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
                    // Handle errors here
                }
            } catch (error) {
                // Handle network or parsing errors
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [search]);

    const handleSongSelect = (song, e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setSelectedSong(song);
    };

    return (
        <>
            <button className='button' onClick={handleShow}>
                Add New Song
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Songs</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Label>Search Song</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter song here"
                                onChange={(e) => setSearch(e.target.value)}
                                autoFocus
                            />
                            <Form.Label>Results</Form.Label>
                            {results && results.length > 0 ? (
                                <ul>
                                    {results.map((song) => (
                                        <li key={song.id}>
                                            <button
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

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    );
}

export default AddSong;

