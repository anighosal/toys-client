import React from "react";

const MyToysRow = ({ booking }) => {
  const { customerName, email, price, subCategory, photo, title, quantity } =
    booking;
  console.log(photo);
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
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
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{email}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default MyToysRow;
