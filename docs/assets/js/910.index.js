(self.webpackChunktwitch_clips=self.webpackChunktwitch_clips||[]).push([[910],{2966:function(t,e,n){"use strict";n.d(e,{Z:function(){return E}}),n(9826),n(1249),n(2222),n(2526),n(1817),n(1539),n(2165),n(8783),n(6992),n(3948),n(1038),n(7042),n(8309);var r=n(7294),i=n(5697),o=n.n(i),a=n(7703),c=n(1865),l=n(7531),u=n(7070);function s(t){var e=t.id,n=t.inFavorite;return r.createElement(l.b5,{type:"button",id:e,title:"Add to favorite"},r.createElement(l.ny,{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24",fillColor:n?u.NM:u.Y},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",stroke:"black",strokeWidth:"2px"})))}function d(t,e,n){return t.replace("%{width}x%{height}","".concat(function(t){return t.match(/\d/g).join("")}(e),"x").concat(n))}s.propTypes={id:o().string.isRequired,inFavorite:o().bool.isRequired},n(9600),n(4723),n(4916),n(5306);var f=n(9163),p=f.ZP.p.withConfig({displayName:"styled__Empty",componentId:"sc-1ino5g0-0"})(["font-size:2rem;line-height:2.2rem;text-align:center;"]),h=f.ZP.ul.withConfig({displayName:"styled__VideoList",componentId:"sc-1ino5g0-1"})(["display:flex;flex-wrap:wrap;justify-content:center;"]),v=f.ZP.li.withConfig({displayName:"styled__VideoItem",componentId:"sc-1ino5g0-2"})(["position:relative;margin:0 10px;margin-bottom:25px;min-width:300px;width:500px;height:300px;background-color:#9b9898;"]),g=f.ZP.a.withConfig({displayName:"styled__LinkToVideo",componentId:"sc-1ino5g0-3"})(['position:relative;width:100%;height:100%;display:inline-block;&::after{position:absolute;content:"','";top:0;left:0;padding:10px;width:100%;height:100%;display:none;justify-content:center;align-items:center;font-weight:700;text-align:center;color:',";background-color:rgba(0,0,0,.5);box-sizing:border-box;transition:box-shadow .6s;z-index:1000;}&:hover,&:focus{outline-color:",";}&:hover::after,&:focus::after{display:flex;}&:active::after{box-shadow:0 0 30px 8px inset #201f1f;}"],(function(t){return t.clipTitle}),u.Y,u.ql),m=f.ZP.img.withConfig({displayName:"styled__Img",componentId:"sc-1ino5g0-4"})(["width:100%;height:100%;display:block;"]);function y(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w(t){var e=t.postData,n=t.postDataLength,i=t.favoriteList,o=t.addFavorite,a=t.removeFavorite,c=i||e;return n?r.createElement(h,{onClick:function(t){if(t.target.closest("BUTTON")){var n=t.target.closest("BUTTON"),r=c.find((function(t){return t.id===n.id}));if(r)a(r.id);else{var i=e.find((function(t){return t.id===n.id}));o([i])}}}},e.map((function(t){return r.createElement(v,{key:t.id},r.createElement(s,{id:t.id,inFavorite:Boolean(c.find((function(e){return e.id===t.id})))}),r.createElement(g,{href:"".concat(t.url),target:"_blank",clipTitle:t.title},r.createElement("picture",null,r.createElement("source",{srcSet:d.apply(void 0,[t.thumbnail_url].concat(y(u.jX.desktop))),media:"(min-width: ".concat(u.Wu.desktop,")")}),r.createElement("source",{srcSet:d.apply(void 0,[t.thumbnail_url].concat(y(u.jX.tablet))),media:"(min-width: ".concat(u.Wu.tablet,")")}),r.createElement("source",{srcSet:d.apply(void 0,[t.thumbnail_url].concat(y(u.jX.mobileToTablet))),media:"(min-width: ".concat(u.Wu.mobileToTablet,")")}),r.createElement(m,{src:d.apply(void 0,[t.thumbnail_url].concat(y(u.jX.mobile))),alt:"Thumbnail"}))))}))):r.createElement(p,null,"Nothing...")}w.propTypes={postData:o().arrayOf(o().object).isRequired,postDataLength:o().number.isRequired,favoriteList:o().arrayOf(o().object),addFavorite:o().func,removeFavorite:o().func.isRequired},w.defaultProps={favoriteList:null,addFavorite:null};var x={removeFavorite:c.Q},E=(0,a.$j)(null,x)(w)},5910:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(7294),i=n(5697),o=n.n(i),a=n(2966),c=n(5941),l=n(4358);function u(t){var e=t.favoriteList;return(0,r.useEffect)((function(){(0,l.Z)("Favorite page")}),[]),r.createElement("section",null,r.createElement(c.Z,null,"Your favorite list"),r.createElement(a.Z,{postData:e,postDataLength:e.length}))}u.propTypes={favoriteList:o().arrayOf(o().object).isRequired}},5941:function(t,e,n){"use strict";var r=n(9163).ZP.h2.withConfig({displayName:"visually-hidden__VisuallyHidden",componentId:"sc-1vw3ll6-0"})(["position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;clip:rect(0 0 0 0);overflow:hidden;"]);e.Z=r},4358:function(t,e,n){"use strict";function r(t){document.title=t}n.d(e,{Z:function(){return r}})},1530:function(t,e,n){"use strict";var r=n(8710).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},647:function(t,e,n){var r=n(7908),i=Math.floor,o="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,l,u,s){var d=n+t.length,f=l.length,p=c;return void 0!==u&&(u=r(u),p=a),o.call(s,p,(function(r,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":a=u[o.slice(1,-1)];break;default:var c=+o;if(0===c)return r;if(c>f){var s=i(c/10);return 0===s?r:s<=f?void 0===l[s-1]?o.charAt(1):l[s-1]+o.charAt(1):r}a=l[c-1]}return void 0===a?"":a}))}},9826:function(t,e,n){"use strict";var r=n(2109),i=n(2092).find,o=n(1223),a="find",c=!0;a in[]&&Array(1).find((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},9600:function(t,e,n){"use strict";var r=n(2109),i=n(8361),o=n(5656),a=n(9341),c=[].join,l=i!=Object,u=a("join",",");r({target:"Array",proto:!0,forced:l||!u},{join:function(t){return c.call(o(this),void 0===t?",":t)}})},1249:function(t,e,n){"use strict";var r=n(2109),i=n(2092).map;r({target:"Array",proto:!0,forced:!n(1194)("map")},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},4723:function(t,e,n){"use strict";var r=n(7007),i=n(9670),o=n(7466),a=n(4488),c=n(1530),l=n(7651);r("match",1,(function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=i(t),u=String(this);if(!a.global)return l(a,u);var s=a.unicode;a.lastIndex=0;for(var d,f=[],p=0;null!==(d=l(a,u));){var h=String(d[0]);f[p]=h,""===h&&(a.lastIndex=c(u,o(a.lastIndex),s)),p++}return 0===p?null:f}]}))},5306:function(t,e,n){"use strict";var r=n(7007),i=n(9670),o=n(7466),a=n(9958),c=n(4488),l=n(1530),u=n(647),s=n(7651),d=Math.max,f=Math.min;r("replace",2,(function(t,e,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=r.REPLACE_KEEPS_$0,v=p?"$":"$0";return[function(n,r){var i=c(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!p&&h||"string"==typeof r&&-1===r.indexOf(v)){var c=n(e,t,this,r);if(c.done)return c.value}var g=i(t),m=String(this),y="function"==typeof r;y||(r=String(r));var b=g.global;if(b){var w=g.unicode;g.lastIndex=0}for(var x=[];;){var E=s(g,m);if(null===E)break;if(x.push(E),!b)break;""===String(E[0])&&(g.lastIndex=l(m,o(g.lastIndex),w))}for(var _,S="",k=0,T=0;T<x.length;T++){E=x[T];for(var j=String(E[0]),A=d(f(a(E.index),m.length),0),I=[],C=1;C<E.length;C++)I.push(void 0===(_=E[C])?_:String(_));var L=E.groups;if(y){var N=[j].concat(I,A,m);void 0!==L&&N.push(L);var P=String(r.apply(void 0,N))}else P=u(j,m,A,I,L,r);A>=k&&(S+=m.slice(k,A)+P,k=A+j.length)}return S+m.slice(k)}]}))}}]);