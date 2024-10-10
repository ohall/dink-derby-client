import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this line to import the CSS file

// Placeholder components
const Home = () => <div>Welcome to the Derby Event App!</div>;
const Schedule = () => <div>View the Derby Schedule here.</div>;
const Results = () => <div>Check out the Derby Results here.</div>;
const Register = () => <div>Register for Derby Events here.</div>;

const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Add a class for styling */}
        <h1 className="app-title">Derby Event App</h1> {/* Add a class for styling */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/results" element={<Results />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

