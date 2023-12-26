import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const { name, _id, img, quantity, price, rating } = toy;

  fetch("https://toys-server-omega.vercel.app/product/${params.id}")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return (
<div className=" grid place-items-center mt-8 lg:px-0 px-5 text-white">
  <div className="shadow-xl  h-full lg:w-1/2 w-full  card border border-gray-300 rounded-md overflow-hidden text-white">
    <div className="w-full rounded-md">
      <img className="p-2 lg:p-4 w-full" src={img}  />
    </div>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>Price: ${price}</p>
      <p className="text-yellow-300">Rating: {rating}</p>
      <Link to={"/"}><FaArrowLeft></FaArrowLeft> </Link>
    </div>
  </div>
</div>

  );
};

export default ToyDetails;
