(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),a=n(43),i=n.n(a),o=(n(49),n(8)),r=(n.p,n(50),n(0));var u=function(e){return Object(r.jsx)("div",{children:e.messages.map((function(e,t){return Object(r.jsxs)("div",{className:"message-item",children:[Object(r.jsx)("p",{children:e.user}),Object(r.jsx)("h6",{children:e.message})]},t)}))})},j=n(14),l=n.n(j);var b=function(e){var t=Object(s.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(""),u=Object(o.a)(i,2),j=u[0],b=u[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Login"}),Object(r.jsx)("input",{value:c,onChange:function(e){a(e.target.value)},placeholder:"Username"}),Object(r.jsx)("input",{value:j,onChange:function(e){b(e.target.value)},placeholder:"Password"}),Object(r.jsx)("button",{onClick:function(){l.a.post("/login/verify",{userName:c,password:j}).then((function(t){console.log(t.data.isValid),e.setUsername(c),e.setIsLoggedIn(t.data.isValid)}))},children:"Log In!"})]})},g=n(44);var d=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(o.a)(a,2),j=i[0],d=i[1],O=Object(s.useState)(""),h=Object(o.a)(O,2),f=h[0],m=h[1],v=Object(s.useState)(""),x=Object(o.a)(v,2),p=x[0],S=x[1],C=Object(g.io)();return C.on("NewMessage",(function(e){console.log("New message"),c(e)})),Object(s.useEffect)((function(){l.a.get("/messages").then((function(e){console.log(e.data),c(e.data)}))}),[]),Object(r.jsx)(r.Fragment,{children:j?Object(r.jsxs)("div",{children:[Object(r.jsx)(u,{messages:n}),Object(r.jsx)("input",{type:"text",placeholder:"Write a message",value:p,onChange:function(e){return S(e.target.value)}}),Object(r.jsx)("button",{onClick:function(){C.emit("NewMessage",{message:p,user:f})},children:"Send!"})]}):Object(r.jsx)(b,{setUsername:m,setIsLoggedIn:d})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),O()}},[[99,1,2]]]);
//# sourceMappingURL=main.46060657.chunk.js.map