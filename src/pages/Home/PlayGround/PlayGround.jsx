import React from "react";
import play from "../../../assets/playground.jpg";

const PlayGround = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-red-500 text-3xl font-bold">
        Our Playground
      </h2>

      <img className="lg:w-[1340px] mt-5" src={play} alt="" />
    </div>
  );
};

export default PlayGround;
