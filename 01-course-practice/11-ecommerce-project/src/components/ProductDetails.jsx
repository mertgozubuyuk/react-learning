import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  decrement,
  increment,
  setSelectedProduct,
} from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "../css/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct, count } = useSelector(
    (store) => store.products,
  );
  const { price, image, title, description } = selectedProduct;
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };
  return (
    <div className="product-detail-container">
      <div className="product-detail-image-box">
        <img src={image} alt={title} />
      </div>

      <div className="product-detail-info-box">
        <h2 className="product-detail-title">{title}</h2>
        <p className="product-detail-description">{description}</p>
        <p className="product-detail-price">{price}$</p>

        <div className="product-actions-wrapper">
          <div className="product-operations-icon">
            <CiCirclePlus
              className="product-increment"
              onClick={() => dispatch(increment())}
            />
            <span className="count-text">{count}</span>
            <IoIosRemoveCircleOutline
              className="product-decrement"
              onClick={() => {
                if (count > 0) {
                  dispatch(decrement());
                }
              }}
            />
          </div>
          <button className="add-to-cart-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
