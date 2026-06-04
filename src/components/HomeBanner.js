import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeBanner.css";

import bg1 from "../assets/bjp-b11.png";
import bg2 from "../assets/bjp-b2.png";
import bg3 from "../assets/3 (2).png";

const bannerContent = [
  {
    bg: bg1,
    heading: "विकास और विश्वास का संकल्प",
    para: "जनसेवा, विकास और विश्वास के संकल्प के साथ हम बरेली कैंट क्षेत्र की प्रगति, जनकल्याण और नागरिक सुविधाओं को सशक्त बनाने हेतु निरंतर कार्यरत हैं। जनता के बीच रहकर हर वर्ग के उत्थान, सामाजिक विकास और बेहतर भविष्य के निर्माण के लिए समर्पित प्रयास जारी हैं।",
  },
  {
    bg: bg2,
    heading: "जनसेवा • विकास • विश्वास",
    para: "हम बरेली कैंट क्षेत्र के सर्वांगीण विकास, जनकल्याण एवं नागरिक सुविधाओं को सशक्त बनाने हेतु निरंतर कार्यरत हैं। जनता से मजबूत जुड़ाव, पारदर्शी नेतृत्व और सेवा भाव के साथ हर वर्ग के उत्थान तथा क्षेत्र की प्रगति को नई दिशा देने के लिए समर्पित प्रयास जारी हैं।",
  },
  {
    bg: bg3,
    heading: "प्रगति और जनसेवा का संकल्प",
    para: "जनविश्वास और सेवा भावना के साथ हम बरेली कैंट के विकास, सामाजिक उत्थान एवं बेहतर नागरिक सुविधाओं हेतु निरंतर प्रयासरत हैं। हमारा उद्देश्य प्रत्येक नागरिक तक विकास, सुरक्षा एवं बेहतर अवसरों को पहुंचाकर क्षेत्र को नई पहचान और सशक्त भविष्य प्रदान करना है।",
  },
];

const HomeBanner = () => {
  return (
    <section className="homebanner">
      <Carousel
        controls={false}
        indicators={true}
        interval={4000}
        pause={false}
        fade={false}
        className="homebanner-carousel"
      >
        {bannerContent.map((item, index) => (
          <Carousel.Item key={index}>

            {/* Background Image per slide */}
            <div className="homebanner-bg">
              <img src={item.bg} alt="" className="homebanner-bg-img" />
              <div className="homebanner-overlay" />
            </div>

            {/* Content Layout */}
            <div className="homebanner-container">

              {/* Left Side */}
              <div className="homebanner-left">
                {/* नेता की photo या logo यहाँ */}
              </div>

              {/* Right Side — Text vertically centered */}
              <div className="homebanner-right">
                <div className="carousel-content">
                  <h2 className="homebanner-heading">{item.heading}</h2>
                  <p className="homebanner-para">{item.para}</p>
                </div>
              </div>

            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HomeBanner;