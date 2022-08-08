"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[525],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(v,l(l({ref:n},p),{},{components:t})):a.createElement(v,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:8},l="Global Access",i={unversionedId:"queries/global-access",id:"queries/global-access",title:"Global Access",description:"Permite realizar queries sobre el root del JSON de entrada, lo que",source:"@site/docs/queries/global-access.md",sourceDirName:"queries",slug:"/queries/global-access",permalink:"/qmap/docs/queries/global-access",draft:!1,editUrl:"https://github.com/gbenm/qmap/tree/main/docs/docs/queries/global-access.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"New object",permalink:"/qmap/docs/queries/new-object"},next:{title:"Include All",permalink:"/qmap/docs/queries/all"}},c={},s=[{value:"Notaci\xf3n",id:"notaci\xf3n",level:2},{value:"V\xe1lido en:",id:"v\xe1lido-en",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Por qu\xe9 new object query?",id:"por-qu\xe9-new-object-query",level:3}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"global-access"},"Global Access"),(0,r.kt)("p",null,"Permite realizar queries sobre el root del JSON de entrada, lo que\nayuda a mover informaci\xf3n del nivel superior a niveles m\xe1s internos."),(0,r.kt)("h2",{id:"notaci\xf3n"},"Notaci\xf3n"),(0,r.kt)("p",null,"Se antepone un ",(0,r.kt)("inlineCode",{parentName:"p"},"&.")," y luego se procede igual que en ",(0,r.kt)("a",{parentName:"p",href:"./access"},"access"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const query = `{\n    product {\n        id,\n        name,\n        &.provider.name\n    }\n}`\n")),(0,r.kt)("h2",{id:"v\xe1lido-en"},"V\xe1lido en:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"select")," y ",(0,r.kt)("inlineCode",{parentName:"li"},"access")),(0,r.kt)("li",{parentName:"ul"},"C\xf3mo argumentos para ",(0,r.kt)("inlineCode",{parentName:"li"},"function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rename"))),(0,r.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,r.kt)("p",null,"Considerando lo siguiente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const input = {\n    provider: {\n        id: 10,\n        name: "TheOne"\n    },\n    transaction: {\n        id: 100,\n        product_id: 19,\n        product_name: "Pants"\n    }\n}\n')),(0,r.kt)("p",null,"Aplicando esta query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const query = `{\n    transaction {\n        id,\n        product: {\n            id: product_id,\n            name: product_name,\n            provider: &.provider.name\n        }\n    }\n}`\n")),(0,r.kt)("p",null,"Se obtiene esto:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = {\n    transaction: {\n        id: 100,\n        product: {\n            id: 19,\n            name: 'Pants',\n            provider: 'TheOne'\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"por-qu\xe9-new-object-query"},"Por qu\xe9 ",(0,r.kt)("a",{parentName:"h3",href:"./new-object"},"new object query"),"?"),(0,r.kt)("p",null,"Puede surgir la duda de porque no simplemente utilizar ",(0,r.kt)("a",{parentName:"p",href:"./select"},"select"),"\npara nombrar la agrupaci\xf3n. No existe ninguna query basada en el campo ",(0,r.kt)("inlineCode",{parentName:"p"},"product"),"\ny en los datos de entrada tampoco existe esta clave, si se utiliza ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," el resultado\nser\xe1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = {\n    transaction: {\n        id: 100,\n        product: null\n    }\n}\n")),(0,r.kt)("p",null,"Esto se debe a que como no existe ning\xfan campo product en el cu\xe1l realizar la selecci\xf3n\nsimplemente se devuelve ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," como lo acordado anteriormente."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Otro problema sobre utilizar la selecci\xf3n es que estar\xe1 agregando campos al \xedndice, que\nno deber\xeda tener."))))}u.isMDXComponent=!0}}]);