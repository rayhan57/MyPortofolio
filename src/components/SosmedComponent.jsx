import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SosmedComponent = () => {
  const Sosmed = ({ link, icon, value }) => {
    return (
      <div className="mb-2">
        <i className={icon + " text-info fs-4"}></i>
        <a href={link} className="text-light fw-semibold ps-3 fs-sosmed">
          {value}
        </a>
      </div>
    );
  };

  return (
    <div>
      <Container>
        <Row className="text-center mb-4" data-aos="fade-down">
          <Col lg>
            <Sosmed
              link={"https://www.instagram.com/rayhanlinggabuana/"}
              value={"INSTAGRAM"}
              icon={"fa-brands fa-instagram"}
            />
          </Col>
          <Col lg>
            <Sosmed
              link={"https://github.com/rayhan57"}
              value={"GITHUB"}
              icon={"fa-brands fa-github"}
            />
          </Col>
          <Col lg>
            <Sosmed
              link={
                "https://www.linkedin.com/in/rayhan-lingga-buana-5054b6259/"
              }
              value={"LINKED IN"}
              icon={"fa-brands fa-linkedin"}
            />
          </Col>
        </Row>
        <hr className="sosmed" />
      </Container>
    </div>
  );
};

export default SosmedComponent;
