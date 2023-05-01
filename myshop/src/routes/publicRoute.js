import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import Shop from "../pages/Shop/Shop.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import WishPage from "../pages/WishPage/WishPage.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import SingleProduct from "../pages/SingleProduct/SingleProduct.jsx";
import Categories from "../components/Categories/Categories.jsx";
import Tags from "../components/Tags/Tags.jsx";
import Brands from "../components/Brands/Brands.jsx";
import Products from "../components/Products/Products.jsx";
// create public routes

const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/:slug",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wish",
        element: <WishPage />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "categories",
            element: <Categories />,
          },
          {
            path: "brands",
            element: <Brands />,
          },
          {
            path: "Tags",
            element: <Tags />,
          },
        ],
      },
    ],
  },
]);

// export

export default publicRoute;
