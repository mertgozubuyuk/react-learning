import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";
import Loading from "./Loading";

function ProductList() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="product-grid">
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
