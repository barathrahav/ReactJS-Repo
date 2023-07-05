import React from "react";
import data from "./data-scientist.png";
import iot from "./iot.png";
import vr from "./vr.png";
import ml from "./machine.png";
import "./Technologycard.css";

function Technology() {
  return (
    <>
      <div className="Techcover pb-5">
        <div className="container ">
          <div className="fs-2 fw-bold text-center pt-2">
            Learn 4.0 Technologies
          </div>
          <div className="fs-5 text-center mt-3">
            Get trained by alumni of IITs and top companies like Amazon,
            Microsoft, Intel, Nvidia, Qualcomm, etc. Learn directly from
            professionals involved in Product Development.
          </div>
        </div>
        <div className="container mt-2">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card border-0">
                <div className="card-body border-info border-top border-5 rounded-top rounded-5">
                  <h5 className="card-title">Data Scientist</h5>
                  <p className="card-text">
                    Data Scientists gather and analyze large sets of structured
                    and unstructured data.
                  </p>
                </div>
                <div className="position-relative">
                  <img
                    src={data}
                    className="data float-end"
                    alt="data-scientist"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <div className="card-body border-danger border-top border-5 rounded-top rounded-5">
                  <h5 className="card-title">IoT Developer</h5>
                  <p className="card-text">
                    IoT Developers are professionals who can develop, manage and
                    monitor IoT devices.
                  </p>
                </div>
                <div className="position-relative">
                  <img src={iot} className="iot float-end" alt="IOT" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <div className="card-body border-success border-top border-5 rounded-top rounded-5">
                  <h5 className="card-title">VR Developer</h5>
                  <p className="card-text">
                    A VR Developer creates completely new digital environments
                    that people can see.
                  </p>
                </div>
                <div className="position-relative">
                  <img src={vr} className="iot float-end" alt="IOT" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <div className="card-body border-warning border-top border-5 rounded-top rounded-5">
                  <h5 className="card-title">ML Engineer</h5>
                  <p className="card-text">
                    Machine Learning Engineers feed data into models defined by
                    data scientists.
                  </p>
                </div>
                <div className="position-relative">
                  <img src={ml} className="ml float-end" alt="machine" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Technology;