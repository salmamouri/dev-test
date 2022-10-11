import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const SingleTopic = ({ topic }) => {
  const { name, logo, total } = topic;
  console.log(name);
  return (
    <Col>
      <Card className="m-4">
        <Card.Img className="bg-dark" variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h5> Question: {total}</h5>
          </Card.Text>
          <Button>Start Quize</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleTopic;
