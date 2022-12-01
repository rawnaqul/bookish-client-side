import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/ProductList/AddProduct";
import Advertised from "../../Pages/ProductList/Advertised";
import MyProducts from "../../Pages/ProductList/MyProducts";
import ProductDetails from "../../Pages/ProductList/ProductDetails";
import ProductList from "../../Pages/ProductList/ProductList";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('https://server-bice-beta.vercel.app/categories')
                },
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/productlist/:id',
                loader: async ({ params }) => {
                    return fetch(`https://server-bice-beta.vercel.app/products/${params.id}`)
                },
                element: <ProductList></ProductList>,
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
        ]
    },
    {
        path: '*',
        element: <div><h1>this link does not exist</h1></div>
    }
])

export default router;