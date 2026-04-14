import React from "react";
import HomeBanner from "../components/HomeBanner";
import BannerBottom from "../components/BannerBottom";
import HomeAbout from "../components/HomeAbout";
import Mission from "../components/Mission";
import Connect from "../components/Connect";
import Updates from "../components/Updates";
// import Video from "../components/video";
import Service from "../components/Service";

const Home = () => {
  return (
    <div>
      <section id="home">
        <HomeBanner />
      </section>

      <section id="banner-bottom">
        <BannerBottom />
      </section>

      <section id="about">
        <HomeAbout />
      </section>

      <section id="mission">
        <Mission />
      </section>

      <section id="connect">
        <Connect />
      </section>

      <section id="updates">
        <Updates />
      </section>

      {/* <section id="video">
        <Video />
      </section> */}

      <section id="service">
        <Service />
      </section>
    </div>
  );
};

export default Home;