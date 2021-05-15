import React from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const addItemCartHaldler = (item) => {};
  const removeItemFromCartHanlder = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemCartHaldler,
    removeItem: removeItemFromCartHanlder,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
