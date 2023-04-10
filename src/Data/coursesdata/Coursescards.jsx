import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Coursescards(props) {
  return (
    <div className="col-lg-4 col-sm-6 mt-4">
    <div className="icon-box">
      <i className={props.icon} style={{color:props.color}}></i>
      <h3><NavLink to={props.link}>{props.title}</NavLink></h3>
    </div>
  </div>
  );
}
