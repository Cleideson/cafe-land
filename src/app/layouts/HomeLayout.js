"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

import { auth, getUserData} from "@/firebase/authetication";

export default function HomeLayout({ children }) {
  const [authText, setAuthText] = useState("Login/Registrar-se");
  const [user, setUser] = useState(null);
  const [userIsNotAdmin,setUserIsNotAdmin] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(Boolean);
  const router = useRouter();

  function authAction() {
    if (user == null) {
      router.push("/auth");
    } else {
      auth.signOut();
      router.push("/");
      setUser(null);
      setAuthText("Login/Registrar-se");
    }
  }
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        setUser(user);
        const userData = await getUserData(user.uid);
        if(userData.admin){
          setUserIsNotAdmin(false)
        }
        setAuthText("Logout");
      }
    });
  }, []);

  return (
    <section className="bg-gray-900 h-full">
      <nav className="bg-dark border-gray-200 dark:bg-gray-950">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl text-center my-2 font-semibold whitespace-nowrap dark:text-white">
              CafeLand
            </span>
          </Link>
          <div className="flex items-center">
            <div className="flex justify-center">
              <div className="relative" hidden={user == null}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  //@click="dropdownOpen = !dropdownOpen"
                  className="flex relative rounded-md bg-blue-600 text-gray-200  p-2 text-sm"
                >
                  {user != null ? user.email : ""}
                  <svg
                    className="h-5 w-5 text-white-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 
                                    10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  onClick={() => setDropdownOpen(false)}
                  hidden={!dropdownOpen}
                  className="fixed inset-0 h-full w-full z-10"
                ></div>
                <div
                  hidden={!dropdownOpen}
                  className="absolute text-center right-0 mt-2 py-2 w-48 bg-gray-900 text-white-800 rounded-md shadow-xl z-20"
                >
                  {userIsNotAdmin ? '': <Link to="/admin"
                    href="/admin"
                    className="block px-4 py-2 text-sm capitalize hover:bg-indigo-500 hover:text-white"
                  >Adminstração</Link>}
                  <a
                    href="/orders"
                    className="block px-4 py-2 text-sm capitalize hover:bg-indigo-500 hover:text-white"
                  >
                    Meus Pedidos
                  </a>
                  <button
                    onClick={authAction}
                    className="w-full px-4 py-2 text-sm capitalize hover:bg-indigo-500 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={authAction}
              hidden={user != null}
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline "
            >
              Login/Registrar-se
            </button>
            <Link href="/cart" className="ml-2  p-2 bg-slate-950 rounded-lg">
              <svg
                className="w-6 h-6 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="bg-white shadow mt-20 dark:bg-gray-950 w-full mt-10">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
            © 2023 Todos Direitos Reservados
          </span>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
            <p>Aluno: Cleideson Barbos da Silva</p>
            <p className="text-left">RGM:</p>
          </span>
        </div>
      </footer>
    </section>
  );
}
