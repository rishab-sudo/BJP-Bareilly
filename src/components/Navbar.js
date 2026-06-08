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
          
          className="d-flex justify-content-between  g-0 align-items-center"
        >
          {/* Logo */}
    <div
  className="navbar-logo"
  onClick={() => scrollToSection("home")}
>
  <img
  className="nav-logo"
    src={require("../assets/Logo BJP.png")}
    alt="BJP Logo"
  />
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
                    <img
  className="nav-logo"
    src={require("../assets/Logo BJP.png")}
    alt="BJP Logo"
  />
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

       
      </div>

      {/* Popup */}
      <FormPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Navbar;