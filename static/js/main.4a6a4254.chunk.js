(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n.n(a),s=n(7),r=n.n(s),i=(n(14),n(8)),d=n(2),l=n(3),u=n(5),h=n(4),j=function(t){var e=t.todos,n=t.deleteTodo,a=e.length?e.map((function(t){return Object(o.jsx)("div",{className:"collection-item",children:Object(o.jsx)("span",{onClick:function(){n(t.id)},children:t.content})},t.id)})):Object(o.jsx)("p",{className:"center white-text",children:"You have no todos left"});return Object(o.jsx)("div",{className:"todos collection",children:a})},b=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={content:" "},t.handleChange=function(e){t.setState({content:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state),t.setState({content:" "})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{className:"label",children:"Add a new todo:"}),Object(o.jsx)("input",{className:"inputBorder",type:"text",onChange:this.handleChange,value:this.state.content})]})})}}]),n}(a.Component),p=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:1,content:"Get a visa"},{id:2,content:"Get your passport"}]},t.deleteTodo=function(e){var n=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:n})},t.addTodo=function(e){e.id=Math.random();var n=[].concat(Object(i.a)(t.state.todos),[e]);t.setState({todos:n})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"todo-app container",children:[Object(o.jsx)("h1",{className:"center orange-text",children:"Travelers"}),Object(o.jsx)("p",{className:"center white-text subTitle",children:"Keep track of all your travel todo's. Be prepared for your next trip!"}),Object(o.jsx)(j,{todos:this.state.todos,deleteTodo:this.deleteTodo}),Object(o.jsx)(b,{addTodo:this.addTodo})]})}}]),n}(a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),o(t),a(t),c(t),s(t)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.4a6a4254.chunk.js.map