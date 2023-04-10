import React, {useEffect} from "react";
import Count from './Count'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../mainCSS/About.css'
import video from '../../../Assets/video/abvideo.mp4'
export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about mt-5 p-lg-5 p-0">
        <div className="container" data-aos="fade-in">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              {/* <img src={imgabout} className="img-fluid" alt="" /> */}
              <video controls>
                <source  src={video} />
              </video>
            </div>
            <div className="col-lg-6 pt-lg-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>About Us</h3>
              <p className="bold">
                <strong>Franski Enterprises Private Limited</strong>
              </p>
              <ul>
                <li>
                  <i className="fas fa-circle-check"></i>Franski Enterprise is a
                  Community of Web 3.0 Developers, Day-Traders, NFT Artists,
                  Business Consultants, Marketers, Lawyers and Accountants.
                </li>
                <li>
                  <i className="fas fa-circle-check"></i> At Franski Enterprise,
                  we cultivate our community through social entrepreneurship; we
                  create, curate, design, produce, innovate, access, and repeat
                </li>
                <li>
                  <i className="fas fa-circle-check"></i> Franski Enterprise
                  brings in sustainable development, financial education and
                  vocational training under the same umbrella.
                </li>
                <li>
                  <i className="fas fa-circle-check"></i> Departments Our
                  Services include, but is not limited to Web 3.0, De-Fi,
                  Blockchain, Smart Contracts, and NFTs. Stay Tuned".
                </li>
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
