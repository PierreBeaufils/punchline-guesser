const {
  User
} = require('../models/');
const sequelize = require('../database');

const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.id = decoded.id;
        next();
      }
    });
  }
};

const isAdmin = (req, res, next) => {
  User.findByPk(req.id)
    .then((user) => {
      if (user.role === 'admin') {
        next();
      } else {
        return res.status(401).send('Unauthorized access');
      }
    })
};

const adminMiddleware = {
  verifyToken,
  isAdmin
};

module.exports = adminMiddleware;

/*
if(!req.session.user){
  return res.redirect('/login');
}

if(req.session.user.role === 'admin') {
  next();
} else {
  return res.status(401).json('Accès refusé');
}
*/