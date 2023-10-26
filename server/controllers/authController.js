import { 
  User, 
} from "../../database/model.js"

import session from "express-session"



//Sign-up
const addSignUp = async (req, res) => {

  const {
    username, 
    email, 
    password } = req.body


  let user = await User.create({
      username: username,
      email: email,
      password: password
      })
      
  console.log(user)
  
  await user.createPlaylist()

  if( user && email && password ){
      req.session.userId = user.userId
      res.status(200).json({
        success: true, 
        message:'user created and logged in!' 
      })
  } else {
      res.json({ success: false })
  }    
  }


//Login
const authenticate = async (req, res) => {
  const { 
    email, 
    password 
  } = req.body
  console.log(req.body.email)
  const user = await User.findOne({ 
    where: { 
      email: email
    }
  })
  console.log(user,
    password,
    email)

  if(user && user.password === password && !req.session.userId) {
      req.session.userId = user.userId
      res.json({ 
        success: true 
      })
  } else {
      res.json({ 
        success: false 
      })
  }
}

//Logout
const destroySession = async (req, res) => {
  req.session.destroy()
  res.json({ 
    success: true 
  })
};



//middleware function
const authRequired = async (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ 
      error: 'Unauthorized'
    });
  }


}

//checks authentication
const getAuthStatus = (req, res) => {
  if ( req.session.userId ) {
    res.json({
      loggedIn: true, 
      userId: req.session.userId 
    }) 
  } else {
    res.json({ 
      loggedIn: false, 
      userId: null })
  }
}



export { 
  addSignUp,
  authenticate, 
  destroySession, 
  authRequired,
  getAuthStatus,
};
