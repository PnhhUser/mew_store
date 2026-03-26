import { Outlet } from "react-router-dom";

import "./styles/main-layout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <Outlet />
    </div>
  );
}

export default MainLayout;
