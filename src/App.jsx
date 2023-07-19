import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import UsingMedicen from "./pages/UsingMedicen";
import About from "./pages/About";
import profileImage from "./images/Dr-img.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <nav>
          <Link to="/" className="brand">
            <img src="http://clipart-library.com/images/BigrbE9AT.gif" alt="" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/about">About</Link>
          <Link to="/usingmedicen">UsingMedicen</Link>
          
        </nav>
        
        <div className="Dr-img-card">
          <Link to="/" className="Dr-img-container">
            <div>
              <img src={profileImage} alt="User Profile" />
              <p className="crad-p">Name: Dr.Ganesh</p>
            </div>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/usingmedicen" element={<UsingMedicen />} />
        </Routes>
        <footer className="footer">
          This made by with 😃babula
          <h2>service</h2>
          <h2>About</h2>
          <h2>Contact No:123456789</h2>
          <address>
            <h2>Cleanic Address</h2>
            <h3>village: jogirajupeta near arra cheruvu</h3>
            <h1>Dr.ganesh</h1>
            
          </address>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
