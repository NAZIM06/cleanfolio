(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var i=c(9),s=c(3),n=c(1),a=c(0),l=Object(n.createContext)(),r=function(e){var t=e.children,c=Object(n.useState)("light"),i=Object(s.a)(c,2),r=i[0],o=i[1];Object(n.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://rajshekhar26.github.io/cleanfolio",j="JS.",u="John Smith",b="Front End Engineer",h="Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.",m="https://example.com",d={linkedin:"https://linkedin.com",github:"https://github.com"},p=[{name:"Project 1",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 2",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 3",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 4",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 5",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 6",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"}],O=["HTML","CSS","JavaScript","TypeScript","React","Redux","SASS","Material UI","Git","CI/CD","Jest","Enzyme"],x="johnsmith@mail.com",f=c(14),k=c.n(f),v=c(12),g=c.n(v),N=c(16),S=c.n(N),_=c(15),C=c.n(_),y=(c(26),function(){var e=Object(n.useContext)(l),t=Object(s.a)(e,1)[0],c=t.themeName,i=t.toggleTheme,r=Object(n.useState)(!1),o=Object(s.a)(r,2),j=o[0],u=o[1],b=function(){return u(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("button",{type:"button",onClick:b,children:Object(a.jsx)("a",{href:"#projects",className:"link link--nav",children:"Projects"})})}),Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("button",{type:"button",onClick:b,children:Object(a.jsx)("a",{href:"#skills",className:"link link--nav",children:"Skills"})})}),Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("button",{type:"button",onClick:b,children:Object(a.jsx)("a",{href:"#contact",className:"link link--nav",children:"Contact"})})})]}),Object(a.jsx)("button",{type:"button",onClick:i,className:"center btn btn--icon","aria-label":"toggle theme",children:"dark"===c?Object(a.jsx)(g.a,{}):Object(a.jsx)(k.a,{})}),Object(a.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(C.a,{}):Object(a.jsx)(S.a,{})})]})}),q=(c(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(y,{})]})}),w=c(10),P=c.n(w),A=c(17),R=c.n(A),T=(c(33),function(){var e=u,t=b,c=h,i=m,s=d;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[i&&Object(a.jsx)("a",{href:i,children:Object(a.jsx)("button",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)("div",{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(R.a,{})})]})]})]})}),E=c(7),I=c.n(E),J=c(18),V=c.n(J),L=(c(35),function(){return p.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(a.jsxs)("div",{className:"projects__container",children:[Object(a.jsx)("h3",{children:e.name}),Object(a.jsx)("p",{className:"projects__description",children:e.description}),e.stack&&Object(a.jsx)("ul",{className:"projects__stack",children:e.stack.map((function(e){return Object(a.jsx)("li",{className:"projects__stack-item",children:e},I()())}))}),e.sourceCode&&Object(a.jsx)("a",{href:e.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),e.livePreview&&Object(a.jsx)("a",{href:e.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(V.a,{})})]},I()())}))})]}):null}),M=(c(36),function(){return O.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{children:O.map((function(e){return Object(a.jsx)("li",{className:"btn btn--plain",children:e},I()())}))})]}):null}),z=c(19),B=c.n(z),F=(c(37),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(B.a,{fontSize:"large"})})}):null}),H=(c(38),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("button",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),D=(c(39),function(){return Object(a.jsx)("footer",{children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link",children:"Created By Raj Shekhar"})})}),G=(c(40),function(){var e=Object(n.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(q,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(T,{}),Object(a.jsx)(L,{}),Object(a.jsx)(M,{}),Object(a.jsx)(H,{})]}),Object(a.jsx)(F,{}),Object(a.jsx)(D,{})]})});c(41);Object(i.render)(Object(a.jsx)(r,{children:Object(a.jsx)(G,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.65f70e17.chunk.js.map