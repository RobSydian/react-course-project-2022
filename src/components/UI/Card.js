import React from "react";
import StyledCard from "../styles/StyledCard";

export default function Card(props) {
  return <StyledCard>{props.children}</StyledCard>;
}
