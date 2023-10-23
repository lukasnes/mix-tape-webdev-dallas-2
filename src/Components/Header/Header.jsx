import LoginModal from "../Modal/Login/Login"
import SignUpModal from "../Modal/SignUp/SignUp"
import {useState} from 'react'
import {Modal} from 'react-bootstrap'
import axios from "axios"
import './header.css'
import { useDispatch, useSelector } from "react-redux"
import { BsHeartFill, BsHeart } from "react-icons/bs";



const Header = () => {

  const [loginShow, setLoginShow] = useState(false)
  const [signUpShow, setSignUpShow] = useState(false)

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state=>state.loggedIn)

  const handleLoginOpen = () => setLoginShow(true)
  const handleLoginClose = () => setLoginShow(false)

  const handleSignUpOpen = () => setSignUpShow(true)
  const handleSignUpClose = () => setSignUpShow(false)

  const handleLogout = async () => {
    const res = await axios.post('/api/logout')
    if(res.data.success){
      dispatch({type: 'logout'})
      setLoginShow(false)

    }
  }

    return isLoggedIn ? (
      <div id='tapeMain'>
        <div id='window'>
          <button className="windowButtons" id='topButton'> Top </button>
          <button className="windowButtons" id='logoutButton' onClick={handleLogout}> Logout </button>
          <button className="windowButtons" id='friendsButton' > <BsHeartFill/> </button>
        </div>
        <div id='tapeBottom'>
          <div id='signUpDiv'>
            <p>username</p>
          </div>
        </div>
      </div>  
    ):
    (
      <>
      <SignUpModal id='signUpModal' signUpShow={signUpShow} setSignUpShow={setSignUpShow} handleSignUpClose={handleSignUpClose}  />
      <LoginModal id="loginModal" loginShow={loginShow} setLoginShow={setLoginShow} handleLoginClose={handleLoginClose} />
      
        <div id='tapeMain'>
        <div id='window'>
          <button className="windowButtons" id='topButton'> Top </button>
          <button className="windowButtons" id='loginButton' onClick={handleLoginOpen} > Login </button>
          <button className="windowButtons" id='friendsButton' disabled={true}> <BsHeart/> </button>
        </div>
        <div id='tapeBottom'>
          <div id='signUpDiv'>
            <a href='#' id='signUpLink' onClick={handleSignUpOpen} >signup</a>
          </div>
        </div>
      </div>
      
       </>
    )
   
}

export default Header