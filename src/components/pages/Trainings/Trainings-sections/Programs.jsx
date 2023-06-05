import React from "react";
import { Trainingdata } from "../../../../Data/Trainings-Data/Trainingdata";
import styles from '../TrainingsCSS/Programs.module.css'
const Programs = () => {
  return (
    <>
      <section className="programs">
        <div className={`${styles.programsheading} text-center`}>
          <h1>Desired Digital Training Opportunities</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, porro!</p>
        </div>
        <div className="container d-flex">
          <div className="row d-flex justify-content-center" style={{justifyContent:'center'}}>
            {Trainingdata.map((value, index) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div className={`${styles.card} shadow-md "`}  style={{margin:'10px auto'}}>
                      <img src={value.imgsrc} className="card-img-top" alt={value.imgsrc}/>
                      <div className={`${styles.cardbody} card-body`}>
                        <p className="card-text">
                          {value.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
