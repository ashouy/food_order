import React, { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const countItens = ctx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>{countItens}</span>
    </button>
  );
};

export default HeaderCartButton;
