parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"b6LH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("@babel/runtime/helpers/defineProperty")),r=require("@material-ui/core/styles");function t(e){return e&&e.__esModule?e:{default:e}}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function n(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){(0,e.default)(r,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var c=(0,r.makeStyles)(function(e){return n({},e.custom)}),u=c;exports.default=u;
},{"@babel/runtime/helpers/defineProperty":"UOpq","@material-ui/core/styles":"kBC5"}],"N6c4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react-redux"),t=require("react-router-dom"),a=q(require("react")),l=q(require("@material-ui/core/Typography")),r=q(require("../../components/AuthLayout")),u=q(require("../../components/BackButton")),n=q(require("../../components/Heading")),o=q(require("../../components/Loading")),s=q(require("../../components/NextButton")),i=q(require("../../components/NoData")),d=q(require("../../components/PageTitle")),c=q(require("../../components/PostDetailNav")),f=q(require("../../components/UserList")),m=q(require("../../hooks/useUI")),p=require("../../redux/post"),h=q(require("./styles"));function q(e){return e&&e.__esModule?e:{default:e}}var k=function(){var q=(0,h.default)(),k=(0,e.useDispatch)(),E=(0,t.useParams)().postId,g=(0,e.useSelector)(function(e){return(0,p.selectPostLikes)(e,E)}),x=(0,m.default)(p.key.postLikes(E),p.key.postLikesNext(E)),v=x.fetched,y=x.loading,L=x.nextLoading;a.default.useEffect(function(){v||k((0,p.getPostLikes)(E))},[E]);return a.default.createElement(a.default.Fragment,null,a.default.createElement(d.default,{title:"Post likes"}),a.default.createElement(r.default,null,a.default.createElement(n.default,null,a.default.createElement(u.default,null),a.default.createElement("div",null,a.default.createElement(l.default,{className:q.heading,variant:"h6"},"Post likes"))),a.default.createElement(c.default,{active:"likes",postId:E}),y?a.default.createElement(o.default,null):g.results.length?a.default.createElement(f.default,{list:g.results}):a.default.createElement(i.default,null,a.default.createElement(l.default,{paragraph:!0,variant:"h6"},"Nobody has liked this post"),a.default.createElement(l.default,{color:"textSecondary",paragraph:!0,variant:"body2"},"When someone likes this post they'll show up here.")),a.default.createElement(s.default,{callback:function(){k((0,p.getPostLikes)(E,g.next))},loading:L,nextUrl:g.next})))},E=k;exports.default=E;
},{"react-redux":"h1WH","react-router-dom":"eu5S","react":"dmLA","@material-ui/core/Typography":"l2jE","../../components/AuthLayout":"VZr3","../../components/BackButton":"YYiI","../../components/Heading":"oTXS","../../components/Loading":"eIQF","../../components/NextButton":"Wt1G","../../components/NoData":"bmZh","../../components/PageTitle":"KsuC","../../components/PostDetailNav":"ENPy","../../components/UserList":"BoSD","../../hooks/useUI":"cL7R","../../redux/post":"RsBX","./styles":"b6LH"}],"VP0f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./PostLikes"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./PostLikes":"N6c4"}]},{},[], null)
//# sourceMappingURL=/PostLikes.8262ac45.js.map