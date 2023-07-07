import React from "react";
import { Link } from "react-router-dom";
import confused from "./confused.png";
import happy from "./happy.png";
import sad from "./sad.png";
import "./Feedbackapp.css";

function Feedback() {
  return (
    <div className="Feed position-relative">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="Feed-container rounded-5 p-5 position-absolute top-50 start-50 translate-middle w-75">
              <div className="text-center fs-5 fw-bold pb-5">
                How satisfied are you with our customer support performance?
              </div>
              <div className="d-flex justify-content-center col-12">
                <button className="btn btn-link me-2">
                  <Link to="/ThankYouPage">
                    <img src={happy} alt="Happy" />
                  </Link>
                </button>
                <button className="btn btn-link">
                  <Link to="/ThankYouPage">
                    <img src={confused} alt="Confused" />
                  </Link>
                </button>
                <button className="btn btn-link">
                  <Link to="/ThankYouPage">
                    <img src={sad} alt="Sad"  />
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

export default Feedback;
