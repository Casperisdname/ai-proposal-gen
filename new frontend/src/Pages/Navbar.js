import React from "react";
import freelancer from "../images/freelancer.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={freelancer} />
      </div>
      <div>
        <ul className="nav-links">
          <a href="#how-it-works">
            <li>How it works</li>
          </a>

          <a href="#features">
            <li>Features</li>
          </a>

          <a href="#proposal">
            <li>Generate</li>
          </a>

          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>

      <div>
        <button className="nav-btn">Generate Proposal</button>
      </div>
    </div>
  );
}
export default Navbar;
