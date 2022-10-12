import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Statics from "./components/Statics/Statics";
import Main from "./layouts/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("topics.json");
          },
          element: <Home></Home>,
        },
        {
          path: "/statics",
          loader: async () => {
            return fetch("topics.json");
          },
          element: <Statics></Statics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/quize/:quizeId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizeId}`
            );
          },
          element: <Quiz></Quiz>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
