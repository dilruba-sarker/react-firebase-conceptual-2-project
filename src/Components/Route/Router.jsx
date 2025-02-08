import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
        path:'/',
        element:<Home></Home>
    },{
        
    }


]
  },
]);
