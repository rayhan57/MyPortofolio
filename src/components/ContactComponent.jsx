import React, { useState } from "react";
import { Alert, Button, Form, Col, Container, Row } from "react-bootstrap";

const ContactComponent = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzqMT8HND2RmysG8IDiec6utCyFnSyMK9QyxQO9vNxFXqo0LUFuiGlxQMRR1RdDAIHV/exec";
  const [showFeedback, setShowFeedback] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        setShowFeedback(true);
        setIsSubmitting(false);
        form.reset();
        console.log("Success", response);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  return (
    <div>
      <Container
        id="get-in-touch"
        className="border rounded-1 bg-dark-subtle p-5"
      >
        <Row data-aos="zoom-in-right">
          <Col>
            <h1 className="text-info">GET IN TOUCH</h1>
            <h1 className="fw-bold fs-title">SCHEDULE MEETING</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Form onSubmit={handleSubmit} data-aos="fade-up">
            {showFeedback && (
              <Alert
                variant="info"
                onClose={() => setShowFeedback(false)}
                dismissible
              >
                <Alert.Heading>Hooray!</Alert.Heading>
                <p>
                  Your message has been successfully submitted. Thank you for
                  getting in touch with us!
                </p>
              </Alert>
            )}

            <Form.Group className="mb-3">
              <Form.Control
                className="border-0 border-bottom border-light rounded-0 bg-transparent"
                type="text"
                size="lg"
                placeholder="FULL NAME"
                name="nama"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="border-0 border-bottom border-light rounded-0 bg-transparent"
                type="email"
                size="lg"
                placeholder="EMAIL"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="border-0 border-bottom border-light rounded-0 bg-transparent"
                type="text"
                size="lg"
                placeholder="MESSAGES"
                name="pesan"
                required
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                className="fw-semibold fs-4 mt-3"
                variant="info"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting" : "Submit"}{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default ContactComponent;
