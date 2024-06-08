import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light font">
        <Link className="navbar-brand pl-3">
          {/* <img src="https://i.pinimg.com/474x/5e/6e/99/5e6e99a4b60329ed067fc68c0227ac75.jp"
          style={{height:"80px", width:"100%" }}/> */}
          Shoppy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <Link className="nav-link pl-5" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link pl-5" to="/Register">
                Register
              </Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link pl-5" to="/Products">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
