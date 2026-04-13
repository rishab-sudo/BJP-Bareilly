import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <section className="homebanner">
      {/* Background Image */}
      <div className="homebanner-bg">
        <img
          src="/images/banner-bg.jpg" // replace with your background image
          alt="Background"
          className="homebanner-bg-img"
        />
      </div>

      <div className="homebanner-container">
        {/* Left Side Image + Bottom Left Text */}
        <div className="homebanner-left">
          <p className="homebanner-tagline">Drive the Future with Confidence</p>

          <img
            src="/images/car-left.png" // replace with your main image
            alt="Car"
            className="homebanner-main-img"
          />
        </div>

        {/* Right Side Content */}
        <div className="homebanner-right">
          <h2 className="homebanner-heading">
            Experience Luxury, Innovation & Performance
          </h2>
          <p className="homebanner-para">
            Discover the next generation of mobility with advanced technology,
            stunning design, and unmatched comfort. Our vehicles are built to
            redefine every journey with safety, elegance, and sustainability at
            the core.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;