"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[955],{6942:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(3117),a=(n(7294),n(3905));const o={sidebar_position:10},i="Excluir",l={unversionedId:"queries/exclude",id:"queries/exclude",title:"Excluir",description:"Permite eliminar valores del resultado, es de",source:"@site/docs/queries/exclude.md",sourceDirName:"queries",slug:"/queries/exclude",permalink:"/qmap/docs/queries/exclude",draft:!1,editUrl:"https://github.com/gbenm/qmap/tree/main/docs/docs/queries/exclude.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Include All",permalink:"/qmap/docs/queries/all"},next:{title:"Hide nodes",permalink:"/qmap/docs/queries/hide"}},c={},s=[],u={toc:s};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"excluir"},"Excluir"),(0,a.kt)("p",null,"Permite eliminar valores del resultado, es de\nutilidad en combinaci\xf3n con el operador ",(0,a.kt)("inlineCode",{parentName:"p"},"..."),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const query = `{\n    ...,\n    !serial,\n    id: serial\n}`\n")),(0,a.kt)("p",null,"En este caso es necesario borrar ",(0,a.kt)("inlineCode",{parentName:"p"},"serial")," ya que el operador\n",(0,a.kt)("inlineCode",{parentName:"p"},"...")," ya lo ha incluido en el resultado."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Se declara como ",(0,a.kt)("inlineCode",{parentName:"li"},"!KEY"),", d\xf3nde ",(0,a.kt)("inlineCode",{parentName:"li"},"KEY")," es una clave en el resultado\n(no en el JSON de entrada).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const query = `{\n    !serial,\n    ...,\n    id: serial\n}` // !serial no afecta al resultado\n\nconst query = `{\n  ...,\n  id: product.id,\n  !id\n}` // se ha eliminado el campo renombrado\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Se pueden usar claves con comillas ",(0,a.kt)("inlineCode",{parentName:"li"},'""'))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Tenga cuidado!, como se ha comentado ",(0,a.kt)("strong",{parentName:"p"},"exclude")," no est\xe1 limitado\na borrar lo agreado por ",(0,a.kt)("inlineCode",{parentName:"p"},"..."))))}p.isMDXComponent=!0},3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);