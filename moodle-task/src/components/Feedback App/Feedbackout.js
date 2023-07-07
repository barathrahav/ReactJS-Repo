import React from "react";
import { Link } from "react-router-dom";
import "./Feedbackout.css";
import love from "./give-love.png";
import back from "./back.png";

function ThankYouPage() {
  return (
    <div className="Feedout position-relative">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="Feedout-container rounded-5 position-absolute top-50 start-50 translate-middle w-75">
              <div className="text-center fs-5 fw-bold p-3">
                <div className="pb-4">
                  <img src={love} alt="Happy" />
                </div>
                Thank You for your valuable feedback!
              </div>
              <div className="text-center">
                <button className="btn btn-link">
                  <Link to="/Feedback">
                    <img src={back} alt="back" className="img-fluid" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
