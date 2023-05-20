import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllToysCard = ({ toys }) => {
  const { _id, name, rating, price, subCategory, seller, quantity, img } = toys;
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td className="text-blue-500 font-bold text-lg ">{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{seller}</td>
      <td className="text-red-500 ">{rating}</td>
      <th>
        {
          <Link to={`/toy/${_id}`}>
            <button className="btn btn-error">View Details</button>
          </Link>
        }
      </th>
    </tr>
  );
};

export default AllToysCard;
