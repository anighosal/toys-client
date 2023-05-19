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
      <h2 className="text-center mt-8 font-bold text-3xl">
        Kids Gallery Collection
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
        {allToys.map((toys) => (
          <AllToysCard key={toys._id} toys={toys}></AllToysCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
