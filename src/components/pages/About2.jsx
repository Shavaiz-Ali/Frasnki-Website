import React from "react";
import Slider from "../../Data/Testimonials-Data/Slider";
import About from "../mainComponent/Homepages/About";
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
      <div className="breadcrumbs">
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
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>What are they saying</p>
          </div>
          {
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
          
                1200: {
                  slidesPerView: 2,
                  spaceBetween: 20
                }
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="swiper-container"
              style={{width:"100%"}}
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
            </Swiper>
          }
        </div>
      </section>
      {/* <!-- End Testimonials Section --> */}
    </>
  );
}

export default About2;
