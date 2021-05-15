import React,{Fragment} from "react";
import classes from "./Header.module.css";
import mealImage from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="foods table" />
      </div>
    </Fragment>
  );
};

export default Header;
