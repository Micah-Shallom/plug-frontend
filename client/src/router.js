import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";
import BusinessPage from "./pages/BusinessPage";
import MainLayout from "./components/layout";
import ProductsPage from "./pages/ProductsPage";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import AddProduct from "./components/addProduct";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { BusinessShow } from "./components/businessShow";
import AddBusiness from "./components/addBusiness";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <NotFoundPage />,
        children: [
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
                errorElement: <NotFoundPage />,
                element: <BusinessPage/>
            },
            {
                path: "/products",
                errorElement: <NotFoundPage page="Products"/>,
                element: <ProductsPage/>
            },{
                path: "/products/:id",
                errorElement: <NotFoundPage/>,
                element: <ProductDetailPage/>
            }, {
                path: "/products/add",
                errorElement: <NotFoundPage/>,
                element: <AddProduct/>
            },{
                path: "/business/:id",
                errorElement: <NotFoundPage/>,
                element: <BusinessShow/>
            },{
                path: "/business/add",
                errorElement: <NotFoundPage/>,
                element: <AddBusiness/>
            },{
                path:"/contact/add",
                element: <AddBusiness/>,
                errorElement: <NotFoundPage/>
            }
        ]
    },{
        path: "/signup",
        element: <SignUp/>,
        errorElement: <NotFoundPage/>
    },{
        path: "/signin",
        element: <SignIn/>,
        errorElement: <NotFoundPage/>
    }
]);

export default Router;