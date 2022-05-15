import React from "react";
import StyledMealItem from "../styles/StyledMealItem";
import MealItemForm from "./MealItemForm";

export default function MealItem({ mealItem }) {
  const price = `$${mealItem.price.toFixed(2)}`;

  return (
    <StyledMealItem>
      <li className="meal">
        <div>
          <h3>{mealItem.name}</h3>
          <div className="description">{mealItem.description}</div>
          <h3 className="price">{price}</h3>
        </div>
        <div>
          <MealItemForm id={mealItem.id} />
        </div>
      </li>
    </StyledMealItem>
  );
}
