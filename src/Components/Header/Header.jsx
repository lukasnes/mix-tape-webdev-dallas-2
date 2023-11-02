import LoginModal from "../Modal/Login/Login"
import SignUpModal from "../Modal/SignUp/SignUp"
import {useState} from 'react'
import axios from "axios"
import './header.css'
import { useDispatch, useSelector } from "react-redux"
import { BsHeartFill, BsHeart, BsFire } from "react-icons/bs";


const Header = ({setPageState, setLoadingState}) => {

  const [loginShow, setLoginShow] = useState(false)
  const [signUpShow, setSignUpShow] = useState(false)

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state=>state.loggedIn)

  const handleLoginOpen = () => setLoginShow(true)
  const handleLoginClose = () => setLoginShow(false)

  const handleSignUpOpen = () => setSignUpShow(true)
  const handleSignUpClose = () => setSignUpShow(false)

  const handleLogout = async () => {
    const res = await axios.post('/api/auth/logout')
    if(res.data.success){
      dispatch({type: 'logout'})
      setLoginShow(false)
      setPageState('hot')
    }
  }

  const handleMyPlaylist = () => {
    setLoadingState('me')
    setPageState('loading')
  }

  const handleTopPlaylist = () => {
    setLoadingState('hot')
    setPageState('loading')
  }

  const handleFreindsList = () => {
    setLoadingState('friends')
    setPageState('loading')
  }

    return isLoggedIn ? (
      <div id='tapeMain' className="tape">
        <h1 id='logo'>Mix-Co</h1>
        <div id='window'>
          <button 
              className="button roundButton" 
              id='topButton' 
              onClick={handleTopPlaylist}> <BsFire/> 
          </button>
          <button 
              className="button" 
              id='logoutButton' 
              onClick={handleLogout}> Logout 
            </button>
          <button 
          className="button roundButton" 
          id='friendsButton' 
          onClick={handleFreindsList} > <BsHeartFill/> 
          </button>
        </div>
        <div id='tapeBottom' className="">
          <div id='signUpDiv' className="tape">
            <button 
                className="button" 
                onClick={handleMyPlaylist}> My Playlists
            </button>
          </div>
        </div>
      </div>  
    ):
    (
      <>
        <SignUpModal 
          id='signUpModal' 
          signUpShow={signUpShow} 
          setSignUpShow={setSignUpShow} 
          handleSignUpClose={handleSignUpClose}  />
        <LoginModal 
          id="loginModal" 
          loginShow={loginShow} 
          setLoginShow={setLoginShow} 
          handleLoginClose={handleLoginClose} />
        
      <div id='tapeMain' className="tape">
        <h1 id='logo'>Mix-Co</h1>
        <div id='window'>
            <button 
              className="button roundButton" 
              id='topButton' 
              onClick={handleTopPlaylist}> <BsFire/> 
            </button>
            <button 
              className="button" 
              id='loginButton' 
              onClick={handleLoginOpen} > Login </button>
            <button 
              className="button roundButton" 
              id='friendsButton' 
              disabled={true}> <BsHeart/> 
            </button>
          </div>
          <div id='tapeBottom' className="">
            <div id='signUpDiv' className="tape">
              <a 
                href='#' 
                id='signUpLink' 
                onClick={handleSignUpOpen} >Sign-up</a>
            </div>
          </div>
        </div>
       </>
    )
   
}

export default Header