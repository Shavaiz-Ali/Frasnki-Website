import React from 'react'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
function Team(props) {
  return (
      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div class="member">
            <div class="member-img">
                <img src={props.imgsrc} class={props.imgsrc} alt="" className='w-100'/>
                <div class="social">
                    <NavLink to=""><i class="fab fa-twitter"></i></NavLink>
                    <NavLink to=""><i class="fab fa-facebook"></i></NavLink>
                    <NavLink to=""><i class="fab fa-instagram"></i></NavLink>
                    <NavLink to=""><i class="fab fa-linkedin"></i></NavLink>
                </div>
            </div>
            <div class="member-info">
                <h4>{props.name}</h4>
                <span>{props.title}r</span>
                <p>{props.description}</p>
            </div>
        </div>
        </div>
  )
}

export default Team
