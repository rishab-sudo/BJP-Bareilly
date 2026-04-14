import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FormPopup from "./FormPopup";
import "./Navbar.css";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;

      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      {/* STICKY NAVBAR */}
      <div className="navbar">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          {/* Logo */}
          <div className="navbar-logo" onClick={() => scrollToSection("home")}>
            <img src="/logo.png" alt="logo" />
          </div>

          {/* Desktop Links */}
          <div className="navbar-links">
            <span className="links" onClick={() => scrollToSection("home")}>
              Home
            </span>

            <span className="links" onClick={() => scrollToSection("about")}>
              About
            </span>

            <span className="links" onClick={() => scrollToSection("mission")}>
              Mission
            </span>

            <span className="links" onClick={() => scrollToSection("updates")}>
              Updates
            </span>

            <span className="links" onClick={() => setShowPopup(true)}>
              Contact Us
            </span>
          </div>

          {/* Mobile Menu */}
          <div className="navbar-menu" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </div>
        </Container>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <img src="/logo.png" alt="logo" height="40" />
        </div>

        <span className="links" onClick={() => scrollToSection("home")}>
          Home
        </span>

        <span className="links" onClick={() => scrollToSection("about")}>
          About
        </span>

        <span className="links" onClick={() => scrollToSection("mission")}>
          Mission
        </span>

        <span className="links" onClick={() => scrollToSection("updates")}>
          Updates
        </span>

        <span
          className="links"
          onClick={() => {
            setShowPopup(true);
            setMenuOpen(false);
          }}
        >
          Contact Us
        </span>
      </div>

      {/* Popup */}
      <FormPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Navbar;