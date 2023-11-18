import{_ as i,i as d,h as l,o as n,d as c,a as e,b as m,w as h,s as p,K as f}from"./app-f44106c5.js";const x={components:{Link:d},setup(){return{sideToggle:()=>{document.querySelector("aside").classList.toggle("-translate-x-full")}}}},u={class:"fixed w-full h-full"},w={class:"md:flex h-full bg-sky-50"},g=f('<nav class="flex flex-col px-2 md:px-2"><a href="/dashboard" class="flex flex-nowrap place-items-center overflow-hidden text-primary-500 px-4 py-2 rounded md:rounded-lg bg-white shadow-md my-1 hover:bg-primary-500 hover:text-white transition"><i class="fa-solid fa-home w-7 mr-3"></i> Dashboard </a><a href="/users" class="flex flex-nowrap place-items-center overflow-hidden text-primary-500 px-4 py-2 rounded md:rounded-lg bg-white shadow-sm my-1 hover:bg-primary-500 hover:text-white transition"><i class="fa-solid fa-user w-7 mr-3"></i> Users </a><a href="/artists" class="flex flex-nowrap place-items-center overflow-hidden text-primary-500 px-4 py-2 rounded md:rounded-lg bg-white shadow-sm my-1 hover:bg-primary-500 hover:text-white transition"><i class="fa-solid fa-ticket w-7 mr-3"></i> Artists </a><a href="/awards" class="flex flex-nowrap place-items-center overflow-hidden text-primary-500 px-4 py-2 rounded md:rounded-lg bg-white shadow-sm my-1 hover:bg-primary-500 hover:text-white transition"><i class="fa-solid fa-ticket w-7 mr-3"></i> Awards </a><a href="/categories" class="flex flex-nowrap place-items-center overflow-hidden text-primary-500 px-4 py-2 rounded md:rounded-lg bg-white shadow-sm my-1 hover:bg-primary-500 hover:text-white transition"><i class="fa-solid fa-file-invoice-dollar w-7 mr-3"></i> Award Categories </a></nav>',1),y=[g],b={class:"flex-auto h-full text-gray-500"},_={class:"flex justify-between p-4 mb-4 place-items-center border-b"},v=e("h2",{class:"text-gray-500"},"DASHBOARD",-1),k={class:"flex space-x-4"},L=e("p",{class:"rounded-full p-2 bg-primary-50 border border-primary-400 w-10 h-10 flex place-items-center justify-center text-primary-500"},[e("i",{class:"fa-solid fa-user"})],-1),T=e("i",{class:"fa-solid fa-sign-out"},null,-1),A=e("span",{class:"hidden md:inline"},"Logout",-1),C=e("i",{class:"fa-solid fa-bars"},null,-1),D=[C],j={class:"pt-10 h-full w-full overflow-auto pb-32 md:pb-32"};function B(o,s,S,t,N,V){const a=l("Link");return n(),c("div",u,[e("div",w,[e("aside",{onClick:s[0]||(s[0]=(...r)=>t.sideToggle&&t.sideToggle(...r)),class:"z-50 md:w-[60px] xl:w-[300px] shrink-0 bg-primary-50 py-7 h-full md:m-2 rounded-md overflow-x-hidden overflow-y-auto absolute md:static md:translate-x-0 -translate-x-full transition"},y),e("main",b,[e("div",_,[v,e("div",k,[L,m(a,{href:"/logout",as:"button",type:"button",method:"post",class:"rounded-md p-2 bg-primary-50 border border-primary-400 h-10 flex gap-2 place-items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition"},{default:h(()=>[T,A]),_:1}),e("button",{onClick:s[1]||(s[1]=(...r)=>t.sideToggle&&t.sideToggle(...r)),class:"md:hidden rounded-md p-2 bg-primary-50 border border-primary-400 h-10 flex gap-2 place-items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition"},D)])]),e("div",j,[p(o.$slots,"default")])])])])}const z=i(x,[["render",B]]);export{z as D};