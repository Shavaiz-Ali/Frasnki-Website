import React from "react";
import Count from "./Count";
import styles from "../mainCSS/About.module.css";
import video from "../../../Assets/video/abvideo.mp4";
export default function About() {
  return (
    <>
      {/* <!-- ======= About Section ======= --> */}
      <section id={`${styles.about}`} className="about mt-5 p-lg-5 p-0">
        <div className="container" data-aos="fade-in">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              {/* <img src={imgabout} className="img-fluid" alt="" /> */}
              <video controls>
                <source src={video} />
              </video>
            </div>
            <div id={`${styles.content}`} className="col-lg-6 pt-lg-4 pt-lg-0 order-2 order-lg-1">
              <h3>About Us</h3>
              <p className="bold">
                <strong>Franski Enterprises Private Limited</strong>
              </p>
              <ul>
                <p>
                  At the Franski enterprise, we are populated by young, weird,
                  dynamic and dedicated minds, who are exhilarated about solving
                  business problems, we upheaval to match your needs as we say
                  we are considering the consequences of complex business
                  problems and unemployment, but we actually working to satisfy
                  our clients’ needs. Our skilled professionals along with the
                  “let to do it” attitude of brand new talent is persistently
                  squeezing the horizons our values of coherence, services,
                  kindliness, growth and continuous learning, increasing
                  competence grown our behavior all our stakeholders and
                  clients. We will work with you to assure your customer
                  relationships are of the highest quality. Our experienced
                  professional onshore and offshore feature acknowledge you to
                  emphasis on the business of making your venture a success
                </p>
              </ul>
              <p>
                "IN SHORT" We are a Community of Entrepreneurs, aiming to
                integrate Financial Education, Sustainable Development, and Web
                3.0.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}
      {/* <!-- ======= Counts Section ======= --> */}
      <Count />
      {/* <!-- End Counts Section --> */}
    </>
  );
}
