import React from "react";
// import ReactModal from "react-dom";
// import Modal from "react-modal";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddSong = () => {
    const [Add, setAdd] = useState(false);

    const handleClose = () => setAdd(false);
    const handleAdd = () => setAdd(true);

    const searchSong = async () => {
        const response = await fetch('api_url_for_search_capabilitites' + searchTerm)
        const data = await response.json();
        return data;
    }

    return (
    <>
        <Button variant="primary" onClick={handleAdd}> Add New Song </Button>
        <Modal>
            <Modal.Header>
                <Modal.Title>Add Songs</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                <Form.Label>Search Song</Form.Label>
                <Form.Control
                    type="song"
                    placeholder="enter song here"
                    autoFocus
                />
                <Form.Label>Results:</Form.Label>
                <Form.Control as="results" row={10} />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Save</Button>
                <Button variant ="secondary">Close</Button>
            </Modal.Footer>
        </Modal>
    </>
    )
};

export default AddSong;