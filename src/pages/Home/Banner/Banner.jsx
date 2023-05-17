import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="mt-5">
      <img className="lg:w-[1340px] lg:h-[600px]" src={banner} alt="" />
    </div>
  );
};

export default Banner;
