import "./App.css";
import Header from "./components/layout/Header";
import React, { Fragment } from "react";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
