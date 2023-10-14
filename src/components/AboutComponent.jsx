import React, { useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import aboutVideo from "../assets/video/showcase-video.mp4";

const AboutComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <Container
        id="about"
        className="bg-secondary-subtle rounded-1 border p-5"
      >
        <Row>
          <Col lg={7} data-aos="zoom-in-right">
            <h2 className="text-info">ABOUT ME</h2>
            <h1 className="fw-bold fs-title">RAYHAN LINGGA BUANA</h1>
          </Col>
          <Col
            className="border-start border-info border-2 px-4 mt-3 fs-5"
            data-aos="zoom-in-left"
          >
            <p>
              Skilled in web development with a focus on ReactJS, and has a
              creative talent in design using Figma
            </p>
          </Col>
        </Row>
        <Row data-aos="zoom-out">
          <Col className="position-relative">
            <video
              src={aboutVideo}
              className="mt-4 rounded-1 object-fit-cover about-video"
              controls={isPlaying}
              ref={videoRef}
              onPause={() => setIsPlaying(false)}
            ></video>
            {isPlaying ? null : (
              <i
                className="fa-solid fa-circle-play bg-dark rounded-circle"
                onClick={handlePlay}
              ></i>
            )}
          </Col>
          <p className="fs-5 mt-3">
            Take a look at the introductory video and see my portfolio which
            includes projects I created myself using ReactJS
          </p>
          <Col>
            <Button
              href="#get-in-touch"
              variant="info"
              size="lg"
              className="fw-medium fs-6 mt-2 get-in-touch"
            >
              GET IN TOUCH <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutComponent;
