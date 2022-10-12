import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="blog-container m-5 p-5">
      <Accordion className="mx-auto w-75" defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Q1: What is the purpose of React Router?
          </Accordion.Header>
          <Accordion.Body>
            React Router mainly used for Single Page Application.React router is
            a library that used for routing in react application. By using react
            router we can use many route and we can navigate one route to
            another by reloading the page.It changes only path of route which we
            set for specific route.React router is used for standard structure
            of the aplications.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does Context Api does?</Accordion.Header>

          <Accordion.Body>
            Context API is alternative to props drilling.By using context API ,
            we can store data or information in one center place and through
            context hooks or props we can easily share these data or information
            one component to another.Context API makes it easier to have our
            global and application data available to all components thats why it
            is more accessible. Context API is considered as one of the key
            features of the react framework.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is UseHref?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
