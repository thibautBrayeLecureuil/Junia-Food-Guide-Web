import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/jsx/Home.jsx";
import ErrorPage from "../pages/jsx/ErrorPage.jsx";
import Restaurants from "../pages/jsx/Restaurants.jsx";
import RestaurantDetail from "../pages/jsx/RestaurantDetail.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/home" replace></Navigate>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path:"/restaurant/:id",
                element : <RestaurantDetail/>
            },
            {
                path:"/restaurants",
                element : <Restaurants/>
            }
        ]
    }
]);

export default router;