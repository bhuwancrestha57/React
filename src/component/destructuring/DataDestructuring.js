import React from "react";
import DataUpdate from "./DataUpdate";
import ArrayDestructuring from "./ArrayDestructuring";

const DataDestructuring = () => {
  //   data add in distructureing
  data.contact = 9840170728;
  //   data Destructuring
  console.log("Datapre", data);
  const { name, age, address, contact } = data;
  console.log("data", data.contact);
  console.log("contact", contact);

  const data1 = {
    country: "Nepal",
    disrtict: 77,
    himalaya: "Mount Everest",
    address: "baneshwor",
  };
  //   ... Means Spread Operator for(add to object)if same data in object 2nd
  //   Spared Operator override data
  const concatData = {
    ...data,
    ...data1,
  };
  console.log("concatData", concatData);
  return (
    <div className="datanav">
      <div className="datadistruring">
        <div>Name:{name}</div>
        <div>Age:{age}</div>
        <div>Address:{address}</div>
        <div>Contact:{contact}</div>
      </div>
      <div>
        <DataUpdate />
      </div>
      <div>
        <ArrayDestructuring />
      </div>
    </div>
  );
};

export default DataDestructuring;
const data = {
  name: "Bhuwan Shrestha",
  address: "Koteshwor",
  age: "26",
};
