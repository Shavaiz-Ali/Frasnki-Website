import React, { useState } from "react";
// import React, { useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../mainCSS/Count.css";
export default function Count() {
  const [Counter, setCounter] = useState(false);
  return (
    <>
      {/* <!-- ======= Counts Section ======= --> */}
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
        data-aos="fade-in"
      >
        <section
          id="counts"
          className="counts mt-5 section-bg"
          data-aos="fade-in"
        >
          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center flex-column text-center">
                <span className="purecounter d-flex justify-content-center align-items-center">
                  {Counter && (
                    <CountUp start={0} end={20} duration={2} delay={0} />
                  )}
                  +
                </span>
                <p>Happy Clients</p>
              </div>

              <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center flex-column text-center">
                <span className="purecounter d-flex justify-content-center align-items-center">
                  {Counter && (
                    <CountUp start={0} end={40} duration={2} delay={0} />
                  )}
                  +
                </span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center flex-column text-center">
                <span className="purecounter d-flex justify-content-center align-items-center">
                  {Counter && (
                    <CountUp start={0} end={24} duration={2} delay={0} />
                  )}
                </span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center flex-column text-center">
                <span className="purecounter d-flex justify-content-center align-items-center">
                  {Counter && (
                    <CountUp start={0} end={50} duration={2} delay={0} />
                  )}
                  +
                </span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
      {/* <!-- End Counts Section --> */}
    </>
  );
}
