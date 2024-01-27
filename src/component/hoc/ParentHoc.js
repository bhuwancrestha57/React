import React from "react";

import AddCounter from "./AddCounter";
import SubtractCounter from "./SubtractCounter";
const ParentHoc = () => {
  return (
    <div>
      <div>
        <AddCounter addBy={4} />
        <SubtractCounter operator="sub" subBy={3} />
      </div>
    </div>
  );
};

export default ParentHoc;
