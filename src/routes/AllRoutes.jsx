import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/index";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </div>
  );
};
