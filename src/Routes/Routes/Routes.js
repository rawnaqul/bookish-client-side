import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/ProductList/AddProduct";
import ProductDetails from "../../Pages/ProductList/ProductDetails";
import ProductList from "../../Pages/ProductList/ProductList";
import Signup from "../../Pages/Signup/Signup";

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
                    return fetch(`http://localhost:5000/products/${params.id}`)
                },
                element: <ProductList></ProductList>,
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
        ]
    }
])

export default router;