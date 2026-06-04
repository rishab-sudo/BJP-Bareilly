import React from "react";
import "./Updates.css";

const updatesData = [
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DXUnyquE4l3/embed",
    link: "https://www.instagram.com/reel/DXUnyquE4l3/",
    text:
      "बरेली शहर में आयोजित विभिन्न सामाजिक, सांस्कृतिक एवं मांगलिक कार्यक्रमों में सहभागिता की विशेष झलकियाँ।",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DW6W5p9gZ3V/embed",
    link: "https://www.instagram.com/reel/DW6W5p9gZ3V/",
    text:
      "जन्मदिन के इस विशेष अवसर पर कैंप कार्यालय में सादगी और आत्मीयता के साथ केक काटकर इस दिन को मनाया।",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DWg1KV8E2KW/embed",
    link: "https://www.instagram.com/reel/DWg1KV8E2KW/",
    text:
      "आज जिलाधिकारी सभागार में प्रभावी नेतृत्व में प्रदेश की आंगनवाड़ी व्यवस्था को सशक्त, आधुनिक एवं तकनीक-सक्षम बनाने की दिशा में आयोजित कार्यक्रम में सहभागिता की।",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DWqNyoNj1Ev/embed",
    link: "https://www.instagram.com/reel/DWqNyoNj1Ev/",
    text:
      "बसंत सिनेमा के सामने आयोजित देवी जागरण एवं महा आरती कार्यक्रम में सम्मिलित होकर पूजा-अर्चना की तथा माता रानी का आशीर्वाद प्राप्त किया। ",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DWY07ZcDUIH/embed",
    link: "https://www.instagram.com/reel/DWY07ZcDUIH/",
    text:
      "समाज सेवा, जनसंपर्क और सामाजिक एकता को समर्पित आयोजनों की विशेष झलकियाँ। ",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DUyNC_oEzov/embed",
    link: "https://www.instagram.com/reel/DUyNC_oEzov/",
    text:
      "जनता के बीच सहभागिता एवं सामाजिक समरसता को समर्पित विविध कार्यक्रमों की प्रेरणादायी झलकियाँ। ",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DUANdCLFMjF/embed",
    link: "https://www.instagram.com/reel/DUANdCLFMjF/",
    text:
      " गणतंत्र दिवस के पावन अवसर पर बरेली शहर में हुए विविध आयोजनों में सहभागिता की कुछ खास झलकियाँ आपके समक्ष प्रस्तुत हैं।",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DT5fHwPk_2R/embed",
    link: "https://www.instagram.com/reel/DT5fHwPk_2R/",
    text:
      " बरेली स्थित श्री जगन्नाथ स्वामी मंदिर परिसर में संचालित धर्मार्थ औषधालय का शुभारंभ फीता काटकर किया गया।",
  },
  {
    type: "video",
    embed: "https://www.instagram.com/reel/DT_AYEmE08X/embed",
    link: "https://www.instagram.com/reel/DT_AYEmE08X/",
    text:
      "विकास भवन से आयोजित गणतंत्र दिवस रैली का शुभारंभ मुख्य अतिथि के रूप में किया। ",
  },
];

const Updates = () => {
  return (
    <section className="updates">
      <div className="updates-heading">
        <span className="updates-tag">नवीनतम अपडेट्स</span>
        <h2  className="mission-title">विकास और जनविश्वास की अपडेट्स</h2>
        <p>विकास कार्यों, जनकल्याण योजनाओं, सामाजिक कार्यक्रमों एवं महत्वपूर्ण गतिविधियों की ताज़ा जानकारी प्राप्त करें। क्षेत्र की प्रगति, जनता से जुड़ाव एवं बरेली के बेहतर भविष्य हेतु निरंतर किए जा रहे प्रयासों और जनहित कार्यों से हमेशा जुड़े रहें।
</p>
      </div>

      <div className="updates-container">
        {updatesData.map((item, index) => (
          <div className="updates-card" key={index}>

            {/* VIDEO */}
            <iframe
              src={item.embed}
              className="updates-video"
              allow="encrypted-media"
              allowFullScreen
              title={`Instagram Reel ${index}`}
            ></iframe>

            {/* OVERLAY */}
            <div className="updates-overlay">
              <div className="updates-content">
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