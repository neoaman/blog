(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{210:function(e,t,n){},211:function(e,t,n){},618:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),o=(n(210),n(211),n(9)),s=n(658),l=n(663),u=n(668),j=n(669),d=n(686),b=n(670),h=n(664),m=n(671),x=n(98),O=n(662),p=n(195),f=n(33),g=n(683),v=n(661),w=n(620),y=n(665),k=n(687),C=n(667),S=n(666),N=n(13),I=n(1),T=Object(s.a)({branding:{background:"linear-gradient(to right, #33ccff 20%, #ff99cc 100%)",padding:10},noDecoration:{textDecoration:"none"},user:{background:"linear-gradient(to right, #ff9999 0%, #ffccff 100%)"}}),W=function(e){var t=T(),n=e.user,a=e.overSm,c=e.overMd;return Object(I.jsxs)(v.a,{style:{width:"".concat(c?"20vw":a?"30vw":"80vw"),paddingTop:0},children:[!a&&Object(I.jsxs)(N.b,{to:"/",className:t.noDecoration,children:[Object(I.jsxs)(x.a,{variant:"h6",display:"block",align:"center",className:t.branding,children:["BLOG",Object(I.jsx)(x.a,{variant:"caption",display:"block",children:"by aman.solutions"})]}),Object(I.jsx)(O.a,{})]}),Object(I.jsxs)(l.a,{container:!0,justifyContent:"flex-start",alignItems:"center",direction:"row",className:t.user,children:[Object(I.jsx)(h.a,{color:"secondary",component:N.b,to:"/auth/login",children:Object(I.jsx)(g.c,{})}),Object(I.jsx)(x.a,{variant:"h6",children:n?n.username.toUpperCase():""})]}),Object(I.jsx)(O.a,{}),Object(I.jsxs)(w.a,{component:N.b,to:"/newpost",children:[Object(I.jsx)(y.a,{children:Object(I.jsx)(k.a,{children:Object(I.jsx)(S.a,{})})}),Object(I.jsx)(C.a,{primary:"Add Post",secondary:"It will add new post"})]})]})},P=Object(s.a)({topBar:{background:"#ffffff",color:"darkgray",height:"9vh"},appBar:{height:"9vh"}}),_=function(e){var t=e.user,n=P(),c=Object(f.a)(),r=Object(u.a)(c.breakpoints.up("sm")),i=Object(u.a)(c.breakpoints.up("md")),s=Object(a.useReducer)((function(e){return!e}),!1),v=Object(o.a)(s,2),w=v[0],y=v[1];return Object(I.jsxs)(j.a,{position:"static",className:n.appBar,children:[Object(I.jsx)(d.a,{anchor:"left",open:w,onClose:y,children:Object(I.jsx)(W,{user:t,overSm:r,overMd:i})}),Object(I.jsxs)(b.a,{className:n.topBar,children:[Object(I.jsx)(l.a,{item:!0,xs:3,md:4,lg:4,align:"flex-start",children:Object(I.jsx)(h.a,{onClick:y,children:Object(I.jsx)(g.a,{})})}),r&&Object(I.jsxs)(l.a,{item:!0,xs:12,md:4,lg:4,align:"center",children:[Object(I.jsx)(m.a,{children:Object(I.jsx)(N.b,{to:"/",style:{textDecoration:"none"},children:Object(I.jsx)(x.a,{variant:"h5",children:"Blog"})})}),Object(I.jsx)(O.a,{orientation:"vertical"})]}),Object(I.jsx)(l.a,{item:!0,xs:12,md:4,lg:4,align:"center",children:Object(I.jsxs)(l.a,{container:!0,justifyContent:"center",alignItems:"center",style:{borderRadius:"20px",border:"2px solid gray"},children:[Object(I.jsx)(l.a,{item:!0,xs:2,children:Object(I.jsx)(g.b,{})}),Object(I.jsx)(l.a,{item:!0,xs:10,children:Object(I.jsx)(p.a,{fullWidth:!0,placeholder:"Search...",type:"text"})})]})}),r&&Object(I.jsx)(l.a,{item:!0,xs:3,align:"center",children:Object(I.jsxs)(m.a,{color:"secondary",style:{marginInline:20},component:N.b,to:"/auth/login",children:[Object(I.jsx)(g.c,{size:"20"}),Object(I.jsx)(x.a,{variant:"h6",children:t.username})]})})]})]})},F=n(15),B=n(7),A=n.n(B),D=n(16),E=n(21),X=n(688),R=n(186),M=n(78),z="/blog-api/post/",L="/user-api/",J=function(e){var t=z;switch(e){case"post":t=z;break;case"topic":t="/blog-api/topic/";break;case"author":t="/blog-api/author/";break;default:t=z}return t};function U(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=R.trim(n[a]);if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}var H=function(e){return fetch(e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":U("csrftoken")},body:JSON.stringify(e)}}()).then((function(e){return e.json()}))},V=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"post",t=J(e),n=Object(M.a)(t,V),a=n.data,c=n.error,r=!a;return r||c?"loading":a},$=function(){var e=Object(D.a)(A.a.mark((function e(){var t,n,a,c=arguments;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"post",n=J(t),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(D.a)(A.a.mark((function e(){var t,n,a,c,r=arguments;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"post",n=r.length>1&&void 0!==r[1]?r[1]:"1",a=J(t),e.next=5,fetch("".concat(a).concat(n)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(D.a)(A.a.mark((function e(t){var n,a,c,r,i,o,s=arguments;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"post",a=s.length>2&&void 0!==s[2]?s[2]:"1",c=J(n),r=U("csrftoken"),i={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":r},body:JSON.stringify(t)},e.next=7,fetch("".concat(c).concat(a),i).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(D.a)(A.a.mark((function e(t){var n,a,c,r,i,o=arguments;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"post",a=J(n),c=U("csrftoken"),r={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":c},body:JSON.stringify(t)},e.next=6,fetch("".concat(a),r).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(D.a)(A.a.mark((function e(){var t,n,a,c,r,i,o=arguments;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"post",n=o.length>1&&void 0!==o[1]?o[1]:"1",a=J(t),c=U("csrftoken"),r={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":c}},e.next=7,fetch("".concat(a).concat(n),r).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(D.a)(A.a.mark((function e(t){var n,a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/auth-api/",n=U("csrftoken"),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":n},body:JSON.stringify(t)},c=null,e.next=6,fetch("".concat("/auth-api/"),a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 6:return c=e.sent,console.debug("Data from communicator",c),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(D.a)(A.a.mark((function e(){var t,n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L,t=U("csrftoken"),n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":t},body:JSON.stringify({})},e.next=5,fetch("/user-api/",n).then((function(e){return e.json()})).then((function(e){return e}));case 5:return a=e.sent,console.log(a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(M.a)("/user-api/",H),t=e.data;return{loading:!t,user_:t,error:e.error,mutate:e.mutate}};function ne(){var e=Object(M.a)("/user-api/",H),t=e.data;return{loading:!t,user_:t,error:e.error,mutate:e.mutate}}var ae=window.location.protocol+"//"+window.location.hostname+":8000/",ce={username:"",group:[],active:!1,isActive:!1,isStaff:!1,isSuperUser:!1},re=Object(s.a)({loginForm:{minWidth:"50%",height:"90vh",margin:"auto"},form:{border:"5px solid gray",padding:40,borderRadius:20,background:"lightblue"},formcomponent:{marginBlock:10}}),ie=function(){var e=re(),t=Object(a.useState)({username:"",password:""}),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(ce),s=Object(o.a)(i,2),u=s[0],j=s[1],d=Object(a.useState)(null),b=Object(o.a)(d,2),h=b[0],O=b[1],p=function(e){var t=e.target.name,n=e.target.value;"username"===t&&r(Object(E.a)(Object(E.a)({},c),{},{username:n})),"password"===t&&r(Object(E.a)(Object(E.a)({},c),{},{password:n}))},f=ne(),g=f.loading,v=f.user_,w=f.error;Object(a.useEffect)((function(){g||w?console.warn(w):j(v)}),[v,g,w]),ne();var y=function(){var e=Object(D.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(ce),O(null),e.next=4,Z(c);case 4:n=e.sent,console.debug(n),n?j(n):O("Invalid credentials");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(D.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:n=e.sent,console.debug(n),j(ce);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(l.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",className:e.loginForm,children:Object(I.jsx)(l.a,{item:!0,className:e.form,align:"center",children:u&&""===u.username?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(l.a,{item:!0,xs:10,md:10,align:"center",children:[Object(I.jsx)(x.a,{variant:"h5",children:"Login to Blog"}),Object(I.jsx)(x.a,{variant:"caption",children:"by Aman Solutions"})]}),Object(I.jsx)(l.a,{item:!0,xs:10,md:10,align:"center",className:e.formcomponent,children:Object(I.jsx)(X.a,{value:c.username,name:"username",onChange:p,variant:"outlined",size:"small",label:"username",required:!0})}),Object(I.jsx)(l.a,{item:!0,xs:10,md:10,align:"center",className:e.formcomponent,children:Object(I.jsx)(X.a,{value:c.password,name:"password",type:"password",size:"small",onChange:p,variant:"outlined",label:"password",required:!0})}),Object(I.jsx)(l.a,{item:!0,xs:10,className:e.formcomponent,children:Object(I.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){return y()},children:"Login"})}),Object(I.jsx)(l.a,{item:!0,xs:10,className:e.formcomponent,children:Object(I.jsx)(x.a,{variant:"caption",children:h||""})})]}):Object(I.jsxs)(l.a,{item:!0,children:[Object(I.jsxs)(x.a,{variant:"h5",children:["Hi ",u.username&&u.username.toUpperCase()," You are Loggin"]}),Object(I.jsx)(m.a,{variant:"contained",className:e.formcomponent,component:N.b,to:"/",children:"Go to Home Page"}),Object(I.jsx)(m.a,{variant:"contained",color:"secondary",className:e.formcomponent,onClick:function(){return k()},children:"Logout User"})]})})})},oe=function(){return Object(I.jsx)("div",{children:"Register Page"})},se=n(22),le=n(3),ue=n(674),je=n(690),de=n(681),be=n(672),he=n(676),me=n(677),xe=n(678),Oe=n(679),pe=function(e,t,n,a){var c,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"obj";c="arr"===r?Object(se.a)(a):Object(E.a)({},a);var i=t.split(".");switch(i.length){case 1:c[i[0]]=e;break;case 2:c[i[0]][i[1]]=e;break;case 3:c[i[0]][i[1]][i[2]]=e;break;case 4:c[i[0]][i[1]][i[2]][i[3]]=e;break;case 5:c[i[0]][i[1]][i[2]][i[3]][i[4]]=e;break;case 6:c[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]]=e;break;case 7:c[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]]=e;break;case 8:c[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]]=e;break;case 9:c[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]]=e;break;case 10:c[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]]=e;break;case 11:c[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]][i[10]]=e;break;case 12:c[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]][i[10]][i[11]]=e;break;case 13:c[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]][i[10]][i[11]][i[12]]=e;break;case 14:c[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]][i[10]][i[11]][i[12]][i[13]]=e;break;case 15:c[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]][i[10]][i[11]][i[12]][i[13]][i[14]]=e;break;default:console.log("Cant update",t)}n(c)};var fe=n(685),ge=n(62),ve=n.n(ge),we=n(63),ye=n(64),ke=n.n(ye),Ce=n(65),Se=n(682),Ne=n(675),Ie=["node","inline","className","children"],Te=function(e){var t=Object(f.a)(),n=Object(u.a)(t.breakpoints.up("sm")),c=Object(a.useState)(!1),r=Object(o.a)(c,2),i=r[0],s=r[1],j=Object(a.useState)(null),d=Object(o.a)(j,2),b=d[0],h=d[1],O=Object(a.useState)(null),p=Object(o.a)(O,2),g=p[0],v=p[1],w=Object(a.useState)(null),y=Object(o.a)(w,2),S=y[0],T=y[1],W=Object(a.useState)(null),P=Object(o.a)(W,2),_=P[0],F=P[1],B=e.match.params.pk;Object(a.useEffect)((function(){var e=function(){var e=Object(D.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("post",B);case 2:n=e.sent,h(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=Object(D.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$("topic");case 2:n=e.sent,v(n),console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(),t()}),[e.match.params.pk,B]);var R=function(e){s("modified");var t=e.target.value,n=e.target.name;pe(t,n,h,b)},M=function(){var e=Object(D.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s("updating"),e.next=3,Y(b,"post",b.id);case 3:(n=e.sent).hasOwnProperty("id")?(T(n.id),s("Done"),console.log(n)):(F(JSON.stringify(n)),s("warn"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z={code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,c=Object(le.a)(e,Ie),r=/language-(\w+)/.exec(n||"");return!t&&r?Object(I.jsx)(Se.a,Object(E.a)({style:Ne.a,language:r[1],PreTag:"div",children:String(a).replace(/\n$/,"")},c)):Object(I.jsx)("code",Object(E.a)(Object(E.a)({className:n},c),{},{children:a}))}};return Object(I.jsx)(l.a,{container:!0,alignItems:"center",children:Object(I.jsxs)(l.a,{item:!0,xs:12,align:"flex-start",children:[Object(I.jsx)(l.a,{item:!0,xs:12,align:"center",children:Object(I.jsx)("hr",{})}),Object(I.jsxs)(l.a,{container:!0,justifyContent:"space-around",alignItems:"flex-start",direction:"row",children:[Object(I.jsxs)(l.a,{item:!0,xs:12,md:5,style:n?{maxWidth:"45vw",overflowX:!0}:{maxWidth:"90vw",overflowX:!0},children:[Object(I.jsx)(X.a,{value:b?b.title:"",onChange:R,name:"title",fullWidth:!0}),Object(I.jsx)(X.a,{value:b?b.subtitle:"",onChange:R,name:"subtitle",multiline:!0,rows:3,fullWidth:!0}),Object(I.jsx)(X.a,{value:b?b.image:"",onChange:R,name:"image",variant:"outlined",size:"small",fullWidth:!0}),Object(I.jsxs)(ue.a,{children:[Object(I.jsx)(je.a,{id:"demo-mutiple-checkbox-label",children:"Tag"}),Object(I.jsx)(de.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:b?b.topic:[],onChange:function(e){console.log(e.target.value),pe(e.target.value,"topic",h,b)},input:Object(I.jsx)(be.a,{}),renderValue:function(e){return g?g.filter((function(t){return e.includes(t.id)})).map((function(e){return e.name})).join(", "):""},MenuProps:b?b.topic:[],children:g&&b&&g.map((function(e){return Object(I.jsxs)(he.a,{value:e.id,children:[Object(I.jsx)(fe.a,{checked:b.topic.indexOf(e.id)>-1}),Object(I.jsx)(C.a,{primary:e.name})]},e.id)}))})]}),Object(I.jsx)(X.a,{value:b?b.css_content:"",onChange:R,name:"css_content",multiline:!0,fullWidth:!0,variant:"filled",label:"CSS Contents"}),Object(I.jsx)(X.a,{value:b?b.extra_content:"",onChange:R,name:"extra_content",multiline:!0,fullWidth:!0,variant:"filled",label:"Extra HTML Contents"}),Object(I.jsx)(X.a,{value:b?b.content:"",onChange:R,name:"content",multiline:!0,fullWidth:!0,variant:"filled",label:"Main Content"})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:7,align:"flex-end",style:n?{maxWidth:"45vw",overflowX:!0,alignSelf:"flex-end"}:{maxWidth:"90vw",overflowX:!0},children:[g&&b?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("style",{children:b.css_content}),Object(I.jsx)(we.a,{children:Object(I.jsx)("script",{src:b.extra_content})}),Object(I.jsx)(x.a,{variant:"h5",children:b.title}),Object(I.jsx)(x.a,{variant:"subtitle1",children:b.subtitle}),Object(I.jsx)(me.a,{children:Object(I.jsx)(xe.a,{component:"img",alt:"background",width:"100%",src:b.image})}),Object(I.jsx)(ve.a,{rehypePlugins:[ke.a,Ce.a],components:z,children:b.content}),Object(I.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(I.jsx)(k.a,{alt:b.author_info.name,src:ae+b.author_info.image}),Object(I.jsx)(x.a,{variant:"h6",style:{padding:10},children:b.author_info.name})]})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(Oe.a,{variant:"text",height:50,animation:"wave"}),Object(se.a)(Array(4).keys()).map((function(e){return Object(I.jsx)(Oe.a,{variant:"text",animation:"wave"},e)})),Object(I.jsx)(Oe.a,{variant:"rect",width:"100%",height:160}),Object(I.jsx)(l.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"center",children:Object(se.a)(Array(40).keys()).map((function(e){return Object(I.jsx)(Oe.a,{variant:"text",width:"100%",animation:"wave"},e)}))}),Object(I.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(I.jsx)(Oe.a,{variant:"circle",width:40,height:40}),Object(I.jsx)(Oe.a,{variant:"text",width:120,height:30,animation:"wave"})]})]}),g&&b?g.filter((function(e){return b.topic.includes(e.id)})).map((function(e){return Object(I.jsxs)(m.a,{size:"small",style:{background:"lightblue",margin:10},children:[Object(I.jsx)(k.a,{sizes:"small",alt:e.name,variant:"circular",src:e.image,style:{width:30,height:30}}),e.name]},e.id)})):Object(se.a)(Array(2).keys()).map((function(e){return Object(I.jsxs)(m.a,{size:"small",style:{background:"lightblue",margin:10},children:[Object(I.jsx)(Oe.a,{variant:"rect",width:30,height:30}),Object(I.jsx)(Oe.a,{variant:"text",width:60,style:{marginInline:5}})]},e)}))]}),Object(I.jsxs)(l.a,{item:!0,xs:12,align:"center",style:{marginBlock:20},children:["modified"===i&&Object(I.jsx)(m.a,{style:{background:"orange",color:"white"},onClick:function(){return M()},children:"Click to Submit"}),"updating"===i&&Object(I.jsx)(m.a,{style:{background:"green",color:"white"},children:"Updating"}),!i&&b&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m.a,{style:{background:"green",color:"white"},component:N.b,to:"/post/".concat(b.id),children:"View Post"}),Object(I.jsx)(m.a,{style:{background:"red",color:"white",marginInline:20},onClick:function(){return Q("post",b.id)},component:N.b,to:"/",children:"Delete Post"})]}),"Done"===i&&Object(I.jsx)(m.a,{style:{background:"green",color:"white"},component:N.b,to:"/post/".concat(S),children:"View post"}),"warn"===i&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m.a,{style:{background:"green",color:"white"},component:N.b,to:"/auth/login",children:"Change User"}),Object(I.jsx)(x.a,{color:"secondary",variant:"h6",children:_||""})]})]})]})]})})},We=["node","inline","className","children"],Pe={title:"Replace with Post Title",subtitle:"Replace with Post Subtitle",image:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",content:"Replace with Markdown content",topic:[]},_e=function(e){var t=Object(f.a)(),n=Object(u.a)(t.breakpoints.up("sm")),c=Object(a.useState)(!1),r=Object(o.a)(c,2),i=r[0],s=r[1],j=Object(a.useState)(Pe),d=Object(o.a)(j,2),b=d[0],h=d[1],O=Object(a.useState)(null),p=Object(o.a)(O,2),g=p[0],v=p[1],w=Object(a.useState)(null),y=Object(o.a)(w,2),S=y[0],T=y[1],W=Object(a.useState)(null),P=Object(o.a)(W,2),_=P[0],F=P[1];Object(a.useEffect)((function(){(function(){var e=Object(D.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$("topic");case 2:n=e.sent,v(n),console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()()}),[]);var B=function(e){s("modified");var t=e.target.value,n=e.target.name;pe(t,n,h,b)},R=function(){var e=Object(D.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s("updating"),e.next=3,K(b,"post");case 3:(n=e.sent).hasOwnProperty("id")?(T(n.id),s("Done"),console.log(n)):(F(JSON.stringify(n)),s("warn"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M={code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,c=Object(le.a)(e,We),r=/language-(\w+)/.exec(n||"");return!t&&r?Object(I.jsx)(Se.a,Object(E.a)({style:Ne.a,language:r[1],PreTag:"div",children:String(a).replace(/\n$/,"")},c)):Object(I.jsx)("code",Object(E.a)(Object(E.a)({className:n},c),{},{children:a}))}};return Object(I.jsx)(l.a,{container:!0,alignItems:"center",children:Object(I.jsxs)(l.a,{item:!0,xs:12,align:"flex-start",children:[Object(I.jsx)(l.a,{item:!0,xs:12,align:"center",style:{marginBlock:10},children:b?Object(I.jsx)(x.a,{variant:"h5",children:b&&"Replace with Post Title"===b.title?"New Post":b.title}):Object(I.jsx)(Oe.a,{variant:"text",animation:"wave",width:10})}),Object(I.jsxs)(l.a,{container:!0,justifyContent:"space-around",alignItems:"flex-start",direction:"row",children:[Object(I.jsxs)(l.a,{item:!0,xs:12,md:5,style:n?{maxWidth:"45vw",overflowX:!0}:{maxWidth:"90vw",overflowX:!0},children:[Object(I.jsx)(X.a,{value:b?b.title:"",onChange:B,name:"title",fullWidth:!0}),Object(I.jsx)(X.a,{value:b?b.subtitle:"",onChange:B,name:"subtitle",multiline:!0,rows:3,fullWidth:!0}),Object(I.jsx)(X.a,{value:b?b.image:"",onChange:B,name:"image",variant:"outlined",size:"small",fullWidth:!0}),Object(I.jsxs)(ue.a,{children:[Object(I.jsx)(je.a,{id:"demo-mutiple-checkbox-label",children:"Tag"}),Object(I.jsx)(de.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:b?b.topic:[],onChange:function(e){console.log(e.target.value),pe(e.target.value,"topic",h,b)},input:Object(I.jsx)(be.a,{}),renderValue:function(e){return g?g.filter((function(t){return e.includes(t.id)})).map((function(e){return e.name})).join(", "):""},MenuProps:b?b.topics:[],children:g&&g.map((function(e){return Object(I.jsxs)(he.a,{value:e.id,children:[Object(I.jsx)(fe.a,{checked:b.topic.indexOf(e.id)>-1}),Object(I.jsx)(C.a,{primary:e.name})]},e.id)}))})]}),Object(I.jsx)(X.a,{value:b?b.css_content:"",onChange:B,name:"css_content",multiline:!0,fullWidth:!0,variant:"filled",label:"CSS Contents"}),Object(I.jsx)(X.a,{value:b?b.extra_content:"",onChange:B,name:"extra_content",multiline:!0,fullWidth:!0,variant:"filled",label:"Extra JS url"}),Object(I.jsx)(X.a,{value:b?b.content:"",onChange:B,name:"content",multiline:!0,fullWidth:!0,variant:"filled"})]}),Object(I.jsxs)(l.a,{item:!0,xs:12,md:5,align:"flex-start",style:n?{maxWidth:"45vw",overflowX:!0,alignSelf:"flex-start"}:{maxWidth:"90vw",overflowX:!0},children:[b?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("style",{children:b.css_content}),Object(I.jsx)(we.a,{children:Object(I.jsx)("script",{src:b.extra_content})}),Object(I.jsx)(x.a,{variant:"h5",children:b.title}),Object(I.jsx)(x.a,{variant:"subtitle1",children:b.subtitle}),Object(I.jsx)(me.a,{children:Object(I.jsx)(xe.a,{component:"img",alt:"background",width:"100%",src:b.image})}),Object(I.jsx)(ve.a,{rehypePlugins:[ke.a,Ce.a],components:M,children:b.content})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(Oe.a,{variant:"text",height:50,animation:"wave"}),Object(se.a)(Array(4).keys()).map((function(e){return Object(I.jsx)(Oe.a,{variant:"text",animation:"wave"},e)})),Object(I.jsx)(Oe.a,{variant:"rect",width:"100%",height:160}),Object(I.jsx)(l.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"center",children:Object(se.a)(Array(40).keys()).map((function(e){return Object(I.jsx)(Oe.a,{variant:"text",width:"100%",animation:"wave"},e)}))})]}),g?g.filter((function(e){return b.topic.includes(e.id)})).map((function(e){return Object(I.jsxs)(m.a,{size:"small",style:{background:"lightblue",margin:10},children:[Object(I.jsx)(k.a,{sizes:"small",alt:e.name,variant:"circular",src:e.image,style:{width:30,height:30}}),e.name]},e.id)})):Object(se.a)(Array(2).keys()).map((function(e){return Object(I.jsxs)(m.a,{size:"small",style:{background:"lightblue",margin:10},children:[Object(I.jsx)(Oe.a,{variant:"rect",width:30,height:30}),Object(I.jsx)(Oe.a,{variant:"text",width:60,style:{marginInline:5}})]},e)}))]}),Object(I.jsxs)(l.a,{item:!0,xs:12,align:"center",style:{marginBlock:20},children:["modified"===i&&Object(I.jsx)(m.a,{style:{background:"orange",color:"white"},onClick:function(){return R()},children:"Click to Submit"}),"updating"===i&&Object(I.jsx)(m.a,{style:{background:"green",color:"white"},children:"Updating"}),"Done"===i&&Object(I.jsx)(m.a,{style:{background:"green",color:"white"},component:N.b,to:"/post/".concat(S),children:"View post"}),"warn"===i&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m.a,{style:{background:"green",color:"white"},component:N.b,to:"/auth/login",children:"Change User"}),Object(I.jsx)(x.a,{color:"secondary",variant:"h6",children:_||""})]})]})]})]})})},Fe=["node","inline","className","children"],Be=Object(s.a)({grayBorder:{border:"2px solid gray"},main:{},overlay:{position:"absolute",top:30,display:"block",textShadow:"1px 2px gray",width:"100%",margin:"auto"},bagde:{marginBlock:30},cardimage:{width:"100vw",height:300,opacity:.8},cardimageSm:{width:"100vw",height:150,opacity:.8}}),Ae=function(e){var t=Be(),n=Object(f.a)(),c=Object(a.useState)(null),r=Object(o.a)(c,2),i=r[0],s=r[1],j=Object(a.useState)(null),d=Object(o.a)(j,2),b=d[0],h=d[1],m=e.match.params.pk,O=Object(u.a)(n.breakpoints.up("sm")),p={code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,c=Object(le.a)(e,Fe),r=/language-(\w+)/.exec(n||""),i=document.visibilityState;return console.debug("Visibility state defined inside Markdown",i),!t&&r?Object(I.jsx)(Se.a,Object(E.a)({style:Ne.a,language:r[1],PreTag:"div",children:String(a).replace(/\n$/,"")},c)):Object(I.jsx)("code",Object(E.a)(Object(E.a)({className:n},c),{},{children:a}))}},g=G("topic");return Object(a.useEffect)((function(){Array.isArray(g)&&h(g),function(){var e=Object(D.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("post",m);case 2:t=e.sent,s(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e.match.params.pk,m,g]),Object(I.jsxs)(l.a,{container:!0,justifyContent:"center",alignItems:"center",className:t.main,direction:"row",children:[Object(I.jsx)("style",{children:i?i.css_content:""}),Object(I.jsx)(we.a,{children:Object(I.jsx)("script",{src:i?i.extra_content:""})}),Object(I.jsxs)("div",{style:{position:"relative"},children:[Object(I.jsx)(xe.a,{component:"img",alt:"background",className:O?t.cardimage:t.cardimageSm,image:"".concat(i?i.image:"")}),Object(I.jsxs)("div",{className:t.overlay,children:[Object(I.jsx)(l.a,{item:!0,xs:11,align:"center",children:Object(I.jsx)(x.a,{variant:O?"h4":"h6",children:i?i.title:""})}),Object(I.jsx)(l.a,{item:!0,xs:11,align:"center",children:Object(I.jsx)(x.a,{variant:O?"h5":"caption",children:i?i.subtitle:""})})]})]}),Object(I.jsx)(l.a,{item:!0,xs:11,align:"flex-start",children:Object(I.jsx)(ve.a,{className:t.main,rehypePlugins:[ke.a,Ce.a],components:p,children:i?i.content:""})}),Object(I.jsx)(l.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",className:t.bagde,children:i&&Array.isArray(b)&&i.topic.length>0?b.filter((function(e){return i.topic.includes(e.id)})).map((function(e){return Object(I.jsx)(k.a,{variant:"circular",style:{width:30,height:30,marginInline:10},src:e.image})})):""})]})},De=n(680),Ee=Object(s.a)({overlay:{position:"absolute",display:"flex",color:"white",top:10,left:"50%",transform:"translateX(-50%)",direction:"column"}}),Xe=function(){var e=Object(f.a)(),t=Ee(),n=Object(u.a)(e.breakpoints.up("sm")),c=Object(a.useState)(null),r=Object(o.a)(c,2),i=r[0],s=r[1],j=Object(a.useState)(null),d=Object(o.a)(j,2),b=d[0],h=d[1];te();var O=G("post"),p=G("topic");return Object(a.useEffect)((function(){console.log(O),Array.isArray(O)&&(s(O),console.log(O)),Array.isArray(p)&&(h(p),console.log(p))}),[O,p]),Object(I.jsx)(l.a,{container:!0,justifyContent:"center",direction:"row",alignItems:"center",children:Object(I.jsx)(l.a,{item:!0,xs:12,md:10,lg:8,children:i&&i.map((function(e,a){return Object(I.jsx)(me.a,{children:Object(I.jsx)(De.a,{children:Object(I.jsxs)(l.a,{container:!0,direction:"".concat(a%2?"row-reverse":"row"),style:{marginBlock:0},alignItems:"center",children:[Object(I.jsx)(l.a,{item:!0,xs:6,align:"center",style:{paddingInline:10},children:Object(I.jsxs)("div",{style:{position:"relative"},children:[Object(I.jsx)(xe.a,{component:"img",alt:"background",height:"160",image:"".concat(e.image)}),Object(I.jsx)("div",{className:t.overlay,children:b&&e.topic.length>0?b.filter((function(t){return e.topic.includes(t.id)})).map((function(e){return Object(I.jsx)(k.a,{variant:"circular",style:{width:30,height:30,marginInline:10},src:e.image})})):""})]})}),Object(I.jsxs)(l.a,{item:!0,xs:5,children:[Object(I.jsxs)(N.b,{to:"/post/".concat(e.id),style:{textDecoration:"none"},children:[Object(I.jsx)(x.a,{children:e.title}),n&&Object(I.jsx)(x.a,{children:e.subtitle}),Object(I.jsxs)(x.a,{children:["-: ",e.author_info.name]})]}),Object(I.jsx)(m.a,{component:N.b,to:"/editpost/".concat(e.id),children:"Edit"})]})]})})},a)}))})})},Re=function(){return Object(I.jsxs)(F.c,{children:[Object(I.jsx)(F.a,{exact:!0,path:"/",children:Object(I.jsx)(Xe,{})}),Object(I.jsx)(F.a,{exact:!0,path:"/post/:pk",component:Ae}),Object(I.jsx)(F.a,{path:"/newpost",children:Object(I.jsx)(_e,{})}),Object(I.jsx)(F.a,{path:"/editpost/:pk",component:Te}),Object(I.jsx)(F.a,{path:"/auth/login",children:Object(I.jsx)(ie,{})}),Object(I.jsx)(F.a,{path:"/auth/register",children:Object(I.jsx)(oe,{})})]})},Me=Object(s.a)({main:{maxHeight:"91vh",overflowY:"auto",maxWidth:"100vw",minWidth:"100vw",margin:"auto"}}),ze=function(){var e=Me(),t=Object(a.useState)(ce),n=Object(o.a)(t,2),c=n[0],r=n[1],i=te(),s=i.loading,u=i.user_,j=i.error;return console.log("User from Layout",u),Object(a.useEffect)((function(){s||j||r(u)}),[u,s,j]),Object(I.jsx)(l.a,{container:!0,alignItems:"stretch",direction:"column",children:Object(I.jsxs)(N.a,{children:[Object(I.jsx)(l.a,{container:!0,direction:"row",alignItems:"center",children:Object(I.jsx)(_,{user:c})}),Object(I.jsx)("main",{className:e.main,children:Object(I.jsx)(l.a,{container:!0,children:Object(I.jsx)(Re,{user:c})})})]})})};var Le=function(){return Object(I.jsx)("div",{children:Object(I.jsx)(ze,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,692)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(Le,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Je()}},[[618,1,2]]]);
//# sourceMappingURL=main.6d90316c.chunk.js.map