import CardProduct from "../components/card-product/card-product";
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
      <div className="frame-right">
        <CardProduct />
      </div>
      <Tools />
    </div>
  );
}

export default Shop;
