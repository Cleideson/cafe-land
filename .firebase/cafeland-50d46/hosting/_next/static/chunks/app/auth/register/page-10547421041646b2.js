(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{5306:function(e,r,a){Promise.resolve().then(a.bind(a,6754))},6754:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return c}});var t=a(7437),l=a(1396),s=a.n(l),d=a(2265),o=a(4033),u=a(9898);function c(){let[e,r]=(0,d.useState)(!1),[a,l]=(0,d.useState)(Boolean),[c,n]=(0,d.useState)(""),[i,b]=(0,d.useState)(""),[m,g]=(0,d.useState)(""),[x,h]=(0,d.useState)(""),[f,k]=(0,d.useState)(""),[y,p]=(0,d.useState)(""),[w,N]=(0,d.useState)(""),[j,v]=(0,d.useState)(""),S=(0,o.useRouter)();async function C(e){e.preventDefault(),r(!0);try{let e=await (0,u.tJ)({name:i,email:m,password:x,street:f,numberHouse:y,district:w,complement:j});e&&(console.log("redirect"),S.push("/"))}catch(r){let e=r.code;"auth/email-already-in-use"===e?n("Email em uso!"):console.log(r),l(!1)}}return(0,d.useEffect)(()=>{l(!0)},[]),(0,t.jsx)("main",{className:"bg-gray-900 h-screen flex justify-center",children:(0,t.jsxs)("div",{className:"container lg:w-6/12 h-fit bg-gray-800 mt-32 rounded-lg",children:[(0,t.jsx)(s(),{className:"text-white p-2 bg-indigo-600 w-full block text-center",href:"/",children:"Voltar ao site"}),(0,t.jsx)("h1",{className:"text-2xl text-center mb-2 mt-5 ",children:"Necessario uma conta para fazer compras"}),(0,t.jsxs)("form",{className:"p-5",onSubmit:C,children:[(0,t.jsx)("div",{className:"mb-2 border-lg bg-red-950 rounded-lg p-2",hidden:a,children:(0,t.jsx)("p",{className:"text-sm text-center",children:c})}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Nome Completo"}),(0,t.jsx)("input",{type:"text",id:"name",name:"name",onChange:e=>b(e.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Jo\xe3o Barbosa",required:!0})]}),(0,t.jsxs)("div",{className:"mb-6 ",children:[(0,t.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"E-mail"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",onChange:e=>g(e.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"joao@mail.com",required:!0})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Sua senha"}),(0,t.jsx)("input",{type:"password",name:"password",id:"password",onChange:e=>h(e.target.value),placeholder:"*********",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),(0,t.jsx)("h5",{className:"text-center text-2xl",children:"Endere\xe7o"}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsxs)("div",{className:"mb-6 w-10/12 ",children:[(0,t.jsx)("label",{htmlFor:"street",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Logadouro"}),(0,t.jsx)("input",{type:"text",id:"street",name:"street",onChange:e=>k(e.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Rua Almeida",required:!0})]}),(0,t.jsxs)("div",{className:"mb-6 w-2/12 ml-2",children:[(0,t.jsx)("label",{htmlFor:"houseNumber",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Numero"}),(0,t.jsx)("input",{type:"text",id:"houseNumber",name:"houseNumber",onChange:e=>p(e.target.value),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"00",required:!0})]})]}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsxs)("div",{className:"mb-6 w-8/12 ",children:[(0,t.jsx)("label",{htmlFor:"district",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Bairro"}),(0,t.jsx)("input",{type:"text",name:"district",onChange:e=>N(e.target.value),id:"district",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Centro",required:!0})]}),(0,t.jsxs)("div",{className:"mb-6 w-4/12 ml-2",children:[(0,t.jsx)("label",{htmlFor:"complement",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Complemento"}),(0,t.jsx)("input",{type:"text",name:"complement",onChange:e=>v(e.target.value),id:"complement",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Bar Almeida"})]})]}),(0,t.jsx)("button",{type:"submit",className:"w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",disabled:e,children:"Registrar-se"}),(0,t.jsx)(s(),{className:"w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 p-2 block rounded-lg text-center mt-2  focus:outline-none font-medium text-sm cursor-pointer",href:"/auth",children:"Login"})]})]})})}},9898:function(e,r,a){"use strict";a.d(r,{I8:function(){return d},fZ:function(){return u},is:function(){return n},tJ:function(){return c}});var t=a(6262),l=a(3085),s=a(4086);let d=(0,l.v0)(t.l),o=(0,s.ad)(t.l),u=async(e,r)=>{try{return await (0,l.e5)(d,e,r),!0}catch(e){throw e}},c=async e=>{try{let r=await (0,l.Xb)(d,e.email||"",e.password||""),a=r.user;return delete e.password,await (0,s.pl)((0,s.JU)(o,"users",a.uid),{uid:a.uid,...e}),!0}catch(e){throw e}},n=async e=>{try{let r=(0,s.QT)((0,s.JU)(o,"users",e));return(await r).data()}catch(e){throw e}}},6262:function(e,r,a){"use strict";a.d(r,{l:function(){return l}});var t=a(994);let l=(0,t.ZF)({apiKey:"AIzaSyBGB-m-og9OkCB9z5qMQJXDIojX9XrgaDo",authDomain:"cafeland-50d46.firebaseapp.com",projectId:"cafeland-50d46",storageBucket:"cafeland-50d46.appspot.com",messagingSenderId:"1054668250666",appId:"1:1054668250666:web:51b83642d155ea8192ad53",measurementId:"G-E8FKM6SVYT"})}},function(e){e.O(0,[358,214,506,971,596,744],function(){return e(e.s=5306)}),_N_E=e.O()}]);