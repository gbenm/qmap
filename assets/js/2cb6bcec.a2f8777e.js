"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[840],{1355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=t(3117),a=(t(7294),t(3905));const s={sidebar_position:2},o="Access",c={unversionedId:"queries/access",id:"queries/access",title:"Access",description:"Permite aplanar el JSON, tambi\xe9n puede ser \xfatil para usarse",source:"@site/docs/queries/access.md",sourceDirName:"queries",slug:"/queries/access",permalink:"/qmap/docs/queries/access",draft:!1,editUrl:"https://github.com/gbenm/qmap/tree/main/docs/docs/queries/access.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Select",permalink:"/qmap/docs/queries/select"},next:{title:"Index select",permalink:"/qmap/docs/queries/index-select"}},l={},i=[],u={toc:i};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access"},"Access"),(0,a.kt)("p",null,"Permite aplanar el JSON, tambi\xe9n puede ser \xfatil para usarse\ncon las funciones."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const query = `{\n    product.name,\n    transaction.provider {\n        id, name\n    }\n}`\n// el resultado ser\xe1\nconst result = {\n    product_name: "...",\n    transaction_provider: {\n        id: 2,\n        name: "test"\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Admite cualquier nivel de acceso"),(0,a.kt)("li",{parentName:"ul"},"El nombre por defecto es la concatenaci\xf3n de\nlos valores separados por punto."),(0,a.kt)("li",{parentName:"ul"},"Se permite utilizar las claves con comillas (",(0,a.kt)("inlineCode",{parentName:"li"},'""'),")"),(0,a.kt)("li",{parentName:"ul"},"Funciona en arrays, e.g.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const input = {\n    products: [\n        { name: "pencil" },\n        { name: "paper" },\n    ],\n    transaction: {\n        providers: [\n            { id: 1, name: "test" },\n        ]\n    }\n}\n\nconst query = `{\n    products.name,\n    transaction.providers.id\n}`\n\n// el resultado ser\xe1\nconst result = {\n    products_name: [ \'pencil\', \'paper\' ],\n    transaction_providers_id: [ 1 ]\n}\n')),(0,a.kt)("p",null,"Cualquier clave puede referirse a un arreglo y no se restringe\nla cantidad de arreglos admitidos, tenga cuidado de no resultar\ncon arreglo de arreglos, si esto no es lo que necesita."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const input = {\n  objects: [\n    { id: 1, objects: [{ value: 10 }, { value: 15 }] },\n    { id: 2, objects: [{ value: 20 }, { value: 25 }] },\n  ]\n}\n\nconst query = `{\n  result: objects.objects.value\n}` // { result: [ [ 10, 15 ], [ 20, 25 ] ] }\n")),(0,a.kt)("p",null,"Tampoco requiere que los datos sean del mismo tipo\n(por favor, no se asuste xD):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const input = {\n  objects: [\n    {\n      objects: [\n        { value: 10 }, { values: [{ value: 40 }] }\n      ]\n    },\n    { objects: { values:  { value: 30 }  } },\n  ]\n}\n\nconst query = `{\n  result: objects.objects.values.value\n}` // { "result": [ [ null, [ 40 ] ],30 ]}\n')))}p.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);