// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import data from "./Sliderdata";
 const Slider = ({client}) => {
  const sections = data.filter((item) => item.client === client)[0];  
  return (
    <>
    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src={sections.imgsrc} className="testimonial-img" alt=""/>
                  <h3>{sections.name}</h3>
                  <h4>{sections.title}</h4>
                  <p>
                    <i className="fas fa-quote-left quote-icon-left"></i>
                    {sections.descripton}
                    <i className="fas fa-quote-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End testimonial item --> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
    </>
  );
};
export default Slider
