import React from "react";
import "./Updates.css";

const updatesData = [
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DXUnyquE4l3/embed",
    link: "https://www.instagram.com/reel/DXUnyquE4l3/",
    title: "New Electric SUV Launch Experience",
    text: "Discover innovation, style, and comfort in our latest premium launch.",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DW6W5p9gZ3V/embed",
    link: "https://www.instagram.com/reel/DW6W5p9gZ3V/",
    title: "Premium Showroom Experience",
    text: "Visit our showroom and explore the future of mobility.",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DWg1KV8E2KW/embed",
    link: "https://www.instagram.com/reel/DWg1KV8E2KW/",
    title: "Exclusive Offers This Season",
    text: "Grab exciting deals on selected premium models.",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DWqNyoNj1Ev/embed",
    link: "https://www.instagram.com/reel/DWqNyoNj1Ev/",
    title: "Advanced Technology Insights",
    text: "Experience the latest connected driving features.",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DWY07ZcDUIH/embed",
    link: "https://www.instagram.com/reel/DWY07ZcDUIH/",
    title: "Luxury Redefined for You",
    text: "Where design meets performance.",
  },
];

const Updates = () => {
  return (
    <section className="updates">
      <div className="updates-heading">
        <span className="updates-tag">Latest Updates</span>

        <h2 className="updates-title">
          Stay Updated With
          <br />
          Our Latest News
        </h2>

        <p className="updates-para">
          Explore our latest launches, exciting announcements, exclusive
          offers, and everything happening in our world. Stay informed and
          never miss an update.
        </p>
      </div>

      <div className="updates-container">
        {updatesData.map((item, index) => (
          <div className="updates-card" key={index}>
            
            {/* VIDEO OR IMAGE */}
            {item.type === "video" ? (
              <iframe
                src={item.embed}
                className="updates-video"
                allow="encrypted-media"
                allowFullScreen
                title="Instagram Reel"
              ></iframe>
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="updates-image"
              />
            )}

            {/* OVERLAY */}
            <div className="updates-overlay">
              <div className="updates-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="updates-link"
                >
                  View More →
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates;