import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "./RegisterPage.css";
import background from "../assets/pettah.jpg";
import BasicExample from "./Common Components/navbar";

function RegisterPage() {
  return (
    <div
      className="register-page"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <BasicExample />
      <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <Card className="register-card p-4">
          <h2 className="text-center mb-4 text-white">CREATE AN ACCOUNT</h2>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="text-white">USERNAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="Required"
                className="custom-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="text-white">GMAIL</Form.Label>
              <Form.Control
                type="email"
                placeholder="Required"
                className="custom-input"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label className="text-white">PASSWORD</Form.Label>
              <Form.Control
                type="password"
                placeholder="MIN 8 Characters"
                className="custom-input"
              />
            </Form.Group>

            <Button variant="warning" className="w-100 fw-bold mb-3">
              REGISTER
            </Button>

            <div className="text-center text-white fw-bold mb-2">OR</div>

            <Button variant="light" className="w-100 google-btn">
              <span className="google-icon">G</span> GOOGLE SIGNUP
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default RegisterPage;
