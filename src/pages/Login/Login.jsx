import React from "react";
import login from "../../assets/login.svg";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
