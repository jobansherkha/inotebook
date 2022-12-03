const express = require('express');
const User = require('../modals/User');
const router = express.Router()

// importing thr express validator by following line 

const { body, validationResult } = require('express-validator');



//  create a user using : Post "/api/auth" doesnot require auth
router.post('/', [
    body('email', 'please enter right email').isEmail(),
    body('name', 'name should be at least 3 characters').isLength({ min: 3 }),
    body('password', 'password should be 5 characters long').isLength({ min: 5 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then(user => res.json(user));
   
  })

  module.exports = router