import React from "react";
import Event from "../../Data/Eventsdata/Event";
import Eventdata from "../../Data/Eventsdata/Eventdata";
import './pagesCSS/Event.css'
function Events() {
  return (
    <>
     {/* <!-- ======= Breadcrumbs ======= --> */}
     <div className="breadcrumbs">
        <div className="container">
          <h2>Events</h2>
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
      {/* <!-- ======= Events Section ======= --> */}
      <section id="events" className="events">
        <div className="container">
          <div className="row">
            {Eventdata.map((item, index) => {
              return (
                <>
                  <Event
                  key = {index}
                  imgsrc = {item.imgsrc}
                  title = {item.title}
                  date = {item.date}
                  description = {item.description} 
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
