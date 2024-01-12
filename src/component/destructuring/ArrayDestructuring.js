import React from "react";
import ArrayUpdate from "./ArrayUpdate";

const ArrayDestructuring = () => {
  const arrayData = ["hari", "shyam", "Ram", "sita", "Gita"];
  const arrayData1 = ["pokhara", "lalitpur", "bharatpur", "birgunj", "Dipayal"];
  //   data add in arrayData
  arrayData.push("India");
  //   last data delete in arrayData
  arrayData.pop();
  // data add in position 2nd in dataarray
  arrayData[1] = "Nepal";

  console.log("arrayData", arrayData);

  const mergeArray = [...arrayData, ...arrayData1];
  console.log("mergeArray", mergeArray);

  const [first, , third, ...rest] = arrayData;
  console.log("first", first);
  console.log("third", third);
  console.log("rest", rest);

  return (
    <div>
      <div>
        <ArrayUpdate />
      </div>
      <div>Hello Array</div>
    </div>
  );
};

export default ArrayDestructuring;
