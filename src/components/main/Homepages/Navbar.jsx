import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import franskilogo from "../../../Assets/images/logos/logo1.png";
import "../mainCSS/Navbar.css";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(0);
  const [navbarOpen, setNavbarOpen] = useState(false);
  useEffect(() => {
    const calculateDuration = () => {
      const loadTime =
        window.performance.timing.domContentLoadedEventEnd -
        window.performance.timing.navigationStart;
      const duration = loadTime * 0.2; // Adjust the multiplier (e.g., 0.2) to control the animation speed
      setAnimationDuration(duration);
    };

    calculateDuration();
    window.addEventListener("load", calculateDuration);
    return () => {
      window.removeEventListener("load", calculateDuration);
    };
  }, []);

  const handleSearch = () => {
    setNavbarOpen(false); // Close the navbar when a link is clicked
    setScrolling(true);

    // Simulating an API call or search process
    setTimeout(() => {
      setScrolling(false);
    }, 2000);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.closest("#navbar") === null) {
        setNavbarOpen(false);
      }
    };

    if (navbarOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [navbarOpen]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);

  };
  const getNavbarIcon = () => {
    return navbarOpen ? "fa-times  text-white" : "fa-bars";
  };
  
  const navbarIcon = getNavbarIcon();
  return (
    <>
      {/* Onclick Animation */}
      <div className="row">
        <div className="col">
          <div
            className={`scrolling-line ${scrolling ? "active" : ""}`}
            style={{ animationDuration: `${animationDuration}ms` }}
          />
        </div>
      </div>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="">
        <div className="container-sm d-flex align-items-center justify-content-between">
          <div className="logo">
            <NavLink to="/">
              <img src={franskilogo} alt={franskilogo} />
            </NavLink>
          </div>
          <nav id="navbar" className={`d-flex navbar  ${navbarOpen ? "navbar-mobile" : ""}`}>
            <ul className="navbar-items">
              <li>
                <NavLink exact to="/services" onClick={handleSearch}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" onClick={handleSearch}>
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/training" onClick={handleSearch}>
                 Trainings
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" onClick={handleSearch}>
                  Our Products
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/blog" onClick={handleSearch}>Blog</NavLink>
              </li>
              {/* <li className="">
                <NavLink to="/events" onClick={handleSearch}>Events</NavLink>
              </li> */}
              <li className="">
                <NavLink to="/contact" onClick={handleSearch}>Contact</NavLink>
              </li>
              <NavLink to="enroll" className="get-started-btn ms-3" onClick={handleSearch}>
                Enroll Now
              </NavLink>
              {/* Rest of the navbar items */}
            </ul>
            <i
              className={`fas mobile-nav-toggle ${navbarIcon}`}
              id="navtoggle"
              onClick={toggleNavbar}
            ></i>
          </nav>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}
