import React, { useContext, useEffect, useState } from "react";
import StyledeHeaderCartButton from "../styles/StyledHeaderCartButton";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton({ onClick }) {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `button ${buttonIsHighlighted ? "bump" : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <StyledeHeaderCartButton>
      <button className={btnClasses} onClick={onClick}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{numberOfCartItems}</span>
      </button>
    </StyledeHeaderCartButton>
  );
}
