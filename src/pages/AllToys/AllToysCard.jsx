import React from "react";
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
        <Link className="justify-center">
          <button className="btn btn-block bg-red-700">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AllToysCard;
