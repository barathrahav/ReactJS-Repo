// Details.js

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating-stars-component";
import { useParams, Link } from "react-router-dom";
import back from "./back.png";
import "./Fakestore.css";

const API_URL = "https://fakestoreapi.com/products";

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProductDetails = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (isMounted) {
          setDetails(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to fetch product details:", err);
          setError("Failed to load product details. Please try again later.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProductDetails();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // Loading UI
  if (loading) {
    return (
      <div className="fakestore-page container mt-5 text-center">
        <h2>Loading product details...</h2>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="fakestore-page container mt-5 text-center text-danger">
        <h3>{error}</h3>
        <Link to="/fakestore" className="btn btn-outline-secondary mt-3">
          Go Back
        </Link>
      </div>
    );
  }

  // No data (edge case)
  if (!details) {
    return (
      <div className="fakestore-page container mt-5 text-center">
        <h3>Product not found.</h3>
        <Link to="/fakestore" className="btn btn-outline-secondary mt-3">
          Go Back
        </Link>
      </div>
    );
  }

  const { image, title, category, price, rating, description } = details;

  return (
    <div className="fakestore-page container mt-5">
      <div className="row fakestore-details-row">
        {/* Image Section */}
        <div className="col-lg-6 text-center mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
          <img
            src={image}
            alt={title}
            className="picture img-fluid"
            style={{ maxHeight: "350px" }}
          />
        </div>

        {/* Details Section */}
        <div className="col-lg-6">
          <div className="details-info">
            <div className="details-title">{title}</div>
            <div className="details-category">Category: {category}</div>

            <div className="details-price">Price: ${price}</div>

            {rating && (
              <>
                <div className="details-rated-by">
                  Rated by: {rating.count}{" "}
                  {rating.count === 1 ? "person" : "persons"}
                </div>
                <div className="star-rating">
                  <Rating
                    count={5}
                    size={28}
                    value={rating.rate}
                    activeColor="#ffd700"
                    edit={false}
                    isHalf={true}
                    emptyIcon={<FontAwesomeIcon icon={faStar} />}
                    halfIcon={<FontAwesomeIcon icon={faStarHalfAlt} />}
                    filledIcon={<FontAwesomeIcon icon={faStar} />}
                  />
                </div>
              </>
            )}

            <div className="mb-4">
              <div className="details-description-label">Description:</div>
              <div className="details-description-text">{description}</div>
            </div>

            <div className="fakestore-back-link">
              <Link to="/fakestore" className="btn btn-outline-secondary">
                <img src={back} alt="Back" />
                <span>Back to Products</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
