import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="fs-4 fw-bold" href="#home">
            DevTest
          </Navbar.Brand>
          <Nav className="">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Nav.Link
                style={{
                  fontSize: "20px",
                  color: "white",
                  textDecoration: "none",
                }}
                href="#home"
              >
                Home
              </Nav.Link>
            </Link>
            <Link to="/statics" style={{ textDecoration: "none" }}>
              <Nav.Link
                style={{
                  fontSize: "20px",
                  color: "white",
                  textDecoration: "none",
                }}
                href="#statics"
              >
                Statics
              </Nav.Link>
            </Link>
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <Nav.Link
                style={{
                  fontSize: "20px",
                  color: "white",
                  textDecoration: "none",
                }}
                href="#blogs"
              >
                Blog
              </Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Header;
