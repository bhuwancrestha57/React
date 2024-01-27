import React from "react";

const withCounter = (OldComponent) => {
  const NewComponent = (props) => {
    // obect destructuring value
    const { addBy } = props;
    console.log("props", props);

    const [count, setCount] = React.useState(100);
    // addby object Destructuring
    const handleIncrement = () => setCount(count + addBy);
    // subtract from object no destructuring
    const handle = () => {
      switch (props.operator) {
        case "sub":
          setCount(count - props.subBy);
          console.log("sub");

          break;
        case "multiply":
          setCount(count * props.multiBy);
          console.log("multiply");

        default:
          setCount(count + props.subBy);
          break;
      }
    };

    return (
      <div>
        <OldComponent
          {...props}
          count={count}
          increment={handleIncrement}
          decrement={handle}
          multiply={handle}
        />
      </div>
    );
  };
  return NewComponent;
};

export default withCounter;
