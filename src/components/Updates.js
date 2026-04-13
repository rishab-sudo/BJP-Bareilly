import React from "react";
import "./Updates.css";

const updatesData = [
  {
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    title: "New Electric SUV Launch Experience",
    text: "Discover innovation, style, and comfort in our latest premium launch.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    title: "Premium Showroom Experience",
    text: "Visit our showroom and explore the future of mobility with us.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80",
    title: "Exclusive Offers This Season",
    text: "Grab exciting deals and benefits on selected premium models.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    title: "Advanced Technology Insights",
    text: "Experience the latest connected driving features and smart systems.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
    title: "Road Test Drive Campaign",
    text: "Book a test drive and feel unmatched performance on every road.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    title: "Luxury Redefined for You",
    text: "Where design meets performance to create unforgettable journeys.",
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
            <img src={item.image} alt={item.title} className="updates-image" />

            <div className="updates-overlay">
              <div className="updates-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="/" className="updates-link">
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