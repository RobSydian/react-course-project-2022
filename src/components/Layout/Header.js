import React from "react";
import StyledHeader from "../styles/StyledHeader";

import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <StyledHeader>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </StyledHeader>
  );
}
