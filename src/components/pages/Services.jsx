import React from "react";
import Courses from "../main/Homepages/Courses";
import './pagesCSS/Services.css'

function Services() {
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div className="container">
          <h2>Services</h2>
          <p>
            Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
            Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis
            ipsam aperiam consequatur laboriosam nemo harum praesentium.{" "}
          </p>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}

      {/* getting services and footer secttion from horm component  */}
      <div className="mt-5">
      <Courses />
      </div>
    </>
  );
}

export default Services;
