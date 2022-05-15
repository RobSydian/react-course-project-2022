import React from "react";
import StyledeHeaderCartButton from "../styles/StyledHeaderCartButton";
import CartIcon from "../Cart/CartIcon";

export default function HeaderCartButton() {
  return (
    <StyledeHeaderCartButton>
      <button className="button">
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">3</span>
      </button>
    </StyledeHeaderCartButton>
  );
}