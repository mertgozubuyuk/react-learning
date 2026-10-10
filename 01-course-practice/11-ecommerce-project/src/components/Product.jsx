import React from "react";
import "../css/Products.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title} = product;

  const nagivate = useNavigate();
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img className="product-img" src={image} alt={title} />
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}$</p>
      </div>

      <div className="product-actions">
        <button onClick={() => nagivate(`/product-details/${id}`)} className="product-btn">Go to details</button>
      </div>
    </div>
  );
}

export default Product;
