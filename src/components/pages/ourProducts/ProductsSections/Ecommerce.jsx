import React from "react";
import { Ecommerce } from "../../../../Data/ProductsData/ProductsData";
import { Fragment } from "react";
import styles from '../ProductsCSS/Ecommerce.module.css'
const OurProducts = () => {
  return (
    <>
      <section id="products" className="p-0 mt-3">
        <div className="container">
          <div className={`${styles.heading}`}>
            <h2>E-Comerce</h2>
          </div>
          <div className="row mt-lg-2">
            {Ecommerce.map((value) => {
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
