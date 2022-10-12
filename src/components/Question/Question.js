import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
const Question = ({ query }) => {
  const { id, correctAnswer, question, options } = query;
  const [selected, setSelected] = useState("");
  const handleRight = () => {
    toast("This is Correct Answer");
  };
  return (
    <div className="question-container m-5">
      <Row>
        <Col
          style={{ border: "1px solid blue", backgroundColor: "steelblue" }}
          className="m-5 p-4  text-light w-100
           mx-auto rounded-5  "
        >
          <div className="d-flex align-items-center ">
            <h3 className="m-4 text-center">{question}</h3>
            <FaEye style={{ fontSize: "25px" }} />
          </div>
          <div className="option-container d-flex flex-column mt-5 mb-3 fw-semibold fs-5">
            <Form>
              <Form.Check
                type="radio"
                label={options[0]}
                value={options[0]}
                onChange={(e) => setSelected(e.target.value)}
              />
              <Form.Check
                type="radio"
                label={options[1]}
                value={options[1]}
                onChange={(e) => setSelected(e.target.value)}
              />
              <Form.Check
                type="radio"
                label={options[2]}
                value={options[2]}
                onChange={(e) => setSelected(e.target.value)}
              />
              {options[3] && (
                <Form.Check
                  type="radio"
                  label={options[3]}
                  value={options[3]}
                  onChange={(e) => setSelected(e.target.value)}
                />
              )}
            </Form>
          </div>
        </Col>
        <Col md={3}>
          <div className="">
            <h2>{correctAnswer}</h2>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Question;
