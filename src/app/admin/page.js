"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, getUserData } from "@/firebase/authetication";

import { deleteProduct, getProducts, saveProduct } from "@/firebase/product";
import { getOrders, saveOrder, updateOrder } from "@/firebase/order";
import { useRouter } from "next/navigation";

export default function Admin() {
  const [user, setUser] = useState(null);
  const [ordersTab, setOrdersTab] = useState(true);
  const [productsTab, setProductsTab] = useState(false);
  const [productTab, setProductTab] = useState(false);
  const [orderStatusTab,setOrderStatusTab] = useState(false)

  //list of products
  const [productList, setProductList] = useState([]);

  //List of orders
  const [ordersList, setOrdersList] = useState([]);
  //product to save or edit
  const [productId, setProductId] = useState(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  //order to edit
  const [orderClientName,setOrderClientName] = useState("")
  const [orderId,setOrderId] = useState('')
  const [orderStatus,setOrderStatus] = useState(false)


  const router = useRouter();
  //Control the screens of dashboard
  function openOrders() {
    setOrdersTab(true);
    setOrderStatusTab(false)
    setProductsTab(false);
    setProductTab(false);
  }
  function openProductsTab() {
    setOrdersTab(false);
    setProductsTab(true);
    setProductTab(false);
    setOrderStatusTab(false)
  }
  function openOrderTab(id){
    setOrdersTab(false);
    setProductsTab(false);

    if (id != null) {
      setProductId(id);
      ordersList.forEach((order) => {
        if (order.id == id) {
          setOrderClientName(order.clientName)
          setOrderId(order.id);
          setOrderStatus(order.status)
        }
      });
    } else {
      setOrderClientName("")
      setOrderId("")
      setOrderStatus("");
    }
    setOrderStatusTab(true);
  }

  function openProductTab(id) {
    setOrdersTab(false);
    setProductsTab(false);
    setOrderStatus(false)

    if (id != null) {
      setProductId(id);
      productList.forEach((product) => {
        if (product.uid == id) {
          setProductName(product.productName);
          setProductPrice(product.productPrice / 100);
        }
      });
    } else {
      setProductName("");
      setProductPrice("");
    }

    setProductTab(true);
  }

  const makeGetProducts = async () => {
    try {
      const products = await getProducts();
      setProductList(products);
    } catch (error) {
    }
  };
  const makeGetOrders = async () => {
    try {
      const orders = await getOrders();
      setOrdersList(orders);
    } catch (error) {
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        setUser(user);
        const userData = await getUserData(user.uid);
        if(userData.admin){
          return
        }
        return router.push('/')

      }
    });
    makeGetProducts().catch((error) => {
    });
    makeGetOrders().catch((error)=>{
    })
  }, []);

  function makeLogout() {
    if (user == null) {
      router.push("/");
    } 
    else {
      auth.signOut();
      setUser(null);
      router.push("/");
    }
  }

  async function makeSaveProduct(e) {
    e.preventDefault();

    let product = { productName, productPrice };

    if (productId != null) {
      product = { uid: productId, productName, productPrice };
    }

    const result = await saveProduct(product);

    if (result) {
      setProductTab(false);
      setProductsTab(true);
      setProductId(null);
      makeGetProducts();
    }
  }
  function handleChange(e){
    setOrderStatus(e.target.value);
  }
  async function makeSaveOrder(e){
    e.preventDefault()
    
    if(await updateOrder(orderId,orderStatus)){
      setOrderStatusTab(false)
      makeGetOrders()
      setOrdersTab(true)
    }
    
  }

  async function makeDelete(uid) {
    const result = await deleteProduct(uid);
    makeGetProducts();
  }

  return (
    <div>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="sidebar-multi-level-sidebar"
        aria-hidden="true"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="h-8 w-8 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
                </svg>
                <span className="ml-3">Voltar ao site</span>
              </Link>
            </li>
            <li>
              <button
                onClick={openOrders}
                className=" w-full text-left flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="h-8 w-8 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />{" "}
                  <rect x="9" y="3" width="6" height="4" rx="2" />{" "}
                  <line x1="9" y1="12" x2="9.01" y2="12" />{" "}
                  <line x1="13" y1="12" x2="15" y2="12" />{" "}
                  <line x1="9" y1="16" x2="9.01" y2="16" />{" "}
                  <line x1="13" y1="16" x2="15" y2="16" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Pedidos</span>
              </button>
            </li>
            <li>
              <button
                onClick={openProductsTab}
                className="w-full text-left flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="h-8 w-8 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="9" cy="19" r="2" />{" "}
                  <circle cx="17" cy="19" r="2" />{" "}
                  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Produtos
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={makeLogout}
                className="flex text-left w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64" hidden={!ordersTab}>
        <div className="flex p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="w-full">
            <h3 className="text-2xl text-center my-5 uppercase">
              Lista de Pedidos Atuais
            </h3>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Nome do Cliente
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total do Pedido
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Editar Status
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
                              {item.clientName}
                            </th>
                            <td className="px-6 py-4">
                              R$ {(item.totalValue/100).toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                              {item.statusName}
                            </td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => {
                                  openOrderTab(item.id);
                                }}
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Editar
                              </button>
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
      <div className="p-4 sm:ml-64" hidden={!productsTab}>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h3 className="text-2xl text-center my-5 uppercase">
            Lista de Produtos
          </h3>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nome do Produto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Preço
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(productList)
                  ? productList.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {item.productName}
                          </th>
                          <td className="px-6 py-4">
                            R$ {(item.productPrice / 100).toFixed(2)}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => {
                                openProductTab(item.uid);
                              }}
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Editar
                            </button>
                            <button
                              onClick={(e) => {
                                makeDelete(item.uid);
                              }}
                              className="font-medium text-red-600 dark:text-blue-500 hover:underline ml-4"
                            >
                              Excluir
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => {
                  openProductTab();
                }}
                className="text-lg p-2 item-center rounded-lg my-5 w-96 bg-blue-500"
              >
                Adicionar novo Produto
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 sm:ml-64" hidden={!productTab}>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h3 className="text-2xl text-center my-5 uppercase">
            Adicionar produto
          </h3>
          <form onSubmit={makeSaveProduct}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="productName"
                id="productName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                value={productName}
                placeholder=""
                autoComplete="off"
                required
              />
              <label
                htmlFor="productName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nome do produto
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                step="0.1"
                name="productPrice"
                id="productPrice"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
                min="1"
                value={productPrice}
                placeholder=" "
                required
              />
              <label
                htmlFor="productPrice"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Preço
              </label>
            </div>
            <div>
              <button
                type="button"
                onClick={openProductsTab}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 mr-2 text-lg w-full"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Salvar
              </button>
            </div>
          </form>
          
        </div>
      </div>
      <div className="p-4 sm:ml-64" hidden={!orderStatusTab}>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h3 className="text-2xl text-center my-5 uppercase">
            Editar Status do Pedido
          </h3>
          <form onSubmit={makeSaveOrder}>
            <div className="relative z-0 w-full mb-6 group">
             <p className="mb-2">Pedido: {orderId}</p>
              <p
              >
                Cliente: {orderClientName}
              </p>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="orderStatus"
                className="lock mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                name="orderStatus"
                id="orderStatus"
                value={orderStatus}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="0">Cancelado</option>
                <option value="1">Aguardando Pagamento</option>
                <option value="2">Pedido Recebido</option>
                <option value="3">Pedido Enviado</option>
                <option value="4">Entregue</option>
              </select>
              
            </div>
            <div>
              <button
                type="button"
                onClick={openOrders}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 mr-2 text-lg w-full"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Salvar
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
