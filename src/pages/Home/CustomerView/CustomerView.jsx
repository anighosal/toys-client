import React from "react";

import img1 from "../../../assets/client1.jpg";
import img2 from "../../../assets/client2.jpg";
import img3 from "../../../assets/client3.jpg";
import Ratings from "../../Ratings/Ratings";

const CustomerView = () => {
  return (
    <div className="mt-5 lg:px-0 px-5">
      <h2
        className="text-center text-white text-3xl font-bold"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        Our little client
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5">
        <div className="lg:w-96  shadow-xl mb-5 shadow-xl rounded-lg card border border-gray-300 rounded-md overflow-hidden">
          <figure className="h-full">
            <img className="card-image w-full h-full" src={img1} />
          </figure>
          <div className="text-white text-justify p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto pariatur, praesentium ut laborum numquam totam, iste
              error labore reprehenderit sed commodi accusamus ab? Expedita
              nesciunt, voluptas quae fuga quis adipisci?{" "}
            </p>
            <h2 className="font-bold text-center text-2xl mt-3">Smith</h2>
            <div className="card-actions justify-center">
              <Ratings></Ratings>
            </div>
          </div>
        </div>
        <div className="lg:w-96 bg-base-100  shadow-xl mb-5 shadow-xl rounded-lg card border border-gray-300 rounded-md overflow-hidden">
          <figure className="h-full">
            <img className="card-image w-full h-full"  src={img2} />
          </figure>
          <div className="text-black text-justify p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto pariatur, praesentium ut laborum numquam totam, iste
              error labore reprehenderit sed commodi accusamus ab? Expedita
              nesciunt, voluptas quae fuga quis adipisci?{" "}
            </p>
            <h2 className="font-bold text-center text-2xl">Sandy</h2>
            <div className="card-actions justify-center">
              <Ratings></Ratings>
            </div>
          </div>
        </div>
        <div className="lg:w-96  shadow-xl mb-5 shadow-xl rounded-lg card border border-gray-300 rounded-md overflow-hidden">
        <figure className="h-full">
            <img className="card-image w-full h-full" src={img3} />
          </figure>
          <div className="text-white text-justify p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto pariatur, praesentium ut laborum numquam totam, iste
              error labore reprehenderit sed commodi accusamus ab? Expedita
              nesciunt, voluptas quae fuga quis adipisci?{" "}
            </p>
            <h2 className="font-bold text-center text-2xl">john</h2>
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
