// Fakestore.js

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./Fakestore.css";
import store from "./store.png";

const API_URL = "https://fakestoreapi.com/products/";

// Reusable Product Card component
function ProductCard({ product }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="picture card-img-top m-auto mt-3"
        />

        {/* Card Body */}
        <div className="card-body d-flex flex-column">
          <div className="card-title">{product.title}</div>

          <div className="fakestore-category">
            Category: {product.category}
          </div>

          {/* Push price + rating to the bottom */}
          <div className="mt-auto">
            <div className="fakestore-price">Price: ${product.price}</div>

            <div className="fakestore-rating">
              <Rating
                count={5}
                size={24}
                value={product.rating?.rate || 0}
                activeColor="#ffd700"
                edit={false}
                isHalf={true}
                emptyIcon={<FontAwesomeIcon icon={faStar} />}
                halfIcon={<FontAwesomeIcon icon={faStarHalfAlt} />}
                filledIcon={<FontAwesomeIcon icon={faStar} />}
              />
              <span className="fakestore-rating-count">
                {product.rating?.count || 0} reviews
              </span>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="card-footer d-grid">
          <Link to={`/details/${product.id}`}>
            <button className="btn btn-primary w-75">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Fakestore() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    let isMounted = true; // avoid setting state if unmounted

    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (isMounted) {
          setProductData(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to fetch products:", err);
          setError("Failed to load products. Please try again later.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    // cleanup
    return () => {
      isMounted = false;
    };
  }, []);

  // Loading UI
  if (loading) {
    return (
      <div className="fakestore-page container mt-5 text-center">
        <h2>Loading products...</h2>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="fakestore-page container mt-5 text-center text-danger">
        <h3>{error}</h3>
      </div>
    );
  }

  // Main UI
  return (
    <div className="fakestore-page container mt-3">
      {/* Header */}
      <div className="fakestore-header">
        <div className="fakestore-header-logo">
          <img src={store} alt="Fake Store Logo" />
          <span className="fakestore-title">Fake Store Here !!!</span>
        </div>
        <p className="fakestore-subtitle">
          Browse some demo products powered by FakeStore API.
        </p>
      </div>

      {/* Product Grid */}
      <div className="row fakestore-products-row">
        {productData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Fakestore;
