import { useState } from "react";

import "./App.css";
import Product from "./Product";
import Container from "./Container";

function App() {
  const productName = "Trousers";
  const price = 1500;
  return (
    <div>
      <Container>
        <h1>Product İnformation</h1>
        <hr />
        <Product productName="Shoes" price={3000} />
        <hr />
        <Product productName="T-shirt" price={1000} />
        <hr />
        <Product productName={productName} price={price} />
      </Container>
    </div>
  );
}

export default App;
