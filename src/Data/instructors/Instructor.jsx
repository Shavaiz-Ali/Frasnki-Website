import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import data from './Instructorsdata'
function Instructor(instructor) {
    const sections =  data.filter((item) => item.instructor === instructor)[0];  
  return (
    <>
     {/* <!-- ======= Trainers Section ======= --> */}
    <section id="trainers" className="trainers">
      <div className="container" data-aos="fade-up">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={sections.imgsrc} className={sections.imgsrc} alt=""/>
              <div className="member-content">
                <h4>{sections.name}</h4>
                <span>{sections.department}</span>
                <p>
                {sections.description}
                </p>
                <div className="social">
                  <NavLink to=""><i className="fab fa-twitter"></i></NavLink>
                  <NavLink to=""><i className="fab fa--facebook"></i></NavLink>
                  <NavLink to=""><i className="fab fa--instagram"></i></NavLink>
                  <NavLink to=""><i className="fab fa--linkedin"></i></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Trainers Section --> */}
    </>
  )
}

export default Instructor
