import LoginModal from "../Modal/Login/Login"
import {useState} from 'react'


const Header = ({isLoggedIn}) => {

  const [show, setShow] = useState(false)

  // <LoginModal show={show} setShow={setShow} />

  const handleOpen = () => {
    setShow(true)
  }


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
      </div>  
    )
}

export default Header