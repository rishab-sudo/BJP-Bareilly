import React, { useState } from "react";
import "./Service.css";
import { Container } from "react-bootstrap";

const galleryImages = [
  require("../assets/gallery/bjp-g1.jpg"),
 require("../assets/gallery/bjp-g2.jpg"),
 require("../assets/gallery/bjp=g3.jpg"),
 require("../assets/gallery/bjp-g4.jpg"),
 require("../assets/gallery/bjp-g5.jpg"),
 require("../assets/gallery/bjp-g6.jpg"),
 require("../assets/gallery/bjp-g7.jpg"),
 require("../assets/gallery/bjp-g8.jpg"),
   require("../assets/gallery/bjp-g9.jpg"),
 require("../assets/gallery/bjp-g10.jpg"),

];

const Service = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="service">
      <div className="service-fluid">
        <Container className="service-container">
          
          {/* Heading */}
          <div className="service-heading">
            <span className="service-tag">हमारी सेवाएं</span>

            <h2 className="service-title">
           जनसेवा और समर्पित नेतृत्व

         
            </h2>

            <p className="service-para">
            हम निरंतर जनकल्याण, सामाजिक विकास एवं बेहतर नागरिक सुविधाओं हेतु कार्यरत हैं। मजबूत जनसंपर्क एवं जिम्मेदार नेतृत्व के साथ प्रत्येक प्रयास समाज को सशक्त, विकसित एवं बेहतर भविष्य की ओर अग्रसर करने हेतु समर्पित है।

            </p>

            <h3 className="service-subtitle">
            जनसेवा • विकास • समर्पित नेतृत्व

            </h3>
          </div>

          {/* Gallery */}
          <div className="service-gallery">
            {galleryImages.map((img, index) => (
              <div
                className="service-card"
                key={index}
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} alt={`Service ${index + 1}`} />
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Popup Modal */}
      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImg} alt="Preview" className="modal-img" />
        </div>
      )}
    </section>
  );
};

export default Service;