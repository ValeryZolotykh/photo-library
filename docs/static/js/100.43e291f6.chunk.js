"use strict";(self.webpackChunkphoto_library=self.webpackChunkphoto_library||[]).push([[100],{749:(e,t,o)=>{o.d(t,{CV:()=>r,TJ:()=>a,VH:()=>s,q2:()=>n});const s=200,a=300,n=1,r="photoUrls"},100:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});var s=o(43),a=o(535),n=o(401),r=o(749),l=o(579);function c(e){let{photoData:t}=e;return(0,l.jsxs)("div",{className:"photos__items",onClick:()=>(e=>{const t=localStorage.getItem(r.CV);let o=[];if(t&&(o=JSON.parse(t)),o.includes(e))n.oR.warning("Photo already in favorites");else{const t=[...o,e];localStorage.setItem(r.CV,JSON.stringify(t)),n.oR.success("Photo successfully added to favorites!")}})(t.url),children:[(0,l.jsx)("img",{className:"photos__item",src:t.url,alt:"random_image",loading:"lazy"}),(0,l.jsx)("span",{className:"photos__heart"})]})}function i(){const[e,t]=(0,s.useState)([]),[o,n]=(0,s.useState)(!1);(0,s.useEffect)((()=>(i(),window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d))),[]);const i=async()=>{n(!0),setTimeout((()=>{const e=Array.from({length:6},(()=>({url:a.Jb.image.urlPicsumPhotos()})));t((t=>[...t,...e])),n(!1)}),Math.floor(Math.random()*(r.TJ-r.VH+1))+r.VH)},d=()=>{window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-r.q2&&i()},u=e.map(((e,t)=>(0,l.jsx)(c,{photoData:e},t)));return(0,l.jsxs)("div",{className:"photos__wrapper",children:[u,o&&(0,l.jsx)("div",{className:"photos__loader",children:"Loading..."})]})}}}]);
//# sourceMappingURL=100.43e291f6.chunk.js.map