import React, { useState } from "react";
import mangoImage from "./mango.png";
import bananaImage from "./banana.png";
import crateImage from "./crate.png";
import "./Fruitcounter.css";

function FruitCounter() {
  const [mangoCount, setMangoCount] = useState(0);
  const [bananaCount, setBananaCount] = useState(0);

  const incrementMangoCount = () => {
    setMangoCount(mangoCount + 1);
  };

  const incrementBananaCount = () => {
    setBananaCount(bananaCount + 1);
  };

  return (
    <div className="Fruit">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="Fruit-container rounded-5">
              <div className="text-center">
                <img src={crateImage} alt="Crate" className="img-fluid" />
              </div>
              <h2 className="text-center">
                Barath ate <span className="yellow">{mangoCount}</span>{" Mangoes "}
                and <span className="yellow">{bananaCount}</span>{" Bananas"}.
              </h2>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-link me-2"
                  onClick={incrementMangoCount}
                >
                  <img src={mangoImage} alt="Mango" />
                </button>
                <button className="btn btn-link" onClick={incrementBananaCount}>
                  <img src={bananaImage} alt="Banana" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FruitCounter;
