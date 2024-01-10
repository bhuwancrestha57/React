import React from "react";

const UserFilter = () => {
  return (
    <div>
      <div>
        {array
          .filter((item) => item.id < 6)
          .map((item) => (
            <div key={item.id}>
              <div>ID:{item.id}</div>
              <div>Name:{item.name}</div>
              <div>Address:{item.address}</div>
              <div>Contact:{item.contact}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserFilter;
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
