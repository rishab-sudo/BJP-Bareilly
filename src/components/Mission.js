import React, { useRef } from "react";
import {
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "./Mission.css";

const missionData = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text: "To deliver innovative and customer-focused automotive solutions.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    text: "We embrace advanced technology to redefine modern mobility.",
  },
  {
    icon: <FaHandshake />,
    title: "Trust",
    text: "Building long-lasting relationships through transparency and care.",
  },
  {
    icon: <FaRocket />,
    title: "Growth",
    text: "Driving continuous progress with excellence and commitment.",
  },
  {
    icon: <FaRocket />,
    title: "Future Vision",
    text: "Empowering journeys with sustainable and premium experiences.",
  },
];

const Mission = () => {
  const swiperRef = useRef(null);

  return (
    <section className="mission">
      <div className="mission-heading">
        <span className="mission-tag">Our Mission</span>

        <h2 className="mission-title">
          Driving Excellence,
          <br />
          Inspiring Every Journey
        </h2>

        <p className="mission-para">
          We are committed to creating premium experiences with innovation,
          trust, and excellence. Our goal is to redefine mobility while
          ensuring comfort, safety, and satisfaction for every customer.
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
                <div className="mission-icon">{item.icon}</div>
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