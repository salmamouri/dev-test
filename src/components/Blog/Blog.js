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
            When we want to persist a value in react app, generally we use
            useState hook. But the problem with useState hook is, it renders the
            DOM everytime when the value changes. And it is not good practice.
            useRef allows us to persist the value and save them without
            rerendering the whole component. And when it gets updated, it only
            use the reference of the value and do not cause rerender unlike
            useState().
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
