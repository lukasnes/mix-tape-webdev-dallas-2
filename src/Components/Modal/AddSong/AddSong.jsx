import React from "react";
import ReactModal from "react-dom";
import Modal from "react-modal";
import { useState } from "react";


const AddSong = () => {
    const [Add, setAdd] = useState(false);

    const handleClose = () => setAdd(false);
    const handleAdd = () => setAdd(true);

    return (
    <>
        <Button variant="primary" onClick={handleAdd}> Add New Song </Button>
        
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Add Songs</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p></p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Save</Button>
                <Button variant ="secondary">Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
    </>
    )
}

export default AddSong;