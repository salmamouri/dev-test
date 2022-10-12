import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quize = useLoaderData();
  console.log(quize);

  const queries = quize.data.questions;
  console.log(queries);
  const [score, setScore] = useState(0);

  return (
    <div className="container">
      <h1>Questions</h1>

      <Row>
        <Col
          className=" h-75 w-25 bg-primary rounded-5 text-light sticky-top overflow-hidden"
          md={2}
        >
          <h2 className="m-3 p-2">Score: {score}</h2>
        </Col>
        <Col>
          {queries.map((query) => (
            <Question
              key={query.id}
              query={query}
              score={score}
              setScore={setScore}
            ></Question>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Quiz;
