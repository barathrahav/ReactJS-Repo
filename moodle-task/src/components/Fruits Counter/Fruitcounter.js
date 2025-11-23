// FruitCounter.js
import React, { useState } from "react";
import mangoImage from "./mango.png";
import bananaImage from "./banana.png";
import crateImage from "./crate.png";
import "./Fruitcounter.css";

function FruitCounter() {
  const [mangoCount, setMangoCount] = useState(0);
  const [bananaCount, setBananaCount] = useState(0);

  const incrementMangoCount = () => {
    setMangoCount(prev => prev + 1);
  };

  const incrementBananaCount = () => {
    setBananaCount(prev => prev + 1);
  };

  const fruits = [
    { img: mangoImage, label: "Mango", onClick: incrementMangoCount },
    { img: bananaImage, label: "Banana", onClick: incrementBananaCount },
  ];

  return (
    <div className="Fruit d-flex justify-content-center align-items-center min-vh-100">
      <div className="Fruit-container rounded-4 p-4 text-center">
        <img
          src={crateImage}
          alt="Fruit Crate"
          className="crate-image mb-3"
        />

        <h2 className="fw-bold">
          Barath ate{" "}
          <span className="yellow">{mangoCount}</span> Mangoes and{" "}
          <span className="yellow">{bananaCount}</span> Bananas.
        </h2>

        <div className="d-flex justify-content-center gap-4 mt-4">
          {fruits.map((item) => (
            <button
              key={item.label}
              className="fruit-btn"
              onClick={item.onClick}
            >
              <img src={item.img} alt={`Eat ${item.label}`} />
              <div className="fruit-label">{item.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FruitCounter;
