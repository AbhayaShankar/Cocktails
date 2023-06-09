import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link style={{ color: "#7cb354" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: "#fcfcfc", fontWeight: 400 }} to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
