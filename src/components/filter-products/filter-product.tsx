import { LuFilter } from "react-icons/lu";
import { FiCheck } from "react-icons/fi";
import { useState, useMemo, useCallback } from "react";

import "./filter-product.css";

const CATEGORY_LIST = [
  { id: "pet-food", label: "Food" },
  { id: "pet-treats", label: "Treats & snacks" },
  { id: "pet-toys", label: "Toys" },
  { id: "pet-bed", label: "Beds & mats" },
  { id: "pet-bowls", label: "Bowls & feeders" },

  { id: "pet-clothes", label: "Clothing" },
  { id: "pet-accessories", label: "Accessories" },

  { id: "pet-leash", label: "Leashes & collars" },

  { id: "pet-litter", label: "Litter & toilet" },
];

const MAX_PRICE = 500;

function FilterProduct() {
  const [selected, setSelected] = useState(() => new Set());
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);

  // ===== HANDLER =====
  const handleToggle = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }, []);

  const handleApply = useCallback(() => {
    console.log({
      categories: Array.from(selected),
      price: { min, max },
    });
  }, [selected, min, max]);

  const categories = useMemo(() => CATEGORY_LIST, []);

  // ===== RANGE STYLE =====
  const minPercent = (min / MAX_PRICE) * 100;
  const maxPercent = (max / MAX_PRICE) * 100;

  const rangeStyle = {
    background: `linear-gradient(
      to right,
      #eee ${minPercent}%,
      #647fbc ${minPercent}%,
      #647fbc ${maxPercent}%,
      #eee ${maxPercent}%
    )`,
  };

  return (
    <div className="filter-products">
      <h5 className="filter-products__title">
        <LuFilter style={{ marginRight: 8 }} />
        filter
      </h5>

      <form
        className="filter-products__form"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* CATEGORY */}
        {categories.map((item) => {
          const isChecked = selected.has(item.id);

          return (
            <div
              key={item.id}
              className="filter-products__form-group"
              onClick={() => handleToggle(item.id)}
            >
              <span className="filter-products__label">{item.label}</span>

              <input
                type="checkbox"
                checked={isChecked}
                readOnly
                className="filter-products__checkbox"
              />

              <span className="filter-products__checkmark">
                <FiCheck className="filter-products__icon" />
              </span>
            </div>
          );
        })}

        {/* PRICE */}
        <div className="filter-products__price">
          <div className="filter-products__price-header">
            <span>${min}</span>
            <span>${max}</span>
          </div>

          <div className="filter-products__range" style={rangeStyle}>
            <input
              type="range"
              min="0"
              max={MAX_PRICE}
              value={min}
              onChange={(e) => setMin(Math.min(+e.target.value, max))}
              className="range range--min"
            />

            <input
              type="range"
              min="0"
              max={MAX_PRICE}
              value={max}
              onChange={(e) => setMax(Math.max(+e.target.value, min + 50))}
              className="range range--max"
            />
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="button"
          className="filter-products__btn"
          onClick={handleApply}
        >
          Apply Filter
        </button>
      </form>
    </div>
  );
}

export default FilterProduct;
