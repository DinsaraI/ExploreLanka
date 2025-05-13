import { Container, Row, Col } from "react-bootstrap";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa6";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          {/* Logo Section */}
          <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
            <h5 className="fw-bold">EXPLORE LANKA</h5>
            <img
              src={logo}
              alt="Explore Lanka Logo"
              className="mt-2"
              style={{ maxWidth: "120px" }}
            />
          </Col>

          {/* Navigation Section */}
          <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
            <h5 className="fw-bold">EXPLORE LANKA</h5>
            <ul className="list-unstyled mt-2">
              <li>BLOG</li>
              <li>PREMIUM</li>
              <li>TOURS</li>
              <li>PLACES TO STAY</li>
              <li>DESTINATIONS</li>
              <li>LOGIN/SIGNUP</li>
              <li>FLIGHTS</li>
            </ul>
          </Col>

          {/* Contact & Socials Section */}
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold">CONTACT US</h5>
            <p className="mb-1 mt-2">EXPLORELANKA@GMAIL.COM</p>
            <p className="mb-3">+94711234567</p>

            <h6 className="fw-bold">FOLLOW US</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4 mt-2">
              <FaInstagram />
              <FaXTwitter />
              <FaFacebookF />
              <FaWhatsapp />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
