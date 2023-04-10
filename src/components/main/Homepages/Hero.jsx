import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import bghero from "../../../Assets/images/hero.jpg";
import '../mainCSS/Hero.css'
export default function Hero() {
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundImage: `url(${bghero})` }}
      >
        <div
          className="container position-relative"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>
            Learning Today,
            <br />
            Leading Tomorrow
          </h1>
          <h2>
            An Inspiring Venture To design, innovate, And <br /> Implement your
            success
          </h2>
          <NavLink to="/services" className="btn-get-started">
            Get Started
          </NavLink>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </>
  );
}
