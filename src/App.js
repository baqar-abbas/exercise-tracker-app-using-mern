import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component.js";
import ExercisesList from "./components/exercises-list.component.js";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
// import './App.css';

function App() {
  return (
    <Router>
      
    <div className="container">
    <Navbar />
    <br/>
     <Routes>
      {/* <Route path="/" component={<ExercisesList/>} />
      <Route path="/edit/:id" component={<EditExercise/>} />
      <Route path="/create" component={<CreateExercise/>} />
      <Route path="/user" component={<CreateUser/>} /> */}
      <Route path="/" element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
