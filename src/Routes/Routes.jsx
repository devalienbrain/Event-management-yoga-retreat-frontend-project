import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ShowServiceDetails from "../pages/ServiceDetails/ShowServiceDetails";
import FreeCounselling from "../pages/FreeCounselling/FreeCounselling";
import Tutorials from "../pages/Tutorials/Tutorials";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ShowServiceDetails></ShowServiceDetails>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "/counselling",
        element: (
          <PrivateRoute>
            <FreeCounselling></FreeCounselling>
          </PrivateRoute>
        ),
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <Tutorials></Tutorials>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
