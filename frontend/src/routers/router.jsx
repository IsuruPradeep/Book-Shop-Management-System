import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from './../pages/home/Home';
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/cartPage";
import CheckoutPage from '../pages/books/CheckoutPage';
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from './AdminRoute';
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path: "/order",
            element: <PrivateRoute><OrderPage/></PrivateRoute>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
           path:"/login",
           element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
         },
         {
            path:"/cart",
            element : <CartPage/>
         },
         {
           path:"/checkout",
            element :  <PrivateRoute><CheckoutPage/></PrivateRoute>
         },
         {
           path:"/books/:id",
            element : <SingleBook/> 
         }
        ]
    },
    {
        path: "/admin",
        element: <AdminLogin/>
    },
    {
        path: "/dashboard",
        element: <AdminRoute><DashboardLayout/></AdminRoute>,
        children: [
            {
                path: "",
                element: <AdminRoute><Dashboard/></AdminRoute>

            },
            {
                path: "add-new-book",
                element: <AdminRoute><AddBook/></AdminRoute>
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute><UpdateBook/></AdminRoute>
            },
            {
                path: "manage-book",
                element: <AdminRoute><ManageBooks/></AdminRoute>
            },
        ]
    }
]);

export default router;
