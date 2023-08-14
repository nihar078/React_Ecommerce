import React from "react";
import { Button } from "react-bootstrap";

import "./CartButton.css";

const CartButton = (props) => {
  return (
    <div>
      <Button
        variant="outline-info"
        className="button"
        style={{ color: "white", fontFamily: "serif", fontSize: "18px" }}
        onClick={props.onOpen}
      >
        Cart
      </Button>
      <span variant="outline-info" className="badge-wrap">
        0
      </span>
    </div>
  );
};

export default CartButton;
