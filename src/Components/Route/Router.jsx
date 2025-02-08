import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import MyAppoinments from "../MyAppointments/MyAppoinments";
import AllTreatments from "../AllTreratments/AllTreatments";
import Profile from "../Profile/Profile";
import Details from "../Details/Details";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
        path:'/',
        element:<Home></Home>,
        loader:async()=>{
            const service=await fetch('/service.json')
            const serviceData =await service.json()
            const feedBack=await fetch('happyReview.json')
            const feedBackData = await feedBack.json()
            return  {serviceData,feedBackData}
        }
    },{
        path:'/treatment',
        element:<AllTreatments></AllTreatments>,
        loader:()=>fetch('/service.json')
    }
    ,{
        path:'/appointment',
        element:<MyAppoinments></MyAppoinments>
    },{
        path:'/profile',
        element:<Profile></Profile>
    },{
        path:"/details/:id",
        loader:async({params})=>{
            const response = await fetch("/service.json");
            const services = await response.json();
            const service = services.find(service => service.id.toString() === params.id);
            return service
        },
       
        element:<PrivateRoute> <Details></Details> </PrivateRoute>
       
     },{
        path:"/register",
        element:<Register></Register>
     }
     ,{
        path:"/login",
        element:<Login></Login>
     }


]
  },
]);
