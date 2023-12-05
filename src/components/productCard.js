"use client";

import React, { useState } from "react";

export default function ProductCard({productId, name, price }) {
  let productItems = [];
  let [removeState, setRemoveState] = useState(Boolean);

  React.useEffect(() => {
    productItems = JSON.parse(localStorage.getItem("cart") || "{}");
    if (productItems.length > 0) {
      productItems.forEach((product) => {
        if (product.productId == productId) {
          setRemoveState(true);
        }
      });
    }
  });

  function addProductToCart() {
    if (localStorage.getItem("cart")) {
      productItems = JSON.parse(localStorage.getItem("cart") || "{}");
      
      const item = productItems.filter(
        (product) => product.productId == productId
      );

      if (item.length <= 0) {
        productItems.push({ productId, name, price, quantity: 1 });
        setRemoveState(true);
      } else {
        productItems.splice(productItems.indexOf(item[0]), 1);
        setRemoveState(false);
      }
      
    }else{
      productItems = [{ productId, name, price, quantity: 1 }];
      setRemoveState(true);
    }
    
    localStorage.setItem("cart", JSON.stringify(productItems));
  }

  return (
    <div
      id={productId}
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="h-48 w-48 mx-auto rounded-t-lg"
        src="https://static.vecteezy.com/system/resources/previews/010/856/650/non_2x/a-cup-of-coffee-with-coffee-beans-free-png.png"
        alt="product image"
      />
      <div className="">
        <div className="p-5">
          <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h6 className="text-3xl text-center font-bold text-gray-900 dark:text-white">
            R$ {(price/100).toFixed(2)}
          </h6>
        </div>
      </div>
      <div className="flex">
        <button
          onClick={addProductToCart}
          className={
            removeState
              ? "p-2 w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              : "p-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          }
        >
          {removeState ? "Remover do Carrinho" : "Adicionar ao carrinho"}
        </button>
      </div>
    </div>
  );
}
