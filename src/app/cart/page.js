"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import HomeLayout from "@/app/layouts/HomeLayout";
import ProductCartRow from "@/components/productCartRow";
import { auth, getUserData } from "@/firebase/authetication";
import { saveOrder } from "@/firebase/order";

export default function Cart() {
  let [productItems, setProductItems] = useState([]);
  let [isConfirmEnabled,setIsConfirmEnabled] = useState(false)
  let [user, setUser] = useState(null);
  let [confirmCartText, setConfirmCartText] = useState("Confirmar o pedido");
  let [hideAddress, setHideAddress] = useState(Boolean);
  let [totalCart, setTotalCart] = useState(0);

  const router = useRouter();

  const getUserWithData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        user.data = await getUserData(user.uid);
        setUser(user);
        setHideAddress(false);
      } else {
        setHideAddress(true);
        setConfirmCartText("Realizar login");
      }
    });
  };

  React.useEffect(() => {
    getUserWithData().catch((Error) => {});
    
    const items = JSON.parse(localStorage.getItem("cart") || "{}");
    setProductItems(items);
    updateQuantity();
  }, []);

  function updateQuantity() {
    const items = JSON.parse(localStorage.getItem("cart") || "{}");

    if (items.length > 0) { 
      let total = 0;
      items.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotalCart(total);
    }
  }
  function confirmPayment(e) {
    const items = JSON.parse(localStorage.getItem("cart") || "{}");
    setIsConfirmEnabled(true)
    if (user != null) {
      if(items.length <=0){
        router.push('/')
        return
      }

      const itemsFilter = items.map((item)=>{
        return {
          productId:item.productId,
          productQuantity:item.quantity
        }
      })

      const order = {userId:user.uid, products:itemsFilter}
      const result = saveOrder(order);
      if(result){
        router.push('/orders')
      }
    } else {
      router.push("/auth");
      return
    }
  }

  return (
    <HomeLayout>
      <div
        className="container mx-auto mt-10 bg-black-900"
        style={{ minHeight: "800px" }}
      >
        <div className="relative overflow-x-hidden shadow-md sm:rounded-lg">
          <h1 className="text-5xl uppercase my-5 text-center">
            Detalhes do pedido
          </h1>
          <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome Produto
                </th>
                <th scope="col" className="px-1 py-3">
                  Quantidade
                </th>
                <th scope="col" className="px-4 py-3">
                  Valor Unitario
                </th>
                <th scope="col" className="px-4 py-3">
                  Valor Total
                </th>
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Remover</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(productItems)
                ? productItems.map((item, index) => {
                    return (
                      <ProductCartRow
                        key={index}
                        productId={item.productId}
                        quantity={item.quantity}
                        name={item.name}
                        price={item.price}
                        onChangeQuantity={updateQuantity}
                      />
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
        <div className="mx-auto w-full mt-5 bg-gray-600 p-5">
          <h5 className="text-2xl text-center mb-5 uppercase">
            Resumo do pedido
          </h5>
          <p>Pagamento via PIX</p>
          <p>Total do Pedido: R$ {(totalCart / 100).toFixed(2)}</p>

          <div hidden={hideAddress}>
            <h5 className="text-2xl text-center mb-5 uppercase">
              Endereço para Entrega
            </h5>
            <p className="mt-3">{user ? user.data.name : ""}</p>
            <p>
              {user ? user.data.street : ""} N° {user ? user.data.numberHouse : ""}
            </p>
            <p>Complemento: {user ? user.data.complement : ""}</p>
            <p>{user ? user.data.district : ""}</p>
          </div>
        </div>
        <div className="justify-center flex">
          <Link
            href="/"
            className="bg-lime-600 p-2  item-center mt-5 w-64 text-center rounded-lg"
          >
            Voltar as compras
          </Link>
        </div>
        <div className="justify-center flex">
          <button
            onClick={confirmPayment}
            disabled={isConfirmEnabled}
            className="bg-blue-900 p-4 mt-2 rounded-lg item-center w-64 text-center"
          >
            {confirmCartText}
          </button>
        </div>
      </div>
    </HomeLayout>
  );
}
