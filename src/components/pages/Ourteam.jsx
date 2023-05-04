import React from "react";
import Team from "../../Data/Our-Team-data/Team";
import "./pagesCSS/Team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function Ourteam() {
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div className="container">
          <h2>Meet Our Team</h2>
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
      <section id="team" className="team">
        <div className="container">
          <div className="section-title">
            <h2>Our Team</h2>
            <p>Meet Our Team</p>
          </div>
          {
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                // disableOnInteraction: false,
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
                <Team member="1" />
              </SwiperSlide>
              <SwiperSlide>
                <Team member="2" />
              </SwiperSlide>
              <SwiperSlide>
                <Team member="3" />
              </SwiperSlide>
              <SwiperSlide>
                <Team member="4" />
              </SwiperSlide>
              <SwiperSlide>
                <Team member="5" />
              </SwiperSlide>
              <SwiperSlide>
                <Team member="6" />
              </SwiperSlide>
              <SwiperSlide>
                <Team member="7" />
              </SwiperSlide>
              <SwiperSlide>
                <Team member="8" />
              </SwiperSlide>
            </Swiper>
          }
        </div>
      </section>
    </>
  );
}

export default Ourteam;
