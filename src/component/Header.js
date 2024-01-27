import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    {
      name: "Filter",
      link: "/filter",
    },
    {
      name: "Hooks",
      link: "/hooks",
    },
    {
      name: "Home",
      link: "/",
    },
    {
      name: "User Dashboard",
      link: "/hooks/user",
    },
    {
      name: "User Filter",
      link: "/Filter/user",
    },
    {
      name: "User Home",
      link: "/user",
    },
    {
      name: "Callback",
      link: "/callback",
    },
    {
      name: "Data Destructuring",
      link: "/datadestructuring",
    },
    {
      name: "Parent Hoc",
      link: "/parenthoc",
    },
  ];

  return (
    <div className="maincontainer">
      <div style={{ width: "400px" }}>
        <a className="navbar" href="/">
          <h2>My Website</h2>
        </a>
      </div>
      <div className="linkname">
        {links.map((item) => (
          <div key={item.link}>
            <button className="navbuttom">
              <Link className="navbar" to={`${item.link}`}>
                {item.name}
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
