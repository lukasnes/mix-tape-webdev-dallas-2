//registry
//register and login at the same time/session
//logout/destroy session

import { User, Playlist } from "../../database/model.js"
import session from "express-session"


//Sign-up
const addSignUp = async (req, res) => {

  const {username, email, password } = req.body
      let user = await User.create({
          username: username,
          email: email,
          password: password
          })
          
        await user.createPlaylist()

  console.log(user)

  if( user && email && password ){
      req.session.userId = user.userId
      res.status(200).json({message:'user created!', success: true})
  } else {
      res.json({ success: false })
  }    
  }


//Login
const authenticate = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email: email}})
  console.log(user,password,email)
  if(user && user.password === password && !req.session.userId) {
      req.session.userId = user.userId
      res.json({ success: true })
  } else {
      res.json({ success: false })
  }
}

//Logout
const destroySession = async (req, res) => {
  req.session.destroy()
  res.json({ success: true })
};



//checks authentication
const getAuthStatus = (req, res) => {
  if ( req.session.userId ) {
    res.json({loggedIn: true }) 
  } else {
    res.json({loggedIn: false})
  }
}

//middleware function that will clean-up code
const authRequired = async (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized'});
  }

  // const { userId } = req.session 
  // if(!userId) {
  //     res.status(401).json({ error: 'Unauthorized'})
  // } else {
  //     next()
  // }
}


export { 
  authenticate, 
  destroySession, 
  getAuthStatus,
  authRequired,
  addSignUp
};
