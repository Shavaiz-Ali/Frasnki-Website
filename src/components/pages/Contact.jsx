import React, { useState } from "react";
import "./pagesCSS/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    yourname: "",
    email: "",
    subject: "",
    message: " ",
  });
   const handleinput = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev)=>{
      return{...prev, [name] :[value]}
    })
   }
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div className="container">
          <h2>Contact</h2>
          <p>
            If you need help, please don't hesitate to contact us. We're here to
            help you succeed.
          </p>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="fas fa-location"></i>
                  <h4>Location:</h4>
                  <p>
                    {" "}
                    Nadir Chowk, Zulfiqarabad, Gilgit, Gilgit-Baltistan 15500
                  </p>
                </div>
                <div className="email">
                  <i className="fas fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>marcom@franskienterprise.com</p>
                </div>

                <div className="phone">
                  <i className="fas fa-phone"></i>
                  <h4>Call:</h4>
                  <p> 0349 5728397</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
              >
                <div className="row">
                  
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="name"
                      className="form-control"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleinput}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleinput}
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleinput}
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    value={formData.message}
                      onChange={handleinput}

                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </>
  );
}

export default Contact;
