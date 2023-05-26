import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  // {...props.input} is a special syntax that will add all the key-value pairs in props.input as props to the element we're creating.
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
