import "./card-product.css";
import img01 from "../../assets/images/img01.jpg";
import { FaShoppingCart } from "react-icons/fa";

function CardProduct() {
  return (
    <div className="card-product">
      <div className="card-product__image">
        <img src={img01} alt="product" />
        <span className="card-product__badge">-20%</span>
      </div>

      <div className="card-product__content">
        <h4 className="card-product__title">Product 01</h4>

        <div className="card-product__price-group">
          <span className="card-product__price">$29.99</span>
          <span className="card-product__old-price">$39.99</span>
        </div>

        <div className="card-product__actions">
          <button className="card-product__btn">
            <FaShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
