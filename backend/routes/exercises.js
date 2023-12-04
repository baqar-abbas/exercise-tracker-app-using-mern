const router = require('express').Router(); // Express router
let Exercise = require('../models/exercise.model'); // Mongoose model

// First endpoint that handles incoming HTTP GET requests on the /exercises/ URL path
router.route('/').get((req, res) => {
  // Mongoose method that gets a list of all the exercises from the MongoDB Atlas database
  Exercise.find()
    .then(exercises => res.json(exercises)) // Returns exercises in JSON format
    .catch(err => res.status(400).json('Error: ' + err)); // Returns error in JSON format
});

// Second endpoint that handles incoming HTTP POST requests on the /exercises/add/ URL path
router.route('/add').post((req, res) => {
  // Mongoose method that adds a new exercise to the MongoDB Atlas database
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration); // Converts to number
  const date = Date.parse(req.body.date); // Converts to date

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save() // Saves new exercise to database
    .then(() => res.json('Exercise added!')) // Returns message in JSON format
    .catch(err => res.status(400).json('Error: ' + err)); // Returns error in JSON format
});

module.exports = router; // Standard way of exporting a router