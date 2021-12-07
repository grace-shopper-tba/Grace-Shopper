import React from "react";

const product = {
  name: "apple",
  type: "fruit",
  season: "autumn",
  price: "$0.56",
  imageUrl:
    "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};

const SingleProduct = (props) => {
  return (
    <div>
      <div>
        <img src={product.imageUrl} />
        <button className="quantity-decrement-button">-</button>
        <p>Quantity placeholder</p>
        <button className="quantity-increment-button">+</button>
        <button id="add-to-cart-button">Add to Cart</button>
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>Season: {product.season}</p>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
