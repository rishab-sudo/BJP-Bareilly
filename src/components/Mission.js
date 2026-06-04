import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "./Mission.css";

const missionData = [
  {
    image: require("../assets/icons/Trust  (1).png"),
    title: "विश्वास",
    text:
      "पारदर्शी नेतृत्व, जिम्मेदार जनसेवा एवं समर्पित प्रयासों के माध्यम से जनता के विश्वास एवं समाज के विकास को निरंतर सशक्त बनाने हेतु कार्यरत हैं।",
  },

  {
  image: require("../assets/icons/Innovation.png"),
    title: "विकास",
    text:
      "समावेशी विकास, जनहित कार्यों एवं समर्पित नेतृत्व के माध्यम से बेहतर अवसरों एवं समाज की निरंतर प्रगति सुनिश्चित करने हेतु निरंतर प्रयासरत हैं।",
  },

  {
   image: require("../assets/icons/Growth  .png"),
    title: "भविष्य की सोच",
    text:
      "सतत विकास, मजबूत नेतृत्व एवं जनकल्याण आधारित कार्यों के माध्यम से समाज के उज्ज्वल एवं सशक्त भविष्य के निर्माण हेतु निरंतर कार्यरत हैं।",
  },

  {
    image: require("../assets/icons/Mission .png"),
    title: "हमारा उद्देश्य",
    text:
      "विकास, जनकल्याण एवं बेहतर नागरिक सुविधाओं को सशक्त बनाने हेतु पारदर्शी नेतृत्व के साथ निरंतर समर्पित प्रयास जारी हैं।",
  },

  {
image: require("../assets/icons/Future (1).png"),
    title: "नवाचार",
    text:
      "नवाचार एवं आधुनिक सोच के माध्यम से विकास को नई दिशा देते हुए बेहतर जनसेवाएं एवं नए अवसर उपलब्ध कराने हेतु निरंतर प्रयासरत हैं।",
  },
];

const Mission = () => {
  const swiperRef = useRef(null);

  return (
    <section className="mission">

      <div className="mission-heading">

        <span className="mission-tag">
          समाज कल्याण हेतु प्रतिबद्ध
        </span>

        <h2 className="mission-title">
          प्रगति के साथ जनसेवा
        </h2>

        <p className="mission-para">
        जनकल्याण, विकास एवं समावेशी प्रगति के संकल्प के साथ हम निरंतर क्षेत्र के विकास, नागरिक सुविधाओं एवं समाज के 
        प्रत्येक वर्ग के उत्थान हेतु कार्यरत हैं। पारदर्शी नेतृत्व एवं जनता से मजबूत जुड़ाव के माध्यम से हमारा उद्देश्य बरेली को सशक्त,
         विकसित एवं भविष्य के लिए बेहतर बनाना है।

        </p>

      </div>

      <div className="mission-slider-wrap">

        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={missionData.length > 4}
          centeredSlides={false}
          centeredSlidesBounds={true}
          watchOverflow={true}
          speed={1000}
          spaceBetween={25}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: missionData.length <= 1,
            },

            768: {
              slidesPerView: Math.min(2, missionData.length),
              centeredSlides: missionData.length <= 2,
            },

            992: {
              slidesPerView: Math.min(3, missionData.length),
              centeredSlides: missionData.length <= 3,
            },

            1200: {
              slidesPerView: Math.min(4, missionData.length),
              centeredSlides: missionData.length <= 4,
            },
          }}
        >

          {missionData.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="mission-card">

                <div className="mission-icon">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="mission-icon-img"
                  />

                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* Custom Arrows */}
        <div className="mission-arrows">

          <button
            className="mission-arrow-btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FiArrowLeft />
          </button>

          <button
            className="mission-arrow-btn"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FiArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Mission;