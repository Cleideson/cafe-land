(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{1214:function(e,r,t){Promise.resolve().then(t.bind(t,7256))},7256:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var a=t(7437),s=t(1396),l=t.n(s),d=t(2265),n=t(9898),o=t(180),c=t(1889),i=t(4033);function u(){let[e,r]=(0,d.useState)(null),[t,s]=(0,d.useState)(!0),[u,h]=(0,d.useState)(!1),[x,m]=(0,d.useState)(!1),[p,g]=(0,d.useState)(!1),[b,f]=(0,d.useState)([]),[y,w]=(0,d.useState)([]),[j,k]=(0,d.useState)(null),[v,N]=(0,d.useState)(""),[P,C]=(0,d.useState)(""),[S,E]=(0,d.useState)(""),[A,I]=(0,d.useState)(""),[z,J]=(0,d.useState)(!1),L=(0,i.useRouter)();function M(){s(!0),g(!1),h(!1),m(!1)}function U(){s(!1),h(!0),m(!1),g(!1)}function B(e){s(!1),h(!1),J(!1),null!=e?(k(e),b.forEach(r=>{r.uid==e&&(N(r.productName),C(r.productPrice/100))})):(N(""),C("")),m(!0)}let R=async()=>{try{let e=await (0,o.Xp)();f(e)}catch(e){}},F=async()=>{try{let e=await (0,c.AU)();w(e)}catch(e){}};async function H(e){e.preventDefault();let r={productName:v,productPrice:P};null!=j&&(r={uid:j,productName:v,productPrice:P});let t=await (0,o.gg)(r);t&&(m(!1),h(!0),k(null),R())}async function T(e){e.preventDefault(),await (0,c.Cs)(A,z)&&(g(!1),F(),s(!0))}async function O(e){await (0,o.Ir)(e),R()}return(0,d.useEffect)(()=>{n.I8.onAuthStateChanged(async e=>{if(null!=e){r(e);let t=await (0,n.is)(e.uid);if(!t.admin)return L.push("/")}}),R().catch(e=>{}),F().catch(e=>{})},[]),(0,a.jsxs)("div",{children:[(0,a.jsxs)("button",{"data-drawer-target":"sidebar-multi-level-sidebar","data-drawer-toggle":"sidebar-multi-level-sidebar","aria-controls":"sidebar-multi-level-sidebar",type:"button",className:"inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,a.jsx)("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})]}),(0,a.jsx)("aside",{id:"sidebar-multi-level-sidebar","aria-hidden":"true",className:"fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0","aria-label":"Sidebar",children:(0,a.jsx)("div",{className:"h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800",children:(0,a.jsxs)("ul",{className:"space-y-2 font-medium",children:[(0,a.jsx)("li",{children:(0,a.jsxs)(l(),{href:"/",className:"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",children:[(0,a.jsxs)("svg",{className:"h-8 w-8 text-white",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[" ",(0,a.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"})," ",(0,a.jsx)("path",{d:"M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"})]}),(0,a.jsx)("span",{className:"ml-3",children:"Voltar ao site"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("button",{onClick:M,className:" w-full text-left flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",children:[(0,a.jsxs)("svg",{className:"h-8 w-8 text-white",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[" ",(0,a.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"})," ",(0,a.jsx)("path",{d:"M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2"})," ",(0,a.jsx)("rect",{x:"9",y:"3",width:"6",height:"4",rx:"2"})," ",(0,a.jsx)("line",{x1:"9",y1:"12",x2:"9.01",y2:"12"})," ",(0,a.jsx)("line",{x1:"13",y1:"12",x2:"15",y2:"12"})," ",(0,a.jsx)("line",{x1:"9",y1:"16",x2:"9.01",y2:"16"})," ",(0,a.jsx)("line",{x1:"13",y1:"16",x2:"15",y2:"16"})]}),(0,a.jsx)("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Pedidos"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("button",{onClick:U,className:"w-full text-left flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",children:[(0,a.jsxs)("svg",{className:"h-8 w-8 text-white",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[" ",(0,a.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"})," ",(0,a.jsx)("circle",{cx:"9",cy:"19",r:"2"})," ",(0,a.jsx)("circle",{cx:"17",cy:"19",r:"2"})," ",(0,a.jsx)("path",{d:"M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2"})]}),(0,a.jsx)("span",{className:"flex-1 ml-3 text-left whitespace-nowrap",children:"Produtos"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("button",{onClick:function(){null==e||(n.I8.signOut(),r(null)),L.push("/")},className:"flex text-left w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",children:[(0,a.jsx)("svg",{className:"h-8 w-8 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})}),(0,a.jsx)("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Logout"})]})})]})})}),(0,a.jsx)("div",{className:"p-4 sm:ml-64",hidden:!t,children:(0,a.jsx)("div",{className:"flex p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700",children:(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("h3",{className:"text-2xl text-center my-5 uppercase",children:"Lista de Pedidos Atuais"}),(0,a.jsx)("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:(0,a.jsxs)("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[(0,a.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Nome do Cliente"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Total do Pedido"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Status"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Editar Status"})]})}),(0,a.jsx)("tbody",{children:Array.isArray(y)?y.map((e,r)=>(0,a.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:e.clientName}),(0,a.jsxs)("td",{className:"px-6 py-4",children:["R$ ",(e.totalValue/100).toFixed(2)]}),(0,a.jsx)("td",{className:"px-6 py-4",children:e.statusName}),(0,a.jsx)("td",{className:"px-6 py-4",children:(0,a.jsx)("button",{onClick:()=>{var r;r=e.id,s(!1),h(!1),null!=r?(k(r),y.forEach(e=>{e.id==r&&(E(e.clientName),I(e.id),J(e.status))})):(E(""),I(""),J("")),g(!0)},className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Editar"})})]},r)):null})]})})]})})}),(0,a.jsx)("div",{className:"p-4 sm:ml-64",hidden:!u,children:(0,a.jsxs)("div",{className:"p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700",children:[(0,a.jsx)("h3",{className:"text-2xl text-center my-5 uppercase",children:"Lista de Produtos"}),(0,a.jsxs)("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[(0,a.jsxs)("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[(0,a.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Nome do Produto"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Pre\xe7o"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),(0,a.jsx)("tbody",{children:Array.isArray(b)?b.map((e,r)=>(0,a.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:e.productName}),(0,a.jsxs)("td",{className:"px-6 py-4",children:["R$ ",(e.productPrice/100).toFixed(2)]}),(0,a.jsxs)("td",{className:"px-6 py-4",children:[(0,a.jsx)("button",{onClick:()=>{B(e.uid)},className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Editar"}),(0,a.jsx)("button",{onClick:r=>{O(e.uid)},className:"font-medium text-red-600 dark:text-blue-500 hover:underline ml-4",children:"Excluir"})]})]},r)):null})]}),(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("button",{type:"button",onClick:()=>{B()},className:"text-lg p-2 item-center rounded-lg my-5 w-96 bg-blue-500",children:"Adicionar novo Produto"})})]})]})}),(0,a.jsx)("div",{className:"p-4 sm:ml-64",hidden:!x,children:(0,a.jsxs)("div",{className:"p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700",children:[(0,a.jsx)("h3",{className:"text-2xl text-center my-5 uppercase",children:"Adicionar produto"}),(0,a.jsxs)("form",{onSubmit:H,children:[(0,a.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,a.jsx)("input",{type:"text",name:"productName",id:"productName",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",onChange:e=>{N(e.target.value)},value:v,placeholder:"",autoComplete:"off",required:!0}),(0,a.jsx)("label",{htmlFor:"productName",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Nome do produto"})]}),(0,a.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,a.jsx)("input",{type:"number",step:"0.1",name:"productPrice",id:"productPrice",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",onChange:e=>{C(e.target.value)},min:"1",value:P,placeholder:" ",required:!0}),(0,a.jsx)("label",{htmlFor:"productPrice",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Pre\xe7o"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{type:"button",onClick:U,className:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 mr-2 text-lg w-full",children:"Cancelar"}),(0,a.jsx)("button",{type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Salvar"})]})]})]})}),(0,a.jsx)("div",{className:"p-4 sm:ml-64",hidden:!p,children:(0,a.jsxs)("div",{className:"p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700",children:[(0,a.jsx)("h3",{className:"text-2xl text-center my-5 uppercase",children:"Editar Status do Pedido"}),(0,a.jsxs)("form",{onSubmit:T,children:[(0,a.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,a.jsxs)("p",{className:"mb-2",children:["Pedido: ",A]}),(0,a.jsxs)("p",{children:["Cliente: ",S]})]}),(0,a.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,a.jsx)("label",{htmlFor:"orderStatus",className:"lock mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Status"}),(0,a.jsxs)("select",{name:"orderStatus",id:"orderStatus",value:z,onChange:function(e){J(e.target.value)},className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0,children:[(0,a.jsx)("option",{value:"0",children:"Cancelado"}),(0,a.jsx)("option",{value:"1",children:"Aguardando Pagamento"}),(0,a.jsx)("option",{value:"2",children:"Pedido Recebido"}),(0,a.jsx)("option",{value:"3",children:"Pedido Enviado"}),(0,a.jsx)("option",{value:"4",children:"Entregue"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{type:"button",onClick:M,className:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800 mr-2 text-lg w-full",children:"Cancelar"}),(0,a.jsx)("button",{type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Salvar"})]})]})]})})]})}},9898:function(e,r,t){"use strict";t.d(r,{I8:function(){return d},fZ:function(){return o},is:function(){return i},tJ:function(){return c}});var a=t(6262),s=t(3085),l=t(4086);let d=(0,s.v0)(a.l),n=(0,l.ad)(a.l),o=async(e,r)=>{try{return await (0,s.e5)(d,e,r),!0}catch(e){throw e}},c=async e=>{try{let r=await (0,s.Xb)(d,e.email||"",e.password||""),t=r.user;return delete e.password,await (0,l.pl)((0,l.JU)(n,"users",t.uid),{uid:t.uid,...e}),!0}catch(e){throw e}},i=async e=>{try{let r=(0,l.QT)((0,l.JU)(n,"users",e));return(await r).data()}catch(e){throw e}}},6262:function(e,r,t){"use strict";t.d(r,{l:function(){return s}});var a=t(994);let s=(0,a.ZF)({apiKey:"AIzaSyBGB-m-og9OkCB9z5qMQJXDIojX9XrgaDo",authDomain:"cafeland-50d46.firebaseapp.com",projectId:"cafeland-50d46",storageBucket:"cafeland-50d46.appspot.com",messagingSenderId:"1054668250666",appId:"1:1054668250666:web:51b83642d155ea8192ad53",measurementId:"G-E8FKM6SVYT"})},1889:function(e,r,t){"use strict";t.d(r,{AU:function(){return u},Cs:function(){return c},TR:function(){return o},c9:function(){return i}});var a=t(6262),s=t(4086),l=t(2114),d=t(180);let n=(0,s.ad)(a.l),o=async e=>{try{let r=(0,l.h)(),t=0;for(let r of e.products){let e=await (0,d.wv)(r.productId);t+=e.productPrice*r.productQuantity}return await (0,s.pl)((0,s.JU)(n,"orders",r),{...e,status:"paymentPending",totalValue:t}),!0}catch(e){throw e}},c=async(e,r)=>{try{let t=(0,s.JU)(n,"orders",e);return await (0,s.r7)(t,{status:r}),!0}catch(e){return!1}},i=async e=>{let r=[];try{let t=(0,s.IO)((0,s.hJ)(n,"orders"),(0,s.ar)("userId","==",e)),a=await (0,s.PL)(t);for(let e of a.docs){let t=await (0,s.QT)((0,s.JU)(n,"users",e.data().userId)),a=t.data().name,l=e.data();switch(l.clientName=a,l.id=e.id,l.status){case"0":l.statusName="Cancelado";break;case"1":l.statusName="Aguardando Pagamento";break;case"2":l.statusName="Pedido Recebido";break;case"3":l.statusName="Pedido Enviado";break;case"4":l.statusName="Entregue";break;default:l.statusName=null}r.push(l)}return r}catch(e){return console.log(e),null}},u=async()=>{try{let e=await (0,s.PL)((0,s.hJ)(n,"orders")),r=[];for(let t of e.docs){let e=await (0,s.QT)((0,s.JU)(n,"users",t.data().userId)),a=e.data().name,l=t.data();switch(l.id=t.id,l.clientName=a,l.status){case"0":l.statusName="Cancelado";break;case"1":l.statusName="Aguardando Pagamento";break;case"2":l.statusName="Pedido Recebido";break;case"3":l.statusName="Pedido Enviado";break;case"4":l.statusName="Entregue";break;default:l.statusName=null}r.push(l)}return r}catch(e){throw e}}},180:function(e,r,t){"use strict";t.d(r,{Ir:function(){return o},Xp:function(){return c},gg:function(){return n},wv:function(){return i}});var a=t(6262),s=t(4086),l=t(2114);let d=(0,s.ad)(a.l),n=async e=>{try{return e.productPrice=100*e.productPrice,e.uid?await (0,s.r7)((0,s.JU)(d,"products",e.uid),{...e}):(e.uid=(0,l.h)(),await (0,s.pl)((0,s.JU)(d,"products",e.uid),{...e})),!0}catch(e){throw e}},o=async e=>{try{return await (0,s.oe)((0,s.JU)(d,"products",e)),!0}catch(e){throw e}},c=async()=>{try{let e=await (0,s.PL)((0,s.hJ)(d,"products")),r=[];return e.forEach(e=>{r.push(e.data())}),r}catch(e){throw e}},i=async e=>{try{let r=(0,s.JU)(d,"products",e),t=await (0,s.QT)(r);if(t.exists())return t.data();return null}catch(e){throw e}}},2114:function(e,r,t){"use strict";t.d(r,{h:function(){return d}});for(var a,s=256,l=[];s--;)l[s]=(s+256).toString(16).substring(1);function d(e){var r=0,t=e||11;if(!a||s+t>512)for(a="",s=0;r<256;r++)a+=l[256*Math.random()|0];return a.substring(s,s+++t)}}},function(e){e.O(0,[358,214,506,971,596,744],function(){return e(e.s=1214)}),_N_E=e.O()}]);