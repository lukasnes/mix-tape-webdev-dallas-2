
const Header = ({isLoggedIn, setIsLoggedIn}) => {

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
          <button className="windowButtons" id='loginButton'> Login </button>
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