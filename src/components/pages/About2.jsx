import React from "react";
import Slider from "../../Data/Slider/Slider";
import About from "../main/Homepages/About";
import "./pagesCSS/About2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function About2() {
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs" data-aos="fade-down">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Franski Enterprise is a Community of Web 3.0 Developers,
            Day-Traders, NFT Artists, Business Consultants, Marketers, Lawyers
            and Accountants. <br />
            At Franski Enterprise, we cultivate our community through social
            entrepreneurship;
          </p>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}
      {/* adding about section to the about page getting it from home  */}
      <About />
      {/* <!-- ======= Testimonials Section ======= --> */}
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>What are they saying</p>
          </div>
          {
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                // disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="swiper-container"
            >
              <SwiperSlide>
                <Slider client="1" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider client="2" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider client="3" />
              </SwiperSlide>
              <SwiperSlide>
                <Slider client="4" />
              </SwiperSlide>
            </Swiper>
          }
        </div>
      </section>
      {/* <!-- End Testimonials Section --> */}
    </>
  );
}

export default About2;
