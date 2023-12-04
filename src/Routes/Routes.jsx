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
import Dashboard from "../Layout/Dashboard";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import TeacherDashboard from './../Pages/Dashboard/TeacherDashboard';
import StudentDashboard from './../Pages/Dashboard/StudentDashboard';
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import Payment from "../Pages/Dashboard/Payment/Payment";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";


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
          path: '/class/:id',
          element:<PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>,
          loader:({params}) => fetch(`https://learn-with-learners-server.vercel.app/class/${params.id}`)
          
        },
        {
          path:'/payment',
          element: <Payment></Payment>
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
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
          {
            path:'admin',
            element:<AdminDashboard></AdminDashboard>,
          },
          {
            path:'teacher',
            element:<TeacherDashboard></TeacherDashboard>
          },
          {
            path:'myClasses',
            element:<MyClass></MyClass>
          },
          {
            path:'student',
            element:<StudentDashboard></StudentDashboard>
          }
      ]
    },
  ]);