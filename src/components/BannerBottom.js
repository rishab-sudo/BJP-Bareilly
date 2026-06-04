import React from "react";
import "./BannerBottom.css";
// import { FaCarSide, FaShieldAlt, FaBolt } from "react-icons/fa";

const BannerBottom = () => {
  return (
    <section className="banner-bottom">
      <div className="banner-bottom-overlay">
        <div className="container">
          <div className="banner-bottom-box">
            <div className="banner-bottom-item">
              <img alt="BJP-Img" src={require("../assets/icons/Growth  .png")} className="banner-bottom-icon" />
              <h4 className="banner-bottom-heading">जनसेवा सर्वोपरि हमारा लक्ष्य</h4>
              <p className="banner-bottom-desc">
         जनसेवा, विकास, सामाजिक उत्थान और नागरिक सुविधाओं को सशक्त बनाने हेतु निरंतर समर्पित, जिम्मेदार एवं जनता के विश्वास पर आधारित नेतृत्व। 

              </p>
            </div>

            <div className="banner-bottom-divider"></div>

            <div className="banner-bottom-item">
              <img alt="BJP-Img" src={require("../assets/icons/Public Welfare .png")} className="banner-bottom-icon" />
              <h4 className="banner-bottom-heading">विकास की नई पहचान</h4>
              <p className="banner-bottom-desc">
सेवा, समर्पण और विकास कार्यों के माध्यम से क्षेत्र की प्रगति, जनकल्याण और बेहतर नागरिक सुविधाओं को नई दिशा देने हेतु निरंतर प्रतिबद्ध प्रयास। 

              </p>
            </div>

            <div className="banner-bottom-divider"></div>

            <div className="banner-bottom-item">
              <img alt="BJP-Img" src={require("../assets/icons/Trust .png")} className="banner-bottom-icon" />
              <h4 className="banner-bottom-heading">हर जरूरतमंद के साथ
</h4>
              <p className="banner-bottom-desc">
जनकल्याण, सामाजिक उत्थान और प्रत्येक नागरिक की सहायता हेतु समर्पित नेतृत्व निरंतर विकास, जनसेवा और समाज के हर वर्ग के हित में कार्यरत। 

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBottom;