import LoginModal from "../Modal/Login/Login"
import {useState} from 'react'
import {Modal} from 'react-bootstrap'


const Header = ({isLoggedIn}) => {

  const [show, setShow] = useState(false)

  const handleOpen = () => setShow(true)
  const handleClose = () => setShow(false)


    return isLoggedIn ? (
      <div id='tapeMain'>
        
        <div id='window'>
          <button className="windowButtons" id='topButton'> Top </button>
          <button className="windowButtons" id='createButton'> Create </button>
          <button className="windowButtons" id='friendsButton'> Friends </button>
        </div>
        <div id='tapeBottom'>
          <div>
            <p>username</p>
          </div>
        </div>
      </div>  
    ):
    (
        <div id='tapeMain'>
        <div id='window'>
          <button className="windowButtons" id='topButton'> Top </button>
          <button className="windowButtons" id='loginButton' onClick={handleOpen} > Login </button>
          <button className="windowButtons" id='friendsButton'> Friends </button>
        </div>
        <div id='tapeBottom'>
          <div>
            <p>signup</p>
          </div>
        </div>
        <LoginModal id="loginModal" show={show} setShow={setShow} handleClose={handleClose} />
      </div>  
    )
}

export default Header