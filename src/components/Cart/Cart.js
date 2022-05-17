import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import StyledCart from "../styles/StyledCart";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

export default function Cart({ onClose }) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = () => {};
  const cartItemAddHandler = () => {};
  const cartItems = (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        maxHeight: "20rem",
        overflow: "auto",
      }}
    >
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      <StyledCart>
        {cartItems}
        <div className="total">
          <span>Total amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={onClose}>
            Close
          </button>
          {hasItems && <button className="button">Order</button>}
        </div>
      </StyledCart>
    </Modal>
  );
}
