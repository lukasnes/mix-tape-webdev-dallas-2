import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup'

function LoginModal({loginShow, setLoginShow, handleLoginClose}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleLogin = async () => {
        const res = await axios.post('/api/auth/login', {email, password})
        if (res.data.success){
            dispatch({type: 'login', payload: {userId: 1}})
            setLoginShow(false)
        }
    }

  return (
    <div
      className="modal show"
      style={ loginShow ? { display: 'block', position: 'initial', height: '290px', zindex: '3' } : {display: 'none'}}
    >
      <Modal.Dialog>
        <Modal.Header className='head'>
          <Modal.Title className='text'>Please Login</Modal.Title>
        </Modal.Header>

        <Modal.Body className='body'>
            <Form className=''>
            <Form.Control
                id="email" 
                type="text" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='Please enter email'
                required
                className='form text' />
            <Form.Control
                id="password"
                type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Please enter password'
                required
                className='form text' />
            </Form>    
        </Modal.Body>

        <Modal.Footer className='foot'>
          <Button variant="secondary" onClick={handleLoginClose}>Close</Button>
          <Button type='submit' variant="info" onClick={handleLogin}>Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default LoginModal;