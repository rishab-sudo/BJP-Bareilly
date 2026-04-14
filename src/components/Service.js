import React from "react";
import "./Service.css";

const galleryImages = [
  require("../assets/gallery/bjp-g1.jpg"),
 require("../assets/gallery/bjp-g2.jpg"),
 require("../assets/gallery/bjp=g3.jpg"),
 require("../assets/gallery/bjp-g4.jpg"),
 require("../assets/gallery/bjp-g5.jpg"),
 require("../assets/gallery/bjp-g6.jpg"),
 require("../assets/gallery/bjp-g7.jpg"),
 require("../assets/gallery/bjp-g8.jpg"),
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",

];

const Service = () => {
  return (
    <section className="service">
      <div className="service-fluid">
        <div className="service-container">
          {/* Heading */}
          <div className="service-heading">
            <span className="service-tag">Our Services</span>

            <h2 className="service-title">
              Premium Care,
              <br />
              Exceptional Service Experience
            </h2>

            <p className="service-para">
              We provide world-class automotive services designed to deliver
              comfort, trust, and excellence at every step. Explore our premium
              support and service experience crafted for your journey.
            </p>

            <h3 className="service-subtitle">
              Trusted Service • Expert Support • Premium Care
            </h3>
          </div>

          {/* Fancy Gallery */}
          <div className="service-gallery">
            {galleryImages.map((img, index) => (
              <div className="service-card" key={index}>
                <img src={img} alt={`Service ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;