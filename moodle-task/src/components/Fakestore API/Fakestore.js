import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating-stars-component";
import "./Fakestore.css";
import store from "./store.png";
import { Link } from "react-router-dom";

function Fakestore() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <div className="container mt-3">
      <div className="fs-1 fw-bold text-center text-danger mb-2">
        <img src={store} /> Fake Store Here !!!
      </div>
      <div className="row">
        {productData.map((value, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 text-center">
              <img
                src={value.image}
                alt={value.title}
                className="picture card-img-top m-auto mt-3"
              />
              <div className="card-body">
                <div className="card-title fw-bold fs-5">{value.title}</div>
                <div className="fs-5">Category: {value.category}</div>
                <div className="d-block align-item-bottom">
                  <div className="fs-2 fw-bold">Price: ${value.price}</div>
                  <div className="fs-4 d-flex justify-content-center">
                    <Rating
                      count={5}
                      size={24}
                      value={value.rating.rate}
                      activeColor="#ffd700"
                      edit={false}
                      isHalf={true}
                      emptyIcon={<FontAwesomeIcon icon={faStar} />}
                      halfIcon={<FontAwesomeIcon icon={faStarHalfAlt} />}
                      filledIcon={<FontAwesomeIcon icon={faStar} />}
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer d-grid">
                <Link to={`/details/${value.id}`}>
                  <button className="btn btn-primary w-75">View More</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fakestore;
