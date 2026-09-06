import { Route, Routes } from "react-router-dom";
import { Home, Shopping, ProductPage } from "../pages/index";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
};
