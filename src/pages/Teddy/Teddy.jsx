import React from "react";

const Teddy = ({ toy }) => {
  const { name, price, rating, img } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h6 className="text-left">Price: {price}</h6>
        <h6 className="text-left text-red-500">Rating: {rating}</h6>

        <div className="card-actions justify-center btn-block">
          <button className="btn btn-block bg-red-700">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Teddy;
