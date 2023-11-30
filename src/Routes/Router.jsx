import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../Pages/Payment/Payment";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProducts from "../Pages/UpdateProducts/UpdateProducts";
import ProductReviewQueue from "../Pages/Dashboard/ProductReviewQueue/ProductReviewQueue";
import ReportedProduct from "../Pages/Dashboard/ReportedProduct/ReportedProduct";
import StatisticsExhibit from "../Pages/Dashboard/StatisticsExhibit/StatisticsExhibit";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageCoupons from "../Pages/Dashboard/ManageCoupons/ManageCoupons";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute";
import EditCoupon from "../Pages/Dashboard/EditCoupon/EditCoupon";

const myCreateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <Products></Products>,
        loader: () => fetch("https://tech-products-server-two.vercel.app/productsCount"),
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  //Dashboard Portion
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      //Normal User Routes
      {
        path: "myProfile",
        element: <UserHome></UserHome>,
      },
      {
        path: "addProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProducts></UpdateProducts>,
        loader: ({ params }) =>
          fetch(`https://tech-products-server-two.vercel.app/products/${params.id}`),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      //Moderators routes only
      {
        path: "productReviewQueue",
        element: <ProductReviewQueue></ProductReviewQueue>,
      },
      {
        path: "reportedProduct",
        element: <ReportedProduct></ReportedProduct>,
      },

      //Admin routes Only
      {
        path: "statistics",
        element: <StatisticsExhibit></StatisticsExhibit>,
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageCoupons",
        element: <ManageCoupons></ManageCoupons>,
      },
      {
        path: "manageCoupons/editCoupon/:id",
        element: <EditCoupon></EditCoupon>,
        loader: ({ params }) =>
          fetch(`https://tech-products-server-two.vercel.app/coupons/${params.id}`),
      },
    ],
  },
]);
export default myCreateRoutes;
