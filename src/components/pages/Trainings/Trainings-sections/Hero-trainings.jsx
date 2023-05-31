import React from "react";
import hero1 from "../../../../Assets/images/Trainings/vision5.jpg";
import "../TrainingsCSS/Hero-training.css";
const Hero_Trainings = () => {
  return (
    <>
      <section className="hero-products">
        <div className="container">
          <div className="row">
            <div className="vision-left col-lg-6 col-sm-10">
              <div className="background">
                <span className="vision-image">
                  <img src={hero1} alt={hero1} className="image-fluid w-100"/>
                </span>
              </div>
            </div>
            <div className="vision-right col-lg-6 col-sm-10">
              <div className="vision-heading">
                <span>
                  <h1>Our Vision</h1>
                </span>
              </div>
              <div className="vision-text">
                <span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis blanditiis dolorem ex atque alias perferendis.
                    Consequuntur, explicabo tenetur quia quaerat velit est ad,
                    architecto, repellendus rem adipisci beatae repudiandae
                    provident!
                  </p>
                </span>
                <hr />
                <span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, ex?</p>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero_Trainings;
