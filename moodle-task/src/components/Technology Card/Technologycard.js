// Technology.js
import React from "react";
import dataImg from "./data-scientist.png";
import iotImg from "./iot.png";
import vrImg from "./vr.png";
import mlImg from "./machine.png";
import "./Technologycard.css";

function Technology() {
  const techItems = [
    {
      title: "Data Scientist",
      desc: "Data Scientists gather and analyze large sets of structured and unstructured data.",
      color: "info",
      img: dataImg,
      alt: "Data Scientist Illustration"
    },
    {
      title: "IoT Developer",
      desc: "IoT Developers develop, manage and monitor IoT devices.",
      color: "danger",
      img: iotImg,
      alt: "IoT Developer Illustration"
    },
    {
      title: "VR Developer",
      desc: "VR Developers create realistic digital environments.",
      color: "success",
      img: vrImg,
      alt: "VR Developer Illustration"
    },
    {
      title: "ML Engineer",
      desc: "ML Engineers feed data into machine learning models.",
      color: "warning",
      img: mlImg,
      alt: "Machine Learning Illustration"
    }
  ];

  return (
    <div className="tech-page">
      <div className="container text-center mb-4">
        <h2 className="tech-title">Learn 4.0 Technologies</h2>
        <p className="tech-subtitle">
          Get trained by alumni of IITs and top companies like Amazon, Microsoft,
          Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved
          in product development.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {techItems.map((item, index) => (
            <div className="col-12 col-md-6" key={index}>
              <div className="tech-card shadow-sm">
                <div className={`tech-card-body border-top border-5 border-${item.color}`}>
                  <h5 className="tech-card-title">{item.title}</h5>
                  <p className="tech-card-text">{item.desc}</p>
                </div>

                <img src={item.img} alt={item.alt} className="tech-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technology;
