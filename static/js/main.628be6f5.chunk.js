(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{40:function(n,t,e){},44:function(n,t,e){"use strict";e.r(t);var r=e(2),i=e(0),a=e.n(i),o=e(29),c=e.n(o),d=(e(40),e(6)),s=e(3),u=e(4);function l(){var n=Object(s.a)(["\n  width: 25px;\n  transition: color 85ms;\n  &:hover {\n    color: #efaeae;\n    path:nth-child(3) {\n      animation: "," 200ms linear;\n    }\n    path:nth-child(4) {\n      animation: "," 200ms linear;\n    }\n\n    animation: "," 200ms linear;\n  }\n"]);return l=function(){return n},n}function x(){var n=Object(s.a)(["\n  0%,100%{\n    transform:translateY(0)\n  }\n  1%,99%{\n    transform:translateY(-40px)\n  }\n"]);return x=function(){return n},n}function f(){var n=Object(s.a)(["\n  0%,50%,100%{\n    transform:rotate(0deg)\n    \n  }\n  25%{\n    transform:rotate(15deg)\n  }\n  75%{\n    transform:rotate(-15deg)\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(s.a)(["\n  height: 100%;\n  width: 100%;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  z-index: 100;\n"]);return p=function(){return n},n}function b(){var n=Object(s.a)(["\n  border-radius: 3px;\n  border: none;\n  box-shadow: #091e4240 0px 1px 0px 0px;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem 1rem;\n  width: 100%;\n"]);return b=function(){return n},n}function j(){var n=Object(s.a)(["\n  background-color: #423c6d;\n  border-radius: 3px;\n  border: none;\n  box-shadow: none;\n  color: #fff;\n  padding: 6px 12px;\n  text-align: center;\n  transition: background 85ms ease-in;\n  &:hover {\n    background-color: #2b236b;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(s.a)(["\n  max-width: 300px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: flex-start;\n"]);return O=function(){return n},n}function g(){var n=Object(s.a)(["\n  background-color: #eadcc1;\n  border-radius: 3px;\n  border: none;\n  color: #000;\n  cursor: pointer;\n  max-width: 300px;\n  padding: 10px 12px;\n  text-align: left;\n  transition: background 85ms ease-in;\n  width: 100%;\n  &:hover {\n    background-color: #e8c78b;\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(s.a)(["\n  background-color: #fff;\n  cursor: pointer;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem 1rem;\n  max-width: 300px;\n  border-radius: 3px;\n"]);return h=function(){return n},n}function m(){var n=Object(s.a)(["\n  padding: 6px 16px 12px;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n"]);return m=function(){return n},n}function v(){var n=Object(s.a)(["\n  background-color: #ebecf0;\n  width: 300px;\n  margin-right: 20px;\n  border-radius: 3px;\n  padding: 8px 8px;\n  flex-grow: 0;\n  box-shadow: black 2px 2px 5px 0px;\n  @media (max-width: 768px) {\n    margin-right: 0px;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(s.a)(["\n  transform: ",";\n  opacity: ",";\n"]);return y=function(){return n},n}function I(){var n=Object(s.a)(["\n  align-items: flex-start;\n  background-color: #94b5c2;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  padding: 20px;\n  width: 100%;\n  @media (max-width: 768px) {\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n  }\n"]);return I=function(){return n},n}var k=u.a.div(I()),w=u.a.div(y(),(function(n){return n.isPreview?"rotate(5deg)":void 0}),(function(n){return n.isHidden?0:1})),C=Object(u.a)(w)(v()),T=u.a.div(m()),D=Object(u.a)(w)(h()),A=u.a.button(g()),E=u.a.div(O()),M=u.a.button(j()),S=u.a.input(b()),L=u.a.div(p()),_=Object(u.b)(f()),R=Object(u.b)(x()),P=u.a.svg(l(),R,R,_),B=function(n){var t=n.onAdd,e=Object(i.useState)(""),a=Object(d.a)(e,2),o=a[0],c=a[1],s=function(){var n=Object(i.useRef)(null);return Object(i.useEffect)((function(){var t;null===(t=n.current)||void 0===t||t.focus()}),[]),n}();return Object(r.jsxs)(E,{children:[Object(r.jsx)(S,{ref:s,value:o,onChange:function(n){return c(n.target.value)}}),Object(r.jsx)(M,{onClick:function(){return t(o)},children:"Create"})]})},G=function(n){var t=Object(i.useState)(!1),e=Object(d.a)(t,2),a=e[0],o=e[1],c=n.onAdd,s=n.toggleButtonText,u=n.dark;return a?Object(r.jsx)(B,{onAdd:function(n){function t(t){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n){c(n),o(!1)}))}):Object(r.jsx)(A,{dark:u,onClick:function(){return o(!0)},children:s})},N=e(34),V=e(7),K=e(26),U=function(n,t){return n.findIndex((function(n){return n.id===t}))},W={draggedItem:void 0,lists:[{id:"0",text:"To Do",tasks:[{id:"c0",text:"Generate app scaffold"}]},{id:"1",text:"In Progress",tasks:[{id:"c2",text:"Learn Typescript"}]},{id:"2",text:"Done",tasks:[{id:"c3",text:"Begin to use static typing"}]}]},H=function(n,t){switch(t.type){case"ADD_LIST":return 0===t.payload.length?Object(V.a)({},n):Object(V.a)(Object(V.a)({},n),{},{lists:[].concat(Object(N.a)(n.lists),[{id:Object(K.a)(),text:t.payload,tasks:[]}])});case"ADD_TASK":if(0===t.payload.text.length)return Object(V.a)({},n);var e=U(n.lists,t.payload.listId),r=Object(V.a)({},n);return r.lists[e].tasks.push({id:Object(K.a)(),text:t.payload.text}),r;case"MOVE_LIST":var i=t.payload,a=i.dragIndex,o=i.hoverIndex;return n.lists=function(n,t,e){var r=e<0?n.length+e:e,i=n.splice(t,1)[0];return n.splice(r,0,i),n}(n.lists,a,o),Object(V.a)({},n);case"MOVE_TASK":var c=t.payload,d=c.dragIndex,s=c.hoverIndex,u=c.sourceColumn,l=c.targetColumn,x=U(n.lists,u),f=U(n.lists,l),p=n.lists[x].tasks.splice(d,1)[0];return n.lists[f].tasks.splice(s,0,p),Object(V.a)({},n);case"SET_DRAGGED_ITEM":return Object(V.a)(Object(V.a)({},n),{},{draggedItem:t.payload});case"DELETE_LIST":var b=n.lists.filter((function(n){return n.id!==t.payload.listId}));return Object(V.a)(Object(V.a)({},n),{},{lists:b});default:return n}},J=Object(i.createContext)({}),Y=function(n){var t=n.children,e=Object(i.useReducer)(H,W),a=Object(d.a)(e,2),o=a[0],c=a[1];return Object(r.jsx)(J.Provider,{value:{state:o,dispatch:c},children:t})},z=function(){return Object(i.useContext)(J)},q=e(49),F=e(48),Q=e(28),X=function(n){var t=z().dispatch,e=Object(F.a)({item:n,begin:function(){return t({type:"SET_DRAGGED_ITEM",payload:n})},end:function(){return t({type:"SET_DRAGGED_ITEM",payload:void 0})}}),r=Object(d.a)(e,3),a=r[1],o=r[2];return Object(i.useEffect)((function(){o(Object(Q.a)(),{captureDraggingState:!0})}),[o]),{drag:a}},Z=function(n,t,e,r){return Boolean(!n&&t&&t.type===e&&t.id===r)},$=function(n){var t=n.text,e=n.id,a=n.index,o=n.columnId,c=n.isPreview,s=z(),u=s.state,l=s.dispatch,x=Object(i.useRef)(null),f=X({type:"CARD",id:e,index:a,text:t,columnId:o}).drag,p=Object(q.a)({accept:"CARD",hover:function(n){if(n.id!==e){var t=n.index,r=a,i=n.columnId,c=o;l({type:"MOVE_TASK",payload:{dragIndex:t,hoverIndex:r,sourceColumn:i,targetColumn:c}}),n.index=r,n.columnId=c}}});return f((0,Object(d.a)(p,2)[1])(x)),Object(r.jsx)(D,{ref:x,isHidden:Z(c,u.draggedItem,"CARD",e),isPreview:c,children:t})},nn=function(n){var t=n.listId,e=z().dispatch;return Object(r.jsxs)(P,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",onClick:function(){return e({type:"DELETE_LIST",payload:{listId:t}})},children:[Object(r.jsx)("title",{children:"Trash"}),Object(r.jsx)("path",{d:"M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}),Object(r.jsx)("path",{className:"trash_cap",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 112h352"}),Object(r.jsx)("path",{className:"trash_cap",d:"M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"})]})},tn=function(n){var t=n.text,e=n.index,a=n.id,o=n.isPreview,c=z(),s=c.state,u=c.dispatch,l=Object(q.a)({accept:["COLUMN","CARD"],hover:function(n){if("COLUMN"===n.type){var t=n.index,r=e;if(t===r)return;u({type:"MOVE_LIST",payload:{dragIndex:t,hoverIndex:r}}),n.index=r}else{var i=n.index,o=n.columnId,c=a;if(o===c)return;u({type:"MOVE_TASK",payload:{dragIndex:i,hoverIndex:0,sourceColumn:o,targetColumn:c}}),n.index=0,n.columnId=c}}}),x=Object(d.a)(l,2)[1],f=Object(i.useRef)(null);return(0,X({type:"COLUMN",id:a,index:e,text:t}).drag)(x(f)),Object(r.jsxs)(C,{ref:f,isPreview:o,isHidden:Z(o,s.draggedItem,"COLUMN",a),children:[Object(r.jsxs)(T,{children:[t,Object(r.jsx)(nn,{listId:a})]}),s.lists[e].tasks.map((function(n,t){return Object(r.jsx)($,{text:n.text,id:n.id,columnId:a,index:t},n.id)})),Object(r.jsx)(G,{toggleButtonText:"+Add another task",onAdd:function(n){return u({type:"ADD_TASK",payload:{text:n,listId:a}})},dark:!0})]})},en=e(46),rn=function(){var n=Object(en.a)((function(n){return{item:n.getItem(),isDragging:n.getItem(),currentOffset:n.getClientOffset()}})),t=n.isDragging,e=n.item,i=n.currentOffset;return t?Object(r.jsx)(L,{children:Object(r.jsx)("div",{style:an(i),children:"COLUMN"===e.type?Object(r.jsx)(tn,{id:e.id,text:e.text,index:e.index,isPreview:!0}):Object(r.jsx)($,{columnId:e.columnId,isPreview:!0,index:0,id:e.id,text:e.text})})}):null};function an(n){if(!n)return{display:"none"};var t=n.x,e=n.y,r="translate(".concat(t,"px,").concat(e,"px)");return{transform:r,WebkitTransform:r}}var on=function(){var n=z(),t=n.state,e=n.dispatch;return Object(r.jsxs)(k,{children:[Object(r.jsx)(rn,{}),t.lists.map((function(n,t){return Object(r.jsx)(tn,{id:n.id,text:n.text,index:t},n.id)})),Object(r.jsx)(G,{toggleButtonText:"+ Add another list",onAdd:function(n){return e({type:"ADD_LIST",payload:n})}})]})},cn=e(47),dn=e(22);c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(cn.a,{backend:dn.a,children:Object(r.jsx)(Y,{children:Object(r.jsx)(on,{})})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.628be6f5.chunk.js.map