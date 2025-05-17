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
    <Navbar expand="lg" className="navbar text-white fixed-top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          className="d-flex align-items-center"
        >
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center Nav */}
          <Nav className="mx-auto text-center gap-lg-4 gap-2 mt-2 mt-lg-0">
            <NavDropdown title="DESTINATIONS" menuVariant="dark">
              <NavDropdown.Item onClick={() => navigate("/provinces")}>
                Provinces
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/top-places")}>
                Top 10 Places To Go
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/wonders")}>
                Wonders Of Sri Lanka
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PLACES TO STAY" menuVariant="dark">
              <NavDropdown.Item onClick={() => navigate("/hotels")}>
                Hotels
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/rests")}>
                Rests
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PREMIUM" menuVariant="dark">
              <NavDropdown.Item onClick={() => navigate("/advantages")}>
                What Are The Advantages
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/buy-now")}>
                Buy Now
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="TOURS" menuVariant="dark">
              <NavDropdown.Item onClick={() => navigate("/take-tour")}>
                Take A Tour
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/custom-tour")}>
                Make Your Own Tour
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={() => navigate("/blog")}>BLOG</Nav.Link>
          </Nav>

          {/* Right-aligned Login */}
          <Nav className="ms-lg-auto mt-3 mt-lg-0">
            <Nav.Link
              onClick={() => navigate("/loginpage")}
              className="login-btn"
            >
              LOGIN / SIGNUP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
