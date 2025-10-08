import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Allapp from "../Pages/Allapp";

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
            }

        ]
    }
])

export default router;