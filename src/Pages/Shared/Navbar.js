import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user)
  const MenuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      {/* <li>
        <Link to="/about">About</Link>
      </li> */}
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      {/* <li>
        <Link to="/reviews">Reviews</Link>
      </li> */}
      {/* <li>
        <Link className="whitespace-nowrap" to="/contact">
          Contact Us
        </Link>
      </li> */}
      {!user && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}

      {user?.email && (
        <li>
          <button className="btn btn-ghost" onClick={() => signOut(auth)}>
            Sign Out
          </button>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {MenuItems}
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{MenuItems}</ul>
      </div>
    </nav>
  );
};
export default Navbar;
