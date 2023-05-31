import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styles from '../../.../../mainCSS/Services.module.css'
export default function Coursescards(props) {
  return (
    <div className="col-xl-3 col-sm-6 mt-4">
      <div className={`${styles.card} shadow-md`}>
        <div className="first-content text-center">
          <div className="icon-box">
            <i
              className={props.icon}
              style={{ color: props.color, fontSize: "3rem" }}
            ></i>
            <h3
              style={{
                color: "black",
                fontWeight: "bold",
                fontFamily: "poppins",
                fontSize:'1.2rem'
              }}
            >
              {props.title}
            </h3>
          </div>
        </div>
        <div className="second-content">
          <h3
            style={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "poppins",
              fontSize:'1.2rem'
            }}
          >
            {props.title}
          </h3>
          <p style={{fontSize:'18px', textAlign:'center'}}>Crafting digital experiences through code for online platforms.</p>
          <NavLink to={props.link} className='btn btn-primary'>Learn More </NavLink>
        </div>
      </div>
    </div>
  );
}
// <div className="icon-box">
//   <i className={props.icon} style={{color:props.color}}></i>
//   <h3><NavLink to={props.link}>{props.title}</NavLink></h3>
// </div>
