import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";

import ToyDetails from "../pages/ToyDetails/ToyDetails";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import Toy from "../pages/Toy/Toy";
import AddAToys from "../pages/AddAToys/AddAToys";
import UpdateToy from "../pages/MyToys/UpdateToy";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "addatoy",
        element: (
          <PrivateRoute>
            <AddAToys></AddAToys>
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "toydetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://my-toy.vercel.app/products/${params.id}`),
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoute>
            <Toy></Toy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://my-toy.vercel.app/products/${params.id}`),
      },
      {
        path: "toyupdate/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://my-toy.vercel.app/products/${params.id}`),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
