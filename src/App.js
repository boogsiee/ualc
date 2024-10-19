// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login"; // Updated to a relative path
import Register from "./Pages/Register"; // Updated to a relative path
import Home from "../src/Pages/Home"; // Updated to a relative path
import Profile from "./Pages/Profile"; // Updated to a relative path
import Records from "./Pages/Records"; // Updated to a relative path
import Mailings from "./Pages/Mailings"; // Updated to a relative path
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
