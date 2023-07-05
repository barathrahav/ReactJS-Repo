import React from "react";
import laptop from "./laptop.png";
import "./Logindesign.css";

function Login() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <img src={laptop} alt="laptop" />
        </div>
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
          <h2 className="card-title">Member Login</h2>
          <input
            type="text"
            placeholder="   Email"
            className="p-2 m-3 w-50 rounded-5 border border-0"
          />
          <input
            type="password"
            placeholder="   Password"
            className="p-2 m-3 w-50 rounded-5 border border-0"
          />
          <a href="#" className="btn btn-success p-2 m-3 w-50 rounded-5">
            Login
          </a>
          <h5>
            Forget <span className="text-success">Username / Password ?</span>
          </h5>
          <h5 className="text-primary">Create your account</h5>
        </div>
      </div>
    </div>
  );
}
export default Login;
