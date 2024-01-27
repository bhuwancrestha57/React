import React from "react";
import withCounter from "./withCounter";

const SubtractCounter = (props) => {
  return (
    <div>
      <div>Count: {props.count}</div>
      <div>
        <button onClick={props.decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default withCounter(SubtractCounter);
