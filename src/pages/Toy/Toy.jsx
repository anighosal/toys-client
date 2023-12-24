
import React from "react";
import { useLoaderData } from "react-router-dom";

const Toy = () => {
  const toys = useLoaderData();
  console.log(toys);
  const { name, _id, img, quantity, price, rating, description, seller } = toys;

  fetch("http://localhost:5000/${params.id}")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return (
    <div  className=" grid place-items-center mt-8 lg:px-0 px-5 text-white">
      <div className="shadow-xl  h-full lg:w-1/2 w-full  card border border-gray-300 rounded-md overflow-hidden text-white">
      <div className="w-full rounded-md">
      <img className="p-2 lg:p-4 w-full" src={img} alt="Movie" />
    </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2>Details: {description}</h2>
        <h2>Seller: {seller}</h2>
       

        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p className="text-yellow-400 ">Rating: {rating}</p>
      </div>
      </div>
    
    </div>
  );
};
export default Toy;