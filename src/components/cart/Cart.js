import React from "react";
import Modal from "../UI/modal/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItens = (
    <ul className={classes["cart-itens"]}>
      {[
        {
          id: "c1",
          name: "sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItens}
      <div className={classes.total}>
        <span>total amount</span>
        <span>35,62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
