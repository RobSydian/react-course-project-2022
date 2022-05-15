import React from "react";
import StyledCard from "../styles/StyledCard";
import MealItem from "../Meals/MealItem";

export default function Card({ dummyMeals }) {
  return (
    <StyledCard>
      <ul>
        {dummyMeals.map((meal) => (
          <MealItem key={meal.id} id={meal.id} mealItem={meal} />
        ))}
      </ul>
    </StyledCard>
  );
}
