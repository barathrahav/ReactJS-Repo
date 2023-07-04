import React from "react";
import "./Socialbutton.css";

function Social() {
    return(
        <div className="container-fluid text-center">
            <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="text-light fw-bold">Social Button</h1>
            <button type="button" class="btn btn-warning m-2">Like</button>
            <button type="button" class="btn btn-light m-2">Comment</button>
            <button type="button" class="btn btn-primary m-2">Share</button>
            </div>
        </div>
    );
}
export default Social;