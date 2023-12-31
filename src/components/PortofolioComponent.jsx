import React from "react";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import { Container, Row, Col } from "react-bootstrap";

const PortofolioComponent = () => {
  const SwiperSlide = ({ img, textImg }) => {
    return (
      <swiper-slide>
        <img src={img} />
        <div className="px-4 py-2 fs-6 text-img">{textImg}</div>
      </swiper-slide>
    );
  };

  return (
    <div>
      <Container id="portofolio">
        <Row data-aos="fade-down-right">
          <Col>
            <h1 className="text-info">PORTOFOLIO</h1>
            <h1 className="fw-bold fs-title">PROJECT THAT HAVE BEEN WORKED</h1>
          </Col>
        </Row>
      </Container>
      <swiper-container
        data-aos="flip-up"
        class="mySwiper-portofolio pt-3"
        pagination="true"
        pagination-type="progressbar"
        effect="coverflow"
        space-between="70"
        centered-slides="true"
        slides-per-view="auto"
        coverflow-effect-rotate="0"
        coverflow-effect-stretch="0"
        coverflow-effect-depth="150"
        coverflow-effect-modifier="1"
        coverflow-effect-slide-shadows="false"
        autoplay-delay="2000"
        autoplay-disable-on-interaction="false"
      >
        <SwiperSlide
          img={img1}
          textImg={"Website management using Laravel 10."}
        />
        <SwiperSlide
          img={img2}
          textImg={"ReactJS shopping app with Google Sheets API integration."}
        />
        <SwiperSlide
          img={img3}
          textImg={
            "A website that serves movie lists with ReactJS and leverages the public API from TMDB."
          }
        />
        <SwiperSlide
          img={img4}
          textImg={
            "An e-commerce site developed using ReactJS and integrating Fakestore API."
          }
        />
      </swiper-container>
    </div>
  );
};

export default PortofolioComponent;
