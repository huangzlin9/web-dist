!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=c(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var p={};function d(){}function h(){}function m(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(E([])));v&&v!==n&&o.call(v,i)&&(y=v);var b=m.prototype=d.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(a,i,c,u){var s=l(e[a],e,i);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"==t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(p).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=m,s(b,"constructor",m),s(m,"constructor",h),h.displayName=s(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),s(b,u,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}function a(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.2d1ac336.js","./useTitle-legacy.896e4eaa.js","./index-legacy.90a21d21.js"],(function(t){"use strict";var n,c,u,s,f,l,p,d,h,m,y,g,v,b,w,x,k,_,S;return{setters:[function(t){n=t.m,c=t.a,u=t.a$,s=t.bg,f=t.h,l=t.al,p=t.C,d=t.bH,h=t.bV,m=t.bu,y=t.bG,g=t.I,v=t.a8,b=t.H,w=t.a7,x=t.cp,k=t.n},function(t){_=t.b},function(t){S=t.c}],execute:function(){var L={success:{icon:"✅",color:"$success9"},error:{icon:"❌",color:"$danger9"},info:{icon:"ℹ️",color:"$info9"}},E=function(t){return f(l,{w:"$full",spacing:"$1",get children(){return[f(w,{get children(){return L[t.type].icon}}),f(w,{get color(){return L[t.type].color},get children(){return t.msg}})]}})};t("default",(function(){var t,w=i(n(!1),2),L=w[0],O=w[1],$=i(n(""),2),A=$[0],I=$[1],T=c();_("manage.sidemenu.backup-restore");var N=i(n([]),2),G=N[0],U=N[1],P=function(e,r){U((function(t){return[].concat(a(t),[{type:r,msg:e}])})),t.scrollTop=t.scrollHeight},Y=i(u((function(){return s.get("/admin/setting/list")})),2),F=Y[0],C=Y[1],R=i(u((function(){return s.get("/admin/user/list")})),2),B=R[0],J=R[1],H=i(u((function(){return s.get("/admin/meta/list")})),2),D=H[0],M=H[1],V=i(u((function(){return s.get("/admin/storage/list")})),2),q=V[0],z=V[1];function K(t,e){if(""==e)return t;var r=S.AES.encrypt(JSON.stringify(t),e).toString();return S.enc.Base64.stringify(S.enc.Utf8.parse(r))}function Q(t,e,r,n){if(!n)return t;var o=S.enc.Base64.parse(t).toString(S.enc.Utf8);return r?S.AES.decrypt(o,e).toString(S.enc.Utf8):JSON.parse(S.AES.decrypt(o,e).toString(S.enc.Utf8))}var W=function(){var t=o(r().mark((function t(){var e,n,o,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(T("br.start_backup"),"info"),e={encrypted:"",settings:[],users:[],storages:[],metas:[]},""!=A()&&(e.encrypted=K("encrypted",A())),n=r().mark((function t(){var n,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a[o],t.next=3,n.fn();case 3:i=t.sent,x(i,(function(t){if(P(T("br.success_backup_item",{item:T("manage.sidemenu.".concat(n.name))}),"success"),n.page){for(var r=0;r<t.content.length;r++){var o=t.content[r];for(var a in o)o[a]=K(o[a],A())}e[n.name]=t.content}else{for(var i=0;i<t.length;i++){var c=t[i];for(var u in c)c[u]=K(c[u],A())}e[n.name]=t}}),(function(t){P(T("br.failed_backup_item",{item:T("manage.sidemenu.".concat(n.name))})+":"+t,"error")}));case 5:case"end":return t.stop()}}),t)})),o=0,a=[{name:"settings",fn:C,page:!1},{name:"users",fn:J,page:!0},{name:"storages",fn:z,page:!0},{name:"metas",fn:M,page:!0}];case 5:if(!(o<a.length)){t.next=10;break}return t.delegateYield(n(),"t0",7);case 7:o++,t.next=5;break;case 10:j("alist_backup_"+(new Date).toLocaleString()+".json",e),P(T("br.finish_backup"),"info");case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=i(u((function(t){return s.post("/admin/setting/save",t)})),2),Z=X[0],tt=X[1],et=i(u((function(t){return s.post("/admin/user/create",t)})),2),rt=et[0],nt=et[1],ot=i(u((function(t){return s.post("/admin/storage/create",t)})),2),at=ot[0],it=ot[1],ct=i(u((function(t){return s.post("/admin/meta/create",t)})),2),ut=ct[0],st=ct[1],ft=i(u((function(t){return s.post("/admin/user/update",t)})),2),lt=ft[0],pt=ft[1],dt=i(u((function(t){return s.post("/admin/storage/update",t)})),2),ht=dt[0],mt=dt[1],yt=i(u((function(t){return s.post("/admin/meta/update",t)})),2),gt=yt[0],vt=yt[1];function bt(t,e,r,n,o,a){return wt.apply(this,arguments)}function wt(){return(wt=o(r().mark((function t(e,n,o,a,i,c){var u,s,f;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:u=t.sent.data.content,s=r().mark((function t(n){var s,f,l,p;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e[n],f=s[i],l=u.find((function(t){return t[i]===f})),p="add"===(l?"update":"add")?o:a,t.t0=x,t.next=8,p(s);case 8:return t.t1=t.sent,t.t2=function(){P(T("br.success_restore_item",{item:T(c)})+"-"+"[".concat(f,"]"),"success")},t.t3=function(t){P(T("br.failed_restore_item",{item:T(c)})+"-"+"[".concat(f,"]")+":"+t,"error")},t.next=13,(0,t.t0)(t.t1,t.t2,t.t3);case 13:case"end":return t.stop()}}),t)})),t.t0=r().keys(e);case 5:if((t.t1=t.t0()).done){t.next=10;break}return f=t.t1.value,t.delegateYield(s(f),"t2",8);case 8:t.next=5;break;case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var xt=function(){var t=o(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(T("br.start_restore"),"info"),(n=document.createElement("input")).type="file",n.accept="application/json",n.onchange=function(){var t=o(r().mark((function t(n){var a,i,c;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((a=n.target.files)&&0!==a.length){t.next=4;break}return k.warning(T("br.no_file")),t.abrupt("return");case 4:i=a[0],(c=new FileReader).onload=o(r().mark((function t(){var n,o,a,i,u,s,f,l,p,d,h;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=JSON.parse(c.result),!(o=Boolean(n.encrypted))){t.next=6;break}if('"encrypted"'===Q(n.encrypted,A(),!0,!0)){t.next=6;break}return P(T("br.wrong_encrypt_password"),"error"),t.abrupt("return");case 6:for(a=Object.values(n),i=a.length-4;i<a.length;i++)for(u=a[i],console.log(u),s=0;s<u.length;s++)for(l in f=u[s])f[l]=Q(f[l],A(),!1,o);if(!L()){t.next=11;break}return t.next=11,W();case 11:if(t.t0=n.settings,!t.t0){t.next=20;break}return t.t1=x,t.next=16,tt(n.settings.filter((function(t){return!["version","index_progress"].includes(t.key)})));case 16:t.t2=t.sent,t.t3=function(){P(T("br.success_restore_item",{item:T("manage.sidemenu.settings")}),"success")},t.t4=function(t){P(T("br.failed_restore_item",{item:T("manage.sidemenu.settings")})+":"+t,"error")},(0,t.t1)(t.t2,t.t3,t.t4);case 20:if(!L()){t.next=29;break}return t.next=23,bt(n.users,J,nt,pt,"username","manage.sidemenu.users");case 23:return t.next=25,bt(n.storages,z,it,mt,"mount_path","manage.sidemenu.storages");case 25:return t.next=27,bt(n.metas,M,st,vt,"path","manage.sidemenu.metas");case 27:t.next=36;break;case 29:p=r().mark((function t(){var n,o,a,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=h[d],o=e(n.data||[]),t.prev=2,i=r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=a.value).id=0,t.t0=x,t.next=5,n.fn(e);case 5:t.t1=t.sent,t.t2=function(){P(T("br.success_restore_item",{item:T("manage.sidemenu.".concat(n.name))})+"-"+"[".concat(e[n.key],"]"),"success")},t.t3=function(t){P(T("br.failed_restore_item",{item:T("manage.sidemenu.".concat(n.name))})+" [ ".concat(e[n.key]," ] ")+":"+t,"error")},(0,t.t0)(t.t1,t.t2,t.t3);case 9:case"end":return t.stop()}}),t)})),o.s();case 5:if((a=o.n()).done){t.next=9;break}return t.delegateYield(i(),"t0",7);case 7:t.next=5;break;case 9:t.next=14;break;case 11:t.prev=11,t.t1=t.catch(2),o.e(t.t1);case 14:return t.prev=14,o.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[2,11,14,17]])})),d=0,h=[{name:"users",fn:nt,data:n.users,key:"username"},{name:"storages",fn:it,data:n.storages,key:"mount_path"},{name:"metas",fn:st,data:n.metas,key:"path"}];case 31:if(!(d<h.length)){t.next=36;break}return t.delegateYield(p(),"t5",33);case 33:d++,t.next=31;break;case 36:P(T("br.finish_restore"),"info");case 37:case"end":return t.stop()}}),t)}))),c.readAsText(i);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.click();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return f(v,{spacing:"$2",w:"$full",get children(){return[f(l,{spacing:"$2",w:"$full",get children(){return[f(p,{get loading(){return F()||B()||D()||q()},onClick:function(){W()},colorScheme:"accent",get children(){return T("br.backup")}}),f(p,{get loading(){return Z()||rt()||at()||ut()||lt()||ht()||gt()},onClick:function(){xt()},get children(){return T("br.restore")}})]}}),f(d,{w:"$full",display:"flex",flexDirection:"column",get children(){return f(h,{w:"$full",direction:"column",gap:"$1",get children(){return[f(m,{get children(){return T("br.override")}}),f(y,{id:"restore-override",get checked(){return L()},onChange:function(t){return O(t.currentTarget.checked)}}),f(m,{get children(){return T("br.encrypt_password")}}),f(g,{id:"password",type:"password",get placeholder(){return T("br.encrypt_password_placeholder")},onInput:function(t){return I(t.currentTarget.value)}})]}})}}),f(v,{p:"$2",ref:function(e){"function"==typeof t?t(e):t=e},w:"$full",alignItems:"start",rounded:"$md",h:"70vh",bg:"$neutral3",overflowY:"auto",spacing:"$1",get children(){return f(b,{get each(){return G()},children:function(t){return f(E,t)}})}})]}})}));function j(t,e){var r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=t,o.click(),URL.revokeObjectURL(n)}}}}))}();
