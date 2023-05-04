import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Teamdata from "./Team-data";
function Team({ member }) {
  const members = Teamdata.filter((item) => item.member === member)[0];
  return (
    <div className="team-slider swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="team-wrap">
            <div className="team-item">
              <img
                src={members.imgsrc}
                className="team-img"
                alt=""
                style={{ background: "#c5c8cb" }}
              />
              <h3>{members.name}</h3>
              <h4>{members.title}</h4>
              <p>
                <i className="fas fa-quote-left quote-icon-left"></i>
                {members.description}
                <i className="fas fa-quote-right quote-icon-right"></i>
              </p>
              <div className="social d-flex">
                <NavLink to={members.link}>
                  <span className="fab fa-twitter me-2"></span>
                </NavLink>
                <NavLink to={members.link}>
                  <span className="fab fa-facebook-f me-2"></span>
                </NavLink>
                <NavLink to={members.link}>
                  <span className="fab fa-instagram me-2"></span>
                </NavLink>
                <NavLink to={members.link}>
                  <span className="fab fa-linkedin-in me-2"></span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End testimonial item --> */}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default Team;
