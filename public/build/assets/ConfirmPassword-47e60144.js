import{T as m,r as d,o as c,d as u,b as o,u as a,w as r,F as f,Z as p,a as e,n as _,f as w,j as b}from"./app-344ef1ac.js";import{A as g}from"./AuthenticationCard-e6b991d9.js";import{_ as h}from"./AuthenticationCardLogo-36836fe3.js";import{_ as x,a as v}from"./TextInput-f27d5349.js";import{_ as y}from"./InputLabel-cc19bc8b.js";import{_ as V}from"./PrimaryButton-d23f8309.js";const C=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],k={class:"flex justify-end mt-4"},I={__name:"ConfirmPassword",setup(A){const s=m({password:""}),t=d(null),i=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(B,n)=>(c(),u(f,null,[o(a(p),{title:"Secure Area"}),o(g,null,{logo:r(()=>[o(h)]),default:r(()=>[C,e("form",{onSubmit:b(i,["prevent"])},[e("div",null,[o(y,{for:"password",value:"Password"}),o(x,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(s).password,"onUpdate:modelValue":n[0]||(n[0]=l=>a(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(v,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",k,[o(V,{class:_(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{I as default};