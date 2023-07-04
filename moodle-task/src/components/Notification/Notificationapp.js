import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./Notificationapp.css";

function Notification() {
  return (
    <div className="Notify">
      <h1 className="text-center fw-bold">Notifications</h1>
      <div className="bg-primary fs-2 p-3 rounded mt-4 text-light w-50 m-auto">
        <FontAwesomeIcon icon={faCircleCheck} /> Information Message
      </div>
      <div className="bg-success fs-2 p-3 rounded mt-4 text-light w-50 m-auto">
        <FontAwesomeIcon icon={faCircleCheck} /> Success Message
      </div>
      <div className="bg-warning fs-2 p-3 rounded mt-4 text-light w-50 m-auto">
        <FontAwesomeIcon icon={faBell} /> Warning Message
      </div>
      <div className="bg-danger fs-2 p-3 rounded mt-4 text-light w-50 m-auto">
        <FontAwesomeIcon icon={faCircleExclamation} /> Error Message
      </div>
    </div>
  );
}
export default Notification;
