import React, { useRef, useState } from "react";
import "./Video.css";
import videoFile from "../assets/video/BJP Website Video.mp4";

const Video = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="video">
      <div className="video-container">

        <video
          ref={videoRef}
          className="video-player"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoFile} type="video/mp4" />
        </video>

        {/* 🔊 Sound Toggle Button */}
        <button className="mute-btn" onClick={toggleSound}>
          {isMuted ? "Unmute 🔊" : "Mute 🔇"}
        </button>

      </div>
    </section>
  );
};

export default Video;