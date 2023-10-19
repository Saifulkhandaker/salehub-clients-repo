import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import AllProducts from "../components/AllProducts";
import ProductDetails from "../components/ProductDetails";
import UpdateProduct from "../components/UpdateProduct";
import Register from "../components/Register";
import PrivateRoute from "../Providers/PrivateRoute";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brand.json')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },
            {
                path: '/myCart',
                element: <PrivateRoute>
                     <MyCart></MyCart>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/allProducts',
                element: <AllProducts></AllProducts>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/updateProduct/:id',
                element:<PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            }
        ]
    }
])

export default myCreatedRoute;