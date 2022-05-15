import React from "react";
import StyledMeals from "../styles/StyledMeals";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

export default function Meals() {
  return (
    <StyledMeals>
      <MealsSummary />
      <AvailableMeals />
    </StyledMeals>
  );
}
