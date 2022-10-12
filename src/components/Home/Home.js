import React from "react";
import { Row } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import SingleTopic from "../SingleTopic/SingleTopic";

const Home = () => {
  const allTopics = useLoaderData();
  console.log(allTopics);
  const topics = allTopics.data;

  return (
    <Row>
      {topics?.map((topic) => (
        <SingleTopic topic={topic} key={topic.id}></SingleTopic>
      ))}
    </Row>
  );
};

export default Home;
