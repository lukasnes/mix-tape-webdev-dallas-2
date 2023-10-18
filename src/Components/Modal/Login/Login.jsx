import {Modal} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function LoginModal() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        event.preventDefault()
        const res = await axios.post('/api/login', {email, password})
        // todo need response
    }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form id='loginForm' onSubmit={handleLogin} >
            <label for="email" />
            <input id="email" 
                type="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='Please enter email'
                required />
            <label for="password" />
            <input id="password"
                type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='please enter a password'
                required />
            </form>    
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <input type='submit' variant="primary">Submit</input>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default LoginModal;