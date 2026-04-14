import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import FormPopup from "./FormPopup";
import "./Navbar.css";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <div className={`navbar ${showNav ? "show" : ""}`}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          
          <div className="navbar-logo">
            <img src="" alt="logo" />
          </div>

          <div className="navbar-links">
            <span className="links" onClick={() => scrollToSection("home")}>Home</span>
            <span className="links" onClick={() => scrollToSection("about")}>About</span>
            <span className="links" onClick={() => scrollToSection("mission")}>Mission</span>
            <span className="links" onClick={() => scrollToSection("updates")}>Updates</span>

            <button
              className="enquiry-btn"
              onClick={() => setShowPopup(true)}
            >
              Contact Us
            </button>

            <FormPopup
              isOpen={showPopup}
              onClose={() => setShowPopup(false)}
            />
          </div>

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

        <span className="links" onClick={() => scrollToSection("home")}>Home</span>
        <span className="links" onClick={() => scrollToSection("about")}>About</span>
        <span className="links" onClick={() => scrollToSection("mission")}>Mission</span>
        <span className="links" onClick={() => scrollToSection("updates")}>Updates</span>
        <span className="links" onClick={() => scrollToSection("contact")}>Contact</span>
      </div>
    </>
  );
};

export default Navbar;