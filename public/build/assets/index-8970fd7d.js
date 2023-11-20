import{D as x}from"./DashboardLayout-5c501404.js";import{_ as w,i as D,Z as k,r as p,T as S,h as i,o as f,d as y,b as n,a as e,w as c,F as v,g as C,t as l}from"./app-0ad8a276.js";import{_ as I}from"./ConfirmationModal-5ba52ae4.js";import{S as R}from"./Search-c29fe3aa.js";import{P as L}from"./Paginate-e2835ef7.js";import"./Modal-ddbead36.js";const P={components:{DashboardLaout:x,Link:D,Head:k,ConfirmationModal:I,Search:R,Paginate:L},props:{users:Object},layout:x,setup(b){const o=p(null),d=p(!1),t=p(!1),_=p(!1),r=S({name:"",id:""});return{confirm,deleteDialog:t,deleteItem:()=>{r.delete(route("users.destroy",r),{onSuccess:()=>{r.reset(),_.value=!1,t.value=!1}})},showDeleteItem:(a=!1,h=null)=>{if(a){r.name=h.name,r.id=h.id,t.value=a;return}t.value=a},user:r,editting:_,searchResponse:a=>{o.value=a,d.value=!0},searchData:o,searcing:d}}},A={class:"max-w-7xl mx-auto px-2"},F={class:"md:flex justify-between gap-4 mb-4 place-items-center"},B=e("h2",null,"STAFFS",-1),H={class:"flex gap-2"},M=e("i",{class:"fa-solid fa-plus"},null,-1),N=e("span",null,"Add Staff",-1),j={class:"shadow rounded bg-white p-2 overflow-x-auto"},E={class:"w-full"},T=e("thead",null,[e("tr",null,[e("th",{class:"border-b border-gray-200 px-2 py-1"}),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Name"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Email"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Phone"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Role"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Status"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-right"},"Action")])],-1),U={class:"text-gray-500"},V=e("td",{class:"border-b border-gray-200 px-2 py-1"},[e("i",{class:"fa-solid fa-user"})],-1),O={class:"border-b border-gray-200 px-2 py-1 text-left"},Z={class:"border-b border-gray-200 px-2 py-1 text-left"},q={href:"mailto:m@d.c"},z={class:"border-b border-gray-200 px-2 py-1"},G={class:"border-b border-gray-200 px-2 py-1"},J={class:"border-b border-gray-200 px-2 py-1"},K={class:"border-b border-gray-200 px-2 py-1 text-right"},Q=e("i",{class:"fa-solid fa-edit"},null,-1),W=["onClick"],X=e("i",{class:"fa-solid fa-trash-can"},null,-1),Y=[X],$=e("p",null,"Are you sure you want to delete this User ?",-1);function ee(b,o,d,t,_,r){const u=i("Head"),g=i("Search"),m=i("Link"),a=i("Paginate"),h=i("ConfirmationModal");return f(),y(v,null,[n(u,{title:"Users"}),e("div",A,[e("div",F,[B,e("div",H,[n(g,{uri:"users/search",onRes:o[0]||(o[0]=s=>t.searchResponse(s))}),n(m,{href:b.route("users.create"),class:"rounded bg-primary-500 text-white hover:bg-primary-600 transition border border-primary-500 px-4 py-2"},{default:c(()=>[M,N]),_:1},8,["href"])])]),e("div",j,[e("table",E,[T,e("tbody",U,[(f(!0),y(v,null,C(t.searcing?t.searchData.data:d.users.data,s=>(f(),y("tr",{key:s.id,class:"hover:bg-gray-50 transition"},[V,e("td",O,l(s.name),1),e("td",Z,[e("a",q,l(s.email),1)]),e("td",z,l(s.phone),1),e("td",G,l(s.role),1),e("td",J,l(s.status),1),e("td",K,[n(m,{href:b.route("users.edit",s.id),class:"p-2 text-sky-500"},{default:c(()=>[Q]),_:2},1032,["href"]),e("button",{onClick:te=>t.showDeleteItem(!0,s),class:"p-2 text-red-500"},Y,8,W)])]))),128))])]),n(a,{data:t.searcing?t.searchData:d.users,onSearch:o[1]||(o[1]=s=>t.searchResponse(s))},null,8,["data"])])]),n(h,{show:t.deleteDialog,closeable:!0},{title:c(()=>[e("h4",null,"Delete "+l(t.user.name),1)]),content:c(()=>[$]),footer:c(()=>[e("button",{onClick:o[2]||(o[2]=s=>t.deleteDialog=!1),class:"text-gray-500 hover:bg-primary-100 px-4 rounded transition"},"Cancel"),e("button",{onClick:o[3]||(o[3]=(...s)=>t.deleteItem&&t.deleteItem(...s)),class:"border border-primary-400 rounded placeholder-gray-400 bg-primary-500 text-white px-4 py-2 shadow-md hover:bg-primary-600 transition"},"Delete")]),_:1},8,["show"])],64)}const de=w(P,[["render",ee]]);export{de as default};
