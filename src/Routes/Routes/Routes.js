import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import FoodDetails from "../../Pages/FoodDetails/FoodDetails";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/SignUp/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";

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
                element:<FoodDetails></FoodDetails>,
                loader:({params})=> fetch(`https://food-delivery-website-server.vercel.app/breakfast/${params.id}`)
            },
            {
                path: '/details/:id',
                element:<FoodDetails></FoodDetails>,
                loader:({params})=> fetch(`https://food-delivery-website-server.vercel.app/lunch/${params.id}`)
            },
            {
                path: '/details/:id',
                element:<FoodDetails></FoodDetails>,
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
         }
])
export default router;