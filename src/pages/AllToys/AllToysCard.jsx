import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllToysCard = ({ toys }) => {
  const { _id, name, rating, price, subCategory, seller, quantity, img } = toys;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Toy Name: {name}</h2>
        <h3 className="card-title">seller: {seller}</h3>
        <h5 className="card-title">Sub-Category: {subCategory}</h5>
        <p>Available Quantity: {quantity}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>

          <Link to={`/toy/${_id}`}>
            <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllToysCard;
