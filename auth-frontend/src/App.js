import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import './Home.css'; // Ensure to import your CSS file

const Home = () => {
    return (
        <div className="home-container">
             <video className="background-video" autoPlay loop muted>
                <source src="/l.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Content */}
            <div className="content">
                <h1>Welcome, Visionary! Create your sanctuary or dive in to embark on a journey of boundless imagination!</h1>
                <Link to="/signup">
                    <button>Signup</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
