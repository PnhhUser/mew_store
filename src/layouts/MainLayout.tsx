import { Outlet } from "react-router-dom";

import "./styles/main-layout.css";
import Drawer from "../components/drawer/drawer";

function MainLayout() {
  return (
    <div className="main-layout">
      <Outlet />
      <Drawer />
    </div>
  );
}

export default MainLayout;
