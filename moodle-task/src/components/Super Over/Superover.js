// Super.js
import React from "react";
import "./Superover.css";

function Super() {
  return (
    <div className="super-page">
      <h1 className="super-title">Super Over League</h1>

      <div className="team-logos">
        <img
          src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
          alt="Royal Challengers Bangalore"
          className="team-logo"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
          alt="Chennai Super Kings"
          className="team-logo"
        />
      </div>
    </div>
  );
}

export default Super;
