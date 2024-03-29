import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import { getJobListFromDB } from "./components/utilities/getJobListFromDB";
import Statistic from "./components/Statistic/Statistic";
import Blog from "./components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("job-category.json"),
      },
      {
        path: "/jobDetails",
        element: <JobDetails />,
        loader: () => fetch("feature-job.json"),
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs />,
        loader: getJobListFromDB,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
      {
        path:"/blog",
        element:<Blog/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
