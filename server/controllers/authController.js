//registry
//register and login at the same time/session
//logout/destroy session


import session from "express-session"

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
const authStatus = (req, res) => {
  if ( req.session.userId ) {
    res.json({loggedIn: true }) 
  } else {
    res.json({loggedIn: false})
  }
}

//middleware function that will clean-up code
const loginRequired = async (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized'});
  }
}


export { 
  authenticate, 
  destroySession, 
  authStatus,
  loginRequired,
};
