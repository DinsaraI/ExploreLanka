import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function BasicExample() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="text-white fixed-top navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand
          onClick={() => navigate("/")}
          className="text-white"
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-between w-100"
        >
          {/* Centered Nav Items */}
          <Nav className="mx-auto gap-3">
            <NavDropdown title="DESTINATIONS" className="text-white">
              <NavDropdown.Item
                onClick={() => navigate("/provinces")}
                className="text-white"
              >
                Provinces
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/top-places")}
                className="text-white"
              >
                Top 10 Places To Go
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/wonders")}
                className="text-white"
              >
                Wonders Of Sri Lanka
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PLACES TO STAY" className="text-white">
              <NavDropdown.Item
                onClick={() => navigate("/hotels")}
                className="text-white"
              >
                Hotels
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/rests")}
                className="text-white"
              >
                Rests
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PREMIUM" className="text-white">
              <NavDropdown.Item
                onClick={() => navigate("/advantages")}
                className="text-white"
              >
                What Are The Advantages
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/buy-now")}
                className="text-white"
              >
                Buy Now
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="TOURS" className="text-white">
              <NavDropdown.Item
                onClick={() => navigate("/take-tour")}
                className="text-white"
              >
                Take A Tour
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/custom-tour")}
                className="text-white"
              >
                Make Your Own Tour
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={() => navigate("/blog")} className="text-white">
              BLOG
            </Nav.Link>
          </Nav>

          {/* Right-aligned Login */}
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => navigate("/loginpage")}
              className="text-white login-btn"
            >
              LOGIN/SIGNUP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
