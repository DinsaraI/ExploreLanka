import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import BasicExample from "./Common Components/navbar";
import "./LoginPage.css"; // Regular CSS file import
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="background">
      <BasicExample />

      <div className="login-container">
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="login-card shadow">
                <Card.Body>
                  <h2 className="text-white text-center mb-4">LOGIN</h2>

                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-white">GMAIL</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="text-white">PASSWORD</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="text-end mb-3">
                      <a
                        href="#"
                        className="text-white text-decoration-none"
                        style={{ fontSize: "0.9rem" }}
                      >
                        RESET PASSWORD
                      </a>
                    </div>

                    <div className="d-grid gap-2">
                      <Button
                        variant="warning"
                        size="lg"
                        style={{ fontWeight: "bold" }}
                      >
                        LOGIN
                      </Button>
                      <Button
                        variant="warning"
                        size="lg"
                        onClick={() => navigate("/register")}
                        style={{
                          backgroundColor: "orange",
                          fontWeight: "bold",
                        }}
                      >
                        REGISTER
                      </Button>
                    </div>

                    <div className="text-center mt-3">
                      <span className="text-white">OR</span>
                    </div>

                    <Button
                      variant="light"
                      className="mt-3 w-100 d-flex align-items-center justify-content-center"
                    >
                      <img
                        src="https://img.icons8.com/color/16/000000/google-logo.png"
                        alt="Google logo"
                        className="me-2"
                      />
                      GOOGLE LOGIN
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LoginPage;
