import{D as l}from"./DashboardLayout-4a765d9c.js";import{_ as h,i as y,Z as x,T as g,h as d,o as i,d as n,b as m,a as e,w,j as k,k as c,v as p,t as u,e as f,F as v}from"./app-f44106c5.js";const S={components:{DashboardLaout:l,Link:y,Head:x},props:{errors:Object},layout:l,setup(){const r=g({name:"",email:"",phone:"",role:"artist",status:"active",address:""});return{form:r,submit:()=>{r.post(route("artists.store"),{onSuccess:()=>{r.reset()}})}}}},D={class:"max-w-7xl mx-auto px-2"},V={class:"flex justify-between gap-4 mb-4 place-items-center"},j=e("h2",null,"ADD A STAFF",-1),A=e("i",{class:"fa-solid fa-plus"},null,-1),B=e("span",null,"Back to Staff",-1),F={class:"form-group"},L=e("label",{for:"name"},"Name",-1),N={key:0,class:"text-red-500"},C={class:"form-group"},H=e("label",{for:"email"},"Email",-1),T={key:0,class:"text-red-500"},E=e("button",{class:"block border border-primary-400 rounded placeholder-gray-400 w-full bg-primary-500 text-white px-4 py-2 shadow-md hover:bg-primary-600 transition"},"Submit",-1);function M(r,o,a,t,U,J){const _=d("Head"),b=d("Link");return i(),n(v,null,[m(_,{title:"Add Staff"}),e("div",D,[e("div",V,[j,m(b,{href:r.route("artists.index"),class:"rounded bg-primary-500 text-white hover:bg-primary-600 transition border border-primary-500 px-4 py-2"},{default:w(()=>[A,B]),_:1},8,["href"])]),e("form",{onSubmit:o[2]||(o[2]=k((...s)=>t.submit&&t.submit(...s),["prevent"])),action:"#",method:"post",class:"grid grid-cols-2 gap-4 bg-white rounded-md p-4"},[e("div",F,[L,c(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>t.form.name=s),class:"block border border-primary-400 rounded placeholder-gray-400 w-full",placeholder:"James Phiri"},null,512),[[p,t.form.name]]),a.errors.name?(i(),n("span",N,u(a.errors.name),1)):f("",!0)]),e("div",C,[H,c(e("input",{type:"email","onUpdate:modelValue":o[1]||(o[1]=s=>t.form.email=s),name:"email",class:"block border border-primary-400 rounded placeholder-gray-400 w-full",placeholder:"james@email.com"},null,512),[[p,t.form.email]]),a.errors.email?(i(),n("span",T,u(a.errors.email),1)):f("",!0)]),E],32)])],64)}const Z=h(S,[["render",M]]);export{Z as default};
