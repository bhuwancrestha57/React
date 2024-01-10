import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const DashBoardLayout = () => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
