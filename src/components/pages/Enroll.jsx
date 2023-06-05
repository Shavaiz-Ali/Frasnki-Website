import React, { useState } from "react";
import "./pagesCSS/Enroll.css";
function Enroll() {
  const [t_input, setT_input] = useState("");
  const [email, setEmail] = useState("");
  const [t_area, setT_area] = useState("");
  const [check_box, setCheck_box] = useState("");
  const [radio_btn, setRadio_btn] = useState("");
  const [button, setButton] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setButton(true);

    if (
      t_input !== "" &&
      t_area !== "" &&
      check_box !== "" &&
      email !== "" &&
      radio_btn !== "" &&
      button !== true
    ) {
      setT_input("");
      setT_area("");
      setCheck_box("");
      setRadio_btn("");
      setEmail("");
      setButton(false);
    }
  };

  const handleonChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "t_input") {
      setT_input(value);
      setButton(false);
    } else if (name === "t_area") {
      setT_area(value);
      setButton(false);
    } else if (name === "email") {
      setEmail(value);
      setButton(false);
    } else if (name === "check_box") {
      setCheck_box(value);
      setButton(false);
    }
  };
  return (
    <>
      {/* <!-- ======= head enroll ======= --> */}
      <div className="Enroll">
        <div className="container">
          <h2>Enroll</h2>
          <p>
            Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
            Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis
            ipsam aperiam consequatur laboriosam nemo harum praesentium.
          </p>
        </div>
      </div>
      {/* <!-- End head enroll --> */}
      <div className="container mt-5">
        <h1>Enrollment Form</h1>
      </div>

      <div className="container mb-3">
        <div className="card-body">
          <form id="basic-form" method="post">
            <div className="row g-3 align-items-center">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group w-100 mr-3">
                      <label className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="t_input"
                        type="text"
                        className="form-control"
                        value={t_input}
                        onChange={(e) => {
                          handleonChange(e);
                        }}
                      />
                      {button === true ? (
                        t_input !== "" ? (
                          ""
                        ) : (
                          <small className="text-danger">
                            This Field Is Required
                          </small>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group w-100 mr-5">
                      <label className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="t_input"
                        type="text"
                        className="form-control parsley-error "
                        value={t_input}
                        onChange={(e) => {
                          handleonChange(e);
                        }}
                      />
                      {button === true ? (
                        t_input !== "" ? (
                          ""
                        ) : (
                          <small className="text-danger">
                            This Field Is Required
                          </small>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group w-100">
                      <label className="form-label">
                        Email<span className="text-danger">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          handleonChange(e);
                        }}
                      />
                      {button === true ? (
                        email !== "" ? (
                          ""
                        ) : (
                          <small className="text-danger">
                            This Field Is Required
                          </small>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group w-100">
                      <label className="form-label">
                        Cell Number<span className="text-danger">*</span>
                      </label>
                      <input
                        name="email"
                        type="Number"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          handleonChange(e);
                        }}
                      />
                      {button === true ? (
                        email !== "" ? (
                          ""
                        ) : (
                          <small className="text-danger">
                            This Field Is Required
                          </small>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group w-100">
                      <label className="form-label">
                        CNIC<span className="text-danger">*</span>
                      </label>
                      <input
                        name="email"
                        type="number"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          handleonChange(e);
                        }}
                      />
                      {button === true ? (
                        email !== "" ? (
                          ""
                        ) : (
                          <small className="text-danger">
                            This Field Is Required
                          </small>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group w-100">
                      <label className="form-label">
                        Departmant<span className="text-danger">*</span>
                      </label>
                      <select name="" id="" className="form-control">
                        <option value="Web Development">
                          Select Department
                        </option>
                        <option value="Web Development">
                          Graphic Designing
                        </option>
                        <option value="Web Development">UI/UX Designing</option>
                        <option value="Web Development">Amazon</option>
                        <option value="Web Development">
                          Digital Marketing
                        </option>
                        <option value="Web Development">
                          Films and Production
                        </option>
                        <option value="Web Development">Stock trading</option>
                        <option value="Web Development">
                          Enterpreneurship
                        </option>
                        <option value="Web Development">Web Development</option>
                      </select>
                      {button === true ? (
                        email !== "" ? (
                          ""
                        ) : (
                          <small className="text-danger">
                            This Field Is Required
                          </small>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <br />
                  <label className="fancy-radio">
                    <input
                      name="radio_btn"
                      type="radio"
                      value={radio_btn}
                      onChange={(e) => {
                        handleonChange(e);
                      }}
                    />
                    <span className="mx-2">Male</span>
                  </label>
                  <label className="fancy-radio">
                    <input
                      name="radio_btn"
                      type="radio"
                      value={radio_btn}
                      onChange={(e) => {
                        handleonChange(e);
                      }}
                    />
                    <span className="mx-2">Female</span>
                  </label>
                  <p id="error-radio">
                    {button === true ? (
                      t_area !== "" ? (
                        ""
                      ) : (
                        <small className="text-danger">
                          This Field Is Required
                        </small>
                      )
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className=""
              onClick={(e) => {
                onSubmit(e);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Enroll;
