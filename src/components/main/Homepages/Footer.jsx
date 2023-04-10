import React from 'react'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import '../mainCSS/Footer.css'
export default function Footer() {
  return (
    <>
<footer id="footer">
<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>Franski</h3>
        <p>
        Nadir Chowk <br/>
        Zulfiqarabad, Gilgit<br/>
        Gilgit-Baltistan 15500 <br/><br/>
          <strong>Phone:</strong> 0349 5728397<br/>
          <strong>Email:</strong>marcom@franskienterprise.com<br/>
        </p>
      </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="fas fa-angle-right"></i> <NavLink to="/">Home</NavLink></li>
          <li><i className="fas fa-angle-right"></i> <NavLink to="/about">About us</NavLink></li>
          <li><i className="fas fa-angle-right"></i> <NavLink to="/services">Services</NavLink></li>
          <li><i className="fas fa-angle-right"></i> <NavLink to="/">Terms of service</NavLink></li>
          <li><i className="fas fa-angle-right"></i> <NavLink to="/">Privacy policy</NavLink></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="fas fa-angle-right"></i> <NavLink to="/uiux">Web Design</NavLink></li>
          <li><i className="fas fa-angle-right"></i> <NavLink to="/web">Web Development</NavLink></li>
          <li><i className="fas fa-angle-right"></i> <NavLink to="/films">Video Editing And Films</NavLink></li>
          <li><i className="fas fa-angle-right"></i> <NavLink to="/amazon">Marketing</NavLink></li>
          <li><i className="fas fa-angle-right"></i> <NavLink to="/graphic">Graphic Design</NavLink></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action="" method="post">
          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
        </form>
      </div>

    </div>
  </div>
</div>

<div className="container d-md-flex py-4">

  <div className="me-md-auto text-center text-md-start">
    <div className="copyright">
      &copy; Copyright <strong><span>Franski Enterprises PVT LMT</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      Designed by <NavLink to="https://bootstrapmade.com/">Team Development</NavLink>
    </div>
  </div>
  <div className="social-links text-center text-md-right pt-3 pt-md-0">
    <NavLink to="/" className="twitter"><i className="fab fa-twitter"></i></NavLink>
    <NavLink to="/" className="facebook"><i className="fab fa-facebook-f"></i></NavLink>
    <NavLink to="/" className="instagram"><i className="fab fa-instagram"></i></NavLink>
    <NavLink to="/" className="google-plus"><i className="fab fa-skype"></i></NavLink>
    <NavLink to="/" className="linkedin"><i className="fab fa-linkedin-in"></i></NavLink>
  </div>
</div>
</footer>
{/* <!-- End Footer --><!-- ======= Footer ======= --> */}
    </>
  )
}
