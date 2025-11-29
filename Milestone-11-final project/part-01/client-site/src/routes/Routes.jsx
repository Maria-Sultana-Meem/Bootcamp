import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Coverage from "../pages/coverage/Coverage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/rider/Rider";
import AboutUS from "../pages/home/AboutUS";
import SendParcel from "../pages/home/SendParcel";
import DashboardLayout from "../layout/DashboardLayout";
import MyParcel from "../dashboard/MyParcel";
import Payment from "../dashboard/Payment";
import PaymentSucces from "../dashboard/PaymentSucces";
import PaymentCancel from "../dashboard/PaymentCancel";
import PaymentHistory from "../dashboard/PaymentHistory";
import ApproveRiders from "../dashboard/ApproveRiders";
import UsersManagement from "../dashboard/UsersManagement";
import AdminRoutes from "./AdminRoutes";

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
      element:<PrivateRoute><Rider></Rider></PrivateRoute>,
      loader:()=>fetch('/warehouses.json').then(res=>res.json())
    }
    ,{
      path:'/aboutUs',
      element:<AboutUS></AboutUS>
    }
    ,{
      path:'/sendParcel',
      element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
      loader:()=>fetch('/warehouses.json').then(res=>res.json())
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
  },
   {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'myParcel',
        element:<MyParcel></MyParcel>
      },
      {
        path:'payment/:parcelId',
        element:<Payment></Payment>
      },
      {
        path:'payment-success',
        element:<PaymentSucces></PaymentSucces>
      },
      {
        path:'payment-cancelled',
        element:<PaymentCancel></PaymentCancel>
      },
      {
        path:'payment-history',
        element:<PaymentHistory></PaymentHistory>
      },
      
      {
        path:'approve-riders',
        element:<AdminRoutes><ApproveRiders></ApproveRiders></AdminRoutes>
      },
      {
        path:'users-management',
        element:<AdminRoutes><UsersManagement></UsersManagement></AdminRoutes>
      },
      
    ]
  }
]);