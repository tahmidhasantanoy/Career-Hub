import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, //pb
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("job-category.json"),
      },
      {
        path: "/jobDetails",
        element: <JobDetails />,
        loader: () => fetch('feature-job.json')
        //All ok 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
