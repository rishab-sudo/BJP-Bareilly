import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";
import "./Connect.css";

const Connect = () => {
  return (
    <section className="connect">
      <div className="connect-overlay">
        <div className="connect-box">
          {/* Left Content */}
          <div className="connect-content">
            <span className="connect-tag">Connect With Us</span>

            <h2 className="connect-heading">
              Stay Connected,
              <br />
              Follow Our Journey
            </h2>

            <p className="connect-text">
              Join our growing community and stay updated with the latest
              launches, exciting offers, behind-the-scenes moments, and
              everything happening with us. Follow us on social media and be
              part of the experience.
            </p>

            <div className="connect-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-icon"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-icon"
              >
                <FaInstagram />
              </a>

              <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-icon"
              >
                <RiThreadsFill />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-icon"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="connect-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
              alt="Connect"
              className="connect-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;