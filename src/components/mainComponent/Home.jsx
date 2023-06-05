import React from "react";
import Hero from './Homepages/Hero';
// import About from './Homepages/About';
// import Whychooseus from './Homepages/Whychoseus';
import Services from './Homepages/Services';
import Count from "./Homepages/Count";
import Products from "./Homepages/Products";
function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Count />
      {/* <Whychooseus /> */}
      <Services />
      <Products />
    </>
  );
}

export default Home;
