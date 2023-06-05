import React from "react";
import styles from '../TrainingsCSS/Locations.module.css'
const Locations = () => {
  return <>
  <section id="locations">
    <div className={`${styles.locations_heading} text-center`}>
        <h1>Our Locations</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, porro!</p>
    </div>
    <div className="container">
        <div className="location-tabs">
            {/* <!-- Nav tabs --> */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Karachi</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Islamabad</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Gilgit</button>
              </li>
            </ul>
            
            {/* <!-- Tab panes --> */}
            <div className="tab-content">
              <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> 
                    <div className={`${styles.locations_about}`}>
                        karachi Branch
                    </div>
                   <div className="location_image"></div>
              </div>
              <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                   <div className={`${styles.locations_about}`}>
                   Islamabad Branch
                   </div>
                   <div className="location_image"></div>
              </div>
              <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                   <div className={`${styles.locations_about}`}>
                    Gilgit Branch
                   </div>
                   <div className="location_image"></div>
              </div>
            </div>
        </div>
    </div>
  </section>
  </>;
};

export default Locations;
