import React, { useReducer, useState } from "react";

// import Header from "./Header";

const Hooks = () => {
  // Using useEffect hook from Here component
  const [isTrue, setIsTrue] = useState(false);

  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setIsTrue(!isTrue);
  };
  console.log("outside", isTrue);
  React.useEffect(() => {
    console.log("success");
    setCounter(counter + 1);
  }, [isTrue]);
  // Close useEffect Hooks component

  // Using useReducer hook from Here component
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
    if (action.type === "RESET") {
      return initialState;
    }
    console.log(state, action);
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // Close useReducer Hooks component

  return (
    <>
      {/* useEffect hook return start */}
      <div>
        <div>
          <h1>useEffect</h1>
        </div>
        <div>
          <div>hello hooks</div>
          <div onClick={handleClick}>{counter}</div>
        </div>
      </div>
      {/* useEffect hook return end */}

      {/* useReducer hook return start */}
      <div>
        <div>
          <h1>useReducer</h1>
        </div>
        <div>{state}</div>
        <div>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            INCREMENT
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            DECREMENT
          </button>
          <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
        </div>
      </div>
      {/* useReducer hook return end */}
    </>
  );
};

export default Hooks;
