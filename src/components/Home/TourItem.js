import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./TourItem.css"

const TourItem = (props) => {
  return (
    <Container style={{maxWidth: "800px"}}>
      <Row style={{borderBottom: "1px solid black", padding: "5px", fontFamily: "-moz-initial"}}>
        <Col md={1} >{props.date}</Col>
        <Col md={3} style={{color: "grey"}}>{props.place}</Col>
        <Col md= {5} style={{color: "grey" }}>{props.spec_place}</Col>
        <Col className="buy-tickets">
          <Button variant="info" style={{ color: "white", fontWeight: "bold"}}>
            BUY TICKETS
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TourItem;
