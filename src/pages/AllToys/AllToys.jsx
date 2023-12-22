import React, { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearchByName/${searchItem}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div className="mx-auto">
      <h2 className="text-center text-3xl font-bold text-white">
        Our Toys Collection
      </h2>

      <div className="mx-auto flex justify-center gap-2 ">
        <input
          id="searchInput"
          type="text"
          placeholder="Search here ...."
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
          className="input input-bordered input-secondary w-full max-w-xs  mt-5"
        />
        <button className="text-white" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="overflow-x-auto  lg:w-full mt-5 text-black mb-4 ">
        <table className="lg:w-full">
          {/* head */}
          <thead className="bg-white">
            <tr>
              <th className="">Picture</th>
              <th className="w-1/5">Name</th>
              <th className="w-1/7">SubCategory</th>
              <th className="w-1/7">Price</th>
              <th className="w-1/7">Quantity</th>
              <th className="w-1/7">Rating</th>
              <th className="w-1/7">Seller</th>
              <th className="w-1/7">View Details</th>
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
