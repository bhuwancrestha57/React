import React, { useState } from "react";

const UserApp = () => {
  const [isArray, setIsArray] = useState(array);
  const [isId, setIsId] = React.useState();
  const handleClick = (id, name, address) => {
    setIsArray(isArray.filter((item) => item.id !== id));
    console.log("id", id, name, address);
    setIsId(id);
  };

  return (
    <div>
      <div>
        {isArray
          .filter((item) => item.id !== isId)
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
    </div>
  );
};

export default UserApp;
const array = [
  {
    id: "1",
    name: "Bhuwan Shrestha",
    address: "Koteshwor",
    contact: "9840170728",
  },
  {
    id: "2",
    name: "Gyan Bahadur",
    address: "Narantar",
    contact: "9840121212",
  },
  {
    id: "3",
    name: "Aayusha Rana",
    address: "Swoyambhu",
    contact: "9810101010",
  },
  {
    id: "4",
    name: "Bharat Dahal",
    address: "Pepsicola",
    contact: "985757575",
  },
  {
    id: "5",
    name: "Himal Lama",
    address: "Baneshwor",
    contact: "983213231",
  },
  {
    id: "6",
    name: "Ram Kumar Sharma",
    address: "Gwarko",
    contact: "9814141414",
  },
  {
    id: "7",
    name: "Gopal Bahadur",
    address: "Satdobato",
    contact: "986555555",
  },
  {
    id: "8",
    name: "Chiranjivi Rai",
    address: "Jadibuti",
    contact: "01525252",
  },
  {
    id: "9",
    name: "Shyam Sharma",
    address: "Tinkune",
    contact: "9812513542",
  },
  {
    id: "10",
    name: "Arun Barma",
    address: "Buddhanagar",
    contact: "9898989898",
  },
];
