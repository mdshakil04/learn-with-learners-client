import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TeachOn from "../Pages/TeachOn/TeachOn";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import PrivateRoute from './PrivateRoute';


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/allClasses',
          element:<AllClasses></AllClasses>
        },
        {
          path:'/teachOn',
          element:<PrivateRoute><TeachOn></TeachOn></PrivateRoute>
        },
        {
          path:'/login',
          element:<Login></Login>

        },
        {
          path:'/register',
          element:<Registration></Registration>
        }
      ]
    },
  ]);