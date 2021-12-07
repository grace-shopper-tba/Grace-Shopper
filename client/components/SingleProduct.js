import React from "react";
/*
To confirm:
Cooking techniques will be an array? Or something?
What format will weight be in? A string? How will we know the units? Can we calculate the weight?
*/

const product = {
  season: "autumn",
  price: "$0.56",
  cookingTechniques:
    "bake, caramelize, deep-fry, grill, poach,raw, saute, stew",
  weight: 6,
  imageUrl:
    "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  name: "apple",
  taste: ["sweet, astringent"],
  type: "fruit",
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
        <p>Taste: {product.taste}</p>
        <p>Cooking Techniques: {product.cookingTechniques}</p>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
