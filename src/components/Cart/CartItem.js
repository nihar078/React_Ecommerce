import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <div>
      <Container>
        <Row className="mb-4">
          <Col md={5} className="d-flex item align-items-center">
            <img className="cart-img" src={props.imgUrl} alt="cart-items"/>
            <span>{props.title}</span>
          </Col>
          <Col md={2} className="d-flex price align-items-center">
            <span>{props.price}</span>
          </Col>
          <Col md={4} className="d-flex quantity align-items-center">
            <span>{props.quantity}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartItem;
