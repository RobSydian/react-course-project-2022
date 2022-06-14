import React, { useEffect, useState } from "react";
import StyledAvailableMeals from "../styles/StyledAvailableMeals";
import Card from "../UI/Card";
import MealItem from "./MealItem";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-my-burger-446ac.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <StyledAvailableMeals>
        <section className="mealsLoading">
          <p>Loading...</p>
        </section>
      </StyledAvailableMeals>
    );
  }
  if (httpError) {
    return (
      <StyledAvailableMeals>
        <section className="mealsError">
          <p>{httpError}</p>
        </section>
      </StyledAvailableMeals>
    );
  }
  let mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      mealItem={meal}
      name={meal.name}
      itemPrice={meal.price}
    />
  ));

  return (
    <StyledAvailableMeals>
      <section className="meals">
        <Card>{!isLoading && <ul>{mealsList}</ul>}</Card>
      </section>
    </StyledAvailableMeals>
  );
}
