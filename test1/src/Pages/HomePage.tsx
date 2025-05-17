import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Common Components/navbar"; // Make sure the path is correct
import FeaturedDestinations from "./Components Homepage/fetured";
import OurCulture from "./Components Homepage/ourculture";
import MapYourTrip from "./Components Homepage/planyourtrip";
import Reviews from "./Components Homepage/reviews";
import ThingsToDo from "./Components Homepage/thingstodo";
import Footer from "./Common Components/footer";
import "./HomePage.css";

function Home() {
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      {/* Import your custom transparent navbar */}
      <Navbar />

      {/* Hero Section Carousel */}
      <Carousel controls={false} indicators={false} fade interval={7000}>
        <Carousel.Item>
          <div
            className="hero-background"
            style={{ position: "relative", overflow: "hidden" }}
          >
            {/* Overlay Content */}
            <div
              className="hero-text text-white position-absolute"
              style={{
                top: "50%",
                left: "10%", // Move it to the left horizontally
                transform: "translateY(-50%)", // Vertically center the text
                textAlign: "left", // Align the text to the left
                zIndex: 1,
              }}
            >
              <h1>Discover Sri Lanka Like Never Before</h1>
              <h5>
                Explore top destinations, hidden gems, and unforgettable
                experiences
              </h5>
              <Form className="d-flex mt-3">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 w-50 rounded-pill"
                />
                <Button variant="light" className="rounded-pill px-4">
                  Search
                </Button>
              </Form>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <FeaturedDestinations />
      <MapYourTrip />
      <OurCulture />
      <Reviews />
      <ThingsToDo />
      <Footer />
    </div>
  );
}

export default Home;
