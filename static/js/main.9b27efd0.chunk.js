(this.webpackJsonpcustomgoogle=this.webpackJsonpcustomgoogle||[]).push([[0],{24:function(n,e,t){n.exports=t(37)},29:function(n,e,t){},32:function(n,e,t){n.exports=t.p+"static/media/expand-svgrepo-com.9d3f0971.svg"},37:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(20),i=t.n(o),c=(t(29),t(3)),l=t(12),s=t(1),u=t(17),p=t(6),d=t(2);function m(){var n=Object(c.a)(['\n  margin: 20px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  button {\n    color: rgba(0, 0, 0, 0.87);\n    padding: 6px 16px;\n    font-size: 0.875rem;\n    min-width: 64px;\n    box-sizing: border-box;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    font-family: "Roboto", "Helvetica", "Arial", sans-serif;\n    font-weight: 500;\n    line-height: 1.75;\n    border-radius: 4px;\n    letter-spacing: 0.02857em;\n    text-transform: uppercase;\n    background-color: #1976d2;\n    outline: none;\n    border: none;\n    color: rgba(0, 0, 0, 0.87);\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    background-color: #1976d2;\n    &:hover {\n      background-color: rgb(17, 82, 147);\n      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n        0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n        0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    }\n  }\n']);return m=function(){return n},n}function f(){var n=Object(c.a)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 74%;\n  &:empty {\n    display: none;\n  }\n"]);return f=function(){return n},n}function b(){var n=Object(c.a)(["\n  width: 90%;\n  margin: 0 auto;\n  }\n"]);return b=function(){return n},n}function g(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid black;\n  padding: 15px;\n  span {\n    text-align: center;\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(c.a)(["\n  width: 70%;\n  padding: 10px;\n  font-size: 1.5rem;\n"]);return h=function(){return n},n}function x(){var n=Object(c.a)(["\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return x=function(){return n},n}function v(){var n=Object(c.a)(["\n  /* overflow-y: scroll;\n  height: 100vh; */\n  /* position: absolute;\n  top: 0; */\n"]);return v=function(){return n},n}var w=d.a.div(v()),E=d.a.div(x()),y=d.a.input(h()),j=d.a.div(g()),k=d.a.div(b()),O=d.a.div(f()),z=d.a.div(m());function S(){var n=Object(c.a)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  width: 15px;\n  height: 15px;\n  img {\n    width: 100%;\n    object-fit: cover;\n  }\n  &.expanded {\n    width: 50px;\n    height: 50px;\n  }\n"]);return S=function(){return n},n}function N(){var n=Object(c.a)(["\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s linear;\n  &:hover {\n    opacity: 1;\n    background: rgba(0, 0, 0, 0.4);\n  }\n  .closed {\n    .vertical {\n      transition: all 0.5s ease-in-out;\n      transform: translate(-50%, -50%) rotate(-90deg);\n    }\n    .horizontal {\n      transition: all 0.5s ease-in-out;\n      transform: translate(-50%, -50%) rotate(-90deg);\n      opacity: 1;\n    }\n  }\n\n  .opened {\n    opacity: 1;\n    .vertical {\n      transition: all 0.5s ease-in-out;\n      transform: translate(-50%, -50%) rotate(90deg);\n    }\n    .horizontal {\n      transition: all 0.5s ease-in-out;\n      transform: translate(-50%, -50%) rotate(90deg);\n      opacity: 0;\n    }\n  }\n\n  .circle {\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    width: 10px;\n    height: 10px;\n    .horizontal {\n      position: absolute;\n      background-color: red;\n      width: 15px;\n      height: 5px;\n      left: 50%;\n      top: 50%;\n    }\n    .vertical {\n      position: absolute;\n      background-color: red;\n      width: 5px;\n      height: 15px;\n      left: 50%;\n      top: 50%;\n    }\n  }\n"]);return N=function(){return n},n}function R(){var n=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 20%;\n  /* max-width: 19%; */\n  /* border: 2px solid black; */\n  &.bigShow {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    /* width: 70%;\n    height: 70%; */\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    max-width: inherit;\n    background: rgba(0, 0, 0, 0.3);\n    .opened {\n      transition: none;\n      opacity: 1;\n      width: 70%;\n      height: 70%;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      background: initial;\n    }\n    img {\n      width: 70%;\n      height: 70%;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n  }\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);return R=function(){return n},n}var I=d.a.div(R()),C=d.a.div(N()),H=d.a.div(S());function U(n,e){return"main image loaded"===e.type?e.src:n||e.src}function W(n){var e=n.data,o=e.id,i=e.previewURL,c=e.largeImageURL,l=Object(a.useState)(!1),s=Object(p.a)(l,2),u=s[0],d=s[1],m=(Object(a.useRef)(),function(n){var e=n.src,t=n.fallbackSrc,r=Object(a.useReducer)(U,null),o=Object(p.a)(r,2),i=o[0],c=o[1];return Object(a.useEffect)((function(){var n=new Image,a=new Image;n.onload=function(){c({type:"main image loaded",src:e})},a.onload=function(){c({type:"fallback image loaded",src:t})},n.src=e,a.src=t}),[e,t]),i}({src:c,fallbackSrc:i}));return r.a.createElement(I,{className:u?"bigShow":"smallShow",key:"Unique".concat(o)},r.a.createElement("img",{src:m,alt:""}),r.a.createElement(C,{className:"opened"},r.a.createElement("div",{className:"circle-plus closed",onClick:function(){console.log(n.data)}},r.a.createElement("div",{className:"circle"},r.a.createElement("div",{className:"horizontal"}),r.a.createElement("div",{className:"vertical"}))),r.a.createElement(H,{className:u?"expanded":"minified",onClick:function(){d(!u)}},r.a.createElement("img",{src:t(32),alt:""}))))}function q(){var n=Object(a.useRef)(null),e=Object(a.useRef)(0),t=Object(a.useRef)(1),o=Object(a.useState)({text:"",posts:[]}),i=Object(p.a)(o,2),c=i[0],l=i[1],s=function(n,a){c.text!==n?t.current=1:t.current=a+1,fetch("https://pixabay.com/api/?key=".concat("17361687-a101acdabc6a7719b500f899f","&q=").concat(n,"&image_type=photo&pretty=true&page=").concat(t.current)).then((function(n){return n.json()})).then((function(t){e.current=t.total,c.text!==n?l({text:n,posts:t.hits}):l({text:n,posts:[].concat(Object(u.a)(c.posts),Object(u.a)(t.hits))})}))};return r.a.createElement(w,{className:"page-google"},r.a.createElement("form",{id:"form",onSubmit:function(e){e.preventDefault(),s(n.current,t.current)}},r.a.createElement(E,null,r.a.createElement(y,{onInput:function(e){n.current=e.target.value},type:"text"}),r.a.createElement(j,null,r.a.createElement("span",null,e.current?e.current:0)))),r.a.createElement(k,null,r.a.createElement(O,null,c.posts.length>0&&c.posts.map((function(n,e){return r.a.createElement(W,{key:e,data:n})})))),c.posts.length>10&&r.a.createElement(z,null,r.a.createElement("button",{onClick:function(){s(n.current,t.current)}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435!")))}function B(){var n=Object(c.a)(["\n  ul {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    li {\n      list-style: none;\n    }\n  }\n"]);return B=function(){return n},n}var J=d.a.nav(B());function L(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(J,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/favorite"},"Favorite")))),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(q,null)),r.a.createElement(s.a,{exact:!0,path:"/favorite"},r.a.createElement("h1",null,"Hello Word!")))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.9b27efd0.chunk.js.map