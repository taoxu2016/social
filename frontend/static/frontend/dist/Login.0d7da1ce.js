parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UWdZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.styles=void 0;var e=f(require("@babel/runtime/helpers/esm/extends")),t=f(require("@babel/runtime/helpers/esm/objectWithoutProperties")),r=d(require("react")),l=f(require("prop-types")),a=f(require("clsx")),n=require("@material-ui/utils"),i=require("../FormControl"),o=f(require("../styles/withStyles")),s=f(require("../Typography")),u=f(require("../utils/capitalize"));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=l?Object.getOwnPropertyDescriptor(e,a):null;n&&(n.get||n.set)?Object.defineProperty(r,a,n):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}};exports.styles=p;var b=r.forwardRef(function(l,n){l.checked;var o=l.classes,c=l.className,d=l.control,f=l.disabled,p=(l.inputRef,l.label),b=l.labelPlacement,m=void 0===b?"end":b,v=(l.name,l.onChange,l.value,(0,t.default)(l,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=(0,i.useFormControl)(),h=f;void 0===h&&void 0!==d.props.disabled&&(h=d.props.disabled),void 0===h&&g&&(h=g.disabled);var y={disabled:h};return["checked","name","onChange","value","inputRef"].forEach(function(e){void 0===d.props[e]&&void 0!==l[e]&&(y[e]=l[e])}),r.createElement("label",(0,e.default)({className:(0,a.default)(o.root,c,"end"!==m&&o["labelPlacement".concat((0,u.default)(m))],h&&o.disabled),ref:n},v),r.cloneElement(d,y),r.createElement(s.default,{component:"span",className:(0,a.default)(o.label,h&&o.disabled)},p))}),m=(0,o.default)(p,{name:"MuiFormControlLabel"})(b);exports.default=m;
},{"@babel/runtime/helpers/esm/extends":"Em0B","@babel/runtime/helpers/esm/objectWithoutProperties":"JQPn","react":"dmLA","prop-types":"X9bF","clsx":"bvnL","@material-ui/utils":"hpul","../FormControl":"kbZi","../styles/withStyles":"ORNx","../Typography":"l2jE","../utils/capitalize":"Ccrw"}],"phHp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=r(require("./FormControlLabel"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./FormControlLabel":"UWdZ"}],"IuMA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.styles=void 0;var e=p(require("@babel/runtime/helpers/esm/extends")),t=p(require("@babel/runtime/helpers/esm/slicedToArray")),r=p(require("@babel/runtime/helpers/esm/objectWithoutProperties")),n=f(require("react")),o=p(require("prop-types")),a=p(require("clsx")),u=require("@material-ui/utils"),i=p(require("../utils/useControlled")),l=p(require("../FormControl/useFormControl")),d=p(require("../styles/withStyles")),s=p(require("../IconButton"));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function p(e){return e&&e.__esModule?e:{default:e}}var h={root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}};exports.styles=h;var b=n.forwardRef(function(o,u){var d=o.autoFocus,c=o.checked,f=o.checkedIcon,p=o.classes,h=o.className,b=o.defaultChecked,y=o.disabled,m=o.icon,v=o.id,k=o.inputProps,q=o.inputRef,x=o.name,g=o.onBlur,O=o.onChange,F=o.onFocus,P=o.readOnly,w=o.required,B=o.tabIndex,C=o.type,j=o.value,I=(0,r.default)(o,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),_=(0,i.default)({controlled:c,default:Boolean(b),name:"SwitchBase",state:"checked"}),M=(0,t.default)(_,2),N=M[0],R=M[1],S=(0,l.default)(),W=y;S&&void 0===W&&(W=S.disabled);var D="checkbox"===C||"radio"===C;return n.createElement(s.default,(0,e.default)({component:"span",className:(0,a.default)(p.root,h,N&&p.checked,W&&p.disabled),disabled:W,tabIndex:null,role:void 0,onFocus:function(e){F&&F(e),S&&S.onFocus&&S.onFocus(e)},onBlur:function(e){g&&g(e),S&&S.onBlur&&S.onBlur(e)},ref:u},I),n.createElement("input",(0,e.default)({autoFocus:d,checked:c,defaultChecked:b,className:p.input,disabled:W,id:D&&v,name:x,onChange:function(e){var t=e.target.checked;R(t),O&&O(e,t)},readOnly:P,ref:q,required:w,tabIndex:B,type:C,value:j},k)),N?f:m)}),y=(0,d.default)(h,{name:"PrivateSwitchBase"})(b);exports.default=y;
},{"@babel/runtime/helpers/esm/extends":"Em0B","@babel/runtime/helpers/esm/slicedToArray":"ckJc","@babel/runtime/helpers/esm/objectWithoutProperties":"JQPn","react":"dmLA","prop-types":"X9bF","clsx":"bvnL","@material-ui/utils":"hpul","../utils/useControlled":"jT59","../FormControl/useFormControl":"nd6v","../styles/withStyles":"ORNx","../IconButton":"EOlW"}],"ABm4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.styles=void 0;var e=u(require("@babel/runtime/helpers/esm/extends")),t=u(require("@babel/runtime/helpers/esm/objectWithoutProperties")),r=p(require("react")),a=u(require("prop-types")),o=u(require("clsx")),i=require("@material-ui/utils"),l=u(require("../styles/withStyles")),n=require("../styles/colorManipulator"),c=u(require("../utils/capitalize")),d=u(require("../internal/SwitchBase"));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function p(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function u(e){return e&&e.__esModule?e:{default:e}}var h=function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,n.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,n.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}};exports.styles=h;var m=r.forwardRef(function(a,i){var l=a.classes,n=a.className,s=a.color,p=void 0===s?"secondary":s,u=a.edge,h=void 0!==u&&u,m=a.size,g=void 0===m?"medium":m,y=(0,t.default)(a,["classes","className","color","edge","size"]),f=r.createElement("span",{className:l.thumb});return r.createElement("span",{className:(0,o.default)(l.root,n,{start:l.edgeStart,end:l.edgeEnd}[h],"small"===g&&l["size".concat((0,c.default)(g))])},r.createElement(d.default,(0,e.default)({type:"checkbox",icon:f,checkedIcon:f,classes:{root:(0,o.default)(l.switchBase,l["color".concat((0,c.default)(p))]),input:l.input,checked:l.checked,disabled:l.disabled},ref:i},y)),r.createElement("span",{className:l.track}))}),g=(0,l.default)(h,{name:"MuiSwitch"})(m);exports.default=g;
},{"@babel/runtime/helpers/esm/extends":"Em0B","@babel/runtime/helpers/esm/objectWithoutProperties":"JQPn","react":"dmLA","prop-types":"X9bF","clsx":"bvnL","@material-ui/utils":"hpul","../styles/withStyles":"ORNx","../styles/colorManipulator":"fvgg","../utils/capitalize":"Ccrw","../internal/SwitchBase":"IuMA"}],"KiZO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./Switch"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./Switch":"ABm4"}],"DrCf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("@babel/runtime/helpers/defineProperty")),r=require("@material-ui/core/styles");function t(e){return e&&e.__esModule?e:{default:e}}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function o(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach(function(t){(0,e.default)(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}var i=(0,r.makeStyles)(function(e){return o(o({},e.custom),{},{alert:{marginBottom:e.spacing(2)},button:{marginTop:e.spacing(2)},container:{marginTop:50,maxWidth:450},formField:{marginTop:e.spacing(2)},register:{marginTop:e.spacing(2),textAlign:"center"}})}),c=i;exports.default=c;
},{"@babel/runtime/helpers/defineProperty":"UOpq","@material-ui/core/styles":"kBC5"}],"sPHr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=v(require("@babel/runtime/helpers/defineProperty")),r=v(require("@babel/runtime/helpers/slicedToArray")),t=v(require("react")),a=require("react-redux"),l=v(require("@material-ui/core/Button")),u=v(require("@material-ui/core/Card")),i=v(require("@material-ui/core/CardContent")),o=v(require("@material-ui/core/Container")),n=v(require("@material-ui/core/FormControlLabel")),c=v(require("@material-ui/core/Switch")),s=v(require("@material-ui/core/TextField")),d=v(require("@material-ui/core/Typography")),m=v(require("@material-ui/lab/Alert")),f=v(require("../../components/CircularProgress")),p=v(require("../../components/PageTitle")),b=v(require("../../components/TextLink")),g=require("../../constants"),y=v(require("../../hooks/useUI")),q=require("../../redux/user"),E=require("../../utils"),h=v(require("./styles"));function v(e){return e&&e.__esModule?e:{default:e}}function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function w(r){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach(function(t){(0,e.default)(r,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}var P=function(){var v=(0,h.default)(),O=(0,a.useDispatch)(),P=(0,y.default)(q.key.login,null,!1),j=P.errors,C=P.loading,x=t.default.useState({login:"",password:"",rememberMe:!1}),N=(0,r.default)(x,2),k=N[0],D=N[1],F=function(r){var t="checkbox"!==r.target.type?r.target.value:r.target.checked;D(w(w({},k),{},(0,e.default)({},r.target.name,t)))};return t.default.createElement(t.default.Fragment,null,t.default.createElement(p.default,{title:"Login"}),t.default.createElement(o.default,{className:v.container},t.default.createElement(u.default,null,t.default.createElement(i.default,null,!(0,E.isEmpty)(j)&&t.default.createElement(m.default,{className:v.alert,severity:"error"},"Invalid username/email or password"),t.default.createElement(d.default,{className:v.toUpper,color:"primary",variant:"h6"},"Login"),t.default.createElement("form",{onSubmit:function(e){e.preventDefault(),O((0,q.loginUser)(k))},noValidate:!0},t.default.createElement(s.default,{autoComplete:"email",className:v.formField,error:!(0,E.isEmpty)(j),fullWidth:!0,id:"login",label:"Username or email",name:"login",onChange:F,type:"text",value:k.login}),t.default.createElement(s.default,{autoComplete:"current-password",className:v.formField,error:!(0,E.isEmpty)(j),fullWidth:!0,id:"password",label:"Password",name:"password",onChange:F,type:"password",value:k.password}),t.default.createElement(n.default,{className:v.formField,control:t.default.createElement(c.default,{checked:k.rememberMe,color:"primary",name:"rememberMe",onChange:F}),label:"Remember me"}),t.default.createElement(l.default,{className:v.button,color:"primary",fullWidth:!0,disabled:C,type:"submit",variant:"contained"},"Login",C&&t.default.createElement(f.default,null))))),t.default.createElement(d.default,{className:v.register},"Not a member?"," ",t.default.createElement(b.default,{to:g.route.register},"Register"),".")))},j=P;exports.default=j;
},{"@babel/runtime/helpers/defineProperty":"UOpq","@babel/runtime/helpers/slicedToArray":"oJok","react":"dmLA","react-redux":"h1WH","@material-ui/core/Button":"COaA","@material-ui/core/Card":"XV01","@material-ui/core/CardContent":"ZPcc","@material-ui/core/Container":"gmLB","@material-ui/core/FormControlLabel":"phHp","@material-ui/core/Switch":"KiZO","@material-ui/core/TextField":"gU3o","@material-ui/core/Typography":"l2jE","@material-ui/lab/Alert":"jhN3","../../components/CircularProgress":"t4sG","../../components/PageTitle":"KsuC","../../components/TextLink":"G6MN","../../constants":"iJA9","../../hooks/useUI":"cL7R","../../redux/user":"hw6E","../../utils":"FOZT","./styles":"DrCf"}],"pYVu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./Login"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./Login":"sPHr"}]},{},[], null)
//# sourceMappingURL=/Login.0d7da1ce.js.map