import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TrainingComponent = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 769 && window.innerWidth <= 992;
    if (isMobile) {
      setSlidesPerView(1);
    } else if (isTablet) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };
  window.addEventListener("resize", handleResize);
  window.addEventListener("load", handleResize);

  const Cards = ({ title, subTitle, text }) => {
    return (
      <Card className="border-0 rounded-1 cards">
        <Card.Body className="p-2">
          <Card.Title>{title}</Card.Title>
          <hr />
          <Card.Subtitle className="mb-2 text-muted fs-5">
            {subTitle}
          </Card.Subtitle>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div>
      <Container id="training">
        <Row data-aos="fade-down-right">
          <Col>
            <h1 className="text-info">TRAINING</h1>
            <h1 className="fw-bold fs-title">EXPERIENCES</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <swiper-container
            data-aos="zoom-in"
            class="mySwiper-training"
            slides-per-view={slidesPerView}
            space-between="0"
            free-mode="true"
          >
            <swiper-slide>
              <Cards
                title={"Dicoding Academy"}
                subTitle={"Learn Basic Web Programming"}
                text={
                  "In this course, participants are taught basic concepts such as HTML and CSS which are the main foundation in producing an attractive and functional appearance for websites."
                }
              />
            </swiper-slide>
            <swiper-slide>
              <Cards
                title={"Dicoding Academy"}
                subTitle={"Learn Basic Javascript Programming"}
                text={
                  "In this course, participants are taught basic concepts such as JavaScript programming, which is the main foundation in developing interactive functions for websites"
                }
              />
            </swiper-slide>
            <swiper-slide>
              <Cards
                title={"Coursera"}
                subTitle={"Basics of User Experience Design"}
                text={
                  "In this course, participants will grasp the fundamentals of User Experience Design (UX Design), essential for creating user-friendly and satisfying digital experiences"
                }
              />
            </swiper-slide>
            <swiper-slide>
              <Cards
                title={"Coursera"}
                subTitle={"Starting the UX Design Process"}
                text={
                  "Starting the UX Design Process involves the initial steps in crafting user-friendly digital experiences, including user research, goal setting, and interface design"
                }
              />
            </swiper-slide>
            <swiper-slide>
              <Cards
                title={"Coursera"}
                subTitle={"Create Wireframes and Prototypes"}
                text={
                  "In this module, participants will learn how to create low-fidelity wireframes and prototyping, an essential skill for early-stage design and development"
                }
              />
            </swiper-slide>
          </swiper-container>
        </Row>
      </Container>
    </div>
  );
};

export default TrainingComponent;
