import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Coverage from "../pages/coverage/Coverage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/rider/Rider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
         index:true,
         path:'/',
         element:<Home></Home>
    },
    {
        path:'/coverage',
        element:<Coverage></Coverage>,
        loader:()=>fetch('/warehouses.json').then(res=>res.json())
    },
    {
      path:'/rider',
      element:<PrivateRoute><Rider></Rider></PrivateRoute>
    }
]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/register',
        Component:Register
      }
    ]
  }
]);