// Notification.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Notificationapp.css";

function Notification() {
  const notifications = [
    {
      color: "primary",
      icon: faCircleCheck,
      text: "Information Message"
    },
    {
      color: "success",
      icon: faCircleCheck,
      text: "Success Message"
    },
    {
      color: "warning",
      icon: faBell,
      text: "Warning Message",
      darkText: true
    },
    {
      color: "danger",
      icon: faCircleExclamation,
      text: "Error Message"
    }
  ];

  return (
    <div className="notify-page">
      <h1 className="text-center fw-bold mb-4">Notifications</h1>

      <div className="notification-list">
        {notifications.map((item, idx) => (
          <div
            className={`notification-box bg-${item.color} ${item.darkText ? "text-dark" : "text-light"}`}
            key={idx}
          >
            <FontAwesomeIcon icon={item.icon} className="me-2" />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
