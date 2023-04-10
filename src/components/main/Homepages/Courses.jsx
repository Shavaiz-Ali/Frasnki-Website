import React from "react";
import Coursescards from "../../../Data/coursesdata/Coursescards";
import Coursescarddata from "../../../Data/coursesdata/Coursescarddata";
import '../mainCSS/Courses.css'
export default function Courses() {
  return (
    <>
      {/* <!-- ======= Popular Courses Section ======= --> */}
      <section id="services" className="features">
        <div className="container">
          <div className="section-title p-4">
            <h2>Services</h2>
            <p>Popular Services</p>
          </div>
          <div className="row">
            {Coursescarddata.map((val, ind) => {
              return (
                <Coursescards
                  icon={val.icon}
                  key={ind}
                  title={val.title}
                  link={val.link}
                  color={val.color}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- End Popular Courses Section --> */}
    </>
  );
}
