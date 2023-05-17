import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/kidsgallery-logo.jpg";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink>
              <a>Home</a>
            </NavLink>
            <NavLink>
              <a>All Toys</a>
            </NavLink>
            <NavLink>
              <a>My Toys</a>
            </NavLink>
            <NavLink>
              <a>Add A Toy</a>
            </NavLink>
            <NavLink>
              <a>Blogs</a>
            </NavLink>
          </ul>
        </div>
        <div className=" normal-case font-bold text-xl">
          <img className="w-[100px]" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <NavLink>
            <a>Home</a>
          </NavLink>
          <NavLink>
            <a>All Toys</a>
          </NavLink>
          <NavLink>
            <a>My Toys</a>
          </NavLink>
          <NavLink>
            <a>Add A Toy</a>
          </NavLink>
          <NavLink>
            <a>Blogs</a>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a>Profile</a>
      </div>
    </div>
  );
};

export default NavBar;
