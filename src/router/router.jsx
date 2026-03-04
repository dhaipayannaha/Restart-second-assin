import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children: [
            {
                path: '/',
                Component: Home
            }
        ]
    }
])

export default router;