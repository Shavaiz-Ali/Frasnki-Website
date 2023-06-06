import React, {Fragment} from "react";
import styles from "../TrainingsCSS/Locations.module.css";
import { LocationData } from "../../../../Data/LocationsData/LocationData";
const Locations = () => {
  return (
    <>
      <section id="locations">
        <div className={`${styles.locations_heading} text-center`}>
          <h1>Our Locations</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            porro!
          </p>
        </div>
        <div className="container">
          <div className="row">
            {LocationData.map((value, index) => {
              return (
                <Fragment key={value.id}>
                  <div className="col-lg-4" >
                    <div className={"card text-center"} >
                      <div className="card-body">
                        <span className="card-title">
                          <h2>{value.name}</h2>
                        </span>
                        <span className="card-content">
                          <p>{value.address}</p>
                        </span>
                        <span className="card-button">
                          <a href="/">{value.button}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
