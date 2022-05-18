import React, { useRef, useState } from "react";
import StyledMealItemForm from "../styles/StyledMealItemForm";
import Input from "../UI/Input";

export default function MealItemForm({ id, onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  return (
    <StyledMealItemForm>
      <form action="" onSubmit={submitHandler} className="form">
        <Input
          ref={amountInputRef}
          input={{
            id: "amount_" + id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
          label="Amount"
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
      </form>
    </StyledMealItemForm>
  );
}
