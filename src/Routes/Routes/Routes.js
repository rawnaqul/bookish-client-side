import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyBookings from "../../Pages/Dashboard/MyBookings";
import MyWishList from "../../Pages/Dashboard/MyWishList";
import Contact from "../../Pages/Home/Home/Contact";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/ProductList/AddProduct";
import Advertised from "../../Pages/ProductList/Advertised";
import MyProducts from "../../Pages/ProductList/MyProducts";
import ProductDetails from "../../Pages/ProductList/ProductDetails";
import ProductList from "../../Pages/ProductList/ProductList";
import Signup from "../../Pages/Signup/Signup";
import AllBuyers from "../../Pages/Users/AllBuyers";
import AllSellers from "../../Pages/Users/AllSellers";
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
                element: <PrivateRoutes><ProductList></ProductList></PrivateRoutes>,
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
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
            {
                path: '/dashboard/mywishlist',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/mybookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
        ]
    },
    {
        path: '*',
        element: <div><h1>this link does not exist</h1></div>
    }
])

export default router;