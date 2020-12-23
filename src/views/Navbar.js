import React from "react";
import logo from "./image/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="!#">
          <img
            src={logo}
            alt=""
            srcSet=""
            style={{ height: "40px", width: "40px" }}
          />
        </a>

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
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="1#" style={{ color: "#EF6666" }}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="1#">
                Consumer
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="1#">
                Enterprise
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="1#">
                Live Stream
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="1#">
                Soprono U
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="1#">
                Services
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="1#">
                Sign Up
              </a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link disabled" href="1#">
                Disabled
              </a>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline my-2 my-sm-0" type="submit">
              Login
            </button>
            &nbsp;&nbsp;
            <button
              className="btn btn-outline-success-2 my-2 my-sm-0"
              type="submit"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
