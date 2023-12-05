import {app} from './firebase'
import { collection,addDoc,updateDoc,setDoc,getDoc,getDocs,getFirestore,query, doc, deleteDoc} from 'firebase/firestore';
import { uid } from 'uid';

const db = getFirestore(app);

const saveProduct = async(product) =>{
    try{
        product.productPrice = (product.productPrice*100)
        if(!product.uid){
            product.uid=uid();

            await setDoc(doc(db,"products",product.uid),{
                ...product
            })
        }else{
            await updateDoc(doc(db,"products",product.uid), {...product})
        }
        return true;
    }catch(error){
        throw error
    }
    
}
const deleteProduct = async(uid) =>{
    try{
        await deleteDoc(doc(db,"products",uid));
        return true
    }catch(error){
        throw error
    }
}
const getProducts = async() => {

    try{
        const productSnap = await getDocs(collection(db,"products"))
        const products = []

        productSnap.forEach((product) =>{
            products.push(product.data())
        })

        return products
    }catch(error){
        throw error
    }

}

const getProduct = async(productId) => {

    try{
        const productRef = doc(db,"products",productId);
        const productSnap = await getDoc(productRef);
        if(productSnap.exists()){
            return productSnap.data()
        }else{
            return null
        }

    }catch(error){
        throw error
    }

}

export {getProduct, getProducts,saveProduct,deleteProduct}