import React from "react";
import ReactModal from "react-dom";
// import Modal from "react-modal";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../AddSong/AddSong.css"
import debounce from 'lodash/debounce';

function AddSong() {
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = () => {
      const { value: nextValue } = event.target;
      debouncedSave(nextValue);
    };
  
    const searchSong = async () => {
      const response = await fetch('' + searchTerm)
      const data = await response.json();
      return data;
    };

    // useEffect(() => {
    //   const loadSongs = async () => {
    //   setLoading(true);
    // }
    // }, [search]);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add New Song
        </Button>
  
        <Modal show={show} onHide={handleClose}>
  
          <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add Songs</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <Form>
              <Form.Label>Search Song</Form.Label>
              <Form.Control
              type="song"
              placeholder="Enter song here"
              autoFocus
              />
              <Form.Label>Results</Form.Label>
              <Form.Control as="results" row={10}/>
            </Form>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </>
    );
  }

export default AddSong;