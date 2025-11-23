// Hooks.js
import React, { useState } from "react";
import incrementImage from "./plus.png";
import decrementImage from "./minus.png";
import resetImage from "./restart.png";
import "./Hooksassignment.css";

function Hooks() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const reset = () => setCount(0);

  // function Hooks() { const [count, setCount] = useState(0); 
  // const increment = () => { setCount(count + 1); }; 
  // const decrement = () => { setCount(count - 1); }; 
  // const reset = () => { setCount(0); };
 
  return (
    <div className="container mt-5 counter-container">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="count-title mb-4">Count: {count}</h1>

          {/* Increment & Decrement buttons */}
          <div className="mb-3">
            <button
              type="button"
              className="smallimage-btn me-3"
              onClick={increment}
            >
              <img src={incrementImage} alt="Increment" />
            </button>

            <button
              type="button"
              className="smallimage-btn"
              onClick={decrement}
              disabled={count === 0}
            >
              <img src={decrementImage} alt="Decrement" />
            </button>
          </div>

          {/* Reset button */}
          <div>
            <button
              type="button"
              className="smallimage-btn"
              onClick={reset}
              disabled={count === 0}
            >
              <img src={resetImage} alt="Reset" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hooks;
