import{D as C}from"./DashboardLayout-c8f0a89f.js";import{_ as D,i as M,Z as S,T as I,r as g,h as m,o as d,d as l,b as u,a as e,f as j,F as y,g as k,w as i,t as n,k as A,v as N,e as b,l as V,j as L}from"./app-344ef1ac.js";import{_ as O}from"./ConfirmationModal-b3d583c4.js";import{_ as P}from"./DialogModal-b6176aed.js";import{P as T}from"./Paginate-25442679.js";import"./Modal-a4df5b48.js";const B={components:{DashboardLaout:C,Link:M,Head:S,ConfirmationModal:O,DialogModal:P,Paginate:T},props:{categories:Object,errors:Object,award_categories:Object,awards:Object},layout:C,setup(){const a=I({name:"",award_id:""}),r=g(!1),s=g(!1),o=g(!1),p=t=>{a.name=t.name,a.award_id=t.award_id,a.id=t.id,console.log("cat",a.id),r.value=!0,s.value=!0},_=()=>{console.log(a),a.put(route("categories.update",a.id),{onSuccess:()=>{a.reset(),s.value=!1,r.value=!1}})};return{confirm:()=>window.confirm("Are you sure you want to delete this category?"),category:a,submit:()=>{if(s.value){_();return}a.post(route("categories.store"),{onSuccess:()=>{a.reset(),s.value=!1,r.value=!1}})},showArtistModal:r,editting:s,editArtist:p,updateArtist:_,artistCreate:()=>{a.name="",a.award_id="",a.id="",r.value=!0,s.value=!1},deleteItem:()=>{a.delete(route("categories.destroy",a),{onSuccess:()=>{a.reset(),s.value=!1,o.value=!1}})},showDeleteItem:(t=!1,c=null)=>{if(t){a.name=c.name,a.award_id=c.award_id,a.id=c.id,o.value=t;return}o.value=t},deleteDialog:o}}},E={class:"max-w-7xl mx-auto px-2"},H={class:"flex justify-between gap-4 mb-4 place-items-center"},U=e("h2",null,"CATEGORIES",-1),F=e("i",{class:"fa-solid fa-plus"},null,-1),G=e("span",null,"Add A Category",-1),R={class:"shadow rounded bg-white p-2 overflow-x-auto"},Z={class:"w-full"},q=e("thead",null,[e("tr",null,[e("th",{class:"border-b border-gray-200 px-2 py-1"}),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Name"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Artist"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Award"),e("th",{class:"border-b border-gray-200 px-2 py-1 text-right"},"Action")])],-1),z={class:"text-gray-500"},J=e("td",{class:"border-b border-gray-200 px-2 py-1"},[e("i",{class:"fa-solid fa-user"})],-1),K={class:"border-b border-gray-200 px-2 py-1 text-left"},Q={class:"border-b border-gray-200 px-2 py-1 text-left"},W={class:"border-b border-gray-200 px-2 py-1 text-left"},X={class:"border-b border-gray-200 px-2 py-1 text-right"},Y=["onClick"],$=e("i",{class:"fa-solid fa-edit"},null,-1),ee=[$],te=["onClick"],oe=e("i",{class:"fa-solid fa-trash-can"},null,-1),re=[oe],ae=e("h4",null,"Add an category",-1),se={class:"form-group"},de=e("label",{for:"name"},"Name",-1),le={key:0,class:"text-red-500"},ie={class:"form-group"},ne=e("label",{for:"award_id"},"Award Category",-1),ce=e("option",{value:"",disabled:""},"Select Award",-1),me=["value"],ue={key:0,class:"text-red-500"},be=e("h4",null,"Delete Category",-1),_e=e("p",null,"Are you sure you want to delete this category?",-1);function ge(a,r,s,o,p,_){const h=m("Head"),f=m("Paginate"),w=m("DialogModal"),x=m("ConfirmationModal"),v=m("Loader");return d(),l(y,null,[u(h,{title:"categories"}),e("div",E,[e("div",H,[U,e("button",{onClick:r[0]||(r[0]=(...t)=>o.artistCreate&&o.artistCreate(...t)),class:"rounded bg-primary-500 text-white hover:bg-primary-600 transition border border-primary-500 px-4 py-2"},[F,j(),G])]),e("div",R,[e("table",Z,[q,e("tbody",z,[(d(!0),l(y,null,k(s.categories.data,t=>(d(),l("tr",{key:t.id,class:"hover:bg-gray-50 transition"},[J,e("td",K,n(t.name),1),e("td",Q,n(t.artist),1),e("td",W,n(t.award.name),1),e("td",X,[e("button",{onClick:c=>o.editArtist(t),class:"p-2 text-sky-500"},ee,8,Y),e("button",{onClick:c=>o.showDeleteItem(!0,t),class:"p-2 text-red-500"},re,8,te)])]))),128))])]),u(f,{data:s.categories},null,8,["data"])])]),u(w,{show:o.showArtistModal,closeable:!0},{title:i(()=>[ae]),content:i(()=>[e("form",{onSubmit:r[3]||(r[3]=L((...t)=>o.submit&&o.submit(...t),["prevent"])),action:"#",method:"post",class:"grid md:grid-cols-2 gap-4 bg-white rounded-md p-4"},[e("div",se,[de,A(e("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=t=>o.category.name=t),class:"block border border-primary-400 rounded placeholder-gray-400 w-full",placeholder:"Category 1"},null,512),[[N,o.category.name]]),s.errors.name?(d(),l("span",le,n(s.errors.name),1)):b("",!0)]),e("div",ie,[ne,A(e("select",{name:"award_id","onUpdate:modelValue":r[2]||(r[2]=t=>o.category.award_id=t),id:"award_id",class:"block border border-primary-400 rounded placeholder-gray-400 w-full"},[ce,(d(!0),l(y,null,k(s.awards,t=>(d(),l("option",{key:t.id,value:t.id},n(t.name),9,me))),128))],512),[[V,o.category.award_id]]),s.errors.award_id?(d(),l("span",ue,n(s.errors.award_id),1)):b("",!0)])],32)]),footer:i(()=>[e("button",{onClick:r[4]||(r[4]=t=>o.showArtistModal=!1),class:"text-gray-500 hover:bg-primary-100 px-4 rounded transition"},"Cancel"),o.editting?b("",!0):(d(),l("button",{key:0,onClick:r[5]||(r[5]=(...t)=>o.submit&&o.submit(...t)),class:"border border-primary-400 rounded placeholder-gray-400 bg-primary-500 text-white px-4 py-2 shadow-md hover:bg-primary-600 transition"},"Submit")),o.editting?(d(),l("button",{key:1,onClick:r[6]||(r[6]=(...t)=>o.updateArtist&&o.updateArtist(...t)),class:"border border-primary-400 rounded placeholder-gray-400 bg-primary-500 text-white px-4 py-2 shadow-md hover:bg-primary-600 transition"},"Update")):b("",!0)]),_:1},8,["show"]),u(x,{show:o.deleteDialog,closeable:!0},{title:i(()=>[be]),content:i(()=>[_e]),footer:i(()=>[e("button",{onClick:r[7]||(r[7]=t=>o.deleteDialog=!1),class:"text-gray-500 hover:bg-primary-100 px-4 rounded transition"},"Cancel"),e("button",{onClick:r[8]||(r[8]=(...t)=>o.deleteItem&&o.deleteItem(...t)),class:"border border-primary-400 rounded placeholder-gray-400 bg-primary-500 text-white px-4 py-2 shadow-md hover:bg-primary-600 transition"},"Delete")]),_:1},8,["show"]),u(v,{loader:o.category.processing},null,8,["loader"])],64)}const ve=D(B,[["render",ge]]);export{ve as default};