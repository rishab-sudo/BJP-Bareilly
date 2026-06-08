import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Container>
          <Row className="gy-4">
            {/* Column 1 */}
            <Col className="footer-col" lg={4} md={6}>
              <div className="footer-inner">
           <img
  className="nav-logo"
    src={require("../assets/Logo BJP.png")}
    alt="BJP Logo"
  />

                <p className="footer-tagline">सादगी, सेवा भावना और जनता के प्रति समर्पण के साथ लोगों के बीच निरंतर सक्रिय एक प्रेरणादायी एवं दूरदर्शी व्यक्तित्व, जो जनकल्याण, सामाजिक विकास और क्षेत्र की प्रगति हेतु निरंतर कार्यरत है।</p>

                <p className="footer-desc">
                  {/* At Eternity, we bring you the next generation of electric
                  vehicles with cutting-edge technology, superior performance,
                  and a commitment to sustainability. Experience innovation,
                  reliability, and a smarter way to drive. */}
                </p>

                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/sanjievagarrwal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.instagram.com/sanjeevagarwalbjp/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </Col>

            {/* Column 2 */}
            <Col className="footer-col footer-col-right" lg={4} md={6}>
              <div className="footer-inner">
                <h5 className="footer-heading">Quick Links</h5>

                <ul className="footer-links">
                  <li><a href="/home">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/mission">Mission</a></li>
                  <li><a href="updates">Updates</a></li>
                
                </ul>
              </div>
            </Col>

            {/* Column 3 */}
            <Col className="footer-col footer-col-right" lg={4} md={12}>
              <div className="footer-inner">
                <h5 className="footer-heading">Address</h5>

                <p className="footer-address">
                 Rampur-Garden, Bareilly, 243001,   <br />
                  UttarPradesh,    India, 
                  <br />
            
              
      <br />
                 
                </p>

               
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;