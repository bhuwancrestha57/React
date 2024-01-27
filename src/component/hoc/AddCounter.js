import React from "react";
import withCounter from "./withCounter";

const AddCounter = (props) => {
  return (
    <div>
      <div>Count: {props.count}</div>
      <div>
        <button onClick={props.increment}>Increment</button>
      </div>
    </div>
  );
};

export default withCounter(AddCounter);
