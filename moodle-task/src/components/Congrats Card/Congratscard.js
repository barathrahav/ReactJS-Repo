import React from "react";
import "./Congratscard.css";

function Congrats() {
  return (
    <div className="congratsContainer text-center p-5">
      <h1>Congratulations</h1>
      <div className="make m-auto mt-5 rounded-5">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          alt="Profile"
          className="imgprofile"
        />
        <div className="fw-bold fs-2">Kiran V</div>
        <div className="congrats m-2">Vishnu Institute of Computer Education and Technology, Bhimavaram</div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          alt="Watch"
          className="imgwatch mb-2"
        />
      </div>
    </div>
  );
}

export default Congrats;
