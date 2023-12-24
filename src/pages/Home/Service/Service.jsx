import React from "react";
import img1 from "../../../assets/free-delivery.png";
import img2 from "../../../assets/customer-service-agent.png";
import img3 from "../../../assets/hand.png";
import img4 from "../../../assets/secure-payment.png";

const features = [
  {
    text: "Free Shipping",
    bgColor: "bg-sky-400",
    image: img1,
  },
  {
    text: "24/7 Online Support",
    bgColor: "bg-red-400",
    image: img2,
  },
  {
    text: "Money Back Guarantee",
    bgColor: "bg-green-400",
    image: img3,
  },
  {
    text: "100% Secure Checkout",
    bgColor: "bg-yellow-400",
    image: img4,
  },
];

const Service = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 rounded-lg lg:p-0 p-2">
      {features.map((feature, index) => (
        <div key={index} className={`p-4 shadow-md  ${feature.bgColor}`}>
          <img
            src={feature.image}
            alt={feature.text}
            className="w-16 h-16 mx-auto"
          />
          <h3 className="text-xl text-center font-semibold mt-4">
            {feature.text}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Service;
