import {app} from './firebase'
import { collection,addDoc,updateDoc,setDoc,getDoc,getDocs,getFirestore,query, doc, deleteDoc, where} from 'firebase/firestore';
import { uid } from 'uid';
import { getProduct } from './product';

const db = getFirestore(app);

const saveOrder = async (order) =>{
    try{
        const id = uid()

        let totalValue = 0;
        for (const item of order.products) {
            const product = await getProduct(item.productId);
            totalValue += product.productPrice * item.productQuantity;
        }

        await setDoc(doc(db,"orders",id),{
          ...order,status:'paymentPending','totalValue':totalValue
       })
       
        return true;
    }catch(error){
        throw error
    }
    
}
const updateOrder = async (idOrder,newStatus) =>{
    try{
        const docRef = doc(db,"orders",idOrder)
        await updateDoc(docRef,{status:newStatus})
        return true
    }catch(e){
        return false
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

const getOrdersById = async(userUid) =>{
    let ordersList =[];
    
    try{
        const ordersQuery =   query(collection(db,"orders"),where("userId","==",userUid));
        const ordersSnap = await getDocs(ordersQuery);
        
        for (const order of ordersSnap.docs) {
            const clientSnap  =  await getDoc(doc(db,"users",order.data().userId))
            const clientName = clientSnap.data().name
            const orderData = order.data()
            orderData.clientName = clientName
            orderData.id = order.id

            switch(orderData.status){
                case "0":
                    orderData.statusName="Cancelado"
                    break;
                case "1":
                    orderData.statusName="Aguardando Pagamento"
                    break;
                case '2':
                    orderData.statusName="Pedido Recebido"
                    break;
                case "3":
                    orderData.statusName="Pedido Enviado"
                    break;
                case "4":
                    orderData.statusName="Entregue"
                    break;
                default:
                    orderData.statusName=null
                    break;

            }

            ordersList.push(orderData)

        }
        return ordersList;
    }catch(e){
        console.log(e)
        return null
    }
    
}
const getOrders = async() => {
    try{
        const orderSnap = await getDocs(collection(db,"orders"))
        const orders = []

        for (const order of orderSnap.docs) {
            const clientSnap  =  await getDoc(doc(db,"users",order.data().userId))
            const clientName = clientSnap.data().name
            const orderData = order.data()
            orderData.id = order.id
            orderData.clientName = clientName
            switch(orderData.status){
                case "0":
                    orderData.statusName="Cancelado"
                    break;
                case "1":
                    orderData.statusName="Aguardando Pagamento"
                    break;
                case '2':
                    orderData.statusName="Pedido Recebido"
                    break;
                case "3":
                    orderData.statusName="Pedido Enviado"
                    break;
                case "4":
                    orderData.statusName="Entregue"
                    break;
                default:
                    orderData.statusName=null
                    break;

            }
            orders.push(orderData)
        }

        return orders
    }catch(error){
        throw error
    }
}

const getProducts = async() => {
    try{
        productSnap.forEach((product) =>{
            products.push(product.data())
        })

        return products
    }catch(error){
        throw error
    }

}

export {saveOrder,getOrders,updateOrder,getOrdersById }