import React, { useState } from "react";
import Dheader from "./truefalse/Dheader";

const UserDashBoard = () => {
  const [color, setColor] = useState(false);
  console.log("color", color);
  const handleColorChange = () => {
    setColor(!color);
  };

  return (
    <>
      <div>
        <Dheader colorChange={color} />
        <button onClick={handleColorChange}>Color Change</button>
      </div>
    </>
  );
};

export default UserDashBoard;
