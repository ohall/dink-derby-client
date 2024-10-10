import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this line to import the CSS file

import Home from './Home';
import Schedule from './Schedule';
import Results from './Results';
import Register from './Register';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/schedule">Schedule</a></li>
      <li><a href="/results">Results</a></li>
      <li><a href="/register">Register</a></li>
    </ul>
  </nav>
);


const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Add a class for styling */}
        <h1 className="app-title">Derby Event App</h1> {/* Add a class for styling */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule events={[]} />} />
          <Route path="/results" element={<Results results={[]} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

