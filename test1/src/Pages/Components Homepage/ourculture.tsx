import { Container, Row, Col, Button } from "react-bootstrap";
import Culture from "../assets/OurCulture.jpg";

const OurCulture = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Image on the left */}
        <Col md={6}>
          <img
            src={Culture}
            alt="Sri Lanka Map"
            className="img-fluid rounded"
          />
        </Col>

        {/* Text on the right */}
        <Col md={6}>
          <h2 className="fw-bold mb-3">OUR CULTURE</h2>
          <p>
            Sri Lanka's culture is a rich mix
            <br />
            of ancient tradition, spiritual heritage,
            <br />
            and vibrant festivals
            <br />
            shaped by Buddhism and History
            <br />
            and a love for storytelling and food <br />
          </p>
          <Button
            variant="outline-dark"
            className="mt-3 px-4 py-2 rounded-pill"
          >
            LEARN MORE
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OurCulture;
