import React, { useState } from "react";
import incrementImage from "./plus.png";
import decrementImage from "./minus.png";
import resetImage from "./restart.png";

function Hooks() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title mb-5">Count: {count}</h1>
          <div className="row">
            <div className="col">
              <img
                src={incrementImage}
                alt="Increment"
                className="btn smallimage"
                onClick={increment}
              />
              <img
                src={decrementImage}
                alt="Decrement"
                className="btn ms-2 smallimage"
                onClick={decrement}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <img
                src={resetImage}
                alt="Reset"
                className="btn smallimage"
                onClick={reset}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hooks;
