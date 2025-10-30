import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
{
    path:'/',
    element:<HomeLayout></HomeLayout>,
    children:[
        {
           path:"/",
           element:<Home></Home>
        },
        {
           path:"/category/:id",
           element:<CategoryNews></CategoryNews>,
           loader:()=>fetch('/news.json')
        },
    ]
    
},
{
    path:'/auth'
}
,
{
    path:'/news'
}
,
{
    path:'/*',
    element: <h2>Error_404</h2>
}


])
export default router