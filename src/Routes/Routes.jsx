import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Allapp from "../Pages/Allapp";
import Installation from "../Pages/Installation";
import AppDetails from "../Components/AppDetails";
import ErrorPage404 from "../Components/ErrorPage404";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/allapp',
                Component: Allapp
            },
            {
                path:'/installation',
                Component:Installation
            },
            {
                path:'/app/:id',
                Component:AppDetails
            },
            {
                path:'*',
                Component:ErrorPage404
            }

        ]
    }
])

export default router;