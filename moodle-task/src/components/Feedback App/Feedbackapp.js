// Feedback.js
import React from "react";
import { Link } from "react-router-dom";
import confused from "./confused.png";
import happy from "./happy.png";
import sad from "./sad.png";
import "./Feedbackapp.css";

function Feedback() {
  const feedbackOptions = [
    { img: happy, label: "Happy", to: "/ThankYouPage" },
    { img: confused, label: "Confused", to: "/ThankYouPage" },
    { img: sad, label: "Sad", to: "/ThankYouPage" },
  ];

  return (
    <div className="Feed d-flex justify-content-center align-items-center min-vh-100">
      <div className="Feed-container rounded-4 p-5 text-center">
        <div className="fs-5 fw-bold mb-4">
          How satisfied are you with our customer support performance?
        </div>

        <div className="d-flex justify-content-center gap-4">
          {feedbackOptions.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="feedback-btn"
            >
              <img
                src={item.img}
                alt={item.label}
                className="feedback-img"
              />
              <div className="feedback-label mt-2">{item.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
