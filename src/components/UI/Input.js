import React from "react";
import StyledInput from "../styles/StyledInput";

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <StyledInput>
      <div className="input">
        <label htmlFor={input.id}>{label}</label>
        <input {...input} ref={ref} />
      </div>
    </StyledInput>
  );
});

export default Input;
