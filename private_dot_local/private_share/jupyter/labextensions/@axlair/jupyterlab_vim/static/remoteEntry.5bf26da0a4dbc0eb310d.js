var _JUPYTERLAB;(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@axlair/jupyterlab_vim"]=(()=>{"use strict";var e,r,t,n,o,a,i,u,l,s,f,p,d,c,h,v={880:(e,r,t)=>{var n={"./index":()=>t.e(568).then((()=>()=>t(568))),"./extension":()=>t.e(568).then((()=>()=>t(568)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n=t.S.default,o="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>o,init:()=>a})}},m={};function b(e){if(m[e])return m[e].exports;var r=m[e]={exports:{}};return v[e](r,r.exports,b),r.exports}return b.m=v,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>e+".4884b48ac6888e264aed.js",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@axlair/jupyterlab_vim:",b.l=(t,n,o)=>{if(e[t])e[t].push(n);else{var a,i;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var s=u[l];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){a=s;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,b.nc&&a.setAttribute("nonce",b.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var f=(r,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),i&&document.head.appendChild(a)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var a=b.S[t],i="@axlair/jupyterlab_vim",u=[];switch(t){case"default":((e,r,t)=>{var n=a[e]=a[e]||{},o=n[r];(!o||!o.loaded&&i>o.from)&&(n[r]={get:()=>b.e(568).then((()=>()=>b(568))),from:i})})("@axlair/jupyterlab_vim","0.13.0")}return e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var r=b.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(u=e[a]))[0]?"-":(n>0?".":"")+(n=2,u);return r}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():o(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var s,f,p=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!l||("u"==p?u>n&&!o:""==p!=o);if("u"==f){if(!l||"u"!=p)return!1}else if(l)if(p==f)if(u<=n){if(s!=e[u])return!1}else{if(o?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=p&&"n"!=p){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||f<p!=o)return!1;l=!1}else"s"!=p&&"n"!=p&&(l=!1,u--)}}var d=[],c=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=b.S[e];if(!t||!b.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",s=(e,r,t,n)=>{var o=u(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(l(t,o,n)),f(e[t][o])},f=e=>(e.loaded=1,e.get()),p=(e=>function(r,t,n,o){var a=b.I(r);return a&&a.then?a.then(e.bind(e,r,b.S[r],t,n,o)):e(r,b.S[r],t,n)})(((e,r,t,n)=>(i(e,t),s(r,0,t,n)))),d={},c={253:()=>p("default","@jupyterlab/notebook",[1,3,0,0,,"rc",13]),208:()=>p("default","@jupyterlab/codemirror",[1,3,0,0,,"rc",13]),608:()=>p("default","@lumino/domutils",[1,1,2,3])},h={568:[253,208,608]},b.f.consumes=(e,r)=>{b.o(h,e)&&h[e].forEach((e=>{if(b.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,v[e]=t=>{delete m[e],t.exports=r()}},n=r=>{delete d[e],v[e]=t=>{throw delete m[e],r}};try{var o=c[e]();o.then?r.push(d[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={874:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>{n=e[r]=[t,o]}));t.push(n[2]=o);var a=b.p+b.u(r),i=new Error;b.l(a,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r)}};var r=(r,t)=>{for(var n,o,[a,i,u]=t,l=0,s=[];l<a.length;l++)o=a[l],b.o(e,o)&&e[o]&&s.push(e[o][0]),e[o]=0;for(n in i)b.o(i,n)&&(b.m[n]=i[n]);for(u&&u(b),r&&r(t);s.length;)s.shift()()},t=self.webpackChunk_axlair_jupyterlab_vim=self.webpackChunk_axlair_jupyterlab_vim||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),b(880)})();