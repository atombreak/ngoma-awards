import{D as h}from"./DashboardLayout-4a765d9c.js";import{_ as v,i as g,Z as x,T as k,h as c,o as a,d as l,b as m,a as o,w,j as S,k as d,v as u,t as n,e as i,l as b,F as U}from"./app-f44106c5.js";const V={components:{DashboardLayout:h,Link:g,Head:x},props:{user:Object,errors:Object},layout:h,setup(){const r=k({name:"",email:"",phone:"",role:"",status:"",address:""});return{form:r,submit:e=>{r.name=e.name,r.email=e.email,r.phone=e.phone,r.role=e.role,r.status=e.status,r.address=e.address,console.log(r),r.put(route("users.update",e.id))}}}},L={class:"max-w-7xl mx-auto px-2"},D={class:"flex justify-between gap-4 mb-4 place-items-center"},A=o("h2",null,"UPDATE STAFF",-1),j=o("i",{class:"fa-solid fa-plus"},null,-1),T=o("span",null,"Back to Staff",-1),B={class:"form-group"},E=o("label",{for:"name"},"Name",-1),F={key:0,class:"text-red-500"},N={class:"form-group"},P=o("label",{for:"email"},"Email",-1),C={key:0,class:"text-red-500"},H={class:"form-group"},M=o("label",{for:"phone"},"Phone",-1),O={key:0,class:"text-red-500"},I={class:"form-group"},J=o("label",{for:"role"},"Role",-1),K=o("option",{value:"",disabled:""},"select user role",-1),R=o("option",{value:"admin"},"Admin",-1),Z=o("option",{value:"staff",selected:""},"Staff",-1),q=o("option",{value:"user"},"User",-1),z=[K,R,Z,q],G={key:0,class:"text-red-500"},Q={class:"form-group"},W=o("label",{for:"status"},"Status",-1),X=o("option",{value:"",disabled:""},"select user status",-1),Y=o("option",{value:"active",selected:""},"Active",-1),$=o("option",{value:"inactive"},"Inactive",-1),ee=o("option",{value:"suspended"},"Suspended",-1),oe=[X,Y,$,ee],se={key:0,class:"text-red-500"},te={class:"form-group md:col-span-2"},re=o("label",{for:"address"},"Address",-1),ae={key:0,class:"text-red-500"},le=o("button",{class:"block border border-primary-400 rounded placeholder-gray-400 w-full bg-primary-500 text-white px-4 py-2 shadow-md hover:bg-primary-600 transition"},"Submit",-1);function de(r,s,e,_,ne,ie){const p=c("Head"),f=c("Link"),y=c("Loader");return a(),l(U,null,[m(p,{title:"UPDATE Staff"}),o("div",L,[o("div",D,[A,m(f,{href:r.route("users.index"),class:"rounded bg-primary-500 text-white hover:bg-primary-600 transition border border-primary-500 px-4 py-2"},{default:w(()=>[j,T]),_:1},8,["href"])]),o("form",{onSubmit:s[6]||(s[6]=S(t=>_.submit(e.user),["prevent"])),action:"#",method:"post",class:"grid md:grid-cols-2 gap-4 bg-white rounded-md p-4"},[o("div",B,[E,d(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>e.user.name=t),class:"block border border-primary-400 rounded placeholder-gray-400 w-full",placeholder:"James Phiri"},null,512),[[u,e.user.name]]),e.errors.name?(a(),l("span",F,n(e.errors.name),1)):i("",!0)]),o("div",N,[P,d(o("input",{type:"email","onUpdate:modelValue":s[1]||(s[1]=t=>e.user.email=t),name:"email",class:"block border border-primary-400 rounded placeholder-gray-400 w-full",placeholder:"james@email.com"},null,512),[[u,e.user.email]]),e.errors.email?(a(),l("span",C,n(e.errors.email),1)):i("",!0)]),o("div",H,[M,d(o("input",{type:"tel","onUpdate:modelValue":s[2]||(s[2]=t=>e.user.phone=t),class:"block border border-primary-400 rounded placeholder-gray-400 w-full",placeholder:"0971234567"},null,512),[[u,e.user.phone]]),e.errors.phone?(a(),l("span",O,n(e.errors.phone),1)):i("",!0)]),o("div",I,[J,d(o("select",{name:"role","onUpdate:modelValue":s[3]||(s[3]=t=>e.user.role=t),id:"role",class:"block border border-primary-400 rounded placeholder-gray-400 w-full",placeholder:"select user role"},z,512),[[b,e.user.role]]),e.errors.role?(a(),l("span",G,n(e.errors.role),1)):i("",!0)]),o("div",Q,[W,d(o("select",{name:"status","onUpdate:modelValue":s[4]||(s[4]=t=>e.user.status=t),id:"role",class:"block border border-primary-400 rounded placeholder-gray-400 w-full"},oe,512),[[b,e.user.status]]),e.errors.status?(a(),l("span",se,n(e.errors.status),1)):i("",!0)]),o("div",te,[re,d(o("textarea",{"onUpdate:modelValue":s[5]||(s[5]=t=>e.user.address=t),name:"address",id:"address",rows:"5",class:"block border border-primary-400 rounded placeholder-gray-400 w-full",placeholder:"Kabulonga, Lusaka"},null,512),[[u,e.user.address]]),e.errors.address?(a(),l("span",ae,n(e.errors.address),1)):i("",!0)]),le],32),m(y,{loader:_.form.processing},null,8,["loader"])])],64)}const me=v(V,[["render",de]]);export{me as default};
