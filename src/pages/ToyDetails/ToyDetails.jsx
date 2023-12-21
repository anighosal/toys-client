import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const { name, _id, img, quantity, price, rating } = toy;

  fetch("https://my-toy.vercel.app/products/${params.id}")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return (
<div className="mt-6 grid place-items-center">
  <div className="shadow-xl w-1/3 rounded-lg card border border-gray-300 rounded-md overflow-hidden text-white">
    <div className="h-[300px] w-full rounded-md">
      <img className="h-full w-full p-4" src={img} alt="Movie" />
    </div>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>Price: ${price}</p>
      <p className="text-yellow-300">Rating: {rating}</p>
    </div>
  </div>
</div>

  );
};

export default ToyDetails;
