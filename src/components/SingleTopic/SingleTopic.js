import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleTopic = ({ topic }) => {
  const { name, logo, total, id } = topic;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quize/${id}`);
  };
  return (
    <Row>
      <Col>
        <Card className="m-4">
          <Card.Img className="bg-dark" variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <h5> Question: {total}</h5>
            </Card.Text>

            <Button onClick={handleNavigate}>Start Quize</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SingleTopic;