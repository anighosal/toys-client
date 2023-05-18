import React from "react";

import img1 from "../../../assets/client1.jpg";
import img2 from "../../../assets/client2.jpg";
import img3 from "../../../assets/client3.jpg";
import Ratings from "../../Ratings/Ratings";

const CustomerView = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-3xl font-bold">Our little client</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto pariatur, praesentium ut laborum numquam totam, iste
              error labore reprehenderit sed commodi accusamus ab? Expedita
              nesciunt, voluptas quae fuga quis adipisci?{" "}
            </p>
            <h2 className="font-bold text-center text-3xl">Smith</h2>
            <div className="card-actions justify-center">
              <Ratings></Ratings>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto pariatur, praesentium ut laborum numquam totam, iste
              error labore reprehenderit sed commodi accusamus ab? Expedita
              nesciunt, voluptas quae fuga quis adipisci?{" "}
            </p>
            <h2 className="font-bold text-center text-3xl">Sandy</h2>
            <div className="card-actions justify-center">
              <Ratings></Ratings>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto pariatur, praesentium ut laborum numquam totam, iste
              error labore reprehenderit sed commodi accusamus ab? Expedita
              nesciunt, voluptas quae fuga quis adipisci?{" "}
            </p>
            <h2 className="font-bold text-center text-3xl">john</h2>
            <div className="card-actions justify-center">
              <Ratings></Ratings>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerView;
