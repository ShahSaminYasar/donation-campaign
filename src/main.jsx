import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import Statistics from "./pages/Statistics/Statistics";
import Error from "./pages/Error/Error";
import Program from "./pages/Program/Program";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          const data = fetch("/data/Programs.json").then((response) =>
            response.json()
          );
          return data;
        },
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/program/:id",
        element: <Program />,
        loader: () => {
          const data = fetch("/data/Programs.json").then((response) =>
            response.json()
          );
          return data;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
