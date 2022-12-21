const express = require("express");
const User = require("../modals/User");
const router = express.Router();
// importing bcrypt js, for adding password hashing, salt and pepper
// npm install bcryptjs
const bcrypt = require("bcryptjs");

// importing thr express validator by following line

const { body, validationResult } = require("express-validator");

//  create a user using : Post "/api/auth/createuser" doesnot require auth no login required
router.post(
  "/createuser",
  [
    body("email", "please enter right email").isEmail(),
    body("name", "name should be at least 3 characters").isLength({ min: 3 }),
    body("password", "password should be 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors return bad requests
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // using try catch to show error if any error occour
    try {
      // check whether the user with this email exists already
      //   now we are using findone method to check that if the email is alredy exists in the database
      //

      let user1 = await User.findOne({ email: req.body.email });
      if (user1) {
        return res
          .status(400)
          .json({ error: "sorry this is already available" });
      }
      // making a slat for password hashing
      const salt = await bcrypt.genSaltSync(10);
      // setting password hashing
      secPassword = await bcrypt.hash(req.body.password, salt);
      let user = await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
      });
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }

    // .then(user => res.json(user))
    //  .catch(err =>{console.log(err)
    //   res.json({error: 'please enter a unique value'})})
  }
);

module.exports = router;
