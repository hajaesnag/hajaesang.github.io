(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),r=c(17),j=c.n(r),o=(c(65),c(43)),d=c(23),l=c(58),b=c(106),h=c(104),O=c(107),u=c(105),x=(c.p,c(66),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4},{id:3,title:"ckckckck",content:"Born in the States",price:13e4}]),p=c(38),m=c(7),f=c(39),v=(c(67),c(2)),g=f.a.div(n||(n=Object(p.a)(["\n  padding : 20px;\n"]))),N=f.a.h4(i||(i=Object(p.a)(["\n  font-size : 25px;\n  color : ",";\n"])),(function(e){return e.color}));function y(){return Object(v.jsx)("div",{className:"my-alert",children:Object(v.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4!"})})}function k(e){return Object(v.jsxs)("p",{children:["\uc7ac\uace0 : ",e.inventory[0]]})}var S=function(e){var t=Object(s.useState)(!0),c=Object(d.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(),r=Object(d.a)(a,2);r[0],r[1],Object(s.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var j=Object(m.g)().id,o=e.shoes.find((function(e){return e.id==j}));return Object(m.f)(),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(g,{children:Object(v.jsx)(N,{className:"red",children:"\uc0c1\uc138\ud398\uc774\uc9c0"})}),!0===n?Object(v.jsx)(y,{}):null,Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-md-6",children:Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(o.id+1)+".jpg",width:"100%"})}),Object(v.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(v.jsx)("h4",{className:"pt-5",children:o.title}),Object(v.jsx)("p",{children:o.content}),Object(v.jsxs)("p",{children:[o.price,"\uc6d0"]}),Object(v.jsx)(k,{inventory:e.inventory}),Object(v.jsx)("button",{className:"btn btn-danger",onClick:function(){e.inventoryChange([9,10,11])},children:"\uc8fc\ubb38\ud558\uae30"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]})]})]})},w=c(22),B=c(57),C=c.n(B);function I(){return Object(v.jsx)(b.a,{bg:"light",expand:"lg",children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(b.a.Brand,{href:"#home",children:"React-Shop"}),Object(v.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(O.a,{className:"me-auto",children:[Object(v.jsx)(O.a.Link,{as:w.b,to:"/",children:"Home"}),Object(v.jsx)(O.a.Link,{as:w.b,to:"/Detail",children:"Detail"}),Object(v.jsxs)(u.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(v.jsx)(u.a.Item,{href:"#action/3.1",children:"1"}),Object(v.jsx)(u.a.Item,{href:"#action/3.2",children:"2"}),Object(v.jsx)(u.a.Item,{href:"#action/3.3",children:"3"}),Object(v.jsx)(u.a.Divider,{}),Object(v.jsx)(u.a.Item,{href:"#action/3.4",children:"4"})]})]})})]})})}function L(e){return Object(v.jsxs)("div",{className:"col-md-4",children:[Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(v.jsx)("h4",{children:e.shoes.title}),Object(v.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]})]})}var D=function(){var e=Object(s.useState)(x),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([10,11,12]),a=Object(d.a)(i,2),r=a[0],j=a[1];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(I,{}),Object(v.jsxs)(m.c,{children:[Object(v.jsx)(m.a,{path:"/detail/:id",children:Object(v.jsx)(S,{shoes:c,inventory:r,inventoryChange:j})}),Object(v.jsx)(m.a,{path:"/:id",children:Object(v.jsx)("div",{children:"\uc798\ubabb\ub41c \uacbd\ub85c\uc785\ub2c8\ub2e4."})}),Object(v.jsxs)(m.a,{path:"/",children:[Object(v.jsx)("div",{className:"Jumbotron",children:Object(v.jsxs)("div",{className:"contents",children:[Object(v.jsx)("h3",{children:"20% Season Off"}),Object(v.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, doloribus. Laudantium earum explicabo tempora consequuntur rerum cumque voluptatibus autem perferendis ex aliquid architecto, officiis, numquam harum distinctio non pariatur error."}),Object(v.jsx)("p",{children:Object(v.jsx)(l.a,{variant:"primary",children:"Primary"})})]})}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(v.jsx)(L,{shoes:c[t],i:t},t)}))}),Object(v.jsx)(l.a,{variant:"primary",onClick:function(){C.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),n([].concat(Object(o.a)(c),Object(o.a)(e.data)))})).catch((function(){console.log("error")}))},children:"\ub354\ubcf4\uae30"})]})]})]})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};j.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)(D,{})})}),document.getElementById("root")),F()}},[[98,1,2]]]);
//# sourceMappingURL=main.abba7976.chunk.js.map