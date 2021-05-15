import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItens = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItens,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [Cartstate, DispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemCartHaldler = (item) => {
    DispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHanlder = (id) => {
    DispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: Cartstate.items,
    totalAmount: Cartstate.totalAmount,
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
