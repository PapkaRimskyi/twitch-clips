(self.webpackChunktwitch_clips=self.webpackChunktwitch_clips||[]).push([[893],{3893:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}}),t(4765),t(4916);var n=t(7294),a=t(5697),o=t.n(a),s=t(7563),i=t(6561);function c(){return n.createElement(i.Q,{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}))}var u=t(9163).ZP.button.withConfig({displayName:"styled-try-load-again__TryAgainButton",componentId:"in3yur-0"})(["margin-top:50px;padding:10px 15px;font-size:1.5rem;line-height:1.7rem;border:2px solid rgb(223,223,233);"]),l=t(4358);function p(e){var r=e.errCode,t=e.dataRequest,a=e.signal;function o(){switch(r){case"400":return"Wrong search query";case"404":return"Not found";default:return null}}return(0,n.useEffect)((function(){(0,l.Z)(o())}),[]),n.createElement(n.Fragment,null,n.createElement(c,null),function(){switch(r){case"400":case"404":return n.createElement(i.Dy,null,o());default:return n.createElement(u,{dataRequest:t,signal:a})}}())}p.propTypes={errCode:o().number,dataRequest:o().func.isRequired,signal:o().shape({aborted:o().bool,onabort:o().func}).isRequired},p.defaultProps={errCode:null};var f=t(2617);function d(e){var r=e.postData,t=e.dataRequest,a=e.signal;return n.createElement(i.W2,null,function(){switch(!0){case Boolean(r.requested):return n.createElement(f.Z,null);case Boolean(r.err):return n.createElement(p,{errCode:r.err,dataRequest:t,signal:a});default:return null}}())}d.propTypes={postData:o().shape({requested:o().bool.isRequired,data:o().objectOf(o().string),err:o().string}).isRequired,dataRequest:o().func.isRequired,signal:o().shape({aborted:o().bool,onabort:o().func}).isRequired};var g=t(8889),m=t(5941);function y(e){var r=e.location,t=e.videoList,a=e.dataRequest,o=e.favoriteList,i=e.addFavorite,c=e.resetData,u=(0,n.useMemo)((function(){return s.parse(r.search).channelName}),[s.parse(r.search).channelName]),p=new AbortController;return(0,n.useEffect)((function(){return a(u,p.signal),(0,l.Z)("".concat(u," videos")),function(){p.abort(),c()}}),[u]),n.createElement("section",null,n.createElement(m.Z,null,"User videos"),t.requested||t.err?n.createElement(d,{postData:t,dataRequest:a,signal:p.signal}):n.createElement(g.Z,{postData:t.info?t.info.data:null,favoriteList:o,addFavorite:i}))}y.propTypes={location:o().objectOf(o().string).isRequired,videoList:o().shape({requested:o().bool.isRequired,info:o().shape({data:o().arrayOf(o().object),pagination:o().shape({cursor:o().string})}),err:o().string}).isRequired,dataRequest:o().func.isRequired,favoriteList:o().arrayOf(o().object).isRequired,addFavorite:o().func.isRequired,resetData:o().func.isRequired}},1150:function(e){e.exports=Object.is||function(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}},4765:function(e,r,t){"use strict";var n=t(7007),a=t(9670),o=t(4488),s=t(1150),i=t(7651);n("search",1,(function(e,r,t){return[function(r){var t=o(this),n=null==r?void 0:r[e];return void 0!==n?n.call(r,t):new RegExp(r)[e](String(t))},function(e){var n=t(r,e,this);if(n.done)return n.value;var o=a(e),c=String(this),u=o.lastIndex;s(u,0)||(o.lastIndex=0);var l=i(o,c);return s(o.lastIndex,u)||(o.lastIndex=u),null===l?-1:l.index}]}))},4020:function(e){"use strict";var r="%[a-f0-9]{2}",t=new RegExp(r,"gi"),n=new RegExp("("+r+")+","gi");function a(e,r){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],a(t),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var r=e.match(t),n=1;n<r.length;n++)r=(e=a(r,n).join("")).match(t);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},t=n.exec(e);t;){try{r[t[0]]=decodeURIComponent(t[0])}catch(e){var a=o(t[0]);a!==t[0]&&(r[t[0]]=a)}t=n.exec(e)}r["%C2"]="�";for(var s=Object.keys(r),i=0;i<s.length;i++){var c=s[i];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},2806:function(e){"use strict";e.exports=function(e,r){for(var t={},n=Object.keys(e),a=Array.isArray(r),o=0;o<n.length;o++){var s=n[o],i=e[s];(a?-1!==r.indexOf(s):r(s,i,e))&&(t[s]=i)}return t}},7563:function(e,r,t){"use strict";const n=t(610),a=t(4020),o=t(500),s=t(2806);function i(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,r){return r.encode?r.strict?n(e):encodeURIComponent(e):e}function u(e,r){return r.decode?a(e):e}function l(e){return Array.isArray(e)?e.sort():"object"==typeof e?l(Object.keys(e)).sort(((e,r)=>Number(e)-Number(r))).map((r=>e[r])):e}function p(e){const r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function f(e){const r=(e=p(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function d(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,r){i((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);const t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,n)=>{r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return(e,t,n)=>{r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return(r,t,n)=>{const a="string"==typeof t&&t.includes(e.arrayFormatSeparator),o="string"==typeof t&&!a&&u(t,e).includes(e.arrayFormatSeparator);t=o?u(t,e):t;const s=a||o?t.split(e.arrayFormatSeparator).map((r=>u(r,e))):null===t?t:u(t,e);n[r]=s};case"bracket-separator":return(r,t,n)=>{const a=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),!a)return void(n[r]=t?u(t,e):t);const o=null===t?[]:t.split(e.arrayFormatSeparator).map((r=>u(r,e)));void 0!==n[r]?n[r]=[].concat(n[r],o):n[r]=o};default:return(e,r,t)=>{void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){if(""===a)continue;let[e,s]=o(r.decode?a.replace(/\+/g," "):a,"=");s=void 0===s?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?s:u(s,r),t(u(e,r),s,n)}for(const e of Object.keys(n)){const t=n[e];if("object"==typeof t&&null!==t)for(const e of Object.keys(t))t[e]=d(t[e],r);else n[e]=d(t,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce(((e,r)=>{const t=n[r];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[r]=l(t):e[r]=t,e}),Object.create(null))}r.extract=f,r.parse=g,r.stringify=(e,r)=>{if(!e)return"";i((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);const t=t=>r.skipNull&&null==e[t]||r.skipEmptyString&&""===e[t],n=function(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const a=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[c(r,e),"[",a,"]"].join("")]:[...t,[c(r,e),"[",c(a,e),"]=",c(n,e)].join("")]};case"bracket":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[c(r,e),"[]"].join("")]:[...t,[c(r,e),"[]=",c(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(n,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[c(t,e),r,c(a,e)].join("")]:[[n,c(a,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,c(r,e)]:[...t,[c(r,e),"=",c(n,e)].join("")]}}(r),a={};for(const r of Object.keys(e))t(r)||(a[r]=e[r]);const o=Object.keys(a);return!1!==r.sort&&o.sort(r.sort),o.map((t=>{const a=e[t];return void 0===a?"":null===a?c(t,r):Array.isArray(a)?0===a.length&&"bracket-separator"===r.arrayFormat?c(t,r)+"[]":a.reduce(n(t),[]).join("&"):c(t,r)+"="+c(a,r)})).filter((e=>e.length>0)).join("&")},r.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);const[t,n]=o(e,"#");return Object.assign({url:t.split("?")[0]||"",query:g(f(e),r)},r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,r)}:{})},r.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0},t);const n=p(e.url).split("?")[0]||"",a=r.extract(e.url),o=r.parse(a,{sort:!1}),s=Object.assign(o,e.query);let i=r.stringify(s,t);i&&(i=`?${i}`);let u=function(e){let r="";const t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(u=`#${c(e.fragmentIdentifier,t)}`),`${n}${i}${u}`},r.pick=(e,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:a,query:o,fragmentIdentifier:i}=r.parseUrl(e,n);return r.stringifyUrl({url:a,query:s(o,t),fragmentIdentifier:i},n)},r.exclude=(e,t,n)=>{const a=Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r);return r.pick(e,a,n)}},500:function(e){"use strict";e.exports=(e,r)=>{if("string"!=typeof e||"string"!=typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];const t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);