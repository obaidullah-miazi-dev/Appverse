import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Allapp from "../Pages/Allapp";
import Installation from "../Pages/Installation";

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
            }

        ]
    }
])

export default router;