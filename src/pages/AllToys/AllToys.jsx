import React, { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";
import AllToysSmallReview from "./AllToysSmallReview";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("https://toys-server-mjxlqqw0e-anighosal.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://toys-server-mjxlqqw0e-anighosal.vercel.app/toySearchByName/${searchItem}`)
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
      <div className="flex flex-col md:flex-row justify-center gap-2 mt-4">
        <input
          id="searchInput"
          type="text"
          placeholder="Search here ...."
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
          className="input input-bordered input-secondary w-full md:max-w-xs"
        />
        <button
          className="text-white bg-blue-500 px-4 py-2 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="overflow-x-auto  lg:w-full mt-5 text-black mb-4 ">
        <table className="lg:w-full">
          {/* head */}
          <thead className="bg-white text-black gap-x-5">
            <tr>
              <th className="w-1/8">Picture</th>
              <th className="w-1/8">Name</th>
              <th className="w-1/8">SubCategory</th>
              <th className="w-1/8">Price</th>
              <th className="w-1/8">Quantity</th>
              <th className="w-1/8">Rating</th>
              <th className="w-1/8">Seller</th>
              <th className="w-1/8">View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toys) => (
              <AllToysCard key={toys._id} toys={toys}></AllToysCard>
            ))}
          </tbody>
        </table>
      </div>
      <AllToysSmallReview toys={allToys}></AllToysSmallReview>
    </div>
  );
};

export default AllToys;
