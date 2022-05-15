import React from "react";
import StyledInput from "../styles/StyledInput";

export default function Input({ label, input }) {
  return (
    <StyledInput>
      <div className="input">
        <label htmlFor={input.id}>{label}</label>
        <input {...input} />
      </div>
    </StyledInput>
  );
}
