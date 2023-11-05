import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "./CartButton";
import { NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../store/AuthContex";

const NavigationBar = (props) => {
  const location = useLocation()
  const authCtx = useContext(AuthContext)

  const logoutHandler = ()=>{
    authCtx.logout()
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="p-1">
        <Container>
          <Nav className="m-auto">
            <NavLink
              to="/home"
              className="mx-3 px-2"
              style={{
                color: "white",
                fontFamily: "serif",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              HOME
            </NavLink>
            <NavLink
              to="/store"
              className="mx-3 px-2"
              style={{
                color: "white",
                fontFamily: "serif",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              STORE
            </NavLink>
            <NavLink
              to="/about"
              className="mx-3 px-2"
              style={{
                color: "white",
                fontFamily: "serif",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className="mx-3 px-2"
              style={{
                color: "white",
                fontFamily: "serif",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              CONTACT US
            </NavLink>
            <NavLink
              to="/auth"
              className="mx-3 px-2"
              style={{
                color: "white",
                fontFamily: "serif",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              {!authCtx.isLoggedIn && "Login"}
            </NavLink>
            <NavLink>
              {authCtx.isLoggedIn && <Button style={{backgroundColor: "black"}} onClick={logoutHandler}>Logout</Button>}
            </NavLink>
          </Nav>
        </Container>
        {location.pathname === "/store" && <CartButton onOpen={props.onShow} />}
      </Navbar>
    </div>
  );
};

export default NavigationBar;
