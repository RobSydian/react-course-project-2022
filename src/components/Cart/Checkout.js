import React from "react";
import StyledCheckout from "../styles/StyledCheckout";

function Checkout({ onCancel }) {
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <StyledCheckout>
      <form action="post" onSubmit={confirmHandler}>
        <div className="control">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />
        </div>
        <div className="control">
          <label htmlFor="street">Your Street</label>
          <input type="text" id="street" />
        </div>
        <div className="control">
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" />
        </div>
        <div className="control">
          <label htmlFor="city">Your City</label>
          <input type="text" id="city" />
        </div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </form>
    </StyledCheckout>
  );
}

export default Checkout;
