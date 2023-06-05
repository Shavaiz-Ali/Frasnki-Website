import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import bghero from "../../../Assets/images/hero.jpg";
import "../mainCSS/Hero.css";
export default function Hero() {
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <Swiper
        id="hero"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${bghero})`,
            backgroundSize: "cover",
            opacity: "0.9",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundAttachment: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
          }}
        >
          <div className="container caption" style={{ position: "relative" }}>
            <h1>
              Learning Today,
              <br />
              Leading Tomorrow
            </h1>
            <h2>
              Furnishing IT Sercices To Next <br /> Generation
            </h2>
            <NavLink to="/about" className="btn-get-started">
              Learn More
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${bghero})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundAttachment: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src={bghero} alt="" className="w-100" style={{height: '100vh', position: 'absolute'}}/> */}
          <div className="container caption" style={{ position: "relative" }}>
            <h1>
              Learning Today,
              <br />
              Leading Tomorrow
            </h1>
            <h2>
              Furnishing IT Sercices To Next <br /> Generation
            </h2>
            <NavLink to="/about" className="btn-get-started">
              Learn More
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${bghero})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundAttachment: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src={bghero} alt="" className="w-100" style={{height: '100vh', position: 'absolute'}}/> */}
          <div className="container caption" style={{ position: "relative" }}>
            <h1>
              Learning Today,
              <br />
              Leading Tomorrow
            </h1>
            <h2>
              Furnishing IT Sercices To Next <br /> Generation
            </h2>
            <NavLink to="/about" className="btn-get-started">
              Learn More
            </NavLink>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <!-- End Hero --> */}

      {/* cards goes here  */}
      <div className="container">
        <div class="row mt-5">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card w-100 h-auto">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card w-100 h-auto">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
