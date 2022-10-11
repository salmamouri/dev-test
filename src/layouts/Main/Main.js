import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Outlet></Outlet>
    </div>
  );
};

export default Main;
