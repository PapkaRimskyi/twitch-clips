(self.webpackChunktwitch_clips=self.webpackChunktwitch_clips||[]).push([[176],{1530:function(t,n,e){"use strict";var r=e(8710).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},4964:function(t,n,e){var r=e(5112)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(t){}}return!1}},7007:function(t,n,e){"use strict";e(4916);var r=e(1320),c=e(7293),i=e(5112),a=e(2261),o=e(8880),u=i("species"),l=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),v=!c((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,f){var d=i(t),g=!c((function(){var n={};return n[d]=function(){return 7},7!=""[t](n)})),h=g&&!c((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[u]=function(){return e},e.flags="",e[d]=/./[d]),e.exec=function(){return n=!0,null},e[d](""),!n}));if(!g||!h||"replace"===t&&(!l||!s||p)||"split"===t&&!v){var x=/./[d],E=e(d,""[t],(function(t,n,e,r,c){return n.exec===a?g&&!c?{done:!0,value:x.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=E[0],R=E[1];r(String.prototype,t,y),r(RegExp.prototype,d,2==n?function(t,n){return R.call(t,this,n)}:function(t){return R.call(t,this)})}f&&o(RegExp.prototype[d],"sham",!0)}},7065:function(t,n,e){"use strict";var r=e(3099),c=e(111),i=[].slice,a={},o=function(t,n,e){if(!(n in a)){for(var r=[],c=0;c<n;c++)r[c]="a["+c+"]";a[n]=Function("C,a","return new C("+r.join(",")+")")}return a[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=i.call(arguments,1),a=function(){var r=e.concat(i.call(arguments));return this instanceof a?o(n,r.length,r):n.apply(t,r)};return c(n.prototype)&&(a.prototype=n.prototype),a}},647:function(t,n,e){var r=e(7908),c=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,n,e,u,l,s){var f=e+t.length,p=u.length,v=o;return void 0!==l&&(l=r(l),v=a),i.call(s,v,(function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,e);case"'":return n.slice(f);case"<":a=l[i.slice(1,-1)];break;default:var o=+i;if(0===o)return r;if(o>p){var s=c(o/10);return 0===s?r:s<=p?void 0===u[s-1]?i.charAt(1):u[s-1]+i.charAt(1):r}a=u[o-1]}return void 0===a?"":a}))}},7850:function(t,n,e){var r=e(111),c=e(4326),i=e(5112)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==c(t))}},3929:function(t,n,e){var r=e(7850);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},7651:function(t,n,e){var r=e(4326),c=e(2261);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(t,n)}},2261:function(t,n,e){"use strict";var r,c,i=e(7066),a=e(2999),o=e(2309),u=RegExp.prototype.exec,l=o("native-string-replace",String.prototype.replace),s=u,f=(r=/a/,c=/b*/g,u.call(r,"a"),u.call(c,"a"),0!==r.lastIndex||0!==c.lastIndex),p=a.UNSUPPORTED_Y||a.BROKEN_CARET,v=void 0!==/()??/.exec("")[1];(f||v||p)&&(s=function(t){var n,e,r,c,a=this,o=p&&a.sticky,s=i.call(a),d=a.source,g=0,h=t;return o&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),h=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(d="(?: "+d+")",h=" "+h,g++),e=new RegExp("^(?:"+d+")",s)),v&&(e=new RegExp("^"+d+"$(?!\\s)",s)),f&&(n=a.lastIndex),r=u.call(o?e:a,h),o?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:f&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),v&&r&&r.length>1&&l.call(r[0],e,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),t.exports=s},7066:function(t,n,e){"use strict";var r=e(9670);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},2999:function(t,n,e){"use strict";var r=e(7293);function c(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=c("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=c("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},9826:function(t,n,e){"use strict";var r=e(2109),c=e(2092).find,i=e(1223),a="find",o=!0;a in[]&&Array(1).find((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},6699:function(t,n,e){"use strict";var r=e(2109),c=e(1318).includes,i=e(1223);r({target:"Array",proto:!0},{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},489:function(t,n,e){var r=e(2109),c=e(7293),i=e(7908),a=e(9518),o=e(8544);r({target:"Object",stat:!0,forced:c((function(){a(1)})),sham:!o},{getPrototypeOf:function(t){return a(i(t))}})},2419:function(t,n,e){var r=e(2109),c=e(5005),i=e(3099),a=e(9670),o=e(111),u=e(30),l=e(7065),s=e(7293),f=c("Reflect","construct"),p=s((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),v=!s((function(){f((function(){}))})),d=p||v;r({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(t,n){i(t),a(n);var e=arguments.length<3?t:i(arguments[2]);if(v&&!p)return f(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(l.apply(t,r))}var c=e.prototype,s=u(o(c)?c:Object.prototype),d=Function.apply.call(t,s,n);return o(d)?d:s}})},4916:function(t,n,e){"use strict";var r=e(2109),c=e(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},2023:function(t,n,e){"use strict";var r=e(2109),c=e(3929),i=e(4488);r({target:"String",proto:!0,forced:!e(4964)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(c(t),arguments.length>1?arguments[1]:void 0)}})},5306:function(t,n,e){"use strict";var r=e(7007),c=e(9670),i=e(7466),a=e(9958),o=e(4488),u=e(1530),l=e(647),s=e(7651),f=Math.max,p=Math.min;r("replace",2,(function(t,n,e,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,d=r.REPLACE_KEEPS_$0,g=v?"$":"$0";return[function(e,r){var c=o(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,c,r):n.call(String(c),e,r)},function(t,r){if(!v&&d||"string"==typeof r&&-1===r.indexOf(g)){var o=e(n,t,this,r);if(o.done)return o.value}var h=c(t),x=String(this),E="function"==typeof r;E||(r=String(r));var y=h.global;if(y){var R=h.unicode;h.lastIndex=0}for(var S=[];;){var I=s(h,x);if(null===I)break;if(S.push(I),!y)break;""===String(I[0])&&(h.lastIndex=u(x,i(h.lastIndex),R))}for(var b,w="",_=0,A=0;A<S.length;A++){I=S[A];for(var T=String(I[0]),m=f(p(a(I.index),x.length),0),P=[],$=1;$<I.length;$++)P.push(void 0===(b=I[$])?b:String(b));var C=I.groups;if(E){var U=[T].concat(P,m,x);void 0!==C&&U.push(C);var O=String(r.apply(void 0,U))}else O=l(T,x,m,P,C,r);m>=_&&(w+=x.slice(_,m)+O,_=m+T.length)}return w+x.slice(_)}]}))}}]);