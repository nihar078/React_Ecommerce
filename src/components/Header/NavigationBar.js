import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "./CartButton";

const NavigationBar = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="p-1">
        <Container>
          <Nav className="m-auto">
            <Nav.Link
              href="#home"
              className="mx-3 px-2"
              style={{
                color: "white",
                fontFamily: "serif",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#store"
              className="mx-3 px-2"
              style={{
                color: "white",
                fontFamily: "serif",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              STORE
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="mx-3 px-2"
              style={{
                color: "white",
                fontFamily: "serif",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              ABOUT
            </Nav.Link>
          </Nav>
        </Container>
        <CartButton onOpen={props.onShow} />
      </Navbar>
    </div>
  );
};

export default NavigationBar;
