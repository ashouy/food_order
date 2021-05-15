import React, { useRef, useState } from "react";
import Input from "../../UI/input/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [amountIsValid, setamountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const amountNumber = +enteredAmount; //converts the string in to a number "+"

    if (enteredAmount.trim() === 0 || amountNumber < 1 || amountNumber > 5) {
      setamountIsValid(false);
      return;
    }
    props.onAddToCart(amountNumber)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
