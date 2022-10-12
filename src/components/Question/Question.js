import React from "react";
import { Col } from "react-bootstrap";

const Question = ({ query }) => {
  const { id, correctAnswer, question, options } = query;
  return (
    <div className="question-container">
      <Col
        style={{ border: "1px solid blue", backgroundColor: "steelblue" }}
        className="m-5 p-4  text-light w-50 mx-auto rounded-5 text-center "
      >
        <h2 className="m-4">{question}</h2>
        <div className="option-container d-flex flex-column mt-5 mb-3 fw-semibold fs-5">
          <label>
            <input className="me-2" type="radio" name="" id="" />
            {options[0]}
          </label>
          <br></br>

          <label>
            <input className="me-2" type="radio" name="" id="" />
            {options[1]}
          </label>
          <br></br>

          <label>
            <input className="me-2" type="radio" name="" id="" />
            {options[2]}
          </label>
          <br></br>

          <label>
            <input className="me-2" type="radio" name="" id="" />
            {options[3]}
          </label>
        </div>
      </Col>
    </div>
  );
};

export default Question;
