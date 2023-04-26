import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import franskilogo from "../../../Assets/images/logos/logo1.png"
import '../mainCSS/Navbar.css'
export default function Navbar(props) {
  return (
    <>
      {/* <!-- ======= Header ======= -->  */}
      <header id="header" className="">
        <div className="container-sm d-flex align-items-center justify-content-between">
            <div className="logo">
              <NavLink>
                <img src={franskilogo} alt={franskilogo} to='/'/>
              </NavLink>
            </div>
          <nav id="navbar" className="d-flex navbar">
            <ul className="navbar-items">
                  <li className="">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/team">Our Team</NavLink>
                  </li>
              {/* <li className="dropdown">
                    <NavLink>
                      Skill Development <i className="fas fa-angle-down"></i>
                    </NavLink>
                <ul className="navbar-dropdown">
                    <li>
                      <NavLink to="/web">Web Developemnt</NavLink>
                    </li>
                    <li>
                      <NavLink to="/graphic">Graphic Designing</NavLink>
                    </li>
                    <li>
                      <NavLink to="/uiux">UI/UX Designing</NavLink>
                    </li>
                    <li>
                      <NavLink to="/amazon">Amazon</NavLink>
                    </li>
                    <li>
                      <NavLink to="/gis">GIS</NavLink>
                    </li>
                    <li>
                      <NavLink to="/films">Video Editing and Films</NavLink>
                    </li>
                </ul>
              </li> */}
                  <li className="">
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/events">Events</NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <NavLink to="enroll" className="get-started-btn ms-3">
                    Enroll Now
                  </NavLink>
            </ul>
            <i
              className="fas fa-bars mobile-nav-toggle"
              id="navtoggle"
              onClick={props.mobilenav}
            ></i>
          </nav>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}
