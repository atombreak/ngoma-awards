import{_ as d,i as l,h as c,o as n,d as r,a as e,f as a,t as o,F as m,g as f,c as x,n as _}from"./app-344ef1ac.js";const g={props:{data:Object},components:{Link:l}},h={class:"flex justify-between items-center my-4"},u=e("div",{class:"flex-1 flex justify-between sm:hidden"},[e("a",{href:"#",class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}," Previous "),e("a",{href:"#",class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}," Next ")],-1),b={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},y={class:"text-sm text-gray-700"},p={class:"font-medium"},v={class:"font-medium"},w={class:"font-medium"},L={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"};function j(k,B,s,P,z,N){const i=c("Link");return n(),r("div",h,[u,e("div",b,[e("div",null,[e("p",y,[a(" Showing "),e("span",p,o(s.data.from),1),a(" to "),e("span",v,o(s.data.to),1),a(" of "),e("span",w,o(s.data.total),1),a(" results ")])]),e("div",null,[e("nav",L,[(n(!0),r(m,null,f(s.data.links,t=>(n(),x(i,{key:t.label,href:t.url,innerHTML:t.label,class:_(["z-10 relative inline-flex items-center px-4 py-2 border text-sm font-medium",{"bg-indigo-50 border-indigo-500 text-indigo-600 ":t.active,"bg-white border-gray-300 text-gray-500 hover:bg-gray-50":!t.active}])},null,8,["href","innerHTML","class"]))),128))])])])])}const C=d(g,[["render",j]]);export{C as P};