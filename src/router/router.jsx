import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts.jsx";
import Home from "../pages/Home.jsx";

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