
const Header = () => {

    return(
        <div id='tapeMain'>
        <div id='window'>
          <button className="windowButtons" id='topButton'> Top </button>
          <button className="windowButtons" id='loginButton'> Login </button>
          <button className="windowButtons" id='friendsButton'> Friends </button>
        </div>
        <div id='tapeBottom'>
          <div>
            <p>username/signup</p>
          </div>
        </div>
      </div>  
    )
}

export default Header