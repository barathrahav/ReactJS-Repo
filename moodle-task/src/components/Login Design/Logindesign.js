import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import laptop from "./laptop.png";
import "./Logindesign.css";

function Login() {
  return (
    <div className="Loginbg d-flex align-items-center justify-content-center">
      <div className="Logincontainer rounded-4 p-4">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0 d-flex align-items-center">
            <img
              src={laptop}
              alt="laptop"
              className="laptop img-fluid mx-auto d-block"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 className="card-title">Member Login</h2>
            <div className="input-group mb-3 w-75 mt-3">
              <span className="input-group-text rounded-start-pill" id="basic-addon1">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                className="form-control rounded-end-pill"
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 w-75 mt-3">
              <span className="input-group-text rounded-start-pill" id="basic-addon1">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                className="form-control rounded-end-pill"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <a href="#" className="btn btn-success p-2 m-3 w-50 rounded-5">
              Login
            </a>
            <h5>
              Forget <span className="text-success">Username / Password ?</span>
            </h5>
            <h5 className="text-primary">
              Create your account <FontAwesomeIcon icon={faRightToBracket} />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
