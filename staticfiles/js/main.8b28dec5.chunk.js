(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{207:function(e,t,n){},208:function(e,t,n){},615:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),s=(n(207),n(208),n(11)),o=n(655),l=n(660),u=n(665),j=n(666),d=n(683),b=n(667),h=n(661),m=n(668),x=n(94),f=n(659),p=n(192),O=n(33),g=n(680),v=n(658),w=n(617),y=n(662),k=n(684),C=n(664),S=n(663),N=n(18),I=n(2),T=Object(o.a)({branding:{background:"linear-gradient(to right, #33ccff 20%, #ff99cc 100%)",padding:10},noDecoration:{textDecoration:"none"},user:{background:"linear-gradient(to right, #ff9999 0%, #ffccff 100%)"}}),P=function(e){var t=T(),n=e.user,a=e.overSm,r=e.overMd;return Object(I.jsxs)(v.a,{style:{width:"".concat(r?"20vw":a?"30vw":"80vw"),paddingTop:0},children:[!a&&Object(I.jsxs)(N.b,{to:"/",className:t.noDecoration,children:[Object(I.jsxs)(x.a,{variant:"h6",display:"block",align:"center",className:t.branding,children:["BLOG",Object(I.jsx)(x.a,{variant:"caption",display:"block",children:"by aman.solutions"})]}),Object(I.jsx)(f.a,{})]}),Object(I.jsxs)(l.a,{container:!0,justifyContent:"flex-start",alignItems:"center",direction:"row",className:t.user,children:[Object(I.jsx)(h.a,{color:"secondary",component:N.b,to:"/auth/login",children:Object(I.jsx)(g.c,{})}),Object(I.jsx)(x.a,{variant:"h6",children:n?n.username.toUpperCase():""})]}),Object(I.jsx)(f.a,{}),Object(I.jsxs)(w.a,{component:N.b,to:"/newpost",children:[Object(I.jsx)(y.a,{children:Object(I.jsx)(k.a,{children:Object(I.jsx)(S.a,{})})}),Object(I.jsx)(C.a,{primary:"Add Post",secondary:"It will add new post"})]})]})},W=Object(o.a)({topBar:{background:"#ffffff",color:"darkgray",height:"9vh"},appBar:{height:"9vh"}}),B=function(e){var t=e.user,n=W(),r=Object(O.a)(),c=Object(u.a)(r.breakpoints.up("sm")),i=Object(u.a)(r.breakpoints.up("md")),o=Object(a.useReducer)((function(e){return!e}),!1),v=Object(s.a)(o,2),w=v[0],y=v[1];return Object(I.jsxs)(j.a,{position:"static",className:n.appBar,children:[Object(I.jsx)(d.a,{anchor:"left",open:w,onClose:y,children:Object(I.jsx)(P,{user:t,overSm:c,overMd:i})}),Object(I.jsxs)(b.a,{className:n.topBar,children:[Object(I.jsx)(l.a,{item:!0,xs:3,md:4,lg:4,align:"flex-start",children:Object(I.jsx)(h.a,{onClick:y,children:Object(I.jsx)(g.a,{})})}),c&&Object(I.jsxs)(l.a,{item:!0,xs:12,md:4,lg:4,align:"center",children:[Object(I.jsx)(m.a,{children:Object(I.jsx)(N.b,{to:"/",style:{textDecoration:"none"},children:Object(I.jsx)(x.a,{variant:"h5",children:"Blog"})})}),Object(I.jsx)(f.a,{orientation:"vertical"})]}),Object(I.jsx)(l.a,{item:!0,xs:12,md:4,lg:4,align:"center",children:Object(I.jsxs)(l.a,{container:!0,justifyContent:"center",alignItems:"center",style:{borderRadius:"20px",border:"2px solid gray"},children:[Object(I.jsx)(l.a,{item:!0,xs:2,children:Object(I.jsx)(g.b,{})}),Object(I.jsx)(l.a,{item:!0,xs:10,children:Object(I.jsx)(p.a,{fullWidth:!0,placeholder:"Search...",type:"text"})})]})}),c&&Object(I.jsx)(l.a,{item:!0,xs:3,align:"center",children:Object(I.jsxs)(m.a,{color:"secondary",style:{marginInline:20},component:N.b,to:"/auth/login",children:[Object(I.jsx)(g.c,{size:"20"}),Object(I.jsx)(x.a,{variant:"h6",children:t.username})]})})]})]})},F=n(15),D=n(7),R=n.n(D),X=n(13),E=n(21),z=n(685),A=n(184),L="/blog-api/post/",M="/user-api/",U=function(e){var t=L;switch(e){case"post":t=L;break;case"topic":t="/blog-api/topic/";break;case"author":t="/blog-api/author/";break;default:t=L}return t};function J(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var r=A.trim(n[a]);if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}var _=function(){var e=Object(X.a)(R.a.mark((function e(){var t,n,a,r=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"post",n=U(t),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(X.a)(R.a.mark((function e(){var t,n,a,r,c=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"post",n=c.length>1&&void 0!==c[1]?c[1]:"1",a=U(t),e.next=5,fetch("".concat(a).concat(n)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(X.a)(R.a.mark((function e(t){var n,a,r,c,i,s,o=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"post",a=o.length>2&&void 0!==o[2]?o[2]:"1",r=U(n),c=J("csrftoken"),i={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":c},body:JSON.stringify(t)},e.next=7,fetch("".concat(r).concat(a),i).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(X.a)(R.a.mark((function e(t){var n,a,r,c,i,s=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"post",a=U(n),r=J("csrftoken"),c={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":r},body:JSON.stringify(t)},e.next=6,fetch("".concat(a),c).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(X.a)(R.a.mark((function e(){var t,n,a,r,c,i,s=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"post",n=s.length>1&&void 0!==s[1]?s[1]:"1",a=U(t),r=J("csrftoken"),c={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":r}},e.next=7,fetch("".concat(a).concat(n),c).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(X.a)(R.a.mark((function e(t){var n,a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/auth-api/",n=J("csrftoken"),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":n},body:JSON.stringify(t)},r=null,e.next=6,fetch("".concat("/auth-api/"),a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:return r=e.sent,console.debug("Data from communicator",r),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(X.a)(R.a.mark((function e(){var t,n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M,t=J("csrftoken"),n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":t},body:JSON.stringify({})},e.next=5,fetch("/user-api/",n).then((function(e){return e.json()})).then((function(e){return e}));case 5:return a=e.sent,console.log(a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(e){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":J("csrftoken")},body:JSON.stringify({})}).then((function(e){return e.json()}))},Q=n(189);function Z(){var e=Object(Q.a)("/user-api/",K),t=e.data;return{loading:!t,user_:t,error:e.error,mutate:e.mutate}}var ee=window.location.protocol+"//"+window.location.hostname+":8000/",te={username:"",group:[],active:!1,isActive:!1,isStaff:!1,isSuperUser:!1},ne=Object(o.a)({loginForm:{minWidth:"50%",height:"90vh",margin:"auto"},form:{border:"5px solid gray",padding:40,borderRadius:20,background:"lightblue"},formcomponent:{marginBlock:10}}),ae=function(){var e=ne(),t=Object(a.useState)({username:"",password:""}),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(te),o=Object(s.a)(i,2),u=o[0],j=o[1],d=Object(a.useState)(null),b=Object(s.a)(d,2),h=b[0],f=b[1],p=function(e){var t=e.target.name,n=e.target.value;"username"===t&&c(Object(E.a)(Object(E.a)({},r),{},{username:n})),"password"===t&&c(Object(E.a)(Object(E.a)({},r),{},{password:n}))},O=Z(),g=O.loading,v=O.user_,w=O.error;Object(a.useEffect)((function(){g||w?console.warn(w):j(v)}),[v,g,w]);var y=function(){var e=Object(X.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(te),f(null),e.next=4,q(r);case 4:n=e.sent,console.debug(n),n?j(n):f("Invalid credentials");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(X.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:n=e.sent,console.debug(n),j(te);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(l.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",className:e.loginForm,children:Object(I.jsx)(l.a,{item:!0,className:e.form,align:"center",children:u&&""===u.username?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(l.a,{item:!0,xs:10,md:10,align:"center",children:[Object(I.jsx)(x.a,{variant:"h5",children:"Login to Blog"}),Object(I.jsx)(x.a,{variant:"caption",children:"by Aman Solutions"})]}),Object(I.jsx)(l.a,{item:!0,xs:10,md:10,align:"center",className:e.formcomponent,children:Object(I.jsx)(z.a,{value:r.username,name:"username",onChange:p,variant:"outlined",size:"small",label:"username",required:!0})}),Object(I.jsx)(l.a,{item:!0,xs:10,md:10,align:"center",className:e.formcomponent,children:Object(I.jsx)(z.a,{value:r.password,name:"password",type:"password",size:"small",onChange:p,variant:"outlined",label:"password",required:!0})}),Object(I.jsx)(l.a,{item:!0,xs:10,className:e.formcomponent,children:Object(I.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){return y()},children:"Login"})}),Object(I.jsx)(l.a,{item:!0,xs:10,className:e.formcomponent,children:Object(I.jsx)(x.a,{variant:"caption",children:h||""})})]}):Object(I.jsxs)(l.a,{item:!0,children:[Object(I.jsxs)(x.a,{variant:"h5",children:["Hi ",u.username&&u.username.toUpperCase()," You are Loggin"]}),Object(I.jsx)(m.a,{variant:"contained",className:e.formcomponent,component:N.b,to:"/",children:"Go to Home Page"}),Object(I.jsx)(m.a,{variant:"contained",color:"secondary",className:e.formcomponent,onClick:function(){return k()},children:"Logout User"})]})})})},re=function(){return Object(I.jsx)("div",{children:"Register Page"})},ce=n(22),ie=n(3),se=n(671),oe=n(687),le=n(678),ue=n(669),je=n(673),de=n(674),be=n(675),he=n(676),me=function(e,t,n,a){var r,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"obj";r="arr"===c?Object(ce.a)(a):Object(E.a)({},a);var i=t.split(".");switch(i.length){case 1:r[i[0]]=e;break;case 2:r[i[0]][i[1]]=e;break;case 3:r[i[0]][i[1]][i[2]]=e;break;case 4:r[i[0]][i[1]][i[2]][i[3]]=e;break;case 5:r[i[0]][i[1]][i[2]][i[3]][i[4]]=e;break;case 6:r[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]]=e;break;case 7:r[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]]=e;break;case 8:r[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]]=e;break;case 9:r[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]]=e;break;case 10:r[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]]=e;break;case 11:r[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]][i[10]]=e;break;case 12:r[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]][i[10]][i[11]]=e;break;case 13:r[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]][i[10]][i[11]][i[12]]=e;break;case 14:r[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]][i[10]][i[11]][i[12]][i[13]]=e;break;case 15:r[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]][i[10]][i[11]][i[12]][i[13]][i[14]]=e;break;default:console.log("Cant update",t)}n(r)};var xe=n(682),fe=n(62),pe=n.n(fe),Oe=n(63),ge=n.n(Oe),ve=n(93),we=n(679),ye=n(672),ke=["node","inline","className","children"],Ce=function(e){var t=Object(O.a)(),n=Object(u.a)(t.breakpoints.up("sm")),r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],o=c[1],j=Object(a.useState)(null),d=Object(s.a)(j,2),b=d[0],h=d[1],f=Object(a.useState)(null),p=Object(s.a)(f,2),g=p[0],v=p[1],w=e.match.params.pk;Object(a.useEffect)((function(){var e=function(){var e=Object(X.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("post",w);case 2:n=e.sent,h(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=Object(X.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("topic");case 2:n=e.sent,v(n),console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(),t()}),[e.match.params.pk,w]);var y=function(e){o("modified");var t=e.target.value,n=e.target.name;me(t,n,h,b)},S=function(){var e=Object(X.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o("updating"),e.next=3,V(b,"post",b.id);case 3:n=e.sent,console.log(n),o("Done");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T={code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,r=Object(ie.a)(e,ke),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(I.jsx)(we.a,Object(E.a)({style:ye.a,language:c[1],PreTag:"div",children:String(a).replace(/\n$/,"")},r)):Object(I.jsx)("code",Object(E.a)(Object(E.a)({className:n},r),{},{children:a}))}};return Object(I.jsx)(l.a,{container:!0,alignItems:"center",children:Object(I.jsxs)(l.a,{item:!0,xs:12,align:"flex-start",children:[Object(I.jsx)(l.a,{item:!0,xs:12,align:"center",children:Object(I.jsx)("hr",{})}),Object(I.jsxs)(l.a,{container:!0,justifyContent:"space-around",alignItems:"flex-start",direction:"row",children:[Object(I.jsxs)(l.a,{item:!0,xs:12,md:5,style:n?{maxWidth:"45vw",overflowX:!0}:{maxWidth:"90vw",overflowX:!0},children:[Object(I.jsx)(z.a,{value:b?b.title:"",onChange:y,name:"title",fullWidth:!0}),Object(I.jsx)(z.a,{value:b?b.subtitle:"",onChange:y,name:"subtitle",multiline:!0,rows:3,fullWidth:!0}),Object(I.jsx)(z.a,{value:b?b.image:"",onChange:y,name:"image",variant:"outlined",size:"small",fullWidth:!0}),Object(I.jsxs)(se.a,{children:[Object(I.jsx)(oe.a,{id:"demo-mutiple-checkbox-label",children:"Tag"}),Object(I.jsx)(le.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:b?b.topic:[],onChange:function(e){console.log(e.target.value),me(e.target.value,"topic",h,b)},input:Object(I.jsx)(ue.a,{}),renderValue:function(e){return g?g.filter((function(t){return e.includes(t.id)})).map((function(e){return e.name})).join(", "):""},MenuProps:b?b.topics:[],children:g&&b&&g.map((function(e){return Object(I.jsxs)(je.a,{value:e.id,children:[Object(I.jsx)(xe.a,{checked:b.topic.indexOf(e.id)>-1}),Object(I.jsx)(C.a,{primary:e.name})]},e.id)}))})]}),Object(I.jsx)(z.a,{value:b?b.content:"",onChange:y,name:"content",multiline:!0,fullWidth:!0,variant:"filled"})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:7,align:"flex-start",style:n?{maxWidth:"45vw",overflowX:!0,alignSelf:"flex-start"}:{maxWidth:"90vw",overflowX:!0},children:[g&&b?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(x.a,{variant:"h5",children:b?b.title:""}),Object(I.jsx)(x.a,{variant:"subtitle1",children:b?b.subtitle:""}),Object(I.jsx)(de.a,{children:Object(I.jsx)(be.a,{component:"img",alt:"background",width:"100%",src:b?b.image:""})}),Object(I.jsx)(pe.a,{rehypePlugins:[ge.a,ve.a],components:T,children:b?b.content:""}),Object(I.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(I.jsx)(k.a,{alt:b.author_info.name,src:ee+b.author_info.image}),Object(I.jsx)(x.a,{variant:"h6",style:{padding:10},children:b.author_info.name})]})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(he.a,{variant:"text",height:50,animation:"wave"}),Object(ce.a)(Array(4).keys()).map((function(e){return Object(I.jsx)(he.a,{variant:"text",animation:"wave"},e)})),Object(I.jsx)(he.a,{variant:"rect",width:"100%",height:160}),Object(I.jsx)(l.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"center",children:Object(ce.a)(Array(40).keys()).map((function(e){return Object(I.jsx)(he.a,{variant:"text",width:"100%",animation:"wave"},e)}))}),Object(I.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(I.jsx)(he.a,{variant:"circle",width:40,height:40}),Object(I.jsx)(he.a,{variant:"text",width:120,height:30,animation:"wave"})]})]}),g&&b?g.filter((function(e){return b.topic.includes(e.id)})).map((function(e){return Object(I.jsxs)(m.a,{size:"small",style:{background:"lightblue",margin:10},children:[Object(I.jsx)(k.a,{sizes:"small",alt:e.name,variant:"circular",src:e.image,style:{width:30,height:30}}),e.name]},e.id)})):Object(ce.a)(Array(2).keys()).map((function(e){return Object(I.jsxs)(m.a,{size:"small",style:{background:"lightblue",margin:10},children:[Object(I.jsx)(he.a,{variant:"rect",width:30,height:30}),Object(I.jsx)(he.a,{variant:"text",width:60,style:{marginInline:5}})]},e)}))]}),Object(I.jsxs)(l.a,{item:!0,xs:12,align:"center",style:{marginBlock:20},children:["modified"===i&&Object(I.jsx)(m.a,{style:{background:"orange",color:"white"},onClick:function(){return S()},children:"Click to Submit"}),"updating"===i&&Object(I.jsx)(m.a,{style:{background:"green",color:"white"},children:"Updating"}),!i&&b&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m.a,{style:{background:"green",color:"white"},component:N.b,to:"/post/".concat(b.id),children:"View Post"}),Object(I.jsx)(m.a,{style:{background:"red",color:"white",marginInline:20},onClick:function(){return $("post",b.id)},component:N.b,to:"/",children:"Delete Post"})]})]})]})]})})},Se=["node","inline","className","children"],Ne={title:"Replace with Post Title",subtitle:"Replace with Post Subtitle",image:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",content:"Replace with Markdown content",topic:[]},Ie=function(e){var t=Object(O.a)(),n=Object(u.a)(t.breakpoints.up("sm")),r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],o=c[1],j=Object(a.useState)(Ne),d=Object(s.a)(j,2),b=d[0],h=d[1],f=Object(a.useState)(null),p=Object(s.a)(f,2),g=p[0],v=p[1],w=Object(a.useState)(null),y=Object(s.a)(w,2),S=y[0],T=y[1];Object(a.useEffect)((function(){(function(){var e=Object(X.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("topic");case 2:n=e.sent,v(n),console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()()}),[]);var P=function(e){o("modified");var t=e.target.value,n=e.target.name;me(t,n,h,b)},W=function(){var e=Object(X.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o("updating"),e.next=3,G(b,"post");case 3:n=e.sent,T(n.id),o("Done"),console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B={code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,r=Object(ie.a)(e,Se),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(I.jsx)(we.a,Object(E.a)({style:ye.a,language:c[1],PreTag:"div",children:String(a).replace(/\n$/,"")},r)):Object(I.jsx)("code",Object(E.a)(Object(E.a)({className:n},r),{},{children:a}))}};return Object(I.jsx)(l.a,{container:!0,alignItems:"center",children:Object(I.jsxs)(l.a,{item:!0,xs:12,align:"flex-start",children:[Object(I.jsx)(l.a,{item:!0,xs:12,align:"center",style:{marginBlock:10},children:b?Object(I.jsx)(x.a,{variant:"h5",children:b&&"Replace with Post Title"===b.title?"New Post":b.title}):Object(I.jsx)(he.a,{variant:"text",animation:"wave",width:10})}),Object(I.jsxs)(l.a,{container:!0,justifyContent:"space-around",alignItems:"flex-start",direction:"row",children:[Object(I.jsxs)(l.a,{item:!0,xs:12,md:5,style:n?{maxWidth:"45vw",overflowX:!0}:{maxWidth:"90vw",overflowX:!0},children:[Object(I.jsx)(z.a,{value:b?b.title:"",onChange:P,name:"title",fullWidth:!0}),Object(I.jsx)(z.a,{value:b?b.subtitle:"",onChange:P,name:"subtitle",multiline:!0,rows:3,fullWidth:!0}),Object(I.jsx)(z.a,{value:b?b.image:"",onChange:P,name:"image",variant:"outlined",size:"small",fullWidth:!0}),Object(I.jsxs)(se.a,{children:[Object(I.jsx)(oe.a,{id:"demo-mutiple-checkbox-label",children:"Tag"}),Object(I.jsx)(le.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:b?b.topic:[],onChange:function(e){console.log(e.target.value),me(e.target.value,"topic",h,b)},input:Object(I.jsx)(ue.a,{}),renderValue:function(e){return g?g.filter((function(t){return e.includes(t.id)})).map((function(e){return e.name})).join(", "):""},MenuProps:b?b.topics:[],children:g&&g.map((function(e){return Object(I.jsxs)(je.a,{value:e.id,children:[Object(I.jsx)(xe.a,{checked:b.topic.indexOf(e.id)>-1}),Object(I.jsx)(C.a,{primary:e.name})]},e.id)}))})]}),Object(I.jsx)(z.a,{value:b?b.content:"",onChange:P,name:"content",multiline:!0,fullWidth:!0,variant:"filled"})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:5,align:"flex-start",style:n?{maxWidth:"45vw",overflowX:!0,alignSelf:"flex-start"}:{maxWidth:"90vw",overflowX:!0},children:[b?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(x.a,{variant:"h5",children:b?b.title:""}),Object(I.jsx)(x.a,{variant:"subtitle1",children:b?b.subtitle:""}),Object(I.jsx)(de.a,{children:Object(I.jsx)(be.a,{component:"img",alt:"background",width:"100%",src:b?b.image:""})}),Object(I.jsx)(pe.a,{rehypePlugins:[ge.a],components:B,children:b?b.content:""})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(he.a,{variant:"text",height:50,animation:"wave"}),Object(ce.a)(Array(4).keys()).map((function(e){return Object(I.jsx)(he.a,{variant:"text",animation:"wave"},e)})),Object(I.jsx)(he.a,{variant:"rect",width:"100%",height:160}),Object(I.jsx)(l.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"center",children:Object(ce.a)(Array(40).keys()).map((function(e){return Object(I.jsx)(he.a,{variant:"text",width:"100%",animation:"wave"},e)}))})]}),g?g.filter((function(e){return b.topic.includes(e.id)})).map((function(e){return Object(I.jsxs)(m.a,{size:"small",style:{background:"lightblue",margin:10},children:[Object(I.jsx)(k.a,{sizes:"small",alt:e.name,variant:"circular",src:e.image,style:{width:30,height:30}}),e.name]},e.id)})):Object(ce.a)(Array(2).keys()).map((function(e){return Object(I.jsxs)(m.a,{size:"small",style:{background:"lightblue",margin:10},children:[Object(I.jsx)(he.a,{variant:"rect",width:30,height:30}),Object(I.jsx)(he.a,{variant:"text",width:60,style:{marginInline:5}})]},e)}))]}),Object(I.jsxs)(l.a,{item:!0,xs:12,align:"center",style:{marginBlock:20},children:["modified"===i&&Object(I.jsx)(m.a,{style:{background:"orange",color:"white"},onClick:function(){return W()},children:"Click to Submit"}),"updating"===i&&Object(I.jsx)(m.a,{style:{background:"green",color:"white"},children:"Updating"}),"Done"===i&&Object(I.jsx)(m.a,{style:{background:"green",color:"white"},component:N.b,to:"/post/".concat(S),children:"View post"})]})]})]})})},Te=["node","inline","className","children"],Pe=Object(o.a)({grayBorder:{border:"2px solid gray"},main:{}}),We=function(e){var t=Pe(),n=Object(a.useState)(null),r=Object(s.a)(n,2),c=r[0],i=r[1],o=e.match.params.pk,u={code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,r=Object(ie.a)(e,Te),c=/language-(\w+)/.exec(n||""),i=document.visibilityState;return console.debug("Visibility state defined inside Markdown",i),!t&&c?Object(I.jsx)(we.a,Object(E.a)({style:ye.a,language:c[1],PreTag:"div",children:String(a).replace(/\n$/,"")},r)):Object(I.jsx)("code",Object(E.a)(Object(E.a)({className:n},r),{},{children:a}))}};return Object(a.useEffect)((function(){(function(){var e=Object(X.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("post",o);case 2:t=e.sent,i(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.pk,o]),Object(I.jsxs)(l.a,{container:!0,justifyContent:"center",alignItems:"center",className:t.main,direction:"row",children:[Object(I.jsx)(l.a,{item:!0,xs:11,align:"center",children:Object(I.jsx)(x.a,{variant:"h5",children:c?c.title:""})}),Object(I.jsx)(l.a,{item:!0,xs:11,align:"flex-start",children:Object(I.jsx)(x.a,{variant:"subtitle1",color:"primary",children:c?c.subtitle:""})}),Object(I.jsx)(l.a,{item:!0,xs:11,align:"flex-start",children:Object(I.jsx)(pe.a,{className:t.main,rehypePlugins:[ge.a,ve.a],components:u,children:c?c.content:""})})]})},Be=n(677),Fe=function(){var e=Object(O.a)(),t=Object(u.a)(e.breakpoints.up("sm")),n=Object(a.useState)(null),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(X.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("post");case 2:t=e.sent,console.log(t),i(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(I.jsx)(l.a,{container:!0,justifyContent:"center",direction:"row",alignItems:"center",children:Object(I.jsx)(l.a,{item:!0,xs:11,md:10,lg:10,children:c&&c.map((function(e,n){return Object(I.jsx)(de.a,{children:Object(I.jsx)(Be.a,{children:Object(I.jsxs)(l.a,{container:!0,direction:"".concat(n%2?"row-reverse":"row"),style:{marginBlock:10},alignItems:"center",children:[Object(I.jsx)(l.a,{item:!0,xs:6,align:"center",style:{paddingInline:10},children:Object(I.jsx)(be.a,{component:"img",alt:"background",height:"160",image:"".concat(e.image)})}),Object(I.jsxs)(l.a,{item:!0,xs:5,children:[Object(I.jsxs)(N.b,{to:"/post/".concat(e.id),style:{textDecoration:"none"},children:[Object(I.jsx)(x.a,{children:e.title}),t&&Object(I.jsx)(x.a,{children:e.subtitle}),Object(I.jsxs)(x.a,{children:["-: ",e.author_info.name]})]}),Object(I.jsx)(m.a,{component:N.b,to:"/editpost/".concat(e.id),children:"Edit"})]})]})})},n)}))})})},De=function(){return Object(I.jsxs)(F.c,{children:[Object(I.jsx)(F.a,{exact:!0,path:"/",children:Object(I.jsx)(Fe,{})}),Object(I.jsx)(F.a,{exact:!0,path:"/post/:pk",component:We}),Object(I.jsx)(F.a,{path:"/newpost",children:Object(I.jsx)(Ie,{})}),Object(I.jsx)(F.a,{path:"/editpost/:pk",component:Ce}),Object(I.jsx)(F.a,{path:"/auth/login",children:Object(I.jsx)(ae,{})}),Object(I.jsx)(F.a,{path:"/auth/register",children:Object(I.jsx)(re,{})})]})},Re=Object(o.a)({main:{maxHeight:"91vh",overflowY:"auto",maxWidth:"100vw",minWidth:"100vw",margin:"auto"}}),Xe=function(){var e=Re(),t=Object(a.useState)(te),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Z(),o=i.loading,u=i.user_,j=i.error;return console.log("User from Layout",u),Object(a.useEffect)((function(){o||j||c(u)}),[u,o,j]),Object(I.jsx)(l.a,{container:!0,alignItems:"stretch",direction:"column",children:Object(I.jsxs)(N.a,{children:[Object(I.jsx)(l.a,{container:!0,direction:"row",alignItems:"center",children:Object(I.jsx)(B,{user:r})}),Object(I.jsx)("main",{className:e.main,children:Object(I.jsx)(l.a,{container:!0,children:Object(I.jsx)(De,{user:r})})})]})})};var Ee=function(){return Object(I.jsx)("div",{children:Object(I.jsx)(Xe,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,689)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(Ee,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ze()}},[[615,1,2]]]);
//# sourceMappingURL=main.8b28dec5.chunk.js.map