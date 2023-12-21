import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBeer } from "react-icons/fa";


const Teddy = ({ toy }) => {
  const { _id, name, price, rating, img } = toy;
  return (
    <div className="mt-6 shadow-xl rounded-lg card border border-gray-300 rounded-md overflow-hidden text-white">
      <div className="">
    <div className="h-[300px] w-full rounded-md">
    <img
           className="card-image w-full h-full p-4"
          src={img}
          alt="toy"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        />
    </div>
      </div>
      <div className="card-body">
        <h2 className="card-title"> {name}</h2>
        <h6 className="text-left">${price}</h6>
        <h6 className="text-left text-yellow-400">Rating: {rating}</h6>

        <div className="btn-block">
          <Link to={`/toyDetails/${_id}`}>
           
          <FaArrowRight className="text-sky-700 w-5"></FaArrowRight>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Teddy;
