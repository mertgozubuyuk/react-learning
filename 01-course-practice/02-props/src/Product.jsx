import React from "react";

function Product({productName, price}) {
    
  return (
    <div>
      <div> Name: {productName} </div>
      <div> Price: {price}TL</div>
    </div>
  );
}

export default Product;
