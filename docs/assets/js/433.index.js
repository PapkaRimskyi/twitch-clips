(self.webpackChunktwitch_clips=self.webpackChunktwitch_clips||[]).push([[433],{8889:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}}),n(9826),n(1249),n(2222),n(2526),n(1817),n(1539),n(2165),n(8783),n(6992),n(3948),n(1038),n(7042),n(8309);var r=n(7294),i=n(5697),o=n.n(i),a=n(7703),l=n(1865),c=n(9698),u=n(7070);function s(t){var e=t.id,n=t.inFavorite;return r.createElement(c.b5,{type:"button",id:e,title:"Add to favorite"},r.createElement(c.ny,{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24",fillColor:n?u.NM:u.Y},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",stroke:"black",strokeWidth:"2px"})))}function d(t,e,n){return t.replace("%{width}x%{height}","".concat(function(t){return t.match(/\d/g).join("")}(e),"x").concat(n))}s.propTypes={id:o().string.isRequired,inFavorite:o().bool.isRequired},n(9600),n(4723),n(4916),n(5306);var f=n(9163),p=f.ZP.p.withConfig({displayName:"styled-video-collection__Empty",componentId:"f4fecx-0"})(["font-size:2rem;line-height:2.2rem;text-align:center;"]),v=f.ZP.ul.withConfig({displayName:"styled-video-collection__VideoList",componentId:"f4fecx-1"})(["display:flex;flex-wrap:wrap;justify-content:center;"]),h=f.ZP.li.withConfig({displayName:"styled-video-collection__VideoItem",componentId:"f4fecx-2"})(["position:relative;margin:0 10px;margin-bottom:25px;min-width:300px;width:500px;height:300px;background-color:#9b9898;"]),g=f.ZP.a.withConfig({displayName:"styled-video-collection__LinkToVideo",componentId:"f4fecx-3"})(['position:relative;width:100%;height:100%;display:inline-block;&::after{position:absolute;content:"','";top:0;left:0;padding:10px;width:100%;height:100%;display:none;justify-content:center;align-items:center;font-weight:700;text-align:center;color:',";background-color:rgba(0,0,0,.5);box-sizing:border-box;transition:box-shadow .6s;z-index:100;}&:hover,&:focus{outline-color:",";}&:hover::after,&:focus::after{display:flex;}&:active::after{box-shadow:0 0 30px 8px inset #201f1f;}"],(function(t){return t.clipTitle}),u.Y,u.ql),x=f.ZP.img.withConfig({displayName:"styled-video-collection__Img",componentId:"f4fecx-4"})(["width:100%;height:100%;display:block;"]);function m(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t){var e=t.postData,n=t.favoriteList,i=t.addFavorite,o=t.removeFavorite,a=n||e;return null!==e?e.length?r.createElement(v,{onClick:function(t){if(t.target.closest("BUTTON")){var n=t.target.closest("BUTTON"),r=a.find((function(t){return t.id===n.id}));if(r)o(r.id);else{var l=e.find((function(t){return t.id===n.id}));i([l])}}}},e.map((function(t){return r.createElement(h,{key:t.id},r.createElement(s,{id:t.id,inFavorite:Boolean(a.find((function(e){return e.id===t.id})))}),r.createElement(g,{href:"".concat(t.url),target:"_blank",clipTitle:t.title},r.createElement("picture",null,r.createElement("source",{srcSet:d.apply(void 0,[t.thumbnail_url].concat(m(u.jX.desktop))),media:"(min-width: ".concat(u.Wu.desktop,")")}),r.createElement("source",{srcSet:d.apply(void 0,[t.thumbnail_url].concat(m(u.jX.tablet))),media:"(min-width: ".concat(u.Wu.tablet,")")}),r.createElement("source",{srcSet:d.apply(void 0,[t.thumbnail_url].concat(m(u.jX.mobileToTablet))),media:"(min-width: ".concat(u.Wu.mobileToTablet,")")}),r.createElement(x,{src:d.apply(void 0,[t.thumbnail_url].concat(m(u.jX.mobile))),alt:"Thumbnail"}))))}))):r.createElement(p,null,"Nothing..."):null}b.propTypes={postData:o().arrayOf(o().object),favoriteList:o().arrayOf(o().object),addFavorite:o().func,removeFavorite:o().func.isRequired},b.defaultProps={postData:null,favoriteList:null,addFavorite:null};var E={removeFavorite:l.Q},w=(0,a.$j)(null,E)(b)},5941:function(t,e,n){"use strict";var r=n(9163).ZP.h2.withConfig({displayName:"visually-hidden__VisuallyHidden",componentId:"sc-1vw3ll6-0"})(["position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;clip:rect(0 0 0 0);overflow:hidden;"]);e.Z=r},4358:function(t,e,n){"use strict";function r(t){document.title=t}n.d(e,{Z:function(){return r}})},1530:function(t,e,n){"use strict";var r=n(8710).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},7007:function(t,e,n){"use strict";n(4916);var r=n(1320),i=n(7293),o=n(5112),a=n(2261),l=n(8880),c=o("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),d=o("replace"),f=!!/./[d]&&""===/./[d]("a","$0"),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var v=o(t),h=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=h&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[c]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!g||"replace"===t&&(!u||!s||f)||"split"===t&&!p){var x=/./[v],m=n(v,""[t],(function(t,e,n,r,i){return e.exec===a?h&&!i?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),y=m[0],b=m[1];r(String.prototype,t,y),r(RegExp.prototype,v,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}d&&l(RegExp.prototype[v],"sham",!0)}},647:function(t,e,n){var r=n(7908),i=Math.floor,o="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,u,s){var d=n+t.length,f=c.length,p=l;return void 0!==u&&(u=r(u),p=a),o.call(s,p,(function(r,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":a=u[o.slice(1,-1)];break;default:var l=+o;if(0===l)return r;if(l>f){var s=i(l/10);return 0===s?r:s<=f?void 0===c[s-1]?o.charAt(1):c[s-1]+o.charAt(1):r}a=c[l-1]}return void 0===a?"":a}))}},7651:function(t,e,n){var r=n(4326),i=n(2261);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},2261:function(t,e,n){"use strict";var r,i,o=n(7066),a=n(2999),l=n(2309),c=RegExp.prototype.exec,u=l("native-string-replace",String.prototype.replace),s=c,d=(r=/a/,i=/b*/g,c.call(r,"a"),c.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),f=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(d||p||f)&&(s=function(t){var e,n,r,i,a=this,l=f&&a.sticky,s=o.call(a),v=a.source,h=0,g=t;return l&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),g=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",s)),p&&(n=new RegExp("^"+v+"$(?!\\s)",s)),d&&(e=a.lastIndex),r=c.call(l?n:a,g),l?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:d&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),p&&r&&r.length>1&&u.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=s},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:function(t,e,n){"use strict";var r=n(7293);function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},9826:function(t,e,n){"use strict";var r=n(2109),i=n(2092).find,o=n(1223),a="find",l=!0;a in[]&&Array(1).find((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},9600:function(t,e,n){"use strict";var r=n(2109),i=n(8361),o=n(5656),a=n(9341),l=[].join,c=i!=Object,u=a("join",",");r({target:"Array",proto:!0,forced:c||!u},{join:function(t){return l.call(o(this),void 0===t?",":t)}})},4916:function(t,e,n){"use strict";var r=n(2109),i=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},4723:function(t,e,n){"use strict";var r=n(7007),i=n(9670),o=n(7466),a=n(4488),l=n(1530),c=n(7651);r("match",1,(function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=i(t),u=String(this);if(!a.global)return c(a,u);var s=a.unicode;a.lastIndex=0;for(var d,f=[],p=0;null!==(d=c(a,u));){var v=String(d[0]);f[p]=v,""===v&&(a.lastIndex=l(u,o(a.lastIndex),s)),p++}return 0===p?null:f}]}))},5306:function(t,e,n){"use strict";var r=n(7007),i=n(9670),o=n(7466),a=n(9958),l=n(4488),c=n(1530),u=n(647),s=n(7651),d=Math.max,f=Math.min;r("replace",2,(function(t,e,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,h=p?"$":"$0";return[function(n,r){var i=l(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!p&&v||"string"==typeof r&&-1===r.indexOf(h)){var l=n(e,t,this,r);if(l.done)return l.value}var g=i(t),x=String(this),m="function"==typeof r;m||(r=String(r));var y=g.global;if(y){var b=g.unicode;g.lastIndex=0}for(var E=[];;){var w=s(g,x);if(null===w)break;if(E.push(w),!y)break;""===String(w[0])&&(g.lastIndex=c(x,o(g.lastIndex),b))}for(var _,I="",S=0,T=0;T<E.length;T++){w=E[T];for(var R=String(w[0]),A=d(f(a(w.index),x.length),0),k=[],C=1;C<w.length;C++)k.push(void 0===(_=w[C])?_:String(_));var P=w.groups;if(m){var j=[R].concat(k,A,x);void 0!==P&&j.push(P);var N=String(r.apply(void 0,j))}else N=u(R,x,A,k,P,r);A>=S&&(I+=x.slice(S,A)+N,S=A+R.length)}return I+x.slice(S)}]}))}}]);