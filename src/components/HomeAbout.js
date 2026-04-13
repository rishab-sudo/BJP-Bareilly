import React from "react";
import HoverButton from "../components/HoverButton";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="home-about-container">
        {/* Left Image */}
        <div className="home-about-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
            alt="About Us"
            className="home-about-image"
          />

          <div className="about-floating-box box-one">
            <h4>10+</h4>
            <p>Years Experience</p>
          </div>

          <div className="about-floating-box box-two">
            <h4>500+</h4>
            <p>Happy Clients</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="home-about-content">
          <span className="about-tag">About Us</span>

          <h2 className="about-heading">
            Driven by Innovation,
            <br />
            Built for Excellence
          </h2>

          <p className="about-text">
            We are committed to delivering exceptional automotive experiences
            with innovation, style, and trust. Our focus is to provide premium
            solutions that redefine comfort and performance.
          </p>

          <p className="about-text">
            With years of expertise and customer satisfaction at the core, we
            ensure every detail reflects quality, reliability, and modern
            excellence tailored for your lifestyle.
          </p>

          <div className="about-btn">
            <HoverButton
              text="Contact Us"
              onClick={() => alert("Button Clicked")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;