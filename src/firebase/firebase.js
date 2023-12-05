import { initializeApp } from "firebase/app";


//Necessaria a configuração de chave do firebase para backend
const firebaseConfig = {
  apiKey: "chave de api",
  authDomain: "link autenticação",
  projectId: "id projeto",
  storageBucket: "link do storage bucket",
  messagingSenderId: "messaging senderId",
  appId: "api id",
  measurementId: "G-E8FKM6SVYT"
}
const app = initializeApp(firebaseConfig);

export {app};