import React from "react";
import Team from "../../Data/Our-Team-data/Team";
import { Teamdata } from "../../Data/Our-Team-data/Team-data";
import "./pagesCSS/Team.css";
function Ourteam() {
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p>
            Franski Enterprise is a Community of Web 3.0 Developers,
            Day-Traders, NFT Artists, Business Consultants, Marketers, Lawyers
            and Accountants. <br />
            At Franski Enterprise, we cultivate our community through social
            entrepreneurship;
          </p>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-title p-4">
            <h2>Our Team</h2>
            <p>Meet Our Team</p>
          </div>
          <div className="row gy-4">
            {Teamdata.map((value, index) => {
              return (
                <Team
                  key={index}
                  imgsrc={value.imgsrc}
                  name={value.name}
                  title={value.title}
                  description={value.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourteam;
