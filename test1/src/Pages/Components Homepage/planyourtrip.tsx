import { Container, Row, Col, Button } from "react-bootstrap";
import map from "../assets/map.jpeg";

const MapYourTrip = () => {
  return (
    <Container className="my-5">
      <Row className="flex-column-reverse flex-md-row align-items-center">
        <Col md={6} className="mt-4 mt-md-0">
          <h2 className="fw-bold mb-3">MAP YOUR JOURNEY THROUGH SRI LANKA</h2>
          <p>
            Use our interactive map
            <br />
            to chart your dream adventure through Sri Lanka.
            <br />
            Pick your favorite destinations,
            <br />
            add stops along the way
            <br />
            and visualize your perfect travel route
            <br />
            from golden beaches to misty mountains,
            <br />
            all in one seamless view.
          </p>
          <Button
            variant="outline-dark"
            className="mt-3 px-4 py-2 rounded-pill"
          >
            MAP YOUR TRIP NOW
          </Button>
        </Col>
        <Col md={6}>
          <img
            src={map}
            alt="Sri Lanka Map"
            className="img-fluid rounded shadow rounded "
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MapYourTrip;
