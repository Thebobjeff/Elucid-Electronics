import { Route, Routes } from "react-router-dom";
import { Home, Shopping } from "../pages/index";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </div>
  );
};
