(this["webpackJsonpgithub-users"]=this["webpackJsonpgithub-users"]||[]).push([[0],{43:function(e,t,c){var s={"./GitHub.png":44};function n(e){var t=r(e);return c(t)}function r(e){if(!c.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id=43},44:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/GitHub.0222a2ed.png"},51:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(14),r=c.n(n),a=c(9),i=c(29),o=c(3),l=c(4),j=c(16),b=c(23),u=c(26),d=c(18),_=c.n(d),h=c(43),O=c(1),p=function(e){return _.a.updateLocale("es",{months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split("_"),weekdays:"Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_")}),Object(O.jsxs)("div",{className:"p__box-3-container",children:[Object(O.jsxs)("div",{className:"p__box-3-a",children:[Object(O.jsx)("div",{className:"p_box-img",children:Object(O.jsx)("div",{className:"p__img-cont",children:e.avatar_url?Object(O.jsx)("img",{src:e.avatar_url,alt:"profile-img"}):Object(O.jsx)("img",{src:h("./GitHub.png").default,alt:"profile-img"})})}),Object(O.jsxs)("div",{className:"p_box-usr-d",children:[Object(O.jsx)("h1",{children:e.name?e.name:Object(O.jsx)(O.Fragment,{children:"Sin Nombre"})}),Object(O.jsxs)("h2",{children:["@",e.login]}),Object(O.jsxs)("h3",{children:["Unido en ",_()(e.created_at).format("LL")]})]})]}),Object(O.jsxs)("div",{className:"p__box-3-b",children:[Object(O.jsx)("div",{className:"p__blankspace"}),Object(O.jsxs)("div",{className:"p__bio",children:[Object(O.jsx)("p",{children:e.bio?e.bio:Object(O.jsx)(O.Fragment,{children:"Este usuario no posee descripcion."})}),Object(O.jsx)("div",{className:"p__numbers",children:Object(O.jsxs)("div",{className:"p__numbers-c",children:[Object(O.jsxs)("div",{className:"p__numbers-col",children:[Object(O.jsx)("h5",{children:"Repos"}),Object(O.jsx)("h4",{children:e.public_repos})]}),Object(O.jsxs)("div",{className:"p__numbers-col",children:[Object(O.jsx)("h5",{children:"Fallowers"}),Object(O.jsx)("h4",{children:e.followers})]}),Object(O.jsxs)("div",{className:"p__numbers-col",children:[Object(O.jsx)("h5",{children:"Fallowing"}),Object(O.jsx)("h4",{children:e.following})]})]})}),Object(O.jsxs)("div",{className:"p__minfo",children:[Object(O.jsxs)("div",{className:"col",children:[Object(O.jsxs)("h4",{children:[Object(O.jsx)("i",{className:"fas fa-map-marker m-1"}),e.location?e.location:Object(O.jsx)(O.Fragment,{children:"No disponible"})]}),Object(O.jsxs)("h4",{children:[Object(O.jsx)("i",{className:"fas fa-link m-1"}),Object(O.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",children:e.html_url.split("https://github.com")})]})]}),Object(O.jsxs)("div",{className:"col",children:[Object(O.jsxs)("h4",{children:[Object(O.jsx)("i",{className:"fab fa-twitter m-1"}),e.twitter_username?Object(O.jsx)("a",{href:"https://twitter.com/".concat(e.twitter_username),target:"_blank",rel:"noreferrer",children:e.twitter_username}):Object(O.jsx)(O.Fragment,{children:"No disponible"})]}),Object(O.jsxs)("h4",{children:[Object(O.jsx)("i",{className:"fas fa-globe m-1"}),e.blog?Object(O.jsx)("a",{href:e.blog,target:"_blank",rel:"noreferrer",children:"website"}):Object(O.jsx)(O.Fragment,{children:"No disponible"})]})]})]})]})]})]})},m=c(15),x=c(19),f=c.n(x),v=c(24),N="https://api.github.com",g=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",s="".concat(N,"/").concat(e);return"GET"===c?fetch(s):fetch(s,{method:c,headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)})},w="[user] Set user",y="[user] UnSet user",S="[UI] Set Fetch",E="[UI] Remove Fetch",k=function(){return{type:S}},M=function(){return{type:E}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"octocat";return function(){var t=Object(v.a)(f.a.mark((function t(c){var s,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(J()),c(k()),t.next=4,g("users/".concat(e),"","GET");case 4:return s=t.sent,t.next=7,s.json();case 7:n=t.sent,c(M()),s.ok&&c(D(n));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return{type:w,payload:e}},J=function(){return{type:y}},G=c(25),L=c.n(G),U=function(e){var t=e.history,c=t.location,n=L.a.parse(c.search).q,r=void 0===n?"":n,i=Object(a.b)();Object(s.useEffect)((function(){i(""!==r?F(r):F())}),[i,r]);var o=Object(a.c)((function(e){return e.ui})).fetch,d=Object(a.c)((function(e){return e.user})).user,_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(s.useState)(e),c=Object(j.a)(t,2),n=c[0],r=c[1];return[n,function(e){var t=e.target;r(Object(l.a)(Object(l.a)({},n),{},Object(m.a)({},t.name,t.value)))},function(){r(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e)}]}({username:r}),h=Object(j.a)(_,2),x=h[0],f=h[1],v=x.username;return Object(O.jsx)("div",{className:"p__container",children:Object(O.jsxs)("div",{className:"p__box",children:[Object(O.jsx)("div",{className:"p__box-c p__box-1",children:Object(O.jsx)("div",{className:"p__box-1-c",children:Object(O.jsx)("h2",{children:"GitHubUsers"})})}),Object(O.jsx)("div",{className:"p__box-c p__box-2",children:Object(O.jsx)("div",{className:"p__box-2-c",children:Object(O.jsxs)("div",{className:"p__search",children:[Object(O.jsx)("div",{className:"p__search-1",children:Object(O.jsx)(b.a,{icon:u.a})}),Object(O.jsxs)("form",{className:"p__search-2",onSubmit:function(e){e.preventDefault(),t.push("?q=".concat(v)),i(F(v))},children:[Object(O.jsx)("div",{className:"p__search-2-input",children:Object(O.jsx)("input",{type:"text",placeholder:"Buscar usuario de GitHub...",name:"username",value:v,onChange:f})}),Object(O.jsx)("div",{className:"p__search-2-btn",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-submit",disabled:!v,children:"Buscar"})})]})]})})}),Object(O.jsx)("div",{className:"p__box-c p__box-3",children:Object(O.jsx)("div",{className:"p__box-3-c",children:o?Object(O.jsx)("div",{className:"loader"}):d?Object(O.jsx)(p,Object(l.a)({},d),d.id):Object(O.jsxs)("div",{className:"p__user-notfound",children:[Object(O.jsx)("i",{class:"fas fa-exclamation-circle m-1"}),"El usuario no existe"]})})})]})})},T=function(){return Object(O.jsx)(i.a,{children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{exact:!0,path:"/",component:U}),Object(O.jsx)(o.a,{to:"/"})]})})},A=c(8),H=c(28),C={fetch:!1},I={user:null},V=Object(A.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(l.a)(Object(l.a)({},e),{},{user:t.payload});case y:return Object(l.a)(Object(l.a)({},e),{},{user:I.user});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(l.a)(Object(l.a)({},e),{},{fetch:!0});case E:return Object(l.a)(Object(l.a)({},e),{},{fetch:!1});default:return e}}}),B="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.c,R=Object(A.d)(V,B(Object(A.a)(H.a))),q=function(){return Object(O.jsx)(a.a,{store:R,children:Object(O.jsx)(T,{})})};c(51),c(52);console.log("https://api.github.com"),r.a.render(Object(O.jsx)(q,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.b0cd1b9d.chunk.js.map