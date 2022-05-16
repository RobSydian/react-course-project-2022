import React from "react";
import StyledCart from "../styles/StyledCart";
import Modal from "../UI/Modal";

export default function Cart({ onClose }) {
  const cartItems = (
    <ul className="card-items">
      {[{ id: "c1", name: "sushi", price: 12.99 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      <StyledCart>
        {cartItems}
        <div className="total">
          <span>Total amount</span>
          <span> 35.62</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={onClose}>
            Close
          </button>
          <button className="button">Order</button>
        </div>
      </StyledCart>
    </Modal>
  );
}
