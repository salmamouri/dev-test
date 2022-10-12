import { Row } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SingleTopic from "../SingleTopic/SingleTopic";

const Home = () => {
  const allTopics = useLoaderData();
  console.log(allTopics);
  const topics = allTopics.data;

  return (
    <div>
      <Banner></Banner>
      <Row className="container mx-auto mb-5">
        {topics?.map((topic) => (
          <SingleTopic topic={topic} key={topic.id}></SingleTopic>
        ))}
      </Row>
    </div>
  );
};

export default Home;
