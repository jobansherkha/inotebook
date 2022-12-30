const JWT_SECRET = "jobanpreetSingh";

var jwt = require("jsonwebtoken");

// a middleware takes req, res, and next always
const fetchuser = (req, res, next) => {
  // get the toekn from jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.Status(401).send({ eroor: " pls use valid token" });
  }
  try {
    const string = jwt.verify(token, JWT_SECRET);
    req.user = string.user;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

module.exports = fetchuser;
