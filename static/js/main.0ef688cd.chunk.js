(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[9],{11:function(e,t,c){},24:function(e,t,c){"use strict";c.d(t,"i",(function(){return d})),c.d(t,"d",(function(){return x})),c.d(t,"a",(function(){return v})),c.d(t,"g",(function(){return N})),c.d(t,"e",(function(){return y})),c.d(t,"b",(function(){return C})),c.d(t,"j",(function(){return w})),c.d(t,"f",(function(){return H})),c.d(t,"h",(function(){return Y})),c.d(t,"c",(function(){return Q}));var n,r=c(5),s=c(9),a=(c(38),c(10)),l=c(2),i=c(28),j=c(1),o=a.a.div(n||(n=Object(s.a)(["\n transform:rotate(","deg)\n"])),(function(e){return e.degree}));function b(){var e=new Date,t=e.getHours(),c=e.getMinutes(),n=e.getSeconds();return{hour1:30*t+.5*c,minute1:6*c+.1*n,second1:6*n}}function d(){function e(){var e=b(),t=e.hour1,c=e.minute1,n=e.second1,s=Object(l.useState)(t),a=Object(r.a)(s,2),d=a[0],u=a[1],x=Object(l.useState)(c),O=Object(r.a)(x,2),h=O[0],m=O[1],p=Object(l.useState)(n),f=Object(r.a)(p,2),g=f[0],v=f[1];return Object(l.useEffect)((function(){Object(i.setInterval)((function(){var e=b(),t=e.hour1,c=e.minute1,n=e.second1;u(t),m(c),v(n)}),1e3)}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{className:"hour-hand",degree:d}),Object(j.jsx)(o,{className:"minute-hand",degree:h}),Object(j.jsx)(o,{className:"second-hand",degree:g})]})})}function t(){var e=new Date,t=e.getDate(),c=e.getMonth()+1,n=e.getFullYear(),r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"info date",children:[t,"/",c<9?"0"+c:c,"/",n]}),Object(j.jsx)("div",{className:"info day",children:r})]})})}function c(){for(var e=[],t=0;t<60;t++)e[t]=6*t;return Object(j.jsx)(j.Fragment,{children:e.map((function(e){return Object(j.jsx)(o,{className:"diallines",degree:e})}))})}return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"clock",children:[Object(j.jsx)(t,{}),Object(j.jsx)("div",{className:"dot"}),Object(j.jsx)(e,{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"h3",children:"3"}),Object(j.jsx)("span",{className:"h6",children:"6"}),Object(j.jsx)("span",{className:"h9",children:"9"}),Object(j.jsx)("span",{className:"h12",children:"12"})]}),Object(j.jsx)(c,{})]})})}var u=c(3);c(11);function x(){var e=Object(u.f)(),t=Object(l.useState)(),c=Object(r.a)(t,2),n=c[0],s=c[1];function a(t){switch(s(t),t){case 1:e.push("/home");break;case 2:e.push("/exp");break;case 3:e.push("/porto");break;case 4:e.push("/contact");break;case 5:e.push("/blog")}}return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"upper-navbar",children:[Object(j.jsx)("p",{onClick:function(){return a(1)},className:1===n?"line":"",children:"Home "}),Object(j.jsx)("p",{onClick:function(){return a(2)},className:2===n?"line":"",children:"Experience"}),Object(j.jsx)("p",{onClick:function(){return a(3)},className:3===n?"line":"",children:"Portfolio"}),Object(j.jsx)("p",{onClick:function(){return a(4)},className:4===n?"line":"",children:"Contact"}),Object(j.jsx)("p",{onClick:function(){return a(5)},className:5===n?"line":"",children:"Blog"})]})})}var O,h=c(50),m=c(51),p=c(52),f=c(13),g=Object(a.a)(f.b)(O||(O=Object(s.a)(["\nborder-radius: 8px;\nborder: 1px solid grey;\npadding:6px;\nmargin: 5px;\nfont-size: 30px;\ntext-decoration: none;\ncolor:rgb(141, 141, 141);\n\n&:hover{\n    color:rgb(14, 181, 247);\n}\n"])));function v(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"blog-navbar",children:[Object(j.jsx)(g,{to:"/blog/travel",children:Object(j.jsx)(h.e,{title:"Travel"})}),Object(j.jsx)(g,{to:"/blog/food",children:Object(j.jsx)(m.a,{title:"Culinary"})}),Object(j.jsx)(g,{to:"/blog/doc",children:Object(j.jsx)(p.a,{title:"Document"})}),Object(j.jsx)(g,{to:"/blog/study",children:Object(j.jsx)(h.a,{title:"Study"})})]})})}function N(e){var t=Array.from(e.text);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"textzone",children:t.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"text",children:e},t)})}))})})}var k=c(53);function y(e){for(var t=[],c=1;c<=Math.ceil(e.totalImages/e.itemperpage);c++)t.push(c);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"pagenumber-container",children:[Object(j.jsx)(k.c,{className:"pagenumber-icon",onClick:function(){return e.paginate(t[0])}}),t.map((function(t,c){return Object(j.jsx)("a",{onClick:function(){return e.paginate(t)},className:"pagenumber",children:t},c)})),Object(j.jsx)(k.b,{className:"pagenumber-icon",onClick:function(){return e.paginate(t[t.length-1])}})]})})}var S=c(54),F=c(55);function C(e){var t=e.url,c=e.alt,n=void 0===c?"":c,s=e.onLoad,a=void 0===s?function(){}:s,i=e.id,o=e.txt,b=e.link,d=e.temp,u=Object(l.useState)(!1),x=Object(r.a)(u,2),O=x[0],h=x[1],m=Object(l.useRef)(null),p=Object(l.useRef)(null),f=w(p);Object(l.useEffect)((function(){f&&!O&&m.current&&(m.current.onload=function(){h(!0),a()})}),[f,a]);var g=Object(l.useState)(!1),v=Object(r.a)(g,2),N=v[0],k=v[1],y=Object(l.useState)(""),C=Object(r.a)(y,2),z=C[0],E=C[1],A=Object(l.useState)(""),I=Object(r.a)(A,2),M=I[0],D=I[1],T=Object(l.useState)(""),L=Object(r.a)(T,2),P=L[0],R=L[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:N?"model open":"model",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:z,alt:""}),Object(j.jsx)("p",{children:M}),""!==P?Object(j.jsx)("a",{href:P,target:"_blank",className:"ext-icon",children:Object(j.jsx)(S.a,{})}):""]}),Object(j.jsx)(F.a,{className:"model-icon",onClick:function(){return k(!1)}})]}),Object(j.jsx)("div",{ref:p,onClick:function(){E(d),k(!0),D(o),R(b)},children:(f||O)&&Object(j.jsx)("img",{src:t,className:"image",alt:n,ref:m},i)})]})}function w(e){var t=Object(l.useState)(!1),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(l.useEffect)((function(){var t=new IntersectionObserver((function(c){Object(r.a)(c,1)[0].isIntersecting&&(s(!0),t.unobserve(e.current))}),{rootMargin:"0px"});return e.current&&t.observe(e.current),function(){e.current&&t.unobserve(e.current)}}),[]),n}var z,E,A=c(56),I=c(57),M=c(58),D=c(59),T=c(60),L=c(61),P=c(62),R=a.a.div(z||(z=Object(s.a)(["\n    background-color:","\n"])),(function(e){return e.color}));function H(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"skill-container",children:[Object(j.jsxs)("p",{className:"skill-icon",children:[Object(j.jsx)(F.b,{})," Skills"]}),Object(j.jsxs)("div",{className:"flip-card",children:[Object(j.jsxs)(R,{className:"skill-box",color:"rgb(13, 154, 200)",children:[Object(j.jsxs)("p",{className:"skill-title",children:[Object(j.jsx)(A.a,{}),"Languages"]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)(I.a,{}),Object(j.jsx)(M.c,{}),Object(j.jsx)(D.f,{}),Object(j.jsx)(D.m,{})]})]}),Object(j.jsxs)("div",{className:"skill-boxback",children:[Object(j.jsx)("p",{children:"HTML"}),Object(j.jsx)("p",{children:"CSS"}),Object(j.jsx)("p",{children:"Javascript"}),Object(j.jsx)("p",{children:"Typescript"})]})]}),Object(j.jsxs)("div",{className:"flip-card",children:[Object(j.jsxs)(R,{className:"skill-box",color:"rgb(13, 152, 187)",children:[Object(j.jsxs)("p",{className:"skill-title",children:[Object(j.jsx)(p.b,{}),"Libraries"]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)(D.l,{}),Object(j.jsx)(D.k,{})]})]}),Object(j.jsxs)("div",{className:"skill-boxback",children:[Object(j.jsx)("p",{children:"Styled Component"}),Object(j.jsx)("p",{children:"React-Router"})]})]}),Object(j.jsxs)("div",{className:"flip-card",children:[Object(j.jsxs)(R,{className:"skill-box",color:"rgb(42, 167, 188)",children:[Object(j.jsxs)("p",{className:"skill-title",children:[Object(j.jsx)(p.c,{}),"Framework"]}),Object(j.jsx)(p.c,{})]}),Object(j.jsx)("div",{className:"skill-boxback",children:Object(j.jsx)("p",{children:"React"})})]}),Object(j.jsxs)("div",{className:"flip-card",children:[Object(j.jsxs)(R,{className:"skill-box",color:"rgb(71, 182, 188)",children:[Object(j.jsxs)("p",{className:"skill-title",children:[Object(j.jsx)(F.c,{}),"Version"]}),Object(j.jsx)(T.a,{})]}),Object(j.jsx)("div",{className:"skill-boxback",children:Object(j.jsx)("p",{children:"Github"})})]}),Object(j.jsxs)("div",{className:"flip-card",children:[Object(j.jsxs)(R,{className:"skill-box",color:"rgb(101, 196, 189)",children:[Object(j.jsxs)("p",{className:"skill-title",children:[Object(j.jsx)(L.b,{}),"Media"]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)(D.b,{}),Object(j.jsx)(D.c,{}),Object(j.jsx)(D.a,{})]})]}),Object(j.jsxs)("div",{className:"skill-boxback",children:[Object(j.jsx)("p",{children:"Illustrator"}),Object(j.jsx)("p",{children:"Photoshop"}),Object(j.jsx)("p",{children:"After Effect"})]})]}),Object(j.jsxs)("div",{className:"flip-card",children:[Object(j.jsxs)(R,{className:"skill-box",color:"rgb(130, 211, 189)",children:[Object(j.jsxs)("p",{className:"skill-title",children:[Object(j.jsx)(h.f,{}),"Draw"]}),Object(j.jsx)(D.d,{})]}),Object(j.jsx)("div",{className:"skill-boxback",children:Object(j.jsx)("p",{children:"AutoCAD"})})]}),Object(j.jsxs)("div",{className:"flip-card",children:[Object(j.jsxs)(R,{className:"skill-box",color:"rgb(159, 226, 190)",children:[Object(j.jsxs)("p",{className:"skill-title",children:[Object(j.jsx)(P.a,{}),"Text"]}),Object(j.jsxs)("div",{className:"skill",children:[Object(j.jsx)(D.n,{}),Object(j.jsx)(D.j,{}),Object(j.jsx)(D.h,{}),Object(j.jsx)(D.i,{})]})]}),Object(j.jsxs)("div",{className:"skill-boxback",children:[Object(j.jsx)("p",{children:"VS Code"}),Object(j.jsx)("p",{children:"Word"}),Object(j.jsx)("p",{children:"Excel"}),Object(j.jsx)("p",{children:"PowerPoint"})]})]})]})})}var J,B,V=["rgb(194, 232, 246)","rgb(188, 190, 235)","rgb(255, 245, 219)","rgb(252, 209, 222)","rgb(252, 164, 214)","rgb(13, 152, 187)"],W=["rgb(42, 167, 188)","rgb(71, 182, 188)","rgb(101, 196, 189)","rgb(130, 211, 189)","rgb(159, 226, 190)","rgb(125, 180, 235)","rgb(134, 210, 246)","rgb(177, 234, 247)","rgb(249, 246, 178)","rgb(246, 242, 76)","rgb(181, 235, 81)","rgb(187, 197, 242)","rgb(255, 221, 244)","rgb(255, 204, 231)"],G=a.a.div(E||(E=Object(s.a)(["\n    color:","\n"])),(function(e){return e.color}));function Y(e){var t=Array.from(e.text1),c=Array.from(e.text2);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"textheaderhomezone",children:t.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(G,{className:"textheaderhome",color:V[t],children:e},t)})}))}),Object(j.jsx)("div",{className:"textheaderhomezone2",children:c.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(G,{className:"textheaderhome",color:W[t],children:e},t)})}))})]})})}var _=[{id:0,text:"En",title:"English",color:"rgb(120, 44, 105)"},{id:1,text:"\u4e2d",title:"\u4e2d\u6587 / Chinese",color:"rgb(33, 23, 97)"},{id:2,text:"Id",title:"Indonesia",color:"rgb(105, 78, 176)"},{id:3,text:"\u7cb5",title:"\u7cb5\u8a9e / Cantonese",color:"rgb(73, 36, 102)"},{id:4,text:"\u6f6e",title:"\u6f6e\u5dde\u8a9e / Teochew",color:"rgb(63, 32, 28)"},{id:5,text:"\u5ba2",title:"\u5ba2\u5bb6 / Hakka",color:"rgb(85, 143, 85)"}],q=a.a.p(J||(J=Object(s.a)(["\n    &:hover {\n        background-color:","\n    }\n"])),(function(e){return e.color})),K=a.a.div(B||(B=Object(s.a)(["\n    background-color:","\n"])),(function(e){return e.color}));function Q(){var e=Object(l.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(l.useState)(""),a=Object(r.a)(s,2),i=a[0],o=a[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"language-icon",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)(k.a,{})," Languages"]}),_.map((function(e){return Object(j.jsx)(q,{color:e.color,title:e.title,onClick:function(){return function(e){for(var t=0;t<_.length;t++)_[t].id===e&&(o(_[t].color),n(_[t].title))}(e.id)},children:e.text})}))]}),Object(j.jsx)(K,{className:""===c?"language-text":"language-text show",color:i,children:c})]})}},26:function(e,t,c){"use strict";c.d(t,"b",(function(){return u})),c.d(t,"a",(function(){return O}));var n=c(13),r=c(3),s=c(24),a=c(2),l=c.n(a),i=c(1),j=l.a.lazy((function(){return c.e(5).then(c.bind(null,66))})),o=l.a.lazy((function(){return Promise.all([c.e(12),c.e(1)]).then(c.bind(null,75))})),b=l.a.lazy((function(){return Promise.all([c.e(13),c.e(0)]).then(c.bind(null,69))})),d=[{path:"/",component:j},{path:"/home",component:j},{path:"/contact",component:o},{path:"/exp",component:l.a.lazy((function(){return c.e(3).then(c.bind(null,76))}))},{path:"/porto",component:l.a.lazy((function(){return c.e(6).then(c.bind(null,77))}))},{path:"/blog",component:b}];function u(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(n.a,{children:[Object(i.jsx)(s.d,{}),Object(i.jsxs)(l.a.Suspense,{fallback:Object(i.jsx)("p",{children:"Loading..."}),children:[d.map((function(e){return Object(i.jsx)("div",{children:Object(i.jsx)(r.b,{exact:!0,path:e.path,component:e.component})},e.path)})),Object(i.jsx)(r.b,{exact:!0,path:"*",children:Object(i.jsx)(r.a,{to:"/home"})}),Object(i.jsx)(O,{})]})]})})}var x=[{path:"/blog/travel",component:l.a.lazy((function(){return c.e(8).then(c.bind(null,71))}))},{path:"/blog/food",component:l.a.lazy((function(){return c.e(4).then(c.bind(null,72))}))},{path:"/blog/doc",component:l.a.lazy((function(){return c.e(2).then(c.bind(null,73))}))},{path:"/blog/study",component:l.a.lazy((function(){return c.e(7).then(c.bind(null,74))}))}];function O(){return Object(i.jsx)(i.Fragment,{children:x.map((function(e){return Object(i.jsx)("div",{children:Object(i.jsx)(r.b,{exact:!0,path:e.path,component:e.component})},e.path)}))})}},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(27),a=c.n(s),l=(c(36),c(37),c(26)),i=c(1);function j(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)(l.b,{})})})}a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root"))}},[[49,10,11]]]);