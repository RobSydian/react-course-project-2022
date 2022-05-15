import React from "react";
import StyledMealItemForm from "../styles/StyledMealItemForm";
import Input from "../UI/Input";
export default function MealItemForm({ id }) {
  return (
    <StyledMealItemForm>
      <form action="" className="form">
        <Input
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
      </form>
    </StyledMealItemForm>
  );
}
