const express = require('express');
const User = require('../modals/User');
const router = express.Router()



//  create a user using : Post "/api/auth" doesnot require auth
router.post('/', (req, res) => {
    res.json()
    console.log(req.body)
    const user = User(req.body);
    user.save()
    res.send(req.body);
  })

  module.exports = router