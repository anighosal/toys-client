
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
    <div className="lg:w-1/2 w-full mt-6 shadow-xl rounded-lg ">
      <figure>
        <img className="pl-2" src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2>Detail: {description}</h2>
        <h2>{seller}</h2>
        <h2>Rating: {rating}</h2>

        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p className="text-red-500 ">Rating: {rating}</p>
      </div>
    </div>
  );
};
export default Toy;