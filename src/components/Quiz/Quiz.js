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
    <div className="">
      <h1>Questions</h1>

      <Row>
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
        <Col className="sticky" md={2}>
          <h2>{score}</h2>
        </Col>
      </Row>
    </div>
  );
};

export default Quiz;
