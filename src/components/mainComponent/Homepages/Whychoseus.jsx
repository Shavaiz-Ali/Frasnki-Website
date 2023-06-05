import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Card from "../../../Data/Whychoosedata/WhychooseusCard";
import Cardsdata from "../../../Data/Whychoosedata/WhyChooseusCardsdata";
import '../mainCSS/Whyus.css'

export default function Whychoseus() {
  return (
    <>
      {/* <!-- ======= Why Us Section ======= --> */}
      <section id="why-us" className="why-us mt-5">
        <div className="container" data-aos="fade-up">
          <div className="row d-lg-flex align-items-center">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content">
                <h3>Why Choose Franski?</h3>
                <p>
                  Who? Franski Enterprise is a Community of Web 3.0 Developers,
                  Day-Traders, NFT Artists, Business Consultants, Marketers,
                  Lawyers and Accountants. At Franski Enterprise, we cultivate
                  our community through social entrepreneurship; we create,
                  curate, design, produce, innovate, access, and repeat.
                </p>
                <div className="text-center">
                  <NavLink to="/about" className="more-btn">
                    Learn More <i className="bx bx-chevron-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="icon-boxes d-md-flex justify-content-between lg-gap-0 gap-1">
                {Cardsdata.map((val, ind) => {
                  return (
                    <Card
                      key = {ind}
                      title={val.title}
                      description={val.descripton}
                      icons={val.icon}
                    />
                  );
                })}
                {/* <!-- End .content--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Why Us Section --> */}
      {/* <!-- End Why Us Section --> */}
    </>
  );
}
