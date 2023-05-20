import React, { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-orange-700">
        Our Toys Collection
      </h2>

      <input
        type="text"
        placeholder="find your toy"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      <div className="overflow-x-auto bg-slate-400 lg:w-full mt-5">
        <table className="table lg:w-full">
          {/* head */}
          <thead className="">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>subCategory</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Seller</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toys) => (
              <AllToysCard key={toys._id} toys={toys}></AllToysCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
