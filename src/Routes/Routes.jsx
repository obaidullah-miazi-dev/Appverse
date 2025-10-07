import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/'
            }
        ]
    }
])

export default router;