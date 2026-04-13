import React from "react";
import "./BannerBottom.css";
import { FaCarSide, FaShieldAlt, FaBolt } from "react-icons/fa";

const BannerBottom = () => {
  return (
    <section className="banner-bottom">
      <div className="banner-bottom-overlay">
        <div className="container">
          <div className="banner-bottom-box">
            <div className="banner-bottom-item">
              <FaCarSide className="banner-bottom-icon" />
              <h4 className="banner-bottom-heading">Premium Performance</h4>
              <p className="banner-bottom-desc">
                Experience unmatched comfort, speed, and driving precision.
              </p>
            </div>

            <div className="banner-bottom-divider"></div>

            <div className="banner-bottom-item">
              <FaShieldAlt className="banner-bottom-icon" />
              <h4 className="banner-bottom-heading">Advanced Safety</h4>
              <p className="banner-bottom-desc">
                Drive confidently with intelligent protection features.
              </p>
            </div>

            <div className="banner-bottom-divider"></div>

            <div className="banner-bottom-item">
              <FaBolt className="banner-bottom-icon" />
              <h4 className="banner-bottom-heading">Smart Technology</h4>
              <p className="banner-bottom-desc">
                Innovative tech designed for a seamless driving experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBottom;