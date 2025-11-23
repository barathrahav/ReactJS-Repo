// Social.js
import React from "react";
import "./Socialbutton.css";

function Social() {
  return (
    <div className="social-page text-center">
      <div>
        <h1 className="social-title">Social Buttons</h1>

        <div className="social-buttons">
          <button className="btn btn-warning">Like</button>
          <button className="btn btn-light">Comment</button>
          <button className="btn btn-primary">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Social;
