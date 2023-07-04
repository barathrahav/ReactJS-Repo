import React from "react";
import "./Socialbutton.css";

function Social() {
  return (
    <div className="Social text-center">
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="SocialTitle text-light fw-bold">Social Button</h1>
        <button type="button" className="btn btn-warning m-2">
          Like
        </button>
        <button type="button" className="btn btn-light m-2">
          Comment
        </button>
        <button type="button" className="btn btn-primary m-2">
          Share
        </button>
      </div>
    </div>
  );
}

export default Social;
