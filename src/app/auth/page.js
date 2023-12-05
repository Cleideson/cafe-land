"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';


import { loginWithEmail,auth } from '@/firebase/authetication';

export default function Auth() {
  const [hiddenError,setHiddenError] = useState(Boolean);
  let [errorMsg,setErrorMsg] = useState("");

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const router = useRouter()

  async function makeLogin(e){
    e.preventDefault();
    
    try{
      const user = await loginWithEmail(email,password);
      router.push("/")

    }catch(error){
      setErrorMsg("Dados Invalidos!");
      setHiddenError(false);

    }

    
  }

  useEffect(()=>{
    setHiddenError(true)
    auth.onAuthStateChanged( (user)=>{
      if(user){
        router.push("/")
      }
    },(err)=>{
     
    })
  },[])

  return (
    <main className="bg-gray-900 flex justify-center h-screen">
      <div className="w-96 h-fit bg-gray-800 mt-48 rounded-lg">
        <Link className="text-white p-2 bg-indigo-600 w-full block text-center" href="/">Voltar ao site</Link>
        <h1 className="text-2xl text-center mb-2 mt-5">Necessario realizar login para fazer compras</h1>
        <form className='p-5' onSubmit={makeLogin}>
          <div className="mb-6">
            <div className="mb-2 border-lg bg-red-950 rounded-lg p-2" hidden={hiddenError}>
              <p className='text-sm text-center'>{errorMsg}</p>
            </div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete='true' placeholder="nome@email.com" required 
            onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sua senha</label>
            <input type="password" id="password" placeholder="*********" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
            onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Entrar</button>
          <Link className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 p-2 block rounded-lg text-center mt-2  focus:outline-none font-medium text-sm cursor-pointer" href="/auth/register">Registrar-se</Link>
        </form>
      </div>
    </main>
  )
}
