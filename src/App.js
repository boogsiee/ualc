// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";
import Home from "../src/Pages/Home";
import Profile from "../src/Pages/Profile";
import Records from "../src/Pages/Records";
import Mailings from "../src/Pages/Mailings";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/records" element={<Records />} />
          <Route path="/mailings" element={<Mailings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
