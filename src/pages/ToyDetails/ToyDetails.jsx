import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const { name, _id, img, quantity, price, rating } = toy;

  fetch("http://localhost:5000/products/${params.id}")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return (
    <div className="card card-side w-1/2 center bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Price: {price}</p>
        <p className="text-red-500 ">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
