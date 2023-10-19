import React from "react";
import ReactModal from "react-dom";
// import Modal from "react-modal";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../AddSong/AddSong.css"

function AddSong() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const searchSong = async () => {
      const response = await fetch('api_url_for_search_capabilitites' + searchTerm)
      const data = await response.json();
      return data;
    }
  
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