import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Navigation() {
  return (
    <>
      <Navbar id="nav" className="py-0" expand="lg">
        <Container>
          <div className="navbar-brand bg-white">
            <img
              className="img"
              height={65}
              width={200}
              src={require("./myname2.gif")}
              alt=""
            />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="ms-5" id="basic-navbar-nav">
            <Nav className="mr-auto ms-2">
              <a href="/" className="nav-item">
                <FontAwesomeIcon icon={faHome} className="me-2 fa-icon" /> HOME
              </a>
              <a href="/" className="nav-item">
                <FontAwesomeIcon icon={faUser} className="me-2 fa-icon" /> ABOUT
              </a>
              <a href="/" className="nav-item">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 fa-icon" />{" "}
                CONTACT
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
