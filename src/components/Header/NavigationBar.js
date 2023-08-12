import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "./CartButton";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="p-1">
        <Container>
          <Nav className="m-auto">
            <Nav.Link
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
        <CartButton />
      </Navbar>
    </div>
  );
};

export default NavigationBar;
