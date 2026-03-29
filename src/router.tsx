import { Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home";
import Shop from "./pages/shop";
import Support from "./pages/support";
import Sigin from "./pages/sigin";
import Cart from "./pages/cart";

export const Router = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />

      <Route path="shopping" element={<Shop />} />
      <Route path="shopping/cart" element={<Cart />} />

      <Route path="support" element={<Support />} />
      <Route path="sigin" element={<Sigin />} />
    </Route>
  </Routes>
);
