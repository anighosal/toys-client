import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://toys-server-omega.vercel.app/mytoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure delete this toy");
    if (proceed) {
      fetch(`https://toys-server-omega.vercel.app/mytoys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("toys deleted successfull");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`https://toys-server-omega.vercel.app/mytoys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "update" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "update";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <h2 className="text-center font-bold text-2xl text-white mt-5 mb-5">
        my toys
      </h2>
      <div className="overflow-x-auto  lg:w-full mt-5  mb-4 ">
        <table className=" w-full">
          {/* head */}
          <thead className="bg-white text-black gap-x-5">
          <tr>
      <th className="w-1/8">Picture</th>
      <th className="w-1/8">Email</th>
      <th className="w-1/8">Price</th>
      <th className="w-1/8">Quantity</th>
      <th className="w-1/8">Rating</th>
      <th className="w-1/8">Details</th>
      <th className="w-1/8">Update</th>
      <th className="w-1/8">Delete</th>
    </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <MyToysRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
