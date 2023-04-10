import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import data from "./Coursedetaildata";

 const Coursesdetail = ({component}) => {
  const sections = data.filter((item) => item.component === component)[0];
  return (
    <>
          {/* <!-- ======= Breadcrumbs ======= --> */}
          <div className="breadcrumbs" data-aos="fade-in">
            <div className="container">
              <h2>{sections.title}</h2>
              <p>
              {sections.titledes}
              </p>
            </div>
          </div>
          {/* <!-- End Breadcrumbs --> */}
          {/* <!-- ======= Cource Details Section ======= --> */}
          <section id="course-details" className="course-details">
            <div className="container" val-aos="fade-up">
              <div className="row">
                <div className="col-lg-8 ">
                  <img
                    src={sections.imgsrc}
                    className="img-fluid"
                    alt=""
                  />
                  <h3>{sections.destitle}</h3>
                  <p style={{textAlign:'justify'}}>
                   {sections.description}
                   </p>
                </div>
                <div className="col-lg-4">
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Trainer</h5>
                    <p>
                      <a href="/">{sections.trainer}</a>
                    </p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Course Fee</h5>
                    <p>{sections.coursefee}</p>
                  </div>

                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Available Seats</h5>
                    <p>{sections.seats}</p>
                  </div>

                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Schedule</h5>
                    <p>{sections.Schedule}</p>
                  </div>
                  <div className="button">
                    <NavLink to='/enroll'><button>{sections.Button}</button></NavLink>
                  </div>
                </div>
              </div>
            </div>
            </section>
          {/* <!-- End Cource Details Section --> */}
    </>
  );
};
export default Coursesdetail
