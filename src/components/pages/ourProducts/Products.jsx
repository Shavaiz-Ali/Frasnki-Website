import React from 'react'
import Ecommerce from './ProductsSections/Ecommerce'
import Youtube from './ProductsSections/Youtube'
import Others from './ProductsSections/Others'
const Products = () => {
  return (
    <>
    {/* <!-- ======= Breadcrumbs ======= --> */}
    <div className="breadcrumbs">
      <div className="container">
        <h2>Our Training</h2>
        <p>
          If you need help, please don't hesitate to contact us. We're here to
          help you succeed.
        </p>
      </div>
    </div>
    {/* <!-- End Breadcrumbs --> */}
    <div className="Main-Heading text-center mt-lg-5 mt-3">
      <h1 style={{fontSize:"2.5rem", fontWeight:"bold"}}>Leading Innovation</h1>
    </div>
    {/* importing other components or sections */}
    <Ecommerce />
    <Youtube/>
    <Others/>
    </>
  )
}

export default Products
