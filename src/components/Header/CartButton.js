import React, { useContext } from "react";
import { Button } from "react-bootstrap";

import "./CartButton.css";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCntx = useContext(CartContext)
  let quantity = 0

  cartCntx.items.forEach((item) =>{
    quantity = quantity + Number(item.quantity)
  })

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
        {quantity}
      </span>
    </div>
  );
};

export default CartButton;
