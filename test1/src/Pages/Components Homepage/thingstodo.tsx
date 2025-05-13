import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Hanthana from "../assets/ttd4.jpg";
import water from "../assets/ttd3.jpg";
import adams from "../assets/ttd2.jpg";
import wilp from "../assets/ttd1.jpg";

const activities = [
  {
    title: "HANTHANA HIKE",
    description:
      "Hike through Hanthana’s lush hills for stunning views, fresh air, and a peaceful escape just outside Kandy.",
    image: Hanthana,
  },
  {
    title: "WATER RAFTING",
    description:
      "Experience the thrill of white-water rafting through Sri Lanka’s wild rivers and scenic jungle landscapes.",
    image: water,
  },
  {
    title: "ADAMS PEAK CLIMB",
    description:
      "Sacred sunrise climb with stunning views and spiritual significance.",
    image: adams,
  },
  {
    title: "EXPLORE WILPATTU",
    description:
      "Discover leopards, bears, and wild beauty on a Wilpattu safari.",
    image: wilp,
  },
];

const ThingsToDo = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">THINGS TO DO</h2>
      <Row className="g-4">
        {activities.map((activity, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={3}>
            <Card className="h-100 shadow-sm rounded-4 border-0">
              <Card.Img
                variant="top"
                src={activity.image}
                style={{
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              />
              <Card.Body className="d-flex flex-column justify-content-between text-center border-top rounded-bottom rounded-4 border">
                <div>
                  <Card.Title className="fw-bold">{activity.title}</Card.Title>
                  <Card.Text>{activity.description}</Card.Text>
                </div>
                <Button variant="outline-dark" className="rounded-pill mt-3">
                  LEARN MORE
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ThingsToDo;
