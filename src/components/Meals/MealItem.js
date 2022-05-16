import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import StyledMealItem from "../styles/StyledMealItem";
import MealItemForm from "./MealItemForm";

export default function MealItem({ mealItem, id, name, itemPrice }) {
  const cartCtx = useContext(CartContext);
  const price = `$${mealItem.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: itemPrice,
    });
  };

  return (
    <StyledMealItem>
      <li className="meal">
        <div>
          <h3>{mealItem.name}</h3>
          <div className="description">{mealItem.description}</div>
          <h3 className="price">{price}</h3>
        </div>
        <div>
          <MealItemForm id={mealItem.id} onAddToCart={addToCartHandler} />
        </div>
      </li>
    </StyledMealItem>
  );
}
