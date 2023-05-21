import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/mytoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure delete this toy");
    if (proceed) {
      fetch(`http://localhost:5000/mytoys/${id}`, {
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
    fetch(`https://my-toy.vercel.app/mytoys/${id}`, {
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
      <h2 className="text-center font-bold text-2xl text-purple-600">
        my toys
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
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
