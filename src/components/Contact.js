import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <main className="flex-shrink-0 text-center">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div>
          <h1 className="mt-5">Contact</h1>
          <p>Contact me via the following social media:</p>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button variant="outline-primary" href="https://www.instagram.com/hsn_arasy/" target="_blank">
                Instagram
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="outline-success" href="https://wa.me/6285794159014" target="_blank">
                WhatsApp
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="outline-info" href="https://www.linkedin.com/in/hasna-nabhan-7191a6293/" target="_blank">
                Linkedln
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
