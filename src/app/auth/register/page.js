"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {useRouter} from 'next/navigation';

//auth
import { signupWithEmail,auth, loginWithEmail } from "@/firebase/authetication";
import { userContext } from "@/context/appContext";

export default function Register() {

  const [isSubmitDisabled,setIsSubmitDisabled] = useState(false);
  const [hiddenError,setHiddenError] = useState(Boolean);
  let [errorMsg,setErrorMsg] = useState("");

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [street,setStreet] = useState("");
  const [numberHouse,setNumberHouse] = useState("");
  const [district,setDistrict] = useState("");
  const [complement,setComplement] = useState("");

  const router = useRouter();

  useEffect(()=>{
    setHiddenError(true)
  },[])

  async function makeSignup(e){
    e.preventDefault();
    setIsSubmitDisabled(true)
    
    try{
      const result = await signupWithEmail({name,email,password,street,numberHouse,district,complement})
      if(result){
        console.log("redirect")
        router.push("/")
      }
    }catch(error){
      const errorMsg= error.code
      switch(errorMsg){
        case 'auth/email-already-in-use':
          setErrorMsg("Email em uso!")      
          setHiddenError(false)
          break;
        default:
        console.log(error)
        setHiddenError(false)
        break;
      }
    }

  }

  return (
    <main className="bg-gray-900 h-screen flex justify-center">
      <div className="container lg:w-6/12 h-fit bg-gray-800 mt-32 rounded-lg">
        <Link
          className="text-white p-2 bg-indigo-600 w-full block text-center"
          href="/"
        >
          Voltar ao site
        </Link>
        <h1 className="text-2xl text-center mb-2 mt-5 ">
          Necessario uma conta para fazer compras
        </h1>
        <form className="p-5" onSubmit={makeSignup}>
          <div className="mb-2 border-lg bg-red-950 rounded-lg p-2" hidden={hiddenError}>
              <p className='text-sm text-center'>{errorMsg}</p>
            </div>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e)=>setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="João Barbosa"
              required
            />
          </div>
          <div className="mb-6 ">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="joao@mail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Sua senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="*********"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <h5 className="text-center text-2xl">Endereço</h5>
          <div className="flex">
            <div className="mb-6 w-10/12 ">
              <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Logadouro
              </label>
              <input
                type="text"
                id="street"
                name="street"
                onChange={(e)=>setStreet(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Rua Almeida"
                required
              />
            </div>
            <div className="mb-6 w-2/12 ml-2">
              <label htmlFor="houseNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Numero
              </label>
              <input
                type="text"
                id="houseNumber"
                name="houseNumber"
                onChange={(e)=>setNumberHouse(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="00"
                required
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-6 w-8/12 ">
              <label htmlFor="district" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bairro
              </label>
              <input
                type="text"
                name="district"
                onChange={(e)=>setDistrict(e.target.value)}
                id="district"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Centro"
                required
              />
            </div>
            <div className="mb-6 w-4/12 ml-2">
              <label htmlFor="complement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Complemento
              </label>
              <input
                type="text"
                name="complement"
                onChange={(e)=>setComplement(e.target.value)}
                id="complement"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bar Almeida"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={isSubmitDisabled}
          >
            Registrar-se
          </button>
          <Link
            className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 p-2 block rounded-lg text-center mt-2  focus:outline-none font-medium text-sm cursor-pointer"
            href="/auth"
          >
            Login
          </Link>
        </form>
      </div>
    </main>
  );
}
