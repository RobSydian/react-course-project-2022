import React from "react";
import StyledHeader from "../styles/StyledHeader";

import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header({ onShowCart, onHideCart }) {
  return (
    <StyledHeader>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </StyledHeader>
  );
}
