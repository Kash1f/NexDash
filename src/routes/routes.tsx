
import Layout from "./../components/Layout/Layout";
import Home from "./../pages/Home/Home";
import Users from "./../pages/Users/Users";
import Products from "./../pages/Products/Products";
import { createBrowserRouter } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products/>,
        },
      ],
    },
  ]);

 

export default router;