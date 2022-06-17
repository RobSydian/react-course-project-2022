import React, { useRef, useState } from "react";
import StyledCheckout from "../styles/StyledCheckout";

function Checkout({ onCancel }) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.trim().length === 5;

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
  };
  return (
    <StyledCheckout>
      <form className="form" onSubmit={confirmHandler}>
        <div
          className={`${"control"} ${formInputsValidity.name ? "" : "invalid"}`}
        >
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
        {!formInputsValidity.name && <p>Please, enter a valid name!</p>}
        <div
          className={`${"control"} ${
            formInputsValidity.street ? "" : "invalid"
          }`}
        >
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetInputRef} />
        </div>
        {!formInputsValidity.street && <p>Please, enter a valid street!</p>}

        <div
          className={`${"control"} ${
            formInputsValidity.postalCode ? "" : "invalid"
          }`}
        >
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={postalCodeInputRef} />
        </div>
        {!formInputsValidity.postalCode && (
          <p>Please, enter a valid postal code! (5 characters long)</p>
        )}

        <div
          className={`${"control"} ${formInputsValidity.city ? "" : "invalid"}`}
        >
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityInputRef} />
        </div>
        {!formInputsValidity.city && <p>Please, enter a valid city!</p>}

        <div className="actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button className="submit">Confirm</button>
        </div>
      </form>
    </StyledCheckout>
  );
}

export default Checkout;
