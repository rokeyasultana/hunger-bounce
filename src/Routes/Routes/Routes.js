import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";

const router= createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorElement></ErrorElement>,
        element:<Main></Main>,
  
        children:[
            {
                path: '/',
                element:<Home></Home>
            }
           
     
        ]
         }
])
export default router;