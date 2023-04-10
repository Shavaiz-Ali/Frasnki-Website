import React from "react";
export default function Card(props) {
  return (
    <>
      {/* <!-- ======= Why Us Section ======= --> */}
            <div className="col-md-4 ms-3 d-flex align-items-stretch ">
                <div className="icon-box mt-4 mt-xl-0 ">
                    <i className={props.icons}></i>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
            {/* <!-- End .content--> */}
      {/* <!-- End Why Us Section --> */}
    </>
  );
}
