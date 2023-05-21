import React from "react";
import { Link } from "react-router-dom";

const Teddy = ({ toy }) => {
  const { _id, name, price, rating, img } = toy;
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl mt-5">
      <figure>
        <img
          className="w-full"
          src={img}
          alt="Shoes"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h6 className="text-left">Price: {price}</h6>
        <h6 className="text-left text-red-500">Rating: {rating}</h6>

        <div className="card-actions justify-center btn-block">
          <Link to={`/toyDetails/${_id}`}>
            <button className="btn btn-block bg-red-700">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teddy;
