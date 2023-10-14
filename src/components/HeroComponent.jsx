import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/img/hero-image.png";

const HeroComponent = () => {
  const texts = ["Web Programming", "Figma Design"];
  const [textIndex, setTextIndex] = useState(0);
  const text = texts[textIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((index) => (index + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Row data-aos="fade-down">
        <Col lg={8} className="col-animation">
          <span className="text text-light">Proficient in </span>
          <span className="text second-text text-info">{text}</span>
        </Col>
        <Col lg className="z-1">
          <p className="border-start border-info px-3 py-2 mt-3">
            I enjoy creating web experiences with unlimited creativity. Every
            code written brings imagination to life and communicates a message
            through interactive design
          </p>
        </Col>
      </Row>
      <Row className="mt-3 position-relative">
        <Col lg={3}>
          <Button
            href="https://api.whatsapp.com/send?phone=6289602878147&text=Hello%2C%20I%20am%20interested%20in%20getting%20more%20information.%20Could%20we%20talk%20further%3F"
            variant="info"
            size="lg"
            className="fw-medium contact-me"
            data-aos="fade-right"
          >
            CONTACT ME <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </Col>
        <Col>
          <img
            src={heroImage}
            className="position-absolute z-n1 hero-img"
            data-aos="fade-left"
          />
        </Col>
      </Row>
      <Row>
        <p className="text-secondary region" data-aos="fade-right">
          Based in Jakarta, indonesia
        </p>
      </Row>
    </Container>
  );
};

export default HeroComponent;
