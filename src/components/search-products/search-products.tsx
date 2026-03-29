import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

import "./search-products.css";

function SearchProducts() {
  const [searchValue, setSearchValue] = useState("");

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <div className="search-products">
      <div className="search-wrapper">
        <FiSearch className="search-icon" size={18} />

        <input
          type="text"
          name="search-products"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {searchValue && (
          <button className="clear-btn" onClick={handleClear}>
            <FiX size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchProducts;
