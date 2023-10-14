import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import navbarToggle from "../assets/img/navbar-toggle.svg";

const NavbarComponent = () => {
  const NavLink = ({ href, value }) => {
    return (
      <Nav.Link href={href} className="text-light pb-2 navlink">
        {value}
      </Nav.Link>
    );
  };

  return (
    <Navbar expand="lg" className="bg-dark mt-3" data-aos="fade-up">
      <Container>
        <Navbar.Brand href="/" className="fw-semibold fs-4">
          RAYHAN LINGGA BUANA
        </Navbar.Brand>
        <Navbar.Toggle className="border-0 " aria-controls="basic-navbar-nav">
          <span>
            <img src={navbarToggle} />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <NavLink href={"#about"} value={"About"} />
            <NavLink href={"#portofolio"} value={"Portofolio"} />
            <NavLink href={"#training"} value={"Training"} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
