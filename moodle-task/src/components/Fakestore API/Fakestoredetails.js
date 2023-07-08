import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating-stars-component";
import { useParams, Link } from "react-router-dom";
import back from "./back.png";

function Details() {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 text-center">
          <img src={details.image} alt="Product" className="h-75 w-75" />
        </div>
        <div className="col-lg-6">
          <div className="fs-1 fw-bold">{details.title}</div>
          <div className="fs-3 fw-bold">Category: {details.category}</div>
          <div className="fs-1 fw-bold">Price: ${details.price}</div>
          {details.rating && (
            <>
              <div className="fs-5 fw-bold">
                Rated By: {details.rating.count} Persons
              </div>
              <div className="star-rating">
                <Rating
                  count={5}
                  size={24}
                  value={details.rating.rate}
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
          <div className="fw-bold">
            <span className="fs-4">Description:</span> {details.description}
          </div>
          <div className="text-center">
            <button className="btn btn-link">
              <Link to="/fakestore">
                <img src={back} alt="Back" className="img-fluid" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
