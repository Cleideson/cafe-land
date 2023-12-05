import {app} from './firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,getAuth} from 'firebase/auth'
import { collection,addDoc,getDoc, setDoc,doc,getFirestore } from 'firebase/firestore';

const auth = getAuth(app);
const db   = getFirestore(app);

const loginWithEmail = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
        return true
    }catch(error){
        throw error
    }
}
const signupWithEmail = async(user) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth,user.email || '',user.password || '');
        const userSaved = res.user;
        delete user.password
        await setDoc(doc(db,"users",userSaved.uid),{uid:userSaved.uid, ...user})
        return true
    }catch(error){
        throw error
    }
}
const getUserData = async(uid)=>{
    try{
        const data = getDoc(doc(db,"users",uid))
        return (await data).data()
    }catch(error){
        throw error
    }
}

export {auth, loginWithEmail,getUserData, signupWithEmail}