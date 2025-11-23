// ThankYouPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./Feedbackout.css";
import love from "./give-love.png";
import back from "./back.png";

function ThankYouPage() {
  return (
    <div className="Feedout d-flex justify-content-center align-items-center min-vh-100">
      <div className="Feedout-container rounded-4 p-5 text-center">
        <div className="pb-4">
          <img src={love} alt="Thank you" className="thankyou-icon" />
        </div>

        <div className="fs-5 fw-bold mb-4">
          Thank you for your valuable feedback!
        </div>

        <Link to="/Feedback" className="btn btn-outline-secondary back-btn">
          <img src={back} alt="Back" className="back-icon me-2" />
          Back to Feedback
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
