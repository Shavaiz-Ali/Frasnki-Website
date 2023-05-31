import React from 'react'
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import '../mainCSS/Footer.css'
export default function Footer() {
  return (
    <>
{/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h3>Franski Enterprises</h3>
              <p className="pb-3">Franski Enterprise is a Community of Web 3.0 Developers, Day-Traders, NFT Artists, Business Consultants, Marketers, Lawyers and Accountants</p>
              <p>
                Nadir Chowk<br/>
                Zulfiqarabad, Gilgit<br/><br/>
                <strong>Phone:</strong> 03495728397<br/>
                <strong>Email:</strong> marcom@franskienterprise.com<br/>
              </p>
              <div className="social-links mt-3">
                <a href="/" className="twitter"><i className="fab fa-twitter"></i></a>
                <a href="/" className="facebook"><i className="fab fa-facebook"></i></a>
                <a href="/" className="instagram"><i className="fab fa-instagram"></i></a>
                <a href="/" className="google-plus"><i className="fab fa-skype"></i></a>
                <a href="/" className="linkedin"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Blog</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Be the first to khow about the new events and more</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>FRANSKI ENTERPRISES PVT LMT</span></strong>. All Rights Reserved 2023
      </div>
    </div>
  </footer>
  {/* <!-- End Footer --> */}
    </>
  )
}
