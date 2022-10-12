import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quize = useLoaderData();
  console.log(quize);

  const queries = quize.data.questions;
  console.log(queries);

  return (
    <div className="">
      <h1>Questions</h1>
      {queries.map((query) => (
        <Question key={query.id} query={query}></Question>
      ))}
    </div>
  );
};

export default Quiz;
