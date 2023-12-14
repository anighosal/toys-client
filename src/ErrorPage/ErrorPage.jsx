import React from "react";
import error from "../../../toys-client/src/assets/error.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mt-9">
      <img className="w-[600px] mx-auto" src={error} alt="" />
      <Link to="/">
        <button className="btn btn-error">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
