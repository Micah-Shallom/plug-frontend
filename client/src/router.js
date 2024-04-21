import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";
import BusinessPage from "./pages/BusinessPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage title={"Home"}/>,
        errorElement: <NotFoundPage />
    },
    {
        path: "/about",
        element: <AboutPage/>,
        errorElement: <NotFoundPage />
    },
    {
        path: "/business",
        element: <BusinessPage/>,
        errorElement: <NotFoundPage />
    }
]);



export default Router;