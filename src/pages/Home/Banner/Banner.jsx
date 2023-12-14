import React from "react";
import banner from "../../../assets/Disguisimals_Slide-1.jpg";

const Banner = () => {
  return (
    <div className="relative mt-5">
      <img className="rounded-xl w-full" src={banner} alt="Banner" />

      <div className="absolute top-1/2 left-4 sm:transform sm:-translate-y-1/7 text-center">
        <h3 className="bg-yellow-400 text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl rounded-xl px-2 py-4">
          20% off
        </h3>
      </div>
    </div>
  );
};

export default Banner;
