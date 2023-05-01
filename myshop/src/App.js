import { RouterProvider } from "react-router-dom";
import publicRouter from "./routes/publicRoute.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllBrand,
  getAllCategory,
  getAllProducts,
  getAllTags,
} from "./redux/shop/Actions.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand());
    dispatch(getAllCategory());
    dispatch(getAllTags());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={publicRouter} />
    </>
  );
}

export default App;
