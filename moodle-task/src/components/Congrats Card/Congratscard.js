// Congratscard.js
import React from "react";
import "./Congratscard.css";

function Congrats() {
  return (
    <div className="congrats-page">
      <div className="congrats-card text-center rounded-5 p-4 p-md-5">
        <h1 className="congrats-title mb-4">Congratulations</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          alt="Profile of Kiran V"
          className="imgprofile"
        />

        <div className="fw-bold fs-3 mt-3">Kiran V</div>

        <div className="congrats-text m-2">
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          alt="Gift watch"
          className="imgwatch mt-3"
        />
      </div>
    </div>
  );
}

export default Congrats;
