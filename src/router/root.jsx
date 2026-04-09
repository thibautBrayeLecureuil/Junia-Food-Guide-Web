import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path:"/restaurant/:id",
                element : <Detail/>
            }
        ]
    }
]);

export default router;