import React from "react";
import play from "../../../assets/playground.jpg";

const PlayGround = () => {
  return (
    <div className="mt-5 lg:px-0 px-5">
      <h2
        className="text-center text-white text-3xl font-bold"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        Our Playground
      </h2>

      <img className="lg:w-[1340px] mt-5" src={play} alt="" />
    </div>
  );
};

export default PlayGround;
