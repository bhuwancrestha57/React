import React, { useState } from "react";

const Filter = () => {
  const [isArray, setIsArray] = useState(array);
  const [isId, setIsId] = React.useState();
  const handleClick = (id, name, address) => {
    setIsArray(isArray.filter((item) => item.id !== id));
    console.log("id", id, name, address);
    setIsId(id);
  };
  const mystyle = {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between",
  };

  return (
    <>
      <div style={mystyle}>
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            width: "200px",
            height: "100px",
          }}
        >
          {array
            .filter((Item) => Item.id === 5)
            .map((Item) => (
              <div key={Item.id}>
                <div>ID:{Item.id}</div>
                <div>Name:{Item.name}</div>
                <div>Address:{Item.address}</div>
              </div>
            ))}
        </div>
        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            width: "200px",
            height: "200px",
          }}
        >
          {array
            .filter((item) => item.id < 4)
            .map((item) => (
              <div key={item.id}>
                <div>ID:{item.id}</div>
                <div>Name:{item.name}</div>
                <div>Address:{item.address}</div>
              </div>
            ))}
        </div>

        <div
          style={{ backgroundColor: "purple", color: "white", width: "250px" }}
        >
          {array
            .filter((item) => item.id !== 4)
            .map((item) => (
              <div key={item.id}>
                <div>ID:{item.id}</div>
                <div>Name:{item.name}</div>
                <div>Address:{item.address}</div>
              </div>
            ))}
        </div>
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            width: "200px",
          }}
        >
          {array
            .filter((Item) => Item.id !== isId)
            .map((Item) => (
              <div
                onClick={() => handleClick(Item.id, Item.name, Item.address)}
                key={Item.id}
                style={{ margin: "10px" }}
              >
                <div>ID:{Item.id}</div>
                <div>Name:{Item.name}</div>
                <div>Address:{Item.address}</div>
              </div>
            ))}
        </div>
        <div
          style={{
            backgroundColor: "#FF0000",
            color: "white",
            width: "200px",
            height: "200px",
          }}
        >
          {array
            .filter((item) => item.id === isId)
            .map((item) => (
              <div key={item.id}>
                <div>ID:{item.id}</div>
                <div>Name:{item.name}</div>
                <div>Address:{item.address}</div>
              </div>
            ))}
        </div>
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            width: "200px",
          }}
        >
          {isArray.map((Item) => (
            <div
              onClick={() => handleClick(Item.id, Item.name, Item.address)}
              key={Item.id}
              style={{ margin: "10px" }}
            >
              <div>ID:{Item.id}</div>
              <div>Name:{Item.name}</div>
              <div>Address:{Item.address}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
const array = [
  {
    id: 1,
    name: "Bhuwan",
    address: "Koteshwor",
  },
  {
    id: 2,
    name: "Gyan",
    address: "Narayantar",
  },
  {
    id: 3,
    name: "Aayusha",
    address: "swoyambhu",
  },
  {
    id: 4,
    name: "Pooja",
    address: "Jadibuti",
  },
  {
    id: 5,
    name: "Hari",
    address: "Tinkune",
  },
  {
    id: 6,
    name: "Geeta",
    address: "Baneshwor",
  },
  {
    id: 7,
    name: "Hari",
    address: "Sinamangal",
  },
  {
    id: 8,
    name: "Ram",
    address: "Pasupati",
  },
  {
    id: 9,
    name: "Shyam",
    address: "Baneshwor",
  },
  {
    id: 10,
    name: "Sita",
    address: "Buddhanagar",
  },
];
