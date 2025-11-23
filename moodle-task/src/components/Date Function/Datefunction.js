// DateFunction.js
import React, { useState } from "react";

function DateFunction() {
  const [joinDate, setJoinDate] = useState("");
  const [completionDate, setCompletionDate] = useState("");

  const checkDate = () => {
    if (!joinDate) {
      setCompletionDate("Please select a date");
      return;
    }

    const dateObj = new Date(joinDate);
    dateObj.setDate(dateObj.getDate() + 90); // add 90 days

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    setCompletionDate(`${day}/${month}/${year}`);
  };

  return (
    <div className="m-5 text-center">
      <h1 className="fw-bolder text-primary">KGiSL Micro College</h1>
      <h3 className="fw-bold text-danger">Full Stack Developer</h3>

      <label className="fw-semibold">Course Joining Date:</label>
      <br />
      <input
        type="date"
        value={joinDate}
        onChange={(e) => setJoinDate(e.target.value)}
        className="form-control w-25 m-auto mt-2"
      />

      <br />

      <label className="fw-semibold">
        Course Completion Date:{" "}
        <span className="text-primary fw-bold">{completionDate}</span>
      </label>

      <br />

      <button className="btn btn-info mt-3" onClick={checkDate}>
        Check
      </button>
    </div>
  );
}

export default DateFunction;
