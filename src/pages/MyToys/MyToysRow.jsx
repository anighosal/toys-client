import React from "react";
import { Link } from "react-router-dom";

const MyToysRow = ({ booking, handleDelete, handleUpdate }) => {
  const {
    _id,
    customerName,
    email,
    price,
    subCategory,
    photo,
    title,
    quantity,
    rating,
    description,
  } = booking;
  console.log(photo);

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={photo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{title}</td>
      <td className="text-blue-500 font-bold ">$ {price}</td>
      <td>{quantity}</td>
      <td>{email}</td>
      <td className="text-red-500 font-bold ">{rating}</td>
      <td>{description}</td>
      <th>
        {/* <button
          onClick={() => {
            handleUpdate(_id);
          }}
          className="btn btn-outline btn-success"
        >
          Update
        </button> */}
        <Link to={`/toyupdate/${_id}`}>
          <button
            // onClick={() => {
            //   handleUpdate(_id);
            // }}
            className="btn btn-outline btn-success"
          >
            Update
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default MyToysRow;
