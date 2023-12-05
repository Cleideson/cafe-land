"use client";
import { useEffect, useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import { getOrdersById } from "@/firebase/order";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/authetication";

export default function Track(){
    const [user,setUser] = useState(null);
    const [ordersList,setOrdersList] = useState(null)
    const router = useRouter();
    const getUserWithData = async () => {
        auth.onAuthStateChanged(async (user) => {
          if (user != null) {
            setUser(user);
            try{
               const orders = await getOrdersById(user.uid)
               setOrdersList(orders)
               console.log(orders)
            }catch(error){
                //error
            }
          }else{
            router.push("/")
          }
        });
      };

    useEffect(()=>{
        getUserWithData();
    },[])
    return(
        <HomeLayout>
            <div className="p-4 sm:ml-128 w-106 min-h-screen">
              <div className="flex p-4">
                <div className="w-full">
                  <h3 className="text-2xl text-center my-5 uppercase">
                    Lista de Pedidos Atuais
                  </h3>
                  <div className="flex justify-center  overflow-x-auto text-center content-center mx-auto shadow-md sm:rounded-lg">
                    <table className="table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                        <th scope="col" className="px-6 py-3">
                            Numero do Pedido
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Nome do Cliente
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Total do Pedido
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(ordersList)
                          ? ordersList.map((item, index) => {
                              return (
                                <tr
                                  key={index}
                                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                  <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    {item.id}
                                  </th>
                                  <td className="px-6 py-4">
                                    {item.clientName}
                                  </td>
                                  <td className="px-6 py-4">
                                  R$ {(item.totalValue/100).toFixed(2)}
                                  </td>
                                  <td className="px-6 py-4">
                                    {item.statusName}
                                  </td>
                                </tr>
                              );
                            })
                          : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </HomeLayout>
    )
}