import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllToysCard = ({ toys }) => {
  const { _id, name, rating, price, subCategory, seller, quantity, img } = toys;

  return (
    <tr className="shadow-xl border  border-gray-300 rounded-lg text-white rounded-md mt-4 ">
      <td className="mb-4 ">
        <div className="avatar">
          <div className="rounded w-24 p-3 h-24">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>

      <td className="mb-4 mt-4 p-4">{name}</td>
      <td>{subCategory}</td>
      <td className="mb-4 mt-4">$ {price}</td>
      <td className="mb-4 mt-4 ">{quantity}</td>
      <td className="text-yellow-400 mb-4 mt-4">{rating}</td>

      {/* Move the seller column to the right side */}
      <td className="mb-4 mt-4 ml-5">{seller}</td>

      <th className="mb-4">
        <Link to={`/toy/${_id}`}>
          <FaArrowRight className="text-sky-700 w-full w-1/7"></FaArrowRight>
        </Link>
      </th>
    </tr>
  );
};

export default AllToysCard;
