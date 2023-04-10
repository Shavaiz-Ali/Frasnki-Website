import React from 'react'
import './pagesCSS/Contact.css'

function Contact() {
  return (
    <>
    {/* <!-- ======= Breadcrumbs ======= --> */}
    <div class="breadcrumbs">
      <div class="container">
        <h2>Contact</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
      </div>
    </div>
    {/* <!-- End Breadcrumbs --> */}
    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="row mt-5">
          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="fas fa-location"></i>
                <h4>Location:</h4>
                <p> Nadir Chowk, Zulfiqarabad, Gilgit, Gilgit-Baltistan 15500</p>
              </div>

              <div class="email">
                <i class="fas fa-envelope"></i>
                <h4>Email:</h4>
                <p>marcom@franskienterprise.com</p>
              </div>

              <div class="phone">
                <i class="fas fa-phone"></i>
                <h4>Call:</h4>
                <p> 0349 5728397</p>
              </div>

            </div>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">
            <form action="forms/contact.php" method="post"class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}
    </>
  )
}

export default Contact