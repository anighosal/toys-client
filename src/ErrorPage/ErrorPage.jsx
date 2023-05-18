import React from "react";
import error from "../../../my-11th-work/src/assets/error.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img className="w-[1140px]" src={error} alt="" />
      <Link to="/">
        <button className="btn btn-error">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
