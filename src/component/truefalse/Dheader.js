import React from "react";

const Dheader = (props) => {
  const headerStyle = {
    backgroundColor: props.colorChange ? "purple" : "red",
  };
  return (
    <>
      <div style={headerStyle}>Hello Dashboard</div>
    </>
  );
};

export default Dheader;
