import React, { useState, useEffect } from "react";
// import React, { useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../mainCSS/Count.css'
export default function Count() {
  const [Counter, setCounter] = useState(false);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      {/* <!-- ======= Counts Section ======= --> */}
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
        data-aos='fade-in'
      >
        <section id="counts" className="counts section-bg mt-5" data-aos='fade-in'>
          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
               <span className="d-flex justify-content-center">
               {Counter && (
                  <CountUp start={0} end={100} duration={2} delay={0}/>
                )}
                +
               </span>
                <p>Students</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
              <span className="d-flex justify-content-center">
               {Counter && (
                  <CountUp start={0} end={10} duration={2} delay={0}/>
                )}
                +
               </span>
                <p>Courses</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
              <span className="d-flex justify-content-center">
               {Counter && (
                  <CountUp start={0} end={20} duration={2} delay={0}/>
                )}
                +
               </span>
                <p>Events</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
              <span className="d-flex justify-content-center">
               {Counter && (
                  <CountUp start={0} end={15} duration={1} delay={0}/>
                )}
                +
               </span>
                <p>Trainers</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
      {/* <!-- End Counts Section --> */}
    </>
  );
}
