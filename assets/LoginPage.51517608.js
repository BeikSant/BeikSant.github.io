import{Q as y,u as f,a as r,b as h}from"./use-quasar.12d0b600.js";import{r as u,G as v,y as b,z as w,A as i,H as x,D as t,C as a,Q as c,F as V}from"./index.f642e71e.js";const C={class:"q-pa-md",style:{"min-width":"300px"}},Q=t("img",{src:"https://unl.edu.ec/sites/default/files/inline-images/unl_0.png"},null,-1),q=t("p",{class:"text-rigth"},[V("No tienes una cuenta "),t("a",{href:"/register"},"Registrate")],-1),I={__name:"LoginPage",setup(R){const n=f(),l=u(null),s=u(null),d=v(),m=x(),p=async()=>{try{return await d.login(l.value,s.value),n.notify({color:"green-5",textColor:"white",icon:"mdi-check-bold",message:"Sesi\xF3n Iniciada"}),m.push({path:"/"})}catch{return n.notify({color:"red-5",textColor:"white",icon:"warning",message:"Credenciales Incorrectas"})}},g=()=>{l.value=null,s.value=null};return(_,o)=>(b(),w(y,{class:"my-card absolute-center"},{default:i(()=>[t("div",C,[Q,q,a(h,{onSubmit:p,onReset:g,class:"q-gutter-md"},{default:i(()=>[a(r,{class:"q-pt-md",filled:"",modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e),label:"Email *","lazy-rules":"",rules:[e=>e&&e.length>0||"El campo se encuentra vacio",e=>e&&/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(e)||"Formato email no v\xE1lido"]},null,8,["modelValue","rules"]),a(r,{filled:"",type:"password",modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=e=>s.value=e),label:"Contrase\xF1a *","lazy-rules":"",rules:[e=>e&&e.length>0||"El campo se encuentra vacio"]},null,8,["modelValue","rules"]),t("div",null,[a(c,{label:"Ingresar",type:"submit",color:"primary"}),a(c,{label:"Resetear",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})])]),_:1}))}};export{I as default};
