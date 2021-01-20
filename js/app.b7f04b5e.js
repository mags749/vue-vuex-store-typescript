(function(t){function e(e){for(var n,i,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-vuex-store-typescript/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=s;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"07a7":function(t,e,o){},"119c":function(t,e,o){t.exports=o.p+"img/archive.ce722616.svg"},"4ba1":function(t,e,o){},7119:function(t,e,o){"use strict";var n=o("cdb1"),r=o.n(n);r.a},"7d51":function(t,e,o){t.exports=o.p+"img/trash-2.9546173a.svg"},8499:function(t,e,o){t.exports=o.p+"img/plus-square.ee32109b.svg"},c796:function(t,e,o){"use strict";var n=o("07a7"),r=o.n(n);r.a},cd49:function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",[t._v("ToDo Example using Vue.js,")]),o("h1",[t._v("Store with Typescipt")]),o("router-view")],1)},a=[],i=o("9ab4"),c=o("60a3"),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),e=Object(i["a"])([Object(c["a"])({components:{}})],e),e}(c["d"]),u=s,p=u,l=(o("c796"),o("2877")),d=Object(l["a"])(p,r,a,!1,null,null,null),f=d.exports,m=o("8c4f"),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todoList"},[o("form",{on:{submit:t.formSubmit}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoName,expression:"todoName"}],staticClass:"todoName",attrs:{type:"text",name:"todoName",placeholder:"ToDo Item",autocomplete:"off"},domProps:{value:t.todoName},on:{input:function(e){e.target.composing||(t.todoName=e.target.value)}}})]),o("div",{class:t.entries.length>0?"todoMargin":""},t._l(t.entries,(function(e,n){return o("ToDoItem",{key:n,attrs:{index:n,toDo:e},on:{changeFlag:t.changeState}})})),1)])},v=[],b=o("4bb5"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todoItem"},[n("label",{staticClass:"checkbox path"},[n("input",{attrs:{type:"checkbox",disabled:t.toDo.isArchieved},domProps:{value:t.toDo.isCompleted,checked:!0===t.toDo.isCompleted},on:{change:t.changeCompleted}}),n("svg",{attrs:{viewBox:"0 0 21 21"}},[n("path",{attrs:{d:"M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"}})])]),n("label",{class:t.toDo.isArchieved?"todoItemName striked":"todoItemName"},[t._v(t._s(t.toDo.text))]),t.toDo.isArchieved?t._e():n("img",{attrs:{src:o("119c")},on:{click:t.archieveItem}}),t.toDo.isArchieved?n("img",{attrs:{src:o("8499")},on:{click:t.archieveItem}}):t._e(),n("img",{attrs:{src:o("7d51")},on:{click:t.deleteItem}})])},O=[],y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(e,t),e.prototype.changeFlag=function(t,e){},e.prototype.changeCompleted=function(t){this.changeFlag(this.index,"TOGGLE")},e.prototype.archieveItem=function(t){this.changeFlag(this.index,"ARCHIEVE")},e.prototype.deleteItem=function(t){this.changeFlag(this.index,"DELETE")},Object(i["a"])([Object(c["c"])()],e.prototype,"index",void 0),Object(i["a"])([Object(c["c"])()],e.prototype,"toDo",void 0),Object(i["a"])([Object(c["b"])("changeFlag")],e.prototype,"changeFlag",null),e=Object(i["a"])([Object(c["a"])({components:{}})],e),e}(c["d"]),j=y,D=j,x=(o("fe24"),Object(l["a"])(D,g,O,!1,null,null,null)),T=x.exports,_="todos",w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.todoName="",e}return Object(i["b"])(e,t),e.prototype.formSubmit=function(t){t.preventDefault();var e={isCompleted:!1,text:this.todoName,isArchieved:!1};this.addToDo(e),this.todoName=""},e.prototype.changeState=function(t,e){var o=Object(i["c"])(this.entries);switch(e){case"TOGGLE":o[t].isCompleted=!o[t].isCompleted;break;case"ARCHIEVE":o[t].isArchieved=!o[t].isArchieved;break;case"DELETE":o.splice(t,1);default:break}this.updateToDo({toDoList:o})},Object(i["a"])([Object(b["a"])("updateToDo",{namespace:_})],e.prototype,"updateToDo",void 0),Object(i["a"])([Object(b["a"])("addToDo",{namespace:_})],e.prototype,"addToDo",void 0),Object(i["a"])([Object(b["b"])((function(t){return t.todos.toDoList}))],e.prototype,"entries",void 0),e=Object(i["a"])([Object(c["a"])({components:{ToDoItem:T}})],e),e}(c["d"]),C=w,E=C,L=(o("7119"),Object(l["a"])(E,h,v,!1,null,null,null)),k=L.exports;n["a"].use(m["a"]);var I,A=new m["a"]({routes:[{path:"/todo",name:"todo",component:k},{path:"*",redirect:"/todo"}],mode:"history",linkActiveClass:"active"}),N=A,S=o("2f62"),P="ADD_TODO",F="UPDATE_TODO",M={updateToDo:function(t,e){var o=t.commit;o(F,e)},addToDo:function(t,e){var o=t.commit;o(P,e)}},G=(I={},I[F]=function(t,e){t.toDoList=Object(i["c"])(e.toDoList)},I[P]=function(t,e){t.toDoList.push(e)},I),$={toDoList:[]},V=!0,H={namespaced:V,state:$,mutations:G,actions:M},J=H;n["a"].use(S["a"]);var R=new S["a"].Store({modules:{todos:J}});n["a"].config.productionTip=!1,new n["a"]({router:N,render:function(t){return t(f)},store:R}).$mount("#app")},cdb1:function(t,e,o){},fe24:function(t,e,o){"use strict";var n=o("4ba1"),r=o.n(n);r.a}});
//# sourceMappingURL=app.b7f04b5e.js.map