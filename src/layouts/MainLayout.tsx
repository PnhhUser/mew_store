import { Outlet } from "react-router-dom";

import "./styles/main-layout.css";
import Drawer from "../components/drawer/drawer";
import { Modal } from "../components/modal/modal";

function MainLayout() {
  return (
    <div className="main-layout">
      <Outlet />
      <Drawer />
      <Modal />
    </div>
  );
}

export default MainLayout;
