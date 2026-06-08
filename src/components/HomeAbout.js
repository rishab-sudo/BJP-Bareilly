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
            src={require("../assets/3 (2).png")}
            alt="About Us"
            className="home-about-image"
          />

          {/* <div className="about-floating-box box-one">
            <h4>10+</h4>
            <p>Years Experience</p>
          </div>

          <div className="about-floating-box box-two">
            <h4>500+</h4>
            <p>Happy Clients</p>
          </div> */}
        </div>

        {/* Right Content */}
        <div className="home-about-content">

          <span className="about-tag">हमारे बारे में</span>

          <h2 className="about-heading">
            समाज और सेवा प्रथम
            <br />
            जनसेवा का सशक्त संकल्प
          </h2>

          <p className="about-text">
          हम जनसेवा, सामाजिक उत्थान एवं विकासोन्मुख सोच के साथ बरेली कैंट क्षेत्र के विकास और जनकल्याण हेतु निरंतर कार्यरत हैं। जनता के साथ मजबूत जुड़ाव, पारदर्शी नेतृत्व एवं सेवा भावना के माध्यम से शिक्षा, स्वास्थ्य, आधारभूत सुविधाओं, स्वच्छता, सामाजिक सहभागिता एवं नागरिक हितों को सशक्त बनाने के लिए निरंतर प्रयास जारी हैं। हमारा उद्देश्य समाज के प्रत्येक वर्ग तक विकास, सुरक्षा एवं बेहतर सुविधाएं पहुंचाना है। 
          </p>

          <p className="about-text">
जनसमस्याओं के समाधान, युवाओं को बेहतर अवसर उपलब्ध कराने एवं सामाजिक समरसता को बढ़ावा देने के लिए निरंतर समर्पित प्रयास किए जा रहे हैं। सेवा, समर्पण एवं विकास की भावना के साथ बरेली को प्रगतिशील, सशक्त एवं भविष्य के लिए बेहतर बनाने की दिशा में निरंतर कार्य जारी है।

          </p>

          <div className="about-btn">
           <HoverButton
  text="Contact Us"
  onClick={() => {
    document.getElementById("connect")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;