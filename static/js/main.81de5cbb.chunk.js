(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[9],{12:function(e,n,t){},24:function(e,n,t){"use strict";t.d(n,"g",(function(){return b})),t.d(n,"c",(function(){return h})),t.d(n,"a",(function(){return v})),t.d(n,"e",(function(){return N})),t.d(n,"d",(function(){return k})),t.d(n,"b",(function(){return z})),t.d(n,"h",(function(){return C})),t.d(n,"f",(function(){return I}));var c,r=t(5),a=t(9),s=(t(38),t(10)),o=t(2),i=t(28),j=t(1),u=s.a.div(c||(c=Object(a.a)(["\n transform:rotate(","deg)\n"])),(function(e){return e.degree}));function l(){var e=new Date,n=e.getHours(),t=e.getMinutes(),c=e.getSeconds();return{hour1:30*n+.5*t,minute1:6*t+.1*c,second1:6*c}}function b(){function e(){var e=l(),n=e.hour1,t=e.minute1,c=e.second1,a=Object(o.useState)(n),s=Object(r.a)(a,2),b=s[0],d=s[1],h=Object(o.useState)(t),O=Object(r.a)(h,2),m=O[0],x=O[1],f=Object(o.useState)(c),p=Object(r.a)(f,2),g=p[0],v=p[1];return Object(o.useEffect)((function(){Object(i.setInterval)((function(){var e=l(),n=e.hour1,t=e.minute1,c=e.second1;d(n),x(t),v(c)}),1e3)}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{className:"hour-hand",degree:b}),Object(j.jsx)(u,{className:"minute-hand",degree:m}),Object(j.jsx)(u,{className:"second-hand",degree:g})]})})}function n(){var e=new Date,n=e.getDate(),t=e.getMonth()+1,c=e.getFullYear(),r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"info date",children:[n,"/",t<9?"0"+t:t,"/",c]}),Object(j.jsx)("div",{className:"info day",children:r})]})})}function t(){for(var e=[],n=0;n<60;n++)e[n]=6*n;return Object(j.jsx)(j.Fragment,{children:e.map((function(e){return Object(j.jsx)(u,{className:"diallines",degree:e})}))})}return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"clock",children:[Object(j.jsx)(n,{}),Object(j.jsx)("div",{className:"dot"}),Object(j.jsx)(e,{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"h3",children:"3"}),Object(j.jsx)("span",{className:"h6",children:"6"}),Object(j.jsx)("span",{className:"h9",children:"9"}),Object(j.jsx)("span",{className:"h12",children:"12"})]}),Object(j.jsx)(t,{})]})})}var d=t(3);t(12);function h(){var e=Object(d.f)(),n=Object(o.useState)(),t=Object(r.a)(n,2),c=t[0],a=t[1];function s(n){switch(a(n),n){case 1:e.push("/home");break;case 2:e.push("/exp");break;case 3:e.push("/porto");break;case 4:e.push("/contact");break;case 5:e.push("/blog")}}return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"upper-navbar",children:[Object(j.jsx)("p",{onClick:function(){return s(1)},className:1===c?"line":"",children:"Home "}),Object(j.jsx)("p",{onClick:function(){return s(2)},className:2===c?"line":"",children:"Experience"}),Object(j.jsx)("p",{onClick:function(){return s(3)},className:3===c?"line":"",children:"Portfolio"}),Object(j.jsx)("p",{onClick:function(){return s(4)},className:4===c?"line":"",children:"Contact"}),Object(j.jsx)("p",{onClick:function(){return s(5)},className:5===c?"line":"",children:"Blog"})]})})}var O,m=t(50),x=t(51),f=t(52),p=t(13),g=Object(s.a)(p.b)(O||(O=Object(a.a)(["\nborder-radius: 8px;\nborder: 1px solid grey;\npadding:6px;\nmargin: 5px;\nfont-size: 30px;\ntext-decoration: none;\ncolor:rgb(141, 141, 141);\n\n&:hover{\n    color:rgb(14, 181, 247);\n}\n"])));function v(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"blog-navbar",children:[Object(j.jsx)(g,{to:"/blog/travel",children:Object(j.jsx)(m.e,{title:"Travel"})}),Object(j.jsx)(g,{to:"/blog/food",children:Object(j.jsx)(x.a,{title:"Culinary"})}),Object(j.jsx)(g,{to:"/blog/doc",children:Object(j.jsx)(f.a,{title:"Document"})}),Object(j.jsx)(g,{to:"/blog/study",children:Object(j.jsx)(m.a,{title:"Study"})})]})})}function N(e){var n=Array.from(e.text);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"textzone",children:n.map((function(e,n){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"text",children:e},n)})}))})})}var y=t(53);function k(e){for(var n=[],t=1;t<=Math.ceil(e.totalImages/e.itemperpage);t++)n.push(t);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"pagenumber-container",children:[Object(j.jsx)(y.c,{className:"pagenumber-icon",onClick:function(){return e.paginate(n[0])}}),n.map((function(n,t){return Object(j.jsx)("a",{onClick:function(){return e.paginate(n)},className:"pagenumber",children:n},t)})),Object(j.jsx)(y.b,{className:"pagenumber-icon",onClick:function(){return e.paginate(n[n.length-1])}})]})})}var F=t(54),S=t(55);function z(e){var n=e.url,t=e.alt,c=void 0===t?"":t,a=e.onLoad,s=void 0===a?function(){}:a,i=e.id,u=e.txt,l=e.link,b=e.temp,d=Object(o.useState)(!1),h=Object(r.a)(d,2),O=h[0],m=h[1],x=Object(o.useRef)(null),f=Object(o.useRef)(null),p=C(f);Object(o.useEffect)((function(){p&&!O&&x.current&&(x.current.onload=function(){m(!0),s()})}),[p,s]);var g=Object(o.useState)(!1),v=Object(r.a)(g,2),N=v[0],y=v[1],k=Object(o.useState)(""),z=Object(r.a)(k,2),w=z[0],M=z[1],A=Object(o.useState)(""),D=Object(r.a)(A,2),E=D[0],I=D[1],P=Object(o.useState)(""),T=Object(r.a)(P,2),B=T[0],H=T[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:N?"model open":"model",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:w,alt:""}),Object(j.jsx)("p",{children:E}),""!==B?Object(j.jsx)("a",{href:B,target:"_blank",className:"ext-icon",children:Object(j.jsx)(F.a,{})}):""]}),Object(j.jsx)(S.a,{className:"model-icon",onClick:function(){return y(!1)}})]}),Object(j.jsx)("div",{ref:f,onClick:function(){M(b),y(!0),I(u),H(l)},children:(p||O)&&Object(j.jsx)("img",{src:n,className:"image",alt:c,ref:x},i)})]})}function C(e){var n=Object(o.useState)(!1),t=Object(r.a)(n,2),c=t[0],a=t[1];return Object(o.useEffect)((function(){var n=new IntersectionObserver((function(t){Object(r.a)(t,1)[0].isIntersecting&&(a(!0),n.unobserve(e.current))}),{rootMargin:"0px"});return e.current&&n.observe(e.current),function(){e.current&&n.unobserve(e.current)}}),[]),c}var w,M;t(56),t(57),t(58),s.a.p(w||(w=Object(a.a)(["\n    &:hover {\n        background-color:","\n    }\n"])),(function(e){return e.color}));var A=["rgb(194, 232, 246)","rgb(188, 190, 235)","rgb(255, 245, 219)","rgb(252, 209, 222)","rgb(252, 164, 214)","rgb(13, 152, 187)"],D=["rgb(42, 167, 188)","rgb(71, 182, 188)","rgb(101, 196, 189)","rgb(130, 211, 189)","rgb(159, 226, 190)","rgb(125, 180, 235)","rgb(134, 210, 246)","rgb(177, 234, 247)","rgb(249, 246, 178)","rgb(246, 242, 76)","rgb(181, 235, 81)","rgb(187, 197, 242)","rgb(255, 221, 244)","rgb(255, 204, 231)"],E=s.a.div(M||(M=Object(a.a)(["\n    color:","\n"])),(function(e){return e.color}));function I(e){var n=Array.from(e.text1),t=Array.from(e.text2);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"textheaderhome-container",children:[Object(j.jsx)("div",{className:"textheaderhomezone",children:n.map((function(e,n){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(E,{className:"textheaderhome",color:A[n],children:e},n)})}))}),Object(j.jsx)("div",{className:"textheaderhomezone2",children:t.map((function(e,n){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(E,{className:"textheaderhome",color:D[n],children:e},n)})}))})]})})}},26:function(e,n,t){"use strict";t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return O}));var c=t(13),r=t(3),a=t(24),s=t(2),o=t.n(s),i=t(1),j=o.a.lazy((function(){return t.e(5).then(t.bind(null,62))})),u=o.a.lazy((function(){return Promise.all([t.e(12),t.e(1)]).then(t.bind(null,73))})),l=o.a.lazy((function(){return Promise.all([t.e(13),t.e(0)]).then(t.bind(null,66))})),b=[{path:"/",component:j},{path:"/home",component:j},{path:"/contact",component:u},{path:"/exp",component:o.a.lazy((function(){return t.e(3).then(t.bind(null,74))}))},{path:"/porto",component:o.a.lazy((function(){return t.e(6).then(t.bind(null,75))}))},{path:"/blog",component:l}];function d(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(c.a,{children:[Object(i.jsx)(a.c,{}),Object(i.jsxs)(o.a.Suspense,{fallback:Object(i.jsx)("p",{children:"Loading..."}),children:[b.map((function(e){return Object(i.jsx)("div",{children:Object(i.jsx)(r.b,{exact:!0,path:e.path,component:e.component})},e.path)})),Object(i.jsx)(r.b,{exact:!0,path:"*",children:Object(i.jsx)(r.a,{to:"/home"})}),Object(i.jsx)(O,{})]})]})})}var h=[{path:"/blog/travel",component:o.a.lazy((function(){return t.e(8).then(t.bind(null,69))}))},{path:"/blog/food",component:o.a.lazy((function(){return t.e(4).then(t.bind(null,70))}))},{path:"/blog/doc",component:o.a.lazy((function(){return t.e(2).then(t.bind(null,71))}))},{path:"/blog/study",component:o.a.lazy((function(){return t.e(7).then(t.bind(null,72))}))}];function O(){return Object(i.jsx)(i.Fragment,{children:h.map((function(e){return Object(i.jsx)("div",{children:Object(i.jsx)(r.b,{exact:!0,path:e.path,component:e.component})},e.path)}))})}},36:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(27),s=t.n(a),o=(t(36),t(37),t(26)),i=t(1);function j(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)(o.b,{})})})}s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root"))}},[[49,10,11]]]);