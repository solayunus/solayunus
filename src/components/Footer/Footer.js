/*!
Design Credit:
=========================================================
* BLK Design System React - v1.2.0
=========================================================

*/
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// function scrollRun(value){
//   document
//   .getElementById(value)
//   .scrollIntoView({ behavior: "smooth" });
// };

// let sectionId = "contactus";

// function scrollToSection(sectionId){
//   document
//     .getElementById(sectionId)
//     .scrollIntoView({ behavior: "smooth" });
// };

const scrollToContact = () => {
  document
    .getElementById("contactus")
    .scrollIntoView({ behavior: "smooth" });
};

const scrollToHome = () => {
  document
    .getElementById("home")
    .scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title logo-name"> Pious-Dev</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Project" tag={Link}>
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Blog" tag={Link}>
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile-page" tag={Link}>
                  Profile
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="#" onClick={scrollToContact}>
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={scrollToHome}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">

                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/PiousDev"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/solayunus"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like Me
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.linkedin.com/in/yunuskareem"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow Me
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.youtube.com/in/yunuskareem"
                id="tooltip318450374"
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450374">
                Join Me
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
