import { Container, Row, Col, Button } from "react-bootstrap";
import revs from "../assets/Reviews.jpg";

const Reviews = () => {
  return (
    <Container fluid="md" className="py-5">
      <Row className="flex-column-reverse flex-md-row align-items-center">
        <Col xs={12} md={6} className="mt-4 mt-md-0">
          <h2 className="fw-bold mb-3">READ REVIEWS</h2>
          <p>
            Hear from travelers who've explored
            <br />
            Sri Lanka with us – Real experiences,
            <br />
            trusted tips, unforgettable memories.
          </p>
          <Button
            variant="outline-dark"
            className="mt-3 px-4 py-2 rounded-pill"
          >
            LEARN MORE
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <img src={revs} alt="Reviews" className="img-fluid rounded shadow" />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
