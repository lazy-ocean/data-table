(this["webpackJsonpdata-table"]=this["webpackJsonpdata-table"]||[]).push([[0],{170:function(e,t,n){},176:function(e,t,n){},221:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),i=n.n(c),o=n(14),s=n.n(o),l=(n(170),n(272)),u=n(259),d=n(261),j=n(5),b=n(263),O=n(264),f=n(292),h=n(265),p=Object(u.a)((function(e){return{root:{width:"100%",fontSize:"11px"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},subtitle1:{paddingBottom:"15px"}}})),x=Object(d.a)({palette:{primary:{main:"#5AA9E6"}}}),m=Object(j.a)((function(){return{head:{backgroundColor:x.palette.primary.main,color:x.palette.common.white}}}))(b.a),g=Object(j.a)((function(){return{root:{"&:nth-of-type(even)":{backgroundColor:"#D8EEFD"},"&.Mui-selected, &.Mui-selected:hover":{backgroundColor:"#BADCF3"}}}}))(O.a),v=Object(j.a)((function(){return{body:{backgroundColor:"#FFE45E"}}}))(b.a),y=Object(j.a)((function(){return{body:{backgroundColor:"#F50049"}}}))(b.a),w=Object(j.a)((function(){return{root:{fontSize:"14px","&:hover, &:focus":{color:"white"},"&.MuiTableSortLabel-active":{color:"white"}},icon:{color:"inherit !important"}}}))(f.a),C=Object(j.a)((function(){return{root:{color:x.palette.primary.main,backgroundColor:"white",border:"1px solid #5AA9E6","&:hover":{backgroundColor:"#d9efff",border:"1px solid #5AA9E6"}}}}))(h.a),S=Object(j.a)((function(){return{root:{color:"white",alignSelf:"center","&:hover":{backgroundColor:"#5AA9E6"},marginRight:10}}}))(h.a),E=n(40),I=n.n(E),T=n(58),N=n(18),P=(n(176),n(279)),k=n(282),A=n(271),D=n(17),M=n(34),R=n.n(M),_=n(90),L=n.n(_);!function(e){e.UAT="UAT",e.PROD="PROD",e.DEV="DEV"}(a||(a={})),function(e){e.STRING="STRING",e.NUMERIC="NUMERIC",e.DATE="DATE",e.TIMESTAMP="TIMESTAMP"}(r||(r={}));var B=function(){var e=Object(T.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://run.mocky.io/v3/6f15e3ad-bf04-4940-9b81-0f14fac8ebf2");case 2:return t=e.sent,e.abrupt("return",t.data.items.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{id:e.ID,UPDATE_TIMESTAMP:(t=e.UPDATE_TIMESTAMP,new Date(t.slice(0,-7)))});var t})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(T.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://run.mocky.io/v3/9700b81e-1edd-49b8-8160-736b24a989a7");case 2:return t=e.sent,e.abrupt("return",Object.keys(t.data.config).reduce((function(e,n){var a=t.data.config[n].label,r=Object(D.a)(Object(D.a)({},t.data.config[n]),{},{field:n,headerName:a,sortable:!0,id:R.a.uniqueId()});return e.push(r),e}),[]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=n(266),U=n(287),V=n(4),q=function(e){var t=e.columns,n=e.rows,a=e.orderBy,r=e.order,c=e.setOrder,i=e.setOrderBy,o=e.checkedAll,s=e.checkAll,l=e.setSelected;return Object(V.jsx)(z.a,{children:Object(V.jsxs)(O.a,{children:[Object(V.jsx)(m,{padding:"checkbox",children:Object(V.jsx)(U.a,{inputProps:{"aria-label":"select all"},style:{color:"white"},checked:o,onClick:function(){return function(){if(o)s(!1),l([]);else{var e=n.map((function(e){return e.id}));s(!0),l(e)}}()}})}),t.map((function(e){return Object(V.jsx)(m,{id:e.id,width:e.width,sortDirection:a===e.field&&r,children:Object(V.jsx)(w,{id:e.id,active:a===e.field,direction:a===e.field?r:"asc",onClick:function(){return t=e.field,c("asc"===r?"desc":"asc"),void i(t);var t},children:e.label})},e.id)})),Object(V.jsx)(m,{padding:"checkbox"})]})})},G=n(281),Y=n(286),J=n(154),H=function(e){var t=e.selected;return Object(V.jsx)(b.a,{align:"left",style:{flexGrow:1,borderBottom:"none"},children:t.length?1===t.length?"1 item selected":"".concat(t.length," items selected"):""})},K=function(){return Object(V.jsx)(O.a,{children:Object(V.jsx)(b.a,{colSpan:13,children:Object(V.jsx)(J.a,{variant:"h6",style:{textAlign:"center",margin:"30px"},children:"No items matching set filters"})})})},W=n(36),Q=n(290),X=n(274),Z=n(273),$=n(278),ee=n(277),te=n(280),ne=n(80),ae=n(288),re=n(285),ce=n(21),ie=n(283),oe=n(130),se=function(e){var t=e.colsNames,n=e.values,r=e.handleChange,c=e.clients,i=e.setValues,o=e.handleDateChange,s=e.row,u=e.type,d=p();return t.map((function(e){switch(e){case"DESCRIPTION":return Object(V.jsxs)(b.a,{children:["form"===u&&Object(V.jsx)(J.a,{variant:"subtitle1",gutterBottom:!0,className:d.subtitle1,children:"Item description:"}),Object(V.jsx)(ae.a,{defaultValue:n[e],name:e,size:"small",id:"input-descr",style:{fontSize:"11px",width:"100%"},InputProps:{style:{fontSize:14}},InputLabelProps:{style:{fontSize:14}},onChange:r,placeholder:"form"===u?"Lorem ipsums":""})]},"edit_1");case"SOURCE_NM":return Object(V.jsxs)(b.a,{children:["form"===u&&Object(V.jsx)(J.a,{variant:"subtitle1",gutterBottom:!0,className:d.subtitle1,children:"Source:"}),Object(V.jsx)(ae.a,{id:"select-source",select:!0,defaultValue:n[e],name:e,onChange:r,InputProps:{style:{fontSize:14}},SelectProps:{native:!0},children:"form"===u?["All"].concat(Object(ne.a)(Object.values(a))).map((function(e){return Object(V.jsx)("option",{value:e,children:e},e)})):Object.values(a).map((function(e){return Object(V.jsx)("option",{value:e,children:e},e)}))})]},"edit_2");case"CLIENT_NM":return Object(V.jsxs)(b.a,{children:["form"===u&&Object(V.jsx)(J.a,{variant:"subtitle1",gutterBottom:!0,className:d.subtitle1,children:"Client name:"}),Object(V.jsx)(re.a,{id:"client-picker",size:"small",options:c,onChange:function(t,a){return i(Object(D.a)(Object(D.a)({},n),{},Object(W.a)({},e,a)))},defaultValue:n[e],getOptionLabel:function(e){return e||""},style:{width:"100%",fontSize:14},renderInput:function(e){return Object(V.jsx)(ae.a,Object(D.a)(Object(D.a)({},e),{},{variant:"outlined",placeholder:"form"===u?"KOG":""}))}})]},"edit_3");case"TERMINATION_DT":return Object(V.jsxs)(b.a,{children:["form"===u&&Object(V.jsx)(J.a,{variant:"subtitle1",gutterBottom:!0,className:d.subtitle1,children:"Termination date:"}),Object(V.jsx)(ce.a,{utils:oe.a,children:Object(V.jsx)(l.a,{theme:x,children:Object(V.jsx)(ie.a,{variant:"inline",openTo:"year",name:e,views:["year","month"],value:"form"===u?n[e]:new Date(n[e]),onChange:o})})})]},"edit_4");case"VALUE_3":return Object(V.jsxs)(b.a,{children:["form"===u&&Object(V.jsx)(J.a,{variant:"subtitle1",gutterBottom:!0,className:d.subtitle1,children:"Max range:"}),Object(V.jsx)(ae.a,{id:"standard-number",type:"number",defaultValue:n[e],InputProps:{style:{fontSize:14}},InputLabelProps:{style:{fontSize:14}},name:e,onChange:r,placeholder:"form"===u?"0 - 10000000000":""})]},"edit_5");default:return Object(V.jsx)(b.a,{children:s[e].toString()},R.a.uniqueId())}}))},le=function(e){var t={DESCRIPTION:"",SOURCE_NM:"",CLIENT_NM:null,TERMINATION_DT:null,VALUE_3:null},n=e.open,a=e.onClose,r=e.clients,i=e.filterData,o=Object(c.useState)(t),s=Object(N.a)(o,2),l=s[0],u=s[1],d=function(e){"cancel"===e?(u(t),a()):(u(t),i(l))};return Object(V.jsxs)(Q.a,{open:n,onClose:a,"aria-labelledby":"form-dialog-title",PaperProps:{style:{width:600,padding:"20px 30px"}},children:[Object(V.jsx)(ee.a,{id:"form-dialog-title",style:{padding:"15px"},children:"Data filters"}),Object(V.jsx)(Z.a,{style:{paddingLeft:"15px",overflowY:"unset"},children:Object(V.jsx)($.a,{children:"Choose fields to filter rows:"})}),Object(V.jsx)(P.a,{children:Object(V.jsx)(te.a,{children:Object(V.jsx)(O.a,{style:{width:"100%",display:"flex",flexDirection:"column"},children:Object(V.jsx)(se,{colsNames:["DESCRIPTION","SOURCE_NM","CLIENT_NM","TERMINATION_DT","VALUE_3"],values:l,handleChange:function(e){var t=e.target,n=t.name,a=t.value;u(Object(D.a)(Object(D.a)({},l),{},Object(W.a)({},n,a)))},clients:r,setValues:u,handleDateChange:function(e){var t=(e.getMonth()+1).toString(),n=null===e||void 0===e?void 0:e.getFullYear(),a="".concat(n,"-").concat(t.padStart(2,"0"));u(Object(D.a)(Object(D.a)({},l),{},{TERMINATION_DT:a}))},row:t,type:"form"})})})}),Object(V.jsxs)(X.a,{children:[Object(V.jsx)(h.a,{onClick:function(){return d("cancel")},color:"primary",children:"Cancel"}),Object(V.jsx)(h.a,{onClick:function(){return d("save")},color:"primary",children:"Filter"})]})]})},ue=function(e){var t=e.rows,n=e.rowsPerPage,a=e.selected,r=e.edited,c=e.activeFilter,o=e.getRows,s=e.setRowsData,l=e.toggleFilter,u=e.page,d=e.clients,j=e.setPage,f=e.setRowsPerPage,p=i.a.useState(!1),x=Object(N.a)(p,2),m=x[0],g=x[1];return Object(V.jsx)(P.a,{children:Object(V.jsxs)(G.a,{style:{display:"block"},children:[Object(V.jsx)(le,{clients:d,open:m,onClose:function(){g(!1),l(!1)},filterData:function(e){return function(e){var n=Object.keys(e).filter((function(t){return e[t]})),a=t.filter((function(t){return n.every((function(n){return"DESCRIPTION"===n?t[n].toLowerCase().includes(e[n].toLowerCase()):e[n]===t[n]}))}));s(a),g(!1),l(!0)}(e)}}),Object(V.jsxs)(O.a,{style:{display:"flex"},children:[Object(V.jsx)(H,{selected:a}),Object(V.jsxs)(b.a,{style:{borderBottom:"none",padding:8},children:[Object(V.jsx)(S,{variant:"contained",color:"primary",onClick:function(){g(!0)},disabled:!1!==r,children:"Filter"}),c&&Object(V.jsx)(h.a,{variant:"outlined",color:"primary",disabled:!1!==r,onClick:function(){return Promise.resolve(o()).then((function(e){return s(e)})).then((function(){return l(!1)}))},children:"Clear filters"})]}),Object(V.jsx)(Y.a,{count:t.length,rowsPerPage:n,onChangeRowsPerPage:function(e){var t=e.target.value;f(parseInt(t,10)),j(0)},page:u,onChangePage:function(e,t){j(t)},style:{borderBottom:"none"}})]})]})})},de=function(e){var t=e.row,n=e.colsNames,a=e.saveData,r=e.clients,i=Object(c.useState)(t),o=Object(N.a)(i,2),s=o[0],l=o[1];return Object(V.jsxs)(O.a,{children:[Object(V.jsx)(b.a,{padding:"checkbox",children:Object(V.jsx)(U.a,{style:{color:"#5AA9E6"},disabled:!0})}),Object(V.jsx)(se,{colsNames:n,values:s,handleChange:function(e){var t=e.target,n=t.name,a=t.value;l(Object(D.a)(Object(D.a)({},s),{},Object(W.a)({},n,a)))},clients:r,setValues:l,handleDateChange:function(e){var t=(e.getMonth()+1).toString(),n=null===e||void 0===e?void 0:e.getFullYear(),a="".concat(n,"-").concat(t.padStart(2,"0"));l(Object(D.a)(Object(D.a)({},s),{},{TERMINATION_DT:a}))},row:t,type:"table"}),Object(V.jsx)(b.a,{padding:"checkbox",children:Object(V.jsx)(C,{variant:"contained",color:"primary",onClick:function(){return a(s)},children:"Save"})},t.id)]},t.id)},je=n(275),be=function(){return Object(V.jsx)(O.a,{children:Object(V.jsx)(b.a,{colSpan:13,children:Object(V.jsx)(je.a,{size:50,style:{margin:"0 50%"}})})})},Oe=function(e,t,n){var a=R.a.sortBy(e,(function(e){return"string"===typeof e[t]?e[t].toLowerCase():e[t]}));return"asc"===n?a:a.reverse()},fe=function(e){var t=e.rows,n=e.orderBy,a=e.order,r=e.page,i=e.rowsPerPage,o=e.edited,s=e.setSelected,l=e.selected,u=e.columns,d=e.setEdited,j=e.setRowsData,O=e.clients,f=e.activeFilter,h=Object(c.useMemo)((function(){return u.map((function(e){return e.field}))}),[u]);return Object(V.jsx)(te.a,{children:t.length?Oe(t,n,a).slice(r*i,r*i+i).map((function(e){var n=-1!==l.indexOf(e.id);return o!==e.id?Object(V.jsxs)(g,{selected:-1!==l.indexOf(e.id),children:[Object(V.jsx)(b.a,{padding:"checkbox",children:Object(V.jsx)(U.a,{style:{color:"#5AA9E6"},checked:n,onClick:function(){return function(e){if(l.includes(e)){var t=l.filter((function(t){return t!==e}));s(t)}else s([].concat(Object(ne.a)(l),[e]))}(e.id)}})}),h.map((function(t){return"VALUE_1"===t&&e[t]>2e3?e[t]<3e3?Object(V.jsx)(v,{children:e[t]},R.a.uniqueId()):Object(V.jsx)(y,{children:e[t]},R.a.uniqueId()):"UPDATE_TIMESTAMP"===t?Object(V.jsxs)(b.a,{children:[e[t].toLocaleDateString()," ",e[t].toLocaleTimeString()]},R.a.uniqueId()):Object(V.jsx)(b.a,{children:e[t]},R.a.uniqueId())})),Object(V.jsx)(b.a,{padding:"checkbox",children:Object(V.jsx)(C,{variant:"outlined",color:"primary",onClick:function(){return d(e.id)},disabled:!1!==o&&o!==e.id,children:"Edit"})},e.id)]},e.id):Object(V.jsx)(de,{row:e,colsNames:h,saveData:function(e){return function(e){var n=t.map((function(t){return t.id===o?Object.keys(e).reduce((function(n,a){return n[a]=e[a]?e[a]:t[a],n}),{}):t}));j(n),d(!1)}(e)},clients:O},e.id)})):f?Object(V.jsx)(K,{}):Object(V.jsx)(be,{})})},he=function(){var e=p(),t=Object(c.useState)([]),n=Object(N.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),s=Object(N.a)(o,2),l=s[0],u=s[1],d=i.a.useState(0),j=Object(N.a)(d,2),b=j[0],O=j[1],f=i.a.useState(10),h=Object(N.a)(f,2),x=h[0],m=h[1],g=i.a.useState("asc"),v=Object(N.a)(g,2),y=v[0],w=v[1],C=i.a.useState("RN"),S=Object(N.a)(C,2),E=S[0],D=S[1],M=i.a.useState([]),R=Object(N.a)(M,2),_=R[0],L=R[1],z=i.a.useState(!1),U=Object(N.a)(z,2),G=U[0],Y=U[1],J=i.a.useState(!1),H=Object(N.a)(J,2),K=H[0],W=H[1],Q=i.a.useState(!1),X=Object(N.a)(Q,2),Z=X[0],$=X[1];Object(c.useEffect)((function(){Object(T.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return t=e.sent,u(t),e.next=6,B();case 6:n=e.sent,r(n);case 8:case"end":return e.stop()}}),e)})))()}),[]);var ee=Object(c.useMemo)((function(){return a.map((function(e){return e.CLIENT_NM}))}),[a]);return Object(V.jsx)("div",{className:e.root,children:Object(V.jsxs)(A.a,{className:e.paper,children:[Object(V.jsx)(k.a,{component:A.a,children:Object(V.jsxs)(P.a,{"aria-label":"simple table",className:e.table,size:"small",style:{fontSize:"10px"},children:[Object(V.jsx)(q,{columns:l,rows:a,order:y,orderBy:E,checkAll:Y,checkedAll:G,setOrder:w,setOrderBy:D,setSelected:L}),Object(V.jsx)(fe,{rows:a,orderBy:E,order:y,page:b,rowsPerPage:x,edited:K,selected:_,setEdited:W,columns:l,setRowsData:r,clients:ee,activeFilter:Z,setSelected:L})]})}),Object(V.jsx)(ue,{rows:a,rowsPerPage:x,selected:_,edited:K,activeFilter:Z,getRows:B,setRowsData:r,toggleFilter:$,setRowsPerPage:m,page:b,setPage:O,clients:ee})]})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,295)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(V.jsx)(i.a.StrictMode,{children:Object(V.jsx)(l.a,{theme:x,children:Object(V.jsx)(he,{})})}),document.getElementById("root")),pe()}},[[221,1,2]]]);
//# sourceMappingURL=main.b86e9c26.chunk.js.map