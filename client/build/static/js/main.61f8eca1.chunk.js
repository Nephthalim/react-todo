(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(14),a=n.n(c),s=n(5),r=n(3),i=n(9),l=n(2),u=function(e){var t=e.loginUser,n=Object(o.useState)(""),c=Object(s.a)(n,2),a=(c[0],c[1]),u=(Object(r.g)(),Object(o.useRef)()),j=Object(o.useRef)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"w-50 mx-auto",children:[Object(l.jsx)("input",{ref:u,type:"email",className:"form-control my-3",name:"email",placeholder:"Email"}),Object(l.jsx)("input",{ref:j,type:"password",className:"form-control my-3",name:"password",placeholder:"Password"}),Object(l.jsx)("input",{type:"submit",className:"btn btn-primary w-100 my-3",onClick:function(e){e.preventDefault();var n={email:u.current.value,password:j.current.value},o=JSON.stringify(n);t(o,a)}}),Object(l.jsx)(i.b,{to:"/register",children:Object(l.jsx)("button",{type:"button",className:"btn btn-success w-100 my-3",children:"Register"})})]})})},j=(n(23),function(e){var t=e.setAuthentication,n=e.toaster;return Object(o.useEffect)((function(){console.log("LandingPage.js")}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"text-center my-5",children:"Login"}),Object(l.jsx)(u,{loginUser:function(e){fetch("https://nephthalim-react-todo.herokuapp.com/auth/login",{method:"POST",body:e,headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(200===e.status)return e.json();401===e.status?n.error("\ud83d\ude41 Please make sure you are using the right credentials!"):500===e.status&&n.error("\ud83d\ude41 Seems like there is a server error \u2639\ufe0f! Try again some other time")})).then((function(e){e.token&&(console.log(e.token),localStorage.setItem("token",e.token),console.log("================"),console.log("Set token"),console.log("================"),n.success(),t(!0),console.log("Set Authentication to true"))})).catch((function(e){console.log(e)}))}})]})}),d=(n(37),n(38),function(e){var t=e.searchTask,n=Object(o.useRef)();return Object(l.jsx)("form",{className:"searchBar",children:Object(l.jsx)("input",{ref:n,className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){e.preventDefault();var o=n.current.value;t({query:o})}})})}),m=function(e){var t=e.name,n=e.setAuthentication,o=e.searchTask;return Object(l.jsxs)("div",{className:"navbar-collapse _navbar",children:[Object(l.jsx)("h1",{className:"_nav-name",children:t.toUpperCase()}),Object(l.jsx)(d,{searchTask:o}),Object(l.jsx)("button",{className:"_nav-btn",onClick:function(e){e.preventDefault(),localStorage.removeItem("token"),n(!1)},children:" Logout "})]})},b=n(26),h=n(25),p=(n(39),n(40),function(e){var t=e.text,n=e.onConfirm,c=e.onClose,a=e.data,s=Object(o.useRef)(),r=Object(o.useRef)(),i=function(e){e.preventDefault();var t={name:s.current.value,description:r.current.value};console.log(t),n(t),c()};return Object(l.jsxs)("div",{className:"-modal",children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("form",{className:"form",children:a?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"form-item",children:[Object(l.jsx)("label",{children:"Name"}),Object(l.jsx)("input",{ref:s,className:"form-input form-control",type:"text",defaultValue:a.name})]}),Object(l.jsxs)("div",{className:"form-item",children:[Object(l.jsx)("label",{children:"Description"}),Object(l.jsx)("input",{ref:r,className:"form-input form-control",type:"text",defaultValue:a.description})]}),Object(l.jsxs)("div",{className:"form-btns",children:[Object(l.jsx)("input",{type:"submit",className:"-btn",title:"Confirm",onClick:i}),Object(l.jsx)("button",{className:"-btn -btn--alt",onClick:c,children:"Cancel"})]})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"form-block",children:[Object(l.jsx)("input",{className:"form-input form-control",type:"text",ref:s,placeholder:"Name"}),Object(l.jsx)("input",{className:"form-input form-control",type:"text",ref:r,placeholder:"Description"})]}),Object(l.jsxs)("div",{className:"form-btns",children:[Object(l.jsx)("input",{type:"submit",className:"-btn",title:"Confirm",onClick:i}),Object(l.jsx)("button",{className:"-btn -btn--alt",onClick:c,children:"Cancel"})]})]})})]})}),f=(n(41),function(e){var t=e.onClick;return Object(l.jsx)("div",{className:"backdrop",onClick:t})}),O=function(e){var t=e.setTodos,n=e.todos,c=Object(o.useState)(!1),a=Object(s.a)(c,2),r=a[0],i=a[1],u=localStorage.getItem("token");function j(){i(!1)}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"-btn_add",onClick:function(){i(!0)},children:Object(l.jsx)(h.a,{})}),r&&Object(l.jsx)(f,{onClick:j}),r&&Object(l.jsx)(p,{text:"Add",onClose:j,onConfirm:function(e){fetch("https://nephthalim-react-todo.herokuapp.com/todo",{method:"POST",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json",token:u}}).then((function(e){if(200===e.status)return e.json();403===e.status&&localStorage.removeItem("token")})).then((function(e){t([].concat(Object(b.a)(n),[e.todo]))}))}})]})},x=n(21),g=n(20),v=(n(42),n(43),function(e){var t=e.showModalHandler,n=e.deleteTodo;return Object(l.jsxs)("div",{className:"popup",children:[Object(l.jsx)("a",{onClick:t,children:"Edit"}),Object(l.jsx)("a",{onClick:n,children:"Delete"})]})}),k=function(e){e.key;var t=e.task,n=e.deleteTodo,c="https://nephthalim-react-todo.herokuapp.com",a=localStorage.getItem("token"),r=Object(o.useState)(!1),i=Object(s.a)(r,2),u=i[0],j=i[1],d=Object(o.useState)(!1),m=Object(s.a)(d,2),b=m[0],h=m[1],O=Object(o.useState)(!1),k=Object(s.a)(O,2),y=k[0],N=k[1],S=Object(o.useState)(!1),C=Object(s.a)(S,2),T=C[0],w=C[1];function I(){w(!1)}Object(o.useEffect)((function(){j(t.important),h(t)}),[]);return Object(l.jsxs)("div",{className:"container ".concat(u?"important":null),onDoubleClick:function(){T||function(e){var t=localStorage.getItem("token");fetch(c+"/todo/important/"+e,{method:"PUT",headers:{token:t,Accept:"application/json","Content-Type":"application/json"}}).then((function(e){if(200===e.status)return e.json();403===e.status&&localStorage.removeItem("token")})).then((function(){j(!u)}))}(b.id)},children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h3",{children:b.name}),Object(l.jsx)("div",{onClick:function(){N(!y)},children:y?Object(l.jsx)(g.a,{}):Object(l.jsx)(g.b,{})})]}),Object(l.jsx)("div",{children:y?Object(l.jsx)(v,{deleteTodo:function(e){e.preventDefault(),fetch(c+"/todo/"+b.id,{method:"DELETE",headers:{token:a}}).then((function(e){if(200===e.status)return e.json();403===e.status&&localStorage.removeItem("token")})).then((function(){n(b.id)}))},showModalHandler:function(){w(!0)}}):null}),Object(l.jsx)("p",{className:"description",children:b.description}),Object(l.jsx)("div",{className:"date",children:b.date_created}),T&&Object(l.jsx)(f,{onClick:I}),T&&Object(l.jsx)(p,{text:"Edit",onClose:I,data:b,onConfirm:function(e){fetch(c+"/todo/"+b.id,{method:"PUT",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json",token:a}}).then((function(e){if(200===e.status)return e.json();403===e.status&&localStorage.removeItem("token")})).then(h(Object(x.a)(Object(x.a)({id:b.id},e),{},{important:b.important,date_created:b.date_created})))}})]})},y=(n(44),function(e){var t=e.todos,n=e.deleteTodo;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"grid",children:t.map((function(e){return Object(l.jsx)(k,{task:e,deleteTodo:n},e.id)}))})})}),N=function(e){var t=e.setAuthentication,n=Object(o.useState)([]),c=Object(s.a)(n,2),a=c[0],r=c[1],i=Object(o.useState)(!0),u=Object(s.a)(i,2),j=u[0],d=u[1],b=Object(o.useState)({name:""}),h=Object(s.a)(b,2),p=h[0],f=h[1],x=localStorage.getItem("token"),g="https://nephthalim-react-todo.herokuapp.com";return Object(o.useEffect)((function(){console.log("DahsboardPage.js"),d(!0),fetch(g+"/todo",{method:"GET",headers:{token:x,"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(200===e.status)return e.json();403===e.status&&(localStorage.removeItem("token"),t(!1))})).then((function(e){f({name:e.name})})).catch((function(e){console.log("Here 1"),console.log(e),localStorage.removeItem("token"),t(!1)})),fetch(g+"/todo/all",{method:"GET",headers:{token:x,"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){r(e.todos)})).catch((function(e){console.log("Here 2"),console.log(e),localStorage.removeItem("token"),t(!1)})),d(!1)}),[]),j?Object(l.jsx)("section",{children:Object(l.jsx)("p",{children:"Loading..."})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{name:p.name,setAuthentication:t,searchTask:function(e){console.log("Searching ".concat(e)),fetch(g+"/search?query="+e.query,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",token:x}}).then((function(e){return e.json()})).then((function(e){r(e.searchResult)})).catch((function(e){localStorage.removeItem("token"),t(!1)}))}}),Object(l.jsx)(y,{todos:a,deleteTodo:function(e){r(a.filter((function(t){return t.id!==e})))}}),Object(l.jsx)(O,{setTodos:r,todos:a})]})},S=function(e){var t=e.addUser,n=Object(o.useRef)(),c=Object(o.useRef)(),a=Object(o.useRef)();return Object(l.jsxs)("form",{className:"w-50 mx-auto",children:[Object(l.jsx)("input",{ref:n,type:"text",className:"form-control my-3",name:"name",placeholder:"Name"}),Object(l.jsx)("input",{ref:c,type:"email",className:"form-control my-3",name:"email",placeholder:"Email"}),Object(l.jsx)("input",{ref:a,type:"password",className:"form-control my-3",name:"password",placeholder:"Password"}),Object(l.jsx)("input",{type:"submit",className:"btn btn-primary w-100",onClick:function(e){e.preventDefault();var o={name:n.current.value.toString(),email:c.current.value.toString(),password:a.current.value.toString()},s=JSON.stringify(o);t(s)}})]})},C=function(e){var t=Object(r.g)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"text-center my-5",children:"Register"}),Object(l.jsx)(S,{addUser:function(n){fetch("https://nephthalim-react-todo.herokuapp.com/auth/register",{method:"POST",body:n,headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(200===e.status)return e.json()})).then((function(t){localStorage.setItem("token",t.token),e(!0)})).catch((function(e){t.replace("/register")}));var o=localStorage.getItem("token");void 0!==o&&""!==o&&r.a}})]})},T=n(13);n(45);var w=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=localStorage.getItem("token");Object(o.useEffect)((function(){a&&""!=a&&void 0!=a&&c(!0)}));var i={success:function(){return T.b.success("\ud83c\udf89 You have successfuly logged in.",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},error:function(e){return T.b.error(e,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{path:"/",exact:!0,children:n?Object(l.jsx)(N,{setAuthentication:c}):Object(l.jsx)(j,{setAuthentication:c,toaster:i})}),Object(l.jsx)(r.b,{path:"/register",exact:!0,children:n?Object(l.jsx)(r.a,{to:"/"}):Object(l.jsx)(C,{setAuthentication:c})})]}),Object(l.jsx)(T.a,{position:"bottom-right",autoClose:2500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})};a.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.61f8eca1.chunk.js.map