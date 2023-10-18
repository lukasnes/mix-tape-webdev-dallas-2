import {Modal, Form, Button} from 'react-bootstrap';
// import Modal from 'react-modal'
// import ReactModal from 'react-dom'
import { useState } from 'react';
import axios from 'axios';

function LoginModal({show, setShow, handleClose}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        // event.preventDefault()
        const res = await axios.post('/api/login', {email, password})
        // todo need response
    }

  return (
    <div
      className="modal show"
      style={ show ? { display: 'block', position: 'initial', height: '300px' } : {display: 'none'}}
    >
      <Modal.Dialog>
        <Modal.Header onClick={handleClose} closeButton >
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
            <Form.Control
                id="email" 
                type="text" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='Please enter email'
                autoFocus
                required />
            <Form.Control
                id="password"
                type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Please enter password'
                autoFocus
                required />
            </Form>    
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button type='submit' variant="primary" onClick={handleLogin}>Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default LoginModal;