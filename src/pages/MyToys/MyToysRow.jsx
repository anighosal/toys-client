import React from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysRow = ({ booking, handleDelete, handleUpdate }) => {
  const {
    _id,
    customerName,
    email,
    price,
    photo,
    title,
    quantity,
    rating,
    description,
  } = booking;

  return (
    <tr className="shadow-xl border  border-gray-300 rounded-lg text-white rounded-md mt-4">
      <td>
        <div className="avatar">
          <div className="rounded p-3 w-24 h-24">
            <img src={photo} alt={title} />
          </div>
        </div>
      </td>
      <td className="w-1/6">{email}</td>
      <td className="font-bold w-1/6">$ {price}</td>
      <td className="w-1/6">{quantity}</td>
      <td className="text-yellow-400 font-bold w-1/6">{rating}</td>
      <td className="w-1/6">{description}</td>
      <th className="w-1/6">
        <Link to={`/toyupdate/${_id}`}>
          <FaPlusCircle className="text-green-400 w-full"></FaPlusCircle>
        </Link>
      </th>
      <th className="w-1/6">
        <FaTrash className="w-full" onClick={() => handleDelete(_id)}></FaTrash>
      </th>
    </tr>
  );
};

export default MyToysRow;
