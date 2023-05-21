import React, { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  console.log(searchItem);

  useEffect(() => {
    fetch("https://my-toy.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-orange-700">
        Our Toys Collection
      </h2>

      <input
        id="searchInput"
        type="text"
        placeholder="search here ...."
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      {allToys
        .filter((value) => {
          if (searchItem == "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(searchItem.toLowerCase())
          ) {
            return value;
          }
        })
        .map((value) => {
          <div>
            <img src={value.img} alt="" />
            <h3>{value.title}</h3>
            <h3>{value.price}</h3>
          </div>;
        })}
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
