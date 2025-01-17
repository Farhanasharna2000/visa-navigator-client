import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ForgetPassword from "../Components/ForgetPassword/ForgetPassword";
import Error from "../Components/Error/Error";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AllVisas from "../Components/AllVisas/AllVisas";
import AddVisa from "../Components/AddVisa/AddVisa";
import MyAddedVisas from "../Components/MyAddedVisas/MyAddedVisas";
import MyVisaApplications from "../Components/MyVisaApplications/MyVisaApplications";
import VisaDetails from "../Components/VisaDetails/VisaDetails";

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
    path: "/all-visas",
    element: 
      <AllVisas />,
    loader: () => fetch("https://visa-navigator-server-liart.vercel.app/visaData")
  },
  {
    path: "/add-visa",
    element: <PrivateRoute>
      <AddVisa />
    </PrivateRoute>,
  },
  {
    path: "/visa-details/:id",
    element: <PrivateRoute>
      <VisaDetails />,
    </PrivateRoute>
  },
  {
    path: "/my-added-visas",
    element: <PrivateRoute>
      <MyAddedVisas />
    </PrivateRoute>,
  },

  {
    path: "/my-visa-applications",
    element: <PrivateRoute>
      <MyVisaApplications />
    </PrivateRoute>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,

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
    path: "/forget-password",
    element: <ForgetPassword />,
  },

  {
    path: "*",
    element: <Error />,
  },
]);

export default router;