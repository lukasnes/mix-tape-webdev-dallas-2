import { useState } from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axios from 'axios';


function SignUpModal({signUpShow, handleSignUpClose}) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setConfirm] = useState('')
    const dispatch = useDispatch()

    const handleSignUp = async () => {
        if(password === passwordConfirm){
          const res = await axios.post('/api/signup', {username, email, password})
          console.log(res)
        if (res.data.success){
            dispatch({type: 'login'})
            handleSignUpClose()
        } else {
                alert('Passwords do not match!')
            }
        }
    } 

  return (
    <div
      className="modal show"
      style={ signUpShow ? { display: 'block', height: '360px', position: 'initial', zindex: '3' } : {display: 'none'}}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Control
                    id='username'
                    type='text'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder='please enter a username'
                    required />
                <Form.Control
                    id='email'
                    type='text'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='please enter a valid email'
                    required />
                <Form.Control
                    id='password'
                    type='text'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='please enter a password'
                    required />
                <Form.Control
                    id='passwordConfirm'
                    type='text'
                    value={passwordConfirm}
                    onChange={(e)=>setConfirm(e.target.value)}
                    placeholder='please renter password'
                    required />
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleSignUpClose}>Close</Button>
          <Button type='submit' variant="primary" onClick={handleSignUp}>Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default SignUpModal;