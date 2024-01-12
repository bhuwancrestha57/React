import React from "react";

const ArrayUpdate = () => {
  const [changeArrayData, setChangeArrayData] = React.useState(arrayData);

  console.log("arrayData", arrayData);

  React.useEffect(() => {
    const finalArray = [...changeArrayData];
    finalArray[0] = "hello";
    setChangeArrayData(finalArray);
  }, []);
  console.log("changeArrayData", changeArrayData);
  return (
    <div>
      <div>Hello Array update</div>
    </div>
  );
};

export default ArrayUpdate;
const arrayData = ["hari", "shyam", "Ram", "sita", "Gita"];
