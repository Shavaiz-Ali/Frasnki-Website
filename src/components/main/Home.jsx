import React from "react";
import Hero from './Homepages/Hero';
// import About from './Homepages/About';
// import Whychooseus from './Homepages/Whychoseus';
import Courses from './Homepages/Courses';
import Count from "./Homepages/Count";
import Products from "./Homepages/Products";
function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Count />
      {/* <Whychooseus /> */}
      <Courses />
      <Products />
    </>
  );
}

export default Home;
