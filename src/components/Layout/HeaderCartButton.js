import React, { useContext } from "react";
import StyledeHeaderCartButton from "../styles/StyledHeaderCartButton";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <StyledeHeaderCartButton>
      <button className="button" onClick={onClick}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{numberOfCartItems}</span>
      </button>
    </StyledeHeaderCartButton>
  );
}
