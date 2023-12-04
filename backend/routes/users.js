const router = require('express').Router();
let User = require('../models/user.model');

// First endpoint that handles incoming HTTP GET requests on the /users/ URL path
router.route('/').get((req, res) => {
  // Mongoose method that gets a list of all the users from the MongoDB Atlas database
  User.find()
    .then(users => res.json(users)) // Returns users in JSON format
    .catch(err => res.status(400).json('Error: ' + err)); // Returns error in JSON format
});

// Second endpoint that handles incoming HTTP POST requests on the /users/add/ URL path
router.route('/add').post((req, res) => {
  // Mongoose method that adds a new user to the MongoDB Atlas database
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!')) // Returns message in JSON format
    .catch(err => res.status(400).json('Error: ' + err)); // Returns error in JSON format
});

module.exports = router; // Standard way of exporting a router