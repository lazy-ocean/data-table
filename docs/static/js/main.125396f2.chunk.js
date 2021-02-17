(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{164:function(e,t,n){},166:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),i=n.n(r),o=(n(164),n(142)),l=n(53),s=n.n(l),u=n(84),d=n(21),j=(n(166),n(17)),b=n(167).default,h=n(80),f=n(255),O=n(257),p=n(4),m=n(259),x=n(260),g=n(285),v=n(261),y=Object(f.a)((function(e){return{root:{width:"100%",fontSize:"11px"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},subtitle1:{paddingBottom:"15px"}}})),C=Object(O.a)({palette:{primary:{main:"#5AA9E6"}}}),S=Object(p.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.common.white}}}))(m.a),N=Object(p.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:"#D8EEFD"},"&.Mui-selected, &.Mui-selected:hover":{backgroundColor:"#BADCF3"}}}}))(x.a),I=Object(p.a)((function(e){return{body:{backgroundColor:"#FFE45E"}}}))(m.a),E=Object(p.a)((function(e){return{body:{backgroundColor:"#F50049"}}}))(m.a),w=Object(p.a)((function(e){return{root:{fontSize:"14px","&:hover, &:focus":{color:"white"},"&.MuiTableSortLabel-active":{color:"white"}},icon:{color:"inherit !important"}}}))(g.a),T=Object(p.a)((function(e){return{root:{color:e.palette.primary.main,backgroundColor:"white",border:"1px solid #5AA9E6","&:hover":{backgroundColor:"#d9efff",border:"1px solid #5AA9E6"}}}}))(v.a),k=Object(p.a)((function(e){return{root:{color:"white",alignSelf:"center","&:hover":{backgroundColor:"#5AA9E6"}}}}))(v.a),A=n(42),D=n(281),P=n(282),M=n(278),_=n(20),L=n(277),R=n(122),z=n(267),B=n(147),F=n(6),V=n(80),U=["DEV","UAT","PROD"],q=function(e){var t=e.row,n=e.colsNames,c=e.saveData,r=e.clients,i=Object(a.useState)(t),o=Object(d.a)(i,2),l=o[0],s=o[1];return Object(F.jsxs)(x.a,{children:[Object(F.jsx)(m.a,{padding:"checkbox",children:Object(F.jsx)(D.a,{style:{color:"#5AA9E6"},disabled:!0})}),Object(F.jsx)(G,{colsNames:n,values:l,handleChange:function(e){var t=e.target,n=t.name,a=t.value;s(Object(j.a)(Object(j.a)({},l),{},Object(A.a)({},n,a)))},clients:r,setValues:s,handleDateChange:function(e){var t=(e.getMonth()+1).toString(),n=null===e||void 0===e?void 0:e.getFullYear(),a="".concat(n,"-").concat(t.padStart(2,"0"));s(Object(j.a)(Object(j.a)({},l),{},{TERMINATION_DT:a}))},row:t,type:"table"}),Object(F.jsx)(m.a,{padding:"checkbox",children:Object(F.jsx)(T,{variant:"contained",color:"primary",onClick:function(){return c(l)},children:"Save"})},t.id)]},t.id)},G=function(e){var t=e.colsNames,n=e.values,a=e.handleChange,c=e.clients,r=e.setValues,i=e.handleDateChange,o=e.row,l=e.type,s=y();return t.map((function(e){switch(e){case"DESCRIPTION":return Object(F.jsxs)(m.a,{children:["form"===l&&Object(F.jsx)(B.a,{variant:"subtitle1",gutterBottom:!0,className:s.subtitle1,children:"Item description:"}),Object(F.jsx)(P.a,{defaultValue:n[e],name:e,size:"small",id:"input-descr",style:{fontSize:"11px",width:"100%"},InputProps:{style:{fontSize:14}},InputLabelProps:{style:{fontSize:14}},onChange:a,placeholder:"form"===l?"Lorem ipsums":""})]},"edit_1");case"SOURCE_NM":return Object(F.jsxs)(m.a,{children:["form"===l&&Object(F.jsx)(B.a,{variant:"subtitle1",gutterBottom:!0,className:s.subtitle1,children:"Source:"}),Object(F.jsx)(P.a,{id:"select-source",select:!0,defaultValue:n[e],name:e,onChange:a,InputProps:{style:{fontSize:14}},SelectProps:{native:!0},children:"form"===l?["All"].concat(U).map((function(e){return Object(F.jsx)("option",{value:e,children:e},e)})):U.map((function(e){return Object(F.jsx)("option",{value:e,children:e},e)}))})]},"edit_2");case"CLIENT_NM":return Object(F.jsxs)(m.a,{children:["form"===l&&Object(F.jsx)(B.a,{variant:"subtitle1",gutterBottom:!0,className:s.subtitle1,children:"Client name:"}),Object(F.jsx)(M.a,{id:"client-picker",size:"small",options:c,onChange:function(t,a){return r(Object(j.a)(Object(j.a)({},n),{},Object(A.a)({},e,a)))},defaultValue:n[e],getOptionLabel:function(e){return e},style:{width:"100%",fontSize:14},renderInput:function(e){return Object(F.jsx)(P.a,Object(j.a)(Object(j.a)({},e),{},{variant:"outlined",placeholder:"form"===l?"KOG":""}))}})]},"edit_3");case"TERMINATION_DT":return Object(F.jsxs)(m.a,{children:["form"===l&&Object(F.jsx)(B.a,{variant:"subtitle1",gutterBottom:!0,className:s.subtitle1,children:"Termination date:"}),Object(F.jsx)(_.a,{utils:R.a,children:Object(F.jsx)(z.a,{theme:C,children:Object(F.jsx)(L.a,{variant:"inline",openTo:"year",name:e,views:["year","month"],value:new Date(n[e]),onChange:i})})})]},"edit_4");case"VALUE_3":return Object(F.jsxs)(m.a,{children:["form"===l&&Object(F.jsx)(B.a,{variant:"subtitle1",gutterBottom:!0,className:s.subtitle1,children:"Max range:"}),Object(F.jsx)(P.a,{id:"standard-number",type:"number",defaultValue:n[e],InputProps:{style:{fontSize:14}},InputLabelProps:{style:{fontSize:14}},name:e,onChange:a,placeholder:"form"===l?"0 - 10000000000":""})]},"edit_5");default:return Object(F.jsx)(m.a,{children:o[e]},V.uniqueId())}}))},J=n(284),Y=n(269),H=n(268),K=n(272),W=n(271),Q=function(e){var t={DESCRIPTION:"",SOURCE_NM:"",CLIENT_NM:"",TERMINATION_DT:"2017-04",VALUE_3:null},n=e.open,c=e.onClose,r=e.clients,i=Object(a.useState)(t),o=Object(d.a)(i,2),l=o[0],s=o[1];return Object(F.jsxs)(J.a,{open:n,onClose:c,"aria-labelledby":"form-dialog-title",PaperProps:{style:{width:600,padding:"20px 30px"}},children:[Object(F.jsx)(W.a,{id:"form-dialog-title",style:{padding:"15px"},children:"Data filters"}),Object(F.jsx)(H.a,{style:{paddingLeft:"15px"},children:Object(F.jsx)(K.a,{children:"Choose fields to filter rows:"})}),Object(F.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:Object(F.jsx)(G,{colsNames:["DESCRIPTION","SOURCE_NM","CLIENT_NM","TERMINATION_DT","VALUE_3"],values:l,handleChange:function(e){var t=e.target,n=t.name,a=t.value;s(Object(j.a)(Object(j.a)({},l),{},Object(A.a)({},n,a)))},clients:r,setValues:s,handleDateChange:function(e){var t=(e.getMonth()+1).toString(),n=null===e||void 0===e?void 0:e.getFullYear(),a="".concat(n,"-").concat(t.padStart(2,"0"));s(Object(j.a)(Object(j.a)({},l),{},{TERMINATION_DT:a}))},row:t,type:"form"})}),Object(F.jsxs)(Y.a,{children:[Object(F.jsx)(v.a,{onClick:c,color:"primary",children:"Cancel"}),Object(F.jsx)(v.a,{onClick:c,color:"primary",children:"Filter"})]})]})},X=n(274),Z=n(276),$=n(273),ee=n(275),te=n(266),ne=n(280),ae=n(80),ce=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),l=Object(d.a)(i,2),f=l[0],O=l[1],p=c.a.useState(0),g=Object(d.a)(p,2),v=g[0],C=g[1],A=c.a.useState(5),P=Object(d.a)(A,2),M=P[0],_=P[1],L=c.a.useState("asc"),R=Object(d.a)(L,2),z=R[0],B=R[1],V=c.a.useState("RN"),U=Object(d.a)(V,2),G=U[0],J=U[1],Y=c.a.useState([]),H=Object(d.a)(Y,2),K=H[0],W=H[1],ce=c.a.useState(!1),re=Object(d.a)(ce,2),ie=re[0],oe=re[1],le=c.a.useState(!1),se=Object(d.a)(le,2),ue=se[0],de=se[1],je=c.a.useState(!1),be=Object(d.a)(je,2),he=be[0],fe=be[1];Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("https://run.mocky.io/v3/9700b81e-1edd-49b8-8160-736b24a989a7").then((function(e){return Object.keys(e.data.config).reduce((function(t,n){var a=e.data.config[n].label,c=Object(j.a)(Object(j.a)({},e.data.config[n]),{},{field:n,headerName:a,sortable:!0,id:h.uniqueId()});return t.push(c),t}),[])}));case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("https://run.mocky.io/v3/6f15e3ad-bf04-4940-9b81-0f14fac8ebf2").then((function(e){return e.data.items.reduce((function(e,t){var n=t.UPDATE_TIMESTAMP.slice(0,-7),a=new Date(n),c=Object(j.a)(Object(j.a)({},t),{},{id:t.ID,UPDATE_TIMESTAMP:"".concat(a.toLocaleDateString()," ").concat(a.toLocaleTimeString())});return e.push(c),e}),[])}));case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]);var Oe=y();var pe=f.map((function(e){return e.field})),me=n.map((function(e){return e.CLIENT_NM}));return Object(F.jsxs)("div",{className:Oe.root,children:[Object(F.jsx)(Q,{clients:me,open:he,onClose:function(){fe(!1)}}),Object(F.jsxs)(te.a,{className:Oe.paper,children:[Object(F.jsx)($.a,{component:te.a,children:Object(F.jsxs)(X.a,{"aria-label":"simple table",className:Oe.table,size:"small",style:{fontSize:"10px"},children:[Object(F.jsx)(ee.a,{children:Object(F.jsxs)(x.a,{children:[Object(F.jsx)(S,{padding:"checkbox",children:Object(F.jsx)(D.a,{inputProps:{"aria-label":"select all"},style:{color:"white"},checked:ie,onClick:function(){return function(){if(ie)oe(!1),W([]);else{var e=n.map((function(e){return e.id}));oe(!0),W(e)}}()}})}),f.map((function(e){return Object(F.jsx)(S,{id:e.id,width:e.width,sortDirection:G===e.field&&z,children:Object(F.jsx)(w,{id:e.id,active:G===e.field,direction:G===e.field?z:"asc",onClick:function(){return t=e.field,B("asc"===z?"desc":"asc"),void J(t);var t},children:e.label})},e.id)})),Object(F.jsx)(S,{padding:"checkbox"})]})}),Object(F.jsx)(Z.a,{children:function(e){var t=ae.sortBy(e,(function(e){return"string"===typeof e[G]?e[G].toLowerCase():e[G]}));return"asc"===z?t:t.reverse()}(n).slice(v*M,v*M+M).map((function(e){var t,a=(t=e.id,-1!==K.indexOf(t));return ue!==e.id?Object(F.jsxs)(N,{selected:a,children:[Object(F.jsx)(m.a,{padding:"checkbox",children:Object(F.jsx)(D.a,{style:{color:"#5AA9E6"},checked:a,onClick:function(){return function(e){if(K.includes(e)){var t=K.filter((function(t){return t!==e}));W(t)}else W([].concat(Object(o.a)(K),[e]))}(e.id)}})}),pe.map((function(t){return"VALUE_1"===t&&e[t]>2e3?e[t]<3e3?Object(F.jsx)(I,{children:e[t]},ae.uniqueId()):Object(F.jsx)(E,{children:e[t]},ae.uniqueId()):Object(F.jsx)(m.a,{children:e[t]},ae.uniqueId())})),Object(F.jsx)(m.a,{padding:"checkbox",children:Object(F.jsx)(T,{variant:"outlined",color:"primary",onClick:function(){return de(e.id)},disabled:!1!==ue&&ue!==e.id,children:"Edit"})},e.id)]},e.id):Object(F.jsx)(q,{row:e,colsNames:pe,saveData:function(e){return function(e){var t=n.map((function(t){return t.id===ue?Object.keys(e).reduce((function(n,a){return n[a]=e[a]?e[a]:t[a],n}),{}):t}));r(t),de(!1)}(e)},clients:me},e.id)}))})]})}),Object(F.jsx)(X.a,{children:Object(F.jsx)(Z.a,{children:Object(F.jsxs)(x.a,{style:{display:"flex"},children:[Object(F.jsx)(m.a,{align:"left",style:{flexGrow:1,borderBottom:"none"},children:K.length?1===K.length?"1 item selected":"".concat(K.length," items selected"):""}),Object(F.jsx)(k,{variant:"contained",color:"primary",onClick:function(){fe(!0)},children:"Filter"}),Object(F.jsx)(ne.a,{count:n.length,rowsPerPage:M,onChangeRowsPerPage:function(e){var t=e.target.value;_(parseInt(t)),C(0)},page:v,onChangePage:function(e,t){C(t)},style:{borderBottom:"none"}})]})})})]})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(z.a,{theme:C,children:Object(F.jsx)(ce,{})})}),document.getElementById("root")),re()}},[[216,1,2]]]);
//# sourceMappingURL=main.125396f2.chunk.js.map