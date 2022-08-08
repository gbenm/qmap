"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[996],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:3},i="Index select",c={unversionedId:"queries/index-select",id:"queries/index-select",title:"Index select",description:"Notaci\xf3n",source:"@site/docs/queries/index-select.md",sourceDirName:"queries",slug:"/queries/index-select",permalink:"/qmap/docs/queries/index-select",draft:!1,editUrl:"https://github.com/gbenm/qmap/tree/main/docs/docs/queries/index-select.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Access",permalink:"/qmap/docs/queries/access"},next:{title:"Funciones",permalink:"/qmap/docs/queries/functions"}},l={},s=[{value:"Notaci\xf3n",id:"notaci\xf3n",level:2},{value:"Funcionamiento",id:"funcionamiento",level:2},{value:"Funciona con:",id:"funciona-con",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Datos",id:"datos",level:3},{value:"Query",id:"query",level:3},{value:"Resultado",id:"resultado",level:3},{value:"El \xedndice",id:"el-\xedndice",level:3}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"index-select"},"Index select"),(0,a.kt)("h2",{id:"notaci\xf3n"},"Notaci\xf3n"),(0,a.kt)("p",null,"En vez de colocar ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," para envolver la selecci\xf3n se usa ",(0,a.kt)("inlineCode",{parentName:"p"},"#{}"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const query = `{\n    product #{\n        id, name\n    },\n    product.provider #{\n        id, name\n    },\n}`\n")),(0,a.kt)("h2",{id:"funcionamiento"},"Funcionamiento"),(0,a.kt)("p",null,"No ejecuta selecci\xf3n sobre el campo, es decir que es equivalente\na no listar lo que se necesita, sin embargo, si modifica\nel \xedndice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const query1 = `{\n    product #{\n        id, name\n    }\n}`\n\nconst query2 = `{\n    product\n}`\n\nconst query3 = `{\n    product {\n        id, name\n    }\n}`\n")),(0,a.kt)("p",null,"Si se ejecuta ",(0,a.kt)("inlineCode",{parentName:"p"},"apply"),", el resultado de ",(0,a.kt)("inlineCode",{parentName:"p"},"query1")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"query2")," es\nexactamente el mismo, mientras que si se usa ",(0,a.kt)("inlineCode",{parentName:"p"},"includes")," la ",(0,a.kt)("inlineCode",{parentName:"p"},"query1"),"\ndar\xe1 los mismos resultados que la ",(0,a.kt)("inlineCode",{parentName:"p"},"query3"),"."),(0,a.kt)("h2",{id:"funciona-con"},"Funciona con:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"access")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," utilizando la misma notaci\xf3n"),(0,a.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,a.kt)("h3",{id:"datos"},"Datos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const input = {\n    products: [\n        { id: 1, name: "product 1" },\n        { id: 2, name: "product 2" },\n        { id: 3, name: "product 3" }\n    ]\n}\n')),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { qmapCreator } from "@qmap/engine"\n\nconst qmap = qmapCreator()\n\nconst executors = qmap(`{\n    products #{\n        name\n    }\n}`)\n')),(0,a.kt)("h3",{id:"resultado"},"Resultado"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = executors.apply(input)\n// result == input\n")),(0,a.kt)("h3",{id:"el-\xedndice"},"El \xedndice"),(0,a.kt)("p",null,"El cambio se obtiene en esta parte, consultar si se\nencuentra name, ser\xe1 verdadero, mientras que cualquier otro\ncampo dar\xe1 un resultado ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'executors.includes(["products", "name"]) // true\nexecutors.includes(["products", "id"]) // false\nexecutors.includes(["products", "any"]) // false\n')))}p.isMDXComponent=!0}}]);