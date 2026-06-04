import React from "react";
import "./HoverButton.css";

const HoverButton = ({ text = "Read More", onClick }) => {
  return (
    <button className="hover-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default HoverButton;