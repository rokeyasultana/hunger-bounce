import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import OrderHistory from "../../Pages/Dashboard/OrderHistory/OrderHistory";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import FoodDetails from "../../Pages/FoodDetails/FoodDetails";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/SignUp/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

const router= createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorElement></ErrorElement>,
        element:<Main></Main>,
  
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/details/:id',
                element:<PrivateRoutes>
<FoodDetails></FoodDetails>
                </PrivateRoutes>,
                loader:({params})=> fetch(`https://food-delivery-website-server.vercel.app/breakfast/${params.id}`)
            },
            {
                path: '/details/:id',
                element:<PrivateRoutes>
                <FoodDetails></FoodDetails>
                                </PrivateRoutes>,
                loader:({params})=> fetch(`https://food-delivery-website-server.vercel.app/lunch/${params.id}`)
            },
            {
                path: '/details/:id',
                element:<PrivateRoutes>
                <FoodDetails></FoodDetails>
                                </PrivateRoutes>,
                loader:({params})=> fetch(`https://food-delivery-website-server.vercel.app/dinner/${params.id}`)
            },
            {
                path: '/SignUp',
                element:<SignUp></SignUp>
            },
            {
                path: '/SignIn',
                element:<SignIn></SignIn>
            },
     
        ]
         },

         {
            path: '/dashboard',
            element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
            children: [
                {
                    path: '/dashboard',
                    element: <MyOrders></MyOrders>
                },
                {
                    path: '/dashboard/users',
                    element: <AllUsers></AllUsers>
                },
                
                {
                    path: '/dashboard/history',
                    element:<OrderHistory></OrderHistory>
                },
                
            ]
        }
])
export default router;