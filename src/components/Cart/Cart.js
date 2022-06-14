import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import StyledCart from "../styles/StyledCart";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart({ onClose }) {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };
  const cartItems = (
    <ul className="cart-items">
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

  const modalActions = (
    <div className="actions">
      <button className="button--alt" onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button className="button" onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  return (
    <Modal onClose={onClose}>
      <StyledCart>
        {cartItems}
        <div className="total">
          <span>Total amount</span>
          <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onCancel={onClose} />}
        {!isCheckout && modalActions}
      </StyledCart>
    </Modal>
  );
}
