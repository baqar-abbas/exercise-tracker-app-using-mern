const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const DB = 'mongodb+srv://baqar:baqar@cluster0.tylq91h.mongodb.net/?retryWrites=true&w=majority';
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, 
    { useNewUrlParser: true, 
      useUnifiedTopology: true,
     }
);
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true, // This is optional, depending on your use case
//     useFindAndModify: false, // This is optional, depending on your use case
//   });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter); // Whenever someone goes to our homepage and adds /exercises to the URL, it will load everything in the exercisesRouter.
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

