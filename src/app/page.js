"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import ProductCard from "../components/productCard";
import HomeLayout from "./layouts/HomeLayout";
import { getProducts } from "@/firebase/product";

export default function Home() {
  const [products,setProducts] = useState([])

  const makeGetProducts = async () => {
    try {
      const products = await getProducts();
      setProducts(products);
    } catch (error) {
      //error
    }
  };

  useEffect(()=>{
    makeGetProducts();
  },[])
  return (
    <HomeLayout>
      <div className="md:w-1/2 md:rounded-lg container mx-auto p-16 mt-2 bg-gray-800">
        <h3 className="md:text-2xl text-gray-900 dark:text-white">
          Bem vindo a CafeLand, Aqui você encontra o melhor café da região, faça
          já seu pedido no conforto da sua casa ou trabalho!{" "}
        </h3>
        <p className="mt-2 text-sm italic">
          "O café pode melhorar o desempenho cognitivo e a concentração."
        </p>
      </div>
      <div className="container mx-auto mt-5">
        <h5 className="text-center font-bold font-gray-800 text-5xl my-12">
          Escolha o seu café:
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
        {Array.isArray(products)
              ? products.map((item, index) => {
              return (
                <ProductCard key={index} productId={item.uid} name={item.productName} price={item.productPrice} quantity={1} />
              )
            }) : null
        }
        </div>
        <div className="justify-center flex">
          <Link href="/cart" className="bg-blue-900 p-4 rounded-lg item-center mt-5 ">Ir ao Carrinho</Link>
        </div>
      </div>
    </HomeLayout>
  );
}
