import React from "react";
import { useLoaderData } from "react-router-dom";

const Statics = () => {
  const allData = useLoaderData();
  console.log(allData);
  return <div></div>;
};

export default Statics;
