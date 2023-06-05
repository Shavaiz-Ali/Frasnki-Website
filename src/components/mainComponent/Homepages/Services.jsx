import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Coursescarddata from "../../../Data/coursesdata/Coursescarddata";
import styles from '../mainCSS/Services.module.css'
export default function Courses() {
  return (
    <>
      {/* <!-- ======= Popular Courses Section ======= --> */}
      <section id="services" className="features mt-3">
        <div className="container text-center">
          <div className="section-title p-4 text-center">
            <p>Popular Services</p>
          </div>
          <div
            className="row"
            style={{ textAlign: "-webkit-center", margin: "0" }}
          >
            {Coursescarddata.map((val, ind) => {
              return (
                <>
                  <div className="col-xl-3 col-sm-6 mt-4">
                    <div className={`${styles.card} shadow-md`}>
                      <div className={`${styles.front} text-center`}>
                        <div className="icon-box">
                          <i
                            className={val.icon}
                            style={{ color: val.color, fontSize: "3rem" }}
                          ></i>
                          <h3
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              fontFamily: "poppins",
                              fontSize: "1.2rem",
                            }}
                          >
                            {val.title}
                          </h3>
                        </div>
                      </div>
                      <div className={`${styles.back}`}>
                        <h3
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "poppins",
                            fontSize: "1.2rem",
                          }}
                        >
                          {val.title}
                        </h3>
                        <p style={{ fontSize: "18px", textAlign: "center", fontWeight:'500' }}>
                          Crafting digital experiences through code for online
                          platforms.
                        </p>
                        <NavLink to={val.link} className="btn btn-primary">
                          Learn More{" "}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- End Popular Courses Section --> */}
    </>
  );
}
