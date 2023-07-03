import React from "react";
import "./Congratscard.css";
function Congrats() {
  return (
    <div className="congratsContainer text-center p-5">
      <h1>Congratulations</h1>
      <div className="congratsContent container-fluid mt-5">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          alt="Profile"
          className="imgprofile"
        />
        <h3>Kiran V</h3>
        <p>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          alt="Watch"
          className="imgwatch"
        />
      </div>
    </div>
  );
}
export default Congrats;
