import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
            className="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              to="/alltoys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              AllToys
            </NavLink>
            <NavLink
              to="/mytoys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              MyToys
            </NavLink>
            <NavLink
              to="/addAtoy"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              AddAToy
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blogs
            </NavLink>
          </ul>
        </div>

        <Link>
          <h2 className="text-2xl sm:text-lg md:text-2xl lg:text-3xl ">
            <span className="text-sky-400 font-bold">K</span>
            <span className="text-red-400 font-bold">i</span>
            <span className="text-green-400 font-bold">d</span>
            <span className="text-blue-400 font-bold">s</span>
            <span className="text-purple-400 font-bold">G</span>
            <span className="text-orange-400 font-bold">a</span>
            <span className="text-pink-400 font-bold">l</span>
            <span className="text-yellow-400 font-bold">l</span>
            <span className="text-teal-400 font-bold">e</span>
            <span className="text-indigo-400 font-bold">r</span>
            <span className="text-cyan-400 font-bold">y</span>
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/alltoys"
          >
            AllToys
          </NavLink>
          {user && (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/mytoys"
            >
              MyToys
            </NavLink>
          )}
          {user && (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/addatoy"
            >
              AddAToy
            </NavLink>
          )}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/blogs"
          >
            Blogs
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL ? (
          <img className="rounded-full w-10 h-10" src={user?.photoURL} alt="" />
        ) : (
          <FaUserCircle></FaUserCircle>
        )}

        {user ? (
          <button className="text-white" onClick={handleLogOut}>
            Log out
          </button>
        ) : (
          <NavLink className="text-white" to="/auth/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
