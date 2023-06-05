import React from "react";
import Services from "../mainComponent/Homepages/Services";
import './pagesCSS/Services.css'

function ourServices() {
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div className="container">
          <h2>Services</h2>
          <p>
          It doesn’t matter what corporation or business you’re in, Franski enterprise’s here to answer your business problems promptly and professionally. You will welfare from our years of experience, sound processes, and magnificent practices that will help you find more customers and reduce your operating costs. We are trained in serving the following services:
          </p>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}

      {/* getting services and footer secttion from horm component  */}
      <div className="mt-5">
        <Services />
      </div>
    </>
  );
}

export default ourServices;
