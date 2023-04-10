import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
function Event(props) {
  return (
    <>
      <div className="col-md-6 d-flex align-items-stretch">
        <div className="card d-flex">
          <div className="card-img">
            <img src={props.imgsrc} alt={props.imgsrc} />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <NavLink to="">{props.title}</NavLink>
            </h5>
            <p className="fst-italic text-center">{props.date}</p>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
