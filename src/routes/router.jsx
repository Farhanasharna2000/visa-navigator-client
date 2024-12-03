import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ForgetPassword from "../Components/ForgetPassword/ForgetPassword";
import Error from "../Components/Error/Error";
import AboutUs from "../Components/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
    
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/pages/login",
    element: <Login />,
  },
  {
    path: "/pages/register",
    element: <Register />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },

  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },

  {
    path: "*",
    element: <Error />,
  },
]);

export default router;