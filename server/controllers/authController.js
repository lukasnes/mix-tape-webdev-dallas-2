import session from "express-session";

const login = async (req, res) => {};

const logout = async (req, res) => {};

const loginRequired = async (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401);
  }
};

export { login, logout, loginRequired };
