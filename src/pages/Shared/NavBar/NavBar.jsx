import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/kidsgallery-logo (5).png";
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
              All Toys
            </NavLink>
            <NavLink
              to="/mytoys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              My Toys
            </NavLink>
            <NavLink
              to="/addAtoy"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Add A Toy
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
          <img className="w-[100px]" src={logo} alt="" />
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
            All Toys
          </NavLink>
          {user && (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/mytoys"
            >
              My Toys
            </NavLink>
          )}
          {user && (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/addatoy"
            >
              Add A Toy
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
          <button onClick={handleLogOut}>Log out</button>
        ) : (
          <NavLink to="/auth/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
