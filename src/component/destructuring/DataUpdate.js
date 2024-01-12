import React from "react";

const DataUpdate = () => {
  const [changeData, setChangeData] = React.useState(data);
  // changing Spread Operator by using useState useEffact
  React.useEffect(() => {
    // setChangeData((prev) => ({
    //   ...prev,
    //   address: "Pokhara",
    // }));
    // it also work as below
    setChangeData({ ...changeData, address: "Chitwan" });
  }, []);
  console.log("changeData", changeData);

  return (
    <>
      <div className="dataupdate">
        <div>
          <h1>Data Update</h1>
        </div>
        <div>Name:{changeData?.name}</div>
        <div>Age:{changeData?.age}</div>
        <div>Address:{changeData?.address}</div>
      </div>
    </>
  );
};

export default DataUpdate;
const data = {
  name: "Bhuwan Shrestha",
  address: "Koteshwor",
  age: "26",
};
