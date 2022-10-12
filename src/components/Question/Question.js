import { Button, Col, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
const Question = ({ query, score, setScore }) => {
  const { correctAnswer, question, options } = query;
  const clickEye = () => {
    toast(correctAnswer);
  };
  const handleRight = (e) => {
    const btnValue = e.target.innerText;
    if (btnValue.replace(/\s/g, "") === correctAnswer.replace(/\s/g, "")) {
      setScore(score + 1);
      toast.success("This is Correct Answer");
    } else {
      toast.error("This is Wrong Answer ");
    }
  };
  return (
    <div className="question-container m-5">
      <Row>
        <Col
          style={{ border: "1px solid blue", backgroundColor: "steelblue" }}
          className="m-3 p-2  text-light w-100
           mx-auto rounded-5  "
        >
          <div className="d-flex align-items-center justify-content-center">
            <h3 className="m-4 text-center">{question}</h3>
            <FaEye
              className=" m-5"
              onClick={clickEye}
              style={{ fontSize: "35px" }}
            />
          </div>
          <div className="option-container fw-semibold fs-5">
            <Button
              onClick={handleRight}
              value={options[0]}
              className="w-50 m-3 rounded-5 text-center fs-6"
            >
              <p>{options[0]}</p>
            </Button>
            <Button
              onClick={handleRight}
              value={options[1]}
              className="w-50 m-3  rounded-5 text-center fs-6"
            >
              <p>{options[1]}</p>
            </Button>
            <Button
              onClick={handleRight}
              value={options[2]}
              className="w-50 m-3 rounded-5 text-center fs-6"
            >
              <p>{options[2]}</p>
            </Button>

            {options[3] && (
              <Button
                onClick={handleRight}
                value={options[3]}
                className="w-50 m-3 rounded-5 text-center fs-6"
              >
                <p>{options[3]}</p>
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Question;
