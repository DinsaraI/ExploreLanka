import { Container, Row, Col, Button } from "react-bootstrap";
import revs from "../assets/Reviews.jpg";

const Reviews = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="fw-bold mb-3">READ REVIEWS</h2>
          <p>
            Hear from traverlers who've explored
            <br />
            Sri Lanka with us - Real experiences
            <br />
            Trusted tips,unforgettable memories
            <br />
          </p>
          <Button
            variant="outline-dark"
            className="mt-3 px-4 py-2 rounded-pill"
          >
            LEARN MORE
          </Button>
        </Col>
        <Col md={6}>
          <img src={revs} alt="Sri Lanka Map" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
