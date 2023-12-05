(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[569],{1649:function(e,t,a){Promise.resolve().then(a.bind(a,8110))},8387:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var s=a(7437),r=a(4033),n=a(1396),c=a.n(n),l=a(2265),i=a(9898);function d(e){let{children:t}=e,[a,n]=(0,l.useState)("Login/Registrar-se"),[d,u]=(0,l.useState)(null),[o,h]=(0,l.useState)(!0),[x,m]=(0,l.useState)(Boolean),p=(0,r.useRouter)();function f(){null==d?p.push("/auth"):(i.I8.signOut(),p.push("/"),u(null),n("Login/Registrar-se"))}return(0,l.useEffect)(()=>{i.I8.onAuthStateChanged(async e=>{if(null!=e){u(e);let t=await (0,i.is)(e.uid);t.admin&&h(!1),n("Logout")}})},[]),(0,s.jsxs)("section",{className:"bg-gray-900 h-full",children:[(0,s.jsx)("nav",{className:"bg-dark border-gray-200 dark:bg-gray-950",children:(0,s.jsxs)("div",{className:"flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4",children:[(0,s.jsx)(c(),{href:"/",className:"flex items-center",children:(0,s.jsx)("span",{className:"text-2xl text-center my-2 font-semibold whitespace-nowrap dark:text-white",children:"CafeLand"})}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsxs)("div",{className:"relative",hidden:null==d,children:[(0,s.jsxs)("button",{onClick:()=>m(!x),className:"flex relative rounded-md bg-blue-600 text-gray-200  p-2 text-sm",children:[null!=d?d.email:"",(0,s.jsx)("svg",{className:"h-5 w-5 text-white-800",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10    10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),(0,s.jsx)("div",{onClick:()=>m(!1),hidden:!x,className:"fixed inset-0 h-full w-full z-10"}),(0,s.jsxs)("div",{hidden:!x,className:"absolute text-center right-0 mt-2 py-2 w-48 bg-gray-900 text-white-800 rounded-md shadow-xl z-20",children:[o?"":(0,s.jsx)(c(),{to:"/admin",href:"/admin",className:"block px-4 py-2 text-sm capitalize hover:bg-indigo-500 hover:text-white",children:"Adminstra\xe7\xe3o"}),(0,s.jsx)("a",{href:"/orders",className:"block px-4 py-2 text-sm capitalize hover:bg-indigo-500 hover:text-white",children:"Meus Pedidos"}),(0,s.jsx)("button",{onClick:f,className:"w-full px-4 py-2 text-sm capitalize hover:bg-indigo-500 hover:text-white",children:"Logout"})]})]})}),(0,s.jsx)("button",{onClick:f,hidden:null!=d,className:"text-sm text-blue-600 dark:text-blue-500 hover:underline ",children:"Login/Registrar-se"}),(0,s.jsx)(c(),{href:"/cart",className:"ml-2  p-2 bg-slate-950 rounded-lg",children:(0,s.jsx)("svg",{className:"w-6 h-6 text-gray-400 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 21",children:(0,s.jsx)("path",{d:"M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"})})})]})]})}),t,(0,s.jsx)("footer",{className:"bg-white shadow mt-20 dark:bg-gray-950 w-full mt-10",children:(0,s.jsxs)("div",{className:"w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between",children:[(0,s.jsx)("span",{className:"text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center",children:"\xa9 2023 Todos Direitos Reservados"}),(0,s.jsxs)("span",{className:"text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center",children:[(0,s.jsx)("p",{children:"Aluno: Cleideson Barbos da Silva"}),(0,s.jsx)("p",{className:"text-left",children:"RGM:"})]})]})})]})}},8110:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var s=a(7437),r=a(2265),n=a(8387),c=a(1889),l=a(4033),i=a(9898);function d(){let[e,t]=(0,r.useState)(null),[a,d]=(0,r.useState)(null),u=(0,l.useRouter)(),o=async()=>{i.I8.onAuthStateChanged(async e=>{if(null!=e){t(e);try{let t=await (0,c.c9)(e.uid);d(t),console.log(t)}catch(e){}}else u.push("/")})};return(0,r.useEffect)(()=>{o()},[]),(0,s.jsx)(n.Z,{children:(0,s.jsx)("div",{className:"p-4 sm:ml-128 w-106 min-h-screen",children:(0,s.jsx)("div",{className:"flex p-4",children:(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("h3",{className:"text-2xl text-center my-5 uppercase",children:"Lista de Pedidos Atuais"}),(0,s.jsx)("div",{className:"flex justify-center  overflow-x-auto text-center content-center mx-auto shadow-md sm:rounded-lg",children:(0,s.jsxs)("table",{className:"table-auto text-sm text-left text-gray-500 dark:text-gray-400",children:[(0,s.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Numero do Pedido"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Nome do Cliente"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Total do Pedido"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Status"})]})}),(0,s.jsx)("tbody",{children:Array.isArray(a)?a.map((e,t)=>(0,s.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[(0,s.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:e.id}),(0,s.jsx)("td",{className:"px-6 py-4",children:e.clientName}),(0,s.jsxs)("td",{className:"px-6 py-4",children:["R$ ",(e.totalValue/100).toFixed(2)]}),(0,s.jsx)("td",{className:"px-6 py-4",children:e.statusName})]},t)):null})]})})]})})})})}},9898:function(e,t,a){"use strict";a.d(t,{I8:function(){return c},fZ:function(){return i},is:function(){return u},tJ:function(){return d}});var s=a(6262),r=a(3085),n=a(4086);let c=(0,r.v0)(s.l),l=(0,n.ad)(s.l),i=async(e,t)=>{try{return await (0,r.e5)(c,e,t),!0}catch(e){throw e}},d=async e=>{try{let t=await (0,r.Xb)(c,e.email||"",e.password||""),a=t.user;return delete e.password,await (0,n.pl)((0,n.JU)(l,"users",a.uid),{uid:a.uid,...e}),!0}catch(e){throw e}},u=async e=>{try{let t=(0,n.QT)((0,n.JU)(l,"users",e));return(await t).data()}catch(e){throw e}}},6262:function(e,t,a){"use strict";a.d(t,{l:function(){return r}});var s=a(994);let r=(0,s.ZF)({apiKey:"AIzaSyBGB-m-og9OkCB9z5qMQJXDIojX9XrgaDo",authDomain:"cafeland-50d46.firebaseapp.com",projectId:"cafeland-50d46",storageBucket:"cafeland-50d46.appspot.com",messagingSenderId:"1054668250666",appId:"1:1054668250666:web:51b83642d155ea8192ad53",measurementId:"G-E8FKM6SVYT"})},1889:function(e,t,a){"use strict";a.d(t,{AU:function(){return o},Cs:function(){return d},TR:function(){return i},c9:function(){return u}});var s=a(6262),r=a(4086),n=a(2114),c=a(180);let l=(0,r.ad)(s.l),i=async e=>{try{let t=(0,n.h)(),a=0;for(let t of e.products){let e=await (0,c.wv)(t.productId);a+=e.productPrice*t.productQuantity}return await (0,r.pl)((0,r.JU)(l,"orders",t),{...e,status:"paymentPending",totalValue:a}),!0}catch(e){throw e}},d=async(e,t)=>{try{let a=(0,r.JU)(l,"orders",e);return await (0,r.r7)(a,{status:t}),!0}catch(e){return!1}},u=async e=>{let t=[];try{let a=(0,r.IO)((0,r.hJ)(l,"orders"),(0,r.ar)("userId","==",e)),s=await (0,r.PL)(a);for(let e of s.docs){let a=await (0,r.QT)((0,r.JU)(l,"users",e.data().userId)),s=a.data().name,n=e.data();switch(n.clientName=s,n.id=e.id,n.status){case"0":n.statusName="Cancelado";break;case"1":n.statusName="Aguardando Pagamento";break;case"2":n.statusName="Pedido Recebido";break;case"3":n.statusName="Pedido Enviado";break;case"4":n.statusName="Entregue";break;default:n.statusName=null}t.push(n)}return t}catch(e){return console.log(e),null}},o=async()=>{try{let e=await (0,r.PL)((0,r.hJ)(l,"orders")),t=[];for(let a of e.docs){let e=await (0,r.QT)((0,r.JU)(l,"users",a.data().userId)),s=e.data().name,n=a.data();switch(n.id=a.id,n.clientName=s,n.status){case"0":n.statusName="Cancelado";break;case"1":n.statusName="Aguardando Pagamento";break;case"2":n.statusName="Pedido Recebido";break;case"3":n.statusName="Pedido Enviado";break;case"4":n.statusName="Entregue";break;default:n.statusName=null}t.push(n)}return t}catch(e){throw e}}},180:function(e,t,a){"use strict";a.d(t,{Ir:function(){return i},Xp:function(){return d},gg:function(){return l},wv:function(){return u}});var s=a(6262),r=a(4086),n=a(2114);let c=(0,r.ad)(s.l),l=async e=>{try{return e.productPrice=100*e.productPrice,e.uid?await (0,r.r7)((0,r.JU)(c,"products",e.uid),{...e}):(e.uid=(0,n.h)(),await (0,r.pl)((0,r.JU)(c,"products",e.uid),{...e})),!0}catch(e){throw e}},i=async e=>{try{return await (0,r.oe)((0,r.JU)(c,"products",e)),!0}catch(e){throw e}},d=async()=>{try{let e=await (0,r.PL)((0,r.hJ)(c,"products")),t=[];return e.forEach(e=>{t.push(e.data())}),t}catch(e){throw e}},u=async e=>{try{let t=(0,r.JU)(c,"products",e),a=await (0,r.QT)(t);if(a.exists())return a.data();return null}catch(e){throw e}}},2114:function(e,t,a){"use strict";a.d(t,{h:function(){return c}});for(var s,r=256,n=[];r--;)n[r]=(r+256).toString(16).substring(1);function c(e){var t=0,a=e||11;if(!s||r+a>512)for(s="",r=0;t<256;t++)s+=n[256*Math.random()|0];return s.substring(r,r+++a)}}},function(e){e.O(0,[358,214,506,971,596,744],function(){return e(e.s=1649)}),_N_E=e.O()}]);