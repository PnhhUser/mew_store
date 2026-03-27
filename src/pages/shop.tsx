import FilterProduct from "../components/filter-products/filter-product";
import SearchProducts from "../components/search-products/search-products";
import Tools from "../components/tools/tools";

import "./styles/shop.css";

function Shop() {
  return (
    <div id="container-shop">
      <div className="frame-left">
        <SearchProducts />
        <FilterProduct />
      </div>
      <div className="frame-right">content</div>
      <Tools />
    </div>
  );
}

export default Shop;
