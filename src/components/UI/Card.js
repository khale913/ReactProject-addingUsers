import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  // scoped classes get pushed to Card div in AddUser.js
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
