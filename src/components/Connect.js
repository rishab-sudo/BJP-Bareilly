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
            <span className="connect-tag">विकास की यात्रा से जुड़ें</span>

            <h2 className="connect-heading">
           
            विकास की यात्रा से जुड़ें
            </h2>

            <p className="connect-text">
          विकास, जनकल्याण कार्यों, सामाजिक कार्यक्रमों एवं क्षेत्रीय गतिविधियों की महत्वपूर्ण 
          जानकारियों से जुड़े रहें। जनसेवा, प्रगति एवं जनता के साथ मजबूत जुड़ाव की इस प्रेरणादायी यात्रा का हिस्सा बनें तथा बरेली के बेहतर, सशक्त एवं विकसित भविष्य की दिशा में सहभागी बनें।
 </p>

            <div className="connect-social">
              <a
                href="https://www.facebook.com/sanjievagarrwal"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-icon"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/sanjeevagarwalbjp/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-icon"
              >
                <FaInstagram />
              </a>

              {/* <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-icon"
              >
                <RiThreadsFill />
              </a> */}

              <a
                href="https://www.youtube.com/@SanjievAgarrwalBJP"
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
              src= {require("../assets/office.jpg")}
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