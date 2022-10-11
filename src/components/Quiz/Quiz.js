import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quize = useLoaderData();
  const { id } = quize;
  return (
    <div>
      <h3>quize:{id}</h3>
    </div>
  );
};

export default Quiz;
