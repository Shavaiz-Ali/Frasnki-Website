import React from "react";
import { Others } from "../../../../Data/ProductsData/ProductsData";
import { Fragment } from "react";
import styles from '../ProductsCSS/Others.module.css'
const OurProducts = () => {
  return (
    <>
      <section id="products" className="p-0 mt-3 mb-4">
        <div className="container">
          <div className={`${styles.heading}`}>
            <h2>Others</h2>
          </div>
          <div className="row mt-2">
            {Others.map((value) => {
              return (
                <Fragment key={value.Id}>
                  <div className="col-lg-4">
                    <div className="product-1">
                      <div
                        className={`${styles.card} mt-3`}
                        style={{
                          background: `url(${value.img}`,
                          backgroundPosition: "center",
                          backgroundRepeat:"no-repeat",
                          backgroundSize:"cover"
                        }}
                      >
                        <div
                          className="card-title text-center"
                          style={{ backgroundColor: "#00000059", width:"100%" }}
                        >
                          <h2 className="text-white">{value.title}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProducts;
