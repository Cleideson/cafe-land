"use client";

import React, { useEffect, useState } from "react";

export default function ProductCartRow({
  productId,
  name,
  price,
  quantity,
  onChangeQuantity,
}) {
  
  const [isMounted, setIsMounted] = useState(true);
  let [quantityItem, setQuantityItem] = useState(quantity);

  
  function updateQuantity(e) {
    const itemsStorage = JSON.parse(localStorage.getItem("cart") || "{}");
    const itemToChange = itemsStorage.filter(
      (item) => item.productId == productId
    )[0];
    
    let quantity = e.target.value
    if (e.target.value > 10) {
        quantity = 10;
    }

    if (e.target.value <= 0) {
        quantity = 1;
    }

    itemToChange.quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(itemsStorage));
    setQuantityItem(quantity);
    onChangeQuantity();
  }

  function removeFromCart() {
    const itemsStorage = JSON.parse(localStorage.getItem("cart") || "{}");

    const itemRemove = itemsStorage.filter(
      (item) => item.productId == productId
    )[0];

    itemsStorage.splice(itemsStorage.indexOf(itemRemove), 1);
    localStorage.setItem("cart", JSON.stringify(itemsStorage));
    setIsMounted(false);
    onChangeQuantity();
  }

  {
    if (isMounted)
      return (
        <tr className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {name}
          </th>
          <td className="px-4 py-4">
            <input
              type="number"
              max="10"
              min="1"
              value={quantityItem}
              onChange={updateQuantity}
              className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Quantidade"
            />
          </td>
          <td className="px-6 py-4">R$ {(price / 100).toFixed(2)}</td>
          <td className="px-6 py-4">
            R$ {((price / 100) * quantityItem).toFixed(2)}
          </td>
          <td className="px-6 py-4 text-right">
            <button
              onClick={removeFromCart}
              className="font-medium text-blue-600 dark:text-red-500 hover:underline"
            >
              Remover
            </button>
          </td>
        </tr>
      );
  }
}
