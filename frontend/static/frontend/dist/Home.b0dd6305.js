parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"bWGq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@babel/runtime/helpers/defineProperty")),t=require("@material-ui/core/styles");function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach(function(r){(0,e.default)(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var i=(0,t.makeStyles)(function(e){return o(o({},e.custom),{},{avatarContainer:{alignSelf:"flex-start"},submitButtonContainer:{alignSelf:"flex-end",marginBottom:e.spacing(1)},inputBaseRoot:{paddingBottom:e.spacing(2),paddingTop:e.spacing(1.75)},postForm:{alignItems:"center",display:"flex",overflow:"hidden"},root:o(o({},e.custom.borders),{},{borderBottomWidth:10,padding:e.spacing(2)}),submitButton:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},textField:{flexGrow:1,margin:e.spacing(0,3,0,2)}})}),a=i;exports.default=a;
},{"@babel/runtime/helpers/defineProperty":"UOpq","@material-ui/core/styles":"kBC5"}],"rsBN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=c(require("@babel/runtime/helpers/slicedToArray")),t=c(require("react")),r=require("react-redux"),a=c(require("@material-ui/core/InputBase")),u=c(require("@material-ui/core/Button")),l=c(require("../../components/Avatar")),s=c(require("../../components/CircularProgress")),n=c(require("../../hooks/useUI")),o=require("../../redux/post"),i=require("../../redux/user"),d=c(require("./styles"));function c(e){return e&&e.__esModule?e:{default:e}}var m=function(){var c=(0,d.default)(),m=(0,r.useDispatch)(),f=(0,r.useSelector)(i.selectUser),p=t.default.useState(""),v=(0,e.default)(p,2),q=v[0],h=v[1],E=(0,n.default)(o.key.post,null,!1).loading;return t.default.createElement("div",{className:c.root},t.default.createElement("form",{className:c.postForm,onSubmit:function(e){e.preventDefault(),m((0,o.createPost)(f.username,q)),h("")},noValidate:!0},t.default.createElement("div",{className:c.avatarContainer},t.default.createElement(l.default,{user:f})),t.default.createElement("div",{className:c.textField},t.default.createElement(a.default,{classes:{root:c.inputBaseRoot},fullWidth:!0,multiline:!0,onChange:function(e){h(e.target.value)},placeholder:"What's on your mind?",spellCheck:!0,value:q})),t.default.createElement("div",{className:c.submitButtonContainer},t.default.createElement(u.default,{className:c.submitButton,color:"primary",disabled:E||0===q.trim().length,type:"submit",variant:"contained"},"Post",E&&t.default.createElement(s.default,null)))))},f=m;exports.default=f;
},{"@babel/runtime/helpers/slicedToArray":"oJok","react":"dmLA","react-redux":"h1WH","@material-ui/core/InputBase":"yLtt","@material-ui/core/Button":"COaA","../../components/Avatar":"bw1V","../../components/CircularProgress":"t4sG","../../hooks/useUI":"cL7R","../../redux/post":"RsBX","../../redux/user":"hw6E","./styles":"bWGq"}],"wvZX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./PostForm"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./PostForm":"rsBN"}],"Lfua":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=g(require("react")),t=require("react-redux"),a=require("react-router-dom"),r=g(require("@material-ui/core/Button")),l=g(require("@material-ui/core/Typography")),u=g(require("../../components/AuthLayout")),n=g(require("../../components/Heading")),o=g(require("../../components/MobileMenu")),d=g(require("../../components/NextButton")),c=g(require("../../components/NoData")),i=g(require("../../components/PageTitle")),s=g(require("../../components/Posts")),f=g(require("../../components/PostForm")),m=g(require("../../hooks/useUI")),p=require("../../redux/post"),q=require("../../constants");function g(e){return e&&e.__esModule?e:{default:e}}var E=function(){var g=(0,t.useDispatch)(),E=(0,t.useSelector)(p.selectFeed),h=(0,m.default)(p.key.feed,p.key.feedNext),x=h.fetched,y=h.loading,v=h.nextLoading;e.default.useEffect(function(){x||g((0,p.getFeed)())},[]);return e.default.createElement(e.default.Fragment,null,e.default.createElement(i.default,{title:"Home"}),e.default.createElement(u.default,null,e.default.createElement(n.default,null,e.default.createElement(o.default,null),e.default.createElement(l.default,{variant:"h6"},"Home")),e.default.createElement(f.default,null),e.default.createElement(s.default,{loading:y,posts:E.results,noData:e.default.createElement(c.default,null,e.default.createElement(l.default,{paragraph:!0,variant:"h6"},"Welcome to"," ",q.APP_NAME,"!"),e.default.createElement(l.default,{color:"textSecondary",paragraph:!0,variant:"body2"},"This is the best place to see what's happening in your world. Find some people to follow and let's get started!"),e.default.createElement(r.default,{color:"primary",component:a.Link,to:q.route.recommendedUsers,variant:"contained"},"Let's go!"))}),e.default.createElement(d.default,{callback:function(){g((0,p.getFeed)(E.next))},loading:v,nextUrl:E.next})))},h=E;exports.default=h;
},{"react":"dmLA","react-redux":"h1WH","react-router-dom":"eu5S","@material-ui/core/Button":"COaA","@material-ui/core/Typography":"l2jE","../../components/AuthLayout":"VZr3","../../components/Heading":"oTXS","../../components/MobileMenu":"fHQy","../../components/NextButton":"Wt1G","../../components/NoData":"bmZh","../../components/PageTitle":"KsuC","../../components/Posts":"zQ79","../../components/PostForm":"wvZX","../../hooks/useUI":"cL7R","../../redux/post":"RsBX","../../constants":"iJA9"}],"YzF7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./Home"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./Home":"Lfua"}]},{},[], null)
//# sourceMappingURL=/Home.b0dd6305.js.map