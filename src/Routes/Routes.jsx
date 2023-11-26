import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddTeacher from "../Pages/Home/AddTeacher/AddTeacher";
import AllClasses from "../Pages/AllClasses/AllClasses";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/addTeacher',
          element:<AddTeacher></AddTeacher>
        },
        {
          path:'/allClasses',
          element:<AllClasses></AllClasses>
        }
      ]
    },
  ]);