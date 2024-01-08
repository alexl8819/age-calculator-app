function Pt(t,e){for(var r=0;r<e.length;r++){const a=e[r];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in t)){const o=Object.getOwnPropertyDescriptor(a,n);o&&Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();function et(){}function jt(t){return t()}function Ft(){return Object.create(null)}function dt(t){t.forEach(jt)}function It(t){return typeof t=="function"}function Et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ht;function Gt(t,e){return ht||(ht=document.createElement("a")),ht.href=e,t===ht.href}function Jt(t){return Object.keys(t).length===0}function nt(t){return t??""}function v(t,e){t.appendChild(e)}function Yt(t,e,r){t.insertBefore(e,r||null)}function mt(t){t.parentNode&&t.parentNode.removeChild(t)}function N(t){return document.createElement(t)}function tt(t){return document.createTextNode(t)}function B(){return tt(" ")}function R(t,e,r,a){return t.addEventListener(e,r,a),()=>t.removeEventListener(e,r,a)}function Rt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function at(t){return t===""?null:+t}function Kt(t){return Array.from(t.childNodes)}function ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function rt(t,e){t.value=e??""}function Xt(t,e,{bubbles:r=!1,cancelable:a=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,r,a,e),n}let ct;function ut(t){ct=t}function Ht(){if(!ct)throw new Error("Function called outside component initialization");return ct}function Qt(t){Ht().$$.after_update.push(t)}function xt(){const t=Ht();return(e,r,{cancelable:a=!1}={})=>{const n=t.$$.callbacks[e];if(n){const o=Xt(e,r,{cancelable:a});return n.slice().forEach(h=>{h.call(t,o)}),!o.defaultPrevented}return!0}}const it=[],ft=[];let lt=[];const kt=[],te=Promise.resolve();let Mt=!1;function ee(){Mt||(Mt=!0,te.then(Ut))}function Dt(t){lt.push(t)}const vt=new Set;let st=0;function Ut(){if(st!==0)return;const t=ct;do{try{for(;st<it.length;){const e=it[st];st++,ut(e),ne(e.$$)}}catch(e){throw it.length=0,st=0,e}for(ut(null),it.length=0,st=0;ft.length;)ft.pop()();for(let e=0;e<lt.length;e+=1){const r=lt[e];vt.has(r)||(vt.add(r),r())}lt.length=0}while(it.length);for(;kt.length;)kt.pop()();Mt=!1,vt.clear(),ut(t)}function ne(t){if(t.fragment!==null){t.update(),dt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Dt)}}function re(t){const e=[],r=[];lt.forEach(a=>t.indexOf(a)===-1?e.push(a):r.push(a)),r.forEach(a=>a()),lt=e}const pt=new Set;let se;function $t(t,e){t&&t.i&&(pt.delete(t),t.i(e))}function Tt(t,e,r,a){if(t&&t.o){if(pt.has(t))return;pt.add(t),se.c.push(()=>{pt.delete(t),a&&(r&&t.d(1),a())}),t.o(e)}else a&&a()}function Lt(t){t&&t.c()}function bt(t,e,r,a){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,r),a||Dt(()=>{const h=t.$$.on_mount.map(jt).filter(It);t.$$.on_destroy?t.$$.on_destroy.push(...h):dt(h),t.$$.on_mount=[]}),o.forEach(Dt)}function St(t,e){const r=t.$$;r.fragment!==null&&(re(r.after_update),dt(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ie(t,e){t.$$.dirty[0]===-1&&(it.push(t),ee(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ot(t,e,r,a,n,o,h,g=[-1]){const $=ct;ut(t);const l=t.$$={fragment:null,ctx:[],props:o,update:et,not_equal:n,bound:Ft(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||($?$.$$.context:[])),callbacks:Ft(),dirty:g,skip_bound:!1,root:e.target||$.$$.root};h&&h(l.root);let w=!1;if(l.ctx=r?r(t,e.props||{},(M,I,...T)=>{const k=T.length?T[0]:I;return l.ctx&&n(l.ctx[M],l.ctx[M]=k)&&(!l.skip_bound&&l.bound[M]&&l.bound[M](k),w&&ie(t,M)),I}):[],l.update(),w=!0,dt(l.before_update),l.fragment=a?a(l.ctx):!1,e.target){if(e.hydrate){const M=Kt(e.target);l.fragment&&l.fragment.l(M),M.forEach(mt)}else l.fragment&&l.fragment.c();e.intro&&$t(t.$$.fragment),bt(t,e.target,e.anchor,e.customElement),Ut()}ut($)}class Ct{$destroy(){St(this,1),this.$destroy=et}$on(e,r){if(!It(r))return et;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(r),()=>{const n=a.indexOf(r);n!==-1&&a.splice(n,1)}}$set(e){this.$$set&&!Jt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zt={exports:{}};(function(t,e){(function(r,a){t.exports=a()})(qt,function(){var r=1e3,a=6e4,n=36e5,o="millisecond",h="second",g="minute",$="hour",l="day",w="week",M="month",I="quarter",T="year",k="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,A=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(f){var s=["th","st","nd","rd"],i=f%100;return"["+f+(s[(i-20)%10]||s[i]||s[0])+"]"}},C=function(f,s,i){var y=String(f);return!y||y.length>=s?f:""+Array(s+1-y.length).join(i)+f},D={s:C,z:function(f){var s=-f.utcOffset(),i=Math.abs(s),y=Math.floor(i/60),u=i%60;return(s<=0?"+":"-")+C(y,2,"0")+":"+C(u,2,"0")},m:function f(s,i){if(s.date()<i.date())return-f(i,s);var y=12*(i.year()-s.year())+(i.month()-s.month()),u=s.clone().add(y,M),_=i-u<0,p=s.clone().add(y+(_?-1:1),M);return+(-(y+(i-u)/(_?u-p:p-u))||0)},a:function(f){return f<0?Math.ceil(f)||0:Math.floor(f)},p:function(f){return{M,y:T,w,d:l,D:k,h:$,m:g,s:h,ms:o,Q:I}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(f){return f===void 0}},L="en",q={};q[L]=O;var H=function(f){return f instanceof F},z=function f(s,i,y){var u;if(!s)return L;if(typeof s=="string"){var _=s.toLowerCase();q[_]&&(u=_),i&&(q[_]=i,u=_);var p=s.split("-");if(!u&&p.length>1)return f(p[0])}else{var S=s.name;q[S]=s,u=S}return!y&&u&&(L=u),u||!y&&L},Y=function(f,s){if(H(f))return f.clone();var i=typeof s=="object"?s:{};return i.date=f,i.args=arguments,new F(i)},b=D;b.l=z,b.i=H,b.w=function(f,s){return Y(f,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var F=function(){function f(i){this.$L=z(i.locale,null,!0),this.parse(i)}var s=f.prototype;return s.parse=function(i){this.$d=function(y){var u=y.date,_=y.utc;if(u===null)return new Date(NaN);if(b.u(u))return new Date;if(u instanceof Date)return new Date(u);if(typeof u=="string"&&!/Z$/i.test(u)){var p=u.match(d);if(p){var S=p[2]-1||0,P=(p[7]||"0").substring(0,3);return _?new Date(Date.UTC(p[1],S,p[3]||1,p[4]||0,p[5]||0,p[6]||0,P)):new Date(p[1],S,p[3]||1,p[4]||0,p[5]||0,p[6]||0,P)}}return new Date(u)}(i),this.$x=i.x||{},this.init()},s.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},s.$utils=function(){return b},s.isValid=function(){return this.$d.toString()!==c},s.isSame=function(i,y){var u=Y(i);return this.startOf(y)<=u&&u<=this.endOf(y)},s.isAfter=function(i,y){return Y(i)<this.startOf(y)},s.isBefore=function(i,y){return this.endOf(y)<Y(i)},s.$g=function(i,y,u){return b.u(i)?this[y]:this.set(u,i)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(i,y){var u=this,_=!!b.u(y)||y,p=b.p(i),S=function(J,W){var G=b.w(u.$u?Date.UTC(u.$y,W,J):new Date(u.$y,W,J),u);return _?G:G.endOf(l)},P=function(J,W){return b.w(u.toDate()[J].apply(u.toDate("s"),(_?[0,0,0,0]:[23,59,59,999]).slice(W)),u)},j=this.$W,Z=this.$M,V=this.$D,U="set"+(this.$u?"UTC":"");switch(p){case T:return _?S(1,0):S(31,11);case M:return _?S(1,Z):S(0,Z+1);case w:var x=this.$locale().weekStart||0,K=(j<x?j+7:j)-x;return S(_?V-K:V+(6-K),Z);case l:case k:return P(U+"Hours",0);case $:return P(U+"Minutes",1);case g:return P(U+"Seconds",2);case h:return P(U+"Milliseconds",3);default:return this.clone()}},s.endOf=function(i){return this.startOf(i,!1)},s.$set=function(i,y){var u,_=b.p(i),p="set"+(this.$u?"UTC":""),S=(u={},u[l]=p+"Date",u[k]=p+"Date",u[M]=p+"Month",u[T]=p+"FullYear",u[$]=p+"Hours",u[g]=p+"Minutes",u[h]=p+"Seconds",u[o]=p+"Milliseconds",u)[_],P=_===l?this.$D+(y-this.$W):y;if(_===M||_===T){var j=this.clone().set(k,1);j.$d[S](P),j.init(),this.$d=j.set(k,Math.min(this.$D,j.daysInMonth())).$d}else S&&this.$d[S](P);return this.init(),this},s.set=function(i,y){return this.clone().$set(i,y)},s.get=function(i){return this[b.p(i)]()},s.add=function(i,y){var u,_=this;i=Number(i);var p=b.p(y),S=function(Z){var V=Y(_);return b.w(V.date(V.date()+Math.round(Z*i)),_)};if(p===M)return this.set(M,this.$M+i);if(p===T)return this.set(T,this.$y+i);if(p===l)return S(1);if(p===w)return S(7);var P=(u={},u[g]=a,u[$]=n,u[h]=r,u)[p]||1,j=this.$d.getTime()+i*P;return b.w(j,this)},s.subtract=function(i,y){return this.add(-1*i,y)},s.format=function(i){var y=this,u=this.$locale();if(!this.isValid())return u.invalidDate||c;var _=i||"YYYY-MM-DDTHH:mm:ssZ",p=b.z(this),S=this.$H,P=this.$m,j=this.$M,Z=u.weekdays,V=u.months,U=function(W,G,X,Q){return W&&(W[G]||W(y,_))||X[G].slice(0,Q)},x=function(W){return b.s(S%12||12,W,"0")},K=u.meridiem||function(W,G,X){var Q=W<12?"AM":"PM";return X?Q.toLowerCase():Q},J={YY:String(this.$y).slice(-2),YYYY:this.$y,M:j+1,MM:b.s(j+1,2,"0"),MMM:U(u.monthsShort,j,V,3),MMMM:U(V,j),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:U(u.weekdaysMin,this.$W,Z,2),ddd:U(u.weekdaysShort,this.$W,Z,3),dddd:Z[this.$W],H:String(S),HH:b.s(S,2,"0"),h:x(1),hh:x(2),a:K(S,P,!0),A:K(S,P,!1),m:String(P),mm:b.s(P,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:p};return _.replace(A,function(W,G){return G||J[W]||p.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(i,y,u){var _,p=b.p(y),S=Y(i),P=(S.utcOffset()-this.utcOffset())*a,j=this-S,Z=b.m(this,S);return Z=(_={},_[T]=Z/12,_[M]=Z,_[I]=Z/3,_[w]=(j-P)/6048e5,_[l]=(j-P)/864e5,_[$]=j/n,_[g]=j/a,_[h]=j/r,_)[p]||j,u?Z:b.a(Z)},s.daysInMonth=function(){return this.endOf(M).$D},s.$locale=function(){return q[this.$L]},s.locale=function(i,y){if(!i)return this.$L;var u=this.clone(),_=z(i,y,!0);return _&&(u.$L=_),u},s.clone=function(){return b.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},f}(),E=F.prototype;return Y.prototype=E,[["$ms",o],["$s",h],["$m",g],["$H",$],["$W",l],["$M",M],["$y",T],["$D",k]].forEach(function(f){E[f[1]]=function(s){return this.$g(s,f[0],f[1])}}),Y.extend=function(f,s){return f.$i||(f(s,F,Y),f.$i=!0),Y},Y.locale=z,Y.isDayjs=H,Y.unix=function(f){return Y(1e3*f)},Y.en=q[L],Y.Ls=q,Y.p={},Y})})(zt);var At=zt.exports;const ae=Zt(At),Nt=Pt({__proto__:null,default:ae},[At]);var Wt={exports:{}};(function(t,e){(function(r,a){t.exports=a()})(qt,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,o=/\d\d?/,h=/\d*[^-_:/,()\s\d]+/,g={},$=function(c){return(c=+c)+(c>68?1900:2e3)},l=function(c){return function(d){this[c]=+d}},w=[/[+-]\d\d:?(\d\d)?|Z/,function(c){(this.zone||(this.zone={})).offset=function(d){if(!d||d==="Z")return 0;var A=d.match(/([+-]|\d\d)/g),O=60*A[1]+(+A[2]||0);return O===0?0:A[0]==="+"?-O:O}(c)}],M=function(c){var d=g[c];return d&&(d.indexOf?d:d.s.concat(d.f))},I=function(c,d){var A,O=g.meridiem;if(O){for(var C=1;C<=24;C+=1)if(c.indexOf(O(C,0,d))>-1){A=C>12;break}}else A=c===(d?"pm":"PM");return A},T={A:[h,function(c){this.afternoon=I(c,!1)}],a:[h,function(c){this.afternoon=I(c,!0)}],S:[/\d/,function(c){this.milliseconds=100*+c}],SS:[n,function(c){this.milliseconds=10*+c}],SSS:[/\d{3}/,function(c){this.milliseconds=+c}],s:[o,l("seconds")],ss:[o,l("seconds")],m:[o,l("minutes")],mm:[o,l("minutes")],H:[o,l("hours")],h:[o,l("hours")],HH:[o,l("hours")],hh:[o,l("hours")],D:[o,l("day")],DD:[n,l("day")],Do:[h,function(c){var d=g.ordinal,A=c.match(/\d+/);if(this.day=A[0],d)for(var O=1;O<=31;O+=1)d(O).replace(/\[|\]/g,"")===c&&(this.day=O)}],M:[o,l("month")],MM:[n,l("month")],MMM:[h,function(c){var d=M("months"),A=(M("monthsShort")||d.map(function(O){return O.slice(0,3)})).indexOf(c)+1;if(A<1)throw new Error;this.month=A%12||A}],MMMM:[h,function(c){var d=M("months").indexOf(c)+1;if(d<1)throw new Error;this.month=d%12||d}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(c){this.year=$(c)}],YYYY:[/\d{4}/,l("year")],Z:w,ZZ:w};function k(c){var d,A;d=c,A=g&&g.formats;for(var O=(c=d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,b,F){var E=F&&F.toUpperCase();return b||A[F]||r[F]||A[E].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(f,s,i){return s||i.slice(1)})})).match(a),C=O.length,D=0;D<C;D+=1){var L=O[D],q=T[L],H=q&&q[0],z=q&&q[1];O[D]=z?{regex:H,parser:z}:L.replace(/^\[|\]$/g,"")}return function(Y){for(var b={},F=0,E=0;F<C;F+=1){var f=O[F];if(typeof f=="string")E+=f.length;else{var s=f.regex,i=f.parser,y=Y.slice(E),u=s.exec(y)[0];i.call(b,u),Y=Y.replace(u,"")}}return function(_){var p=_.afternoon;if(p!==void 0){var S=_.hours;p?S<12&&(_.hours+=12):S===12&&(_.hours=0),delete _.afternoon}}(b),b}}return function(c,d,A){A.p.customParseFormat=!0,c&&c.parseTwoDigitYear&&($=c.parseTwoDigitYear);var O=d.prototype,C=O.parse;O.parse=function(D){var L=D.date,q=D.utc,H=D.args;this.$u=q;var z=H[1];if(typeof z=="string"){var Y=H[2]===!0,b=H[3]===!0,F=Y||b,E=H[2];b&&(E=H[2]),g=this.$locale(),!Y&&E&&(g=A.Ls[E]),this.$d=function(y,u,_){try{if(["x","X"].indexOf(u)>-1)return new Date((u==="X"?1e3:1)*y);var p=k(u)(y),S=p.year,P=p.month,j=p.day,Z=p.hours,V=p.minutes,U=p.seconds,x=p.milliseconds,K=p.zone,J=new Date,W=j||(S||P?1:J.getDate()),G=S||J.getFullYear(),X=0;S&&!P||(X=P>0?P-1:J.getMonth());var Q=Z||0,gt=V||0,yt=U||0,_t=x||0;return K?new Date(Date.UTC(G,X,W,Q,gt,yt,_t+60*K.offset*1e3)):_?new Date(Date.UTC(G,X,W,Q,gt,yt,_t)):new Date(G,X,W,Q,gt,yt,_t)}catch{return new Date("")}}(L,z,q),this.init(),E&&E!==!0&&(this.$L=this.locale(E).$L),F&&L!=this.format(z)&&(this.$d=new Date("")),g={}}else if(z instanceof Array)for(var f=z.length,s=1;s<=f;s+=1){H[1]=z[s-1];var i=A.apply(this,H);if(i.isValid()){this.$d=i.$d,this.$L=i.$L,this.init();break}s===f&&(this.$d=new Date(""))}else C.call(this,D)}}})})(Wt);var Bt=Wt.exports;const oe=Zt(Bt),le=Pt({__proto__:null,default:oe},[Bt]),ue="/age-calculator-app/assets/icon-arrow-ca520b94.svg";function fe(t){let e,r,a,n,o,h,g=(t[10]?t[12]||t[11]:"")+"",$,l,w,M,I,T,k,c,d,A=(t[10]?t[13]:"")+"",O,C,D,L,q,H,z,Y,b,F=(t[10]?t[14]:"")+"",E,f,s,i,y,u,_,p,S,P,j,Z;return{c(){e=N("form"),r=N("fieldset"),a=N("legend"),a.textContent="Enter age date:",n=B(),o=N("div"),h=N("p"),$=tt(g),l=B(),w=N("input"),I=B(),T=N("label"),T.textContent="Day",k=B(),c=N("div"),d=N("p"),O=tt(A),C=B(),D=N("input"),q=B(),H=N("label"),H.textContent="Month",z=B(),Y=N("div"),b=N("p"),E=tt(F),f=B(),s=N("input"),y=B(),u=N("label"),u.textContent="Year",_=B(),p=N("button"),S=N("img"),m(a,"class","sr-only"),m(h,"class","field__error svelte-7ektrv"),m(w,"type","number"),m(w,"id","day"),m(w,"name","day"),m(w,"class",M=nt(t[10]&&(t[3]||t[7]||!t[4])?"field__day input__error":"field__day")+" svelte-7ektrv"),m(w,"min","1"),m(w,"step","1"),m(w,"placeholder","DD"),m(T,"for","day"),m(T,"class","field__label svelte-7ektrv"),m(o,"class","form__field svelte-7ektrv"),m(d,"class","field__error svelte-7ektrv"),m(D,"type","number"),m(D,"id","month"),m(D,"name","month"),m(D,"class",L=nt(t[10]&&(t[3]||t[8]||!t[5])?"field__month input__error":"field__month")+" svelte-7ektrv"),m(D,"min","1"),m(D,"step","1"),m(D,"placeholder","MM"),m(H,"for","month"),m(H,"class","field__label svelte-7ektrv"),m(c,"class","form__field svelte-7ektrv"),m(b,"class","field__error svelte-7ektrv"),m(s,"type","number"),m(s,"id","year"),m(s,"name","year"),m(s,"class",i=nt(t[10]&&(t[3]||t[9]||!t[6])?"field__year input__error":"field__year")+" svelte-7ektrv"),m(s,"min","1000"),m(s,"max",t[18]),m(s,"step","1"),m(s,"placeholder","YYYY"),m(u,"for","year"),m(u,"class","field__label svelte-7ektrv"),m(Y,"class","form__field svelte-7ektrv"),m(r,"class","form__fieldset svelte-7ektrv"),m(S,"class","submit__icon"),Gt(S.src,P=ue)||m(S,"src",P),m(S,"alt","arrow icon"),m(p,"type","submit"),m(p,"class","form__submit svelte-7ektrv"),m(p,"aria-label","calculate"),m(e,"name","ageCalculator"),m(e,"class","calculator__form svelte-7ektrv"),e.noValidate=!0},m(V,U){Yt(V,e,U),v(e,r),v(r,a),v(r,n),v(r,o),v(o,h),v(h,$),v(o,l),v(o,w),rt(w,t[2]),v(o,I),v(o,T),v(r,k),v(r,c),v(c,d),v(d,O),v(c,C),v(c,D),rt(D,t[1]),v(c,q),v(c,H),v(r,z),v(r,Y),v(Y,b),v(b,E),v(Y,f),v(Y,s),rt(s,t[0]),v(Y,y),v(Y,u),v(e,_),v(e,p),v(p,S),j||(Z=[R(w,"change",t[16]("day")),R(w,"keydown",t[15](2)),R(w,"input",t[19]),R(D,"change",t[16]("month")),R(D,"keydown",t[15](2)),R(D,"input",t[20]),R(s,"change",t[16]("year")),R(s,"keydown",t[15](4)),R(s,"input",t[21]),R(e,"submit",Rt(t[17]))],j=!0)},p(V,[U]){U&7168&&g!==(g=(V[10]?V[12]||V[11]:"")+"")&&ot($,g),U&1176&&M!==(M=nt(V[10]&&(V[3]||V[7]||!V[4])?"field__day input__error":"field__day")+" svelte-7ektrv")&&m(w,"class",M),U&4&&at(w.value)!==V[2]&&rt(w,V[2]),U&9216&&A!==(A=(V[10]?V[13]:"")+"")&&ot(O,A),U&1320&&L!==(L=nt(V[10]&&(V[3]||V[8]||!V[5])?"field__month input__error":"field__month")+" svelte-7ektrv")&&m(D,"class",L),U&2&&at(D.value)!==V[1]&&rt(D,V[1]),U&17408&&F!==(F=(V[10]?V[14]:"")+"")&&ot(E,F),U&1608&&i!==(i=nt(V[10]&&(V[3]||V[9]||!V[6])?"field__year input__error":"field__year")+" svelte-7ektrv")&&m(s,"class",i),U&1&&at(s.value)!==V[0]&&rt(s,V[0])},i:et,o:et,d(V){V&&mt(e),j=!1,dt(Z)}}}function ce(t,e,r){let a,n,o,h,g,$,l,w,M,I;const T=xt();At.extend(le);const k=F=>E=>{(E.keyCode!==37&&E.keyCode!==39&&E.keyCode!==8&&E.keyCode!==9&&E.keyCode!==" "&&E.code.includes("Key")||E.target.value.length>=F&&E.keyCode!==9&&E.keyCode!==37&&E.keyCode!==39&&E.keyCode!==8&&E.keyCode!==" ")&&E.preventDefault()},c=F=>()=>{F==="day"?r(2,L=L<=9?String(L).padStart(2,"0"):L):F==="month"&&r(1,D=D<=9?String(D).padStart(2,"0"):D),r(3,H=!1)},d=()=>{let F;r(10,q=!0);try{F=A(`${C}-${D}-${L}`)}catch{r(3,H=!0);return}r(3,H=!1),T("change",{years:F.years,months:F.months,days:F.days})},A=(F="1984-09-24",E=Nt())=>{let f=Nt(F,"YYYY-MM-DD",!0);if(!f.isValid())throw new Error("Failed strict date check: Date is invalid or format is wrong");if(f.isAfter(E))throw new Error("Date cannot be later than todays date");const s=E.diff(f,"years");f=f.add(s,"year");const i=E.diff(f,"month");f=f.add(i,"month");const y=E.diff(f,"day");return Object.freeze({years:s,months:i,days:y})},O=new Date().getFullYear();let C="",D="",L="",q=!1,H=!1;function z(){L=at(this.value),r(2,L)}function Y(){D=at(this.value),r(1,D)}function b(){C=at(this.value),r(0,C)}return t.$$.update=()=>{t.$$.dirty&1&&r(9,a=C&&C.length===0||/\s+/g.test(C)),t.$$.dirty&1&&r(6,n=parseInt(C)>=1e3&&parseInt(C)<=O),t.$$.dirty&576&&r(14,o=a?"This field is required":n?"":"Must be a valid year"),t.$$.dirty&2&&r(8,h=D&&D.length===0||/\s+/g.test(D)),t.$$.dirty&2&&r(5,g=parseInt(D)>=1&&parseInt(D)<=12),t.$$.dirty&288&&r(13,$=h?"This field is required":g?"":"Must be a valid month"),t.$$.dirty&4&&r(7,l=L&&L.length===0||/\s+/g.test(L)),t.$$.dirty&4&&r(4,w=parseInt(L)>=1&&parseInt(L)<=31),t.$$.dirty&144&&r(12,M=l?"This field is required":w?"":"Must be a valid day"),t.$$.dirty&120&&r(11,I=n&&g&&w&&H?"Must be a valid date":"")},[C,D,L,H,w,g,n,l,h,a,q,I,M,$,o,k,c,d,O,z,Y,b]}class de extends Ct{constructor(e){super(),Ot(this,e,ce,fe,Et,{})}}var Vt=globalThis&&globalThis.__assign||function(){return(Vt=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},wt=function(){function t(e,r,a){var n=this;this.endVal=r,this.options=a,this.version="2.5.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(o){n.startTime||(n.startTime=o);var h=o-n.startTime;n.remaining=n.duration-h,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(h,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(h,n.startVal,n.endVal-n.startVal,n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(h/n.duration);var g=n.countDown?n.frameVal<n.endVal:n.frameVal>n.endVal;n.frameVal=g?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),h<n.duration?n.rAF=requestAnimationFrame(n.count):n.finalEndVal!==null?n.update(n.finalEndVal):n.options.onCompleteCallback&&n.options.onCompleteCallback()},this.formatNumber=function(o){var h,g,$,l,w=o<0?"-":"";h=Math.abs(o).toFixed(n.options.decimalPlaces);var M=(h+="").split(".");if(g=M[0],$=M.length>1?n.options.decimal+M[1]:"",n.options.useGrouping){l="";for(var I=3,T=0,k=0,c=g.length;k<c;++k)n.options.useIndianSeparators&&k===4&&(I=2,T=1),k!==0&&T%I==0&&(l=n.options.separator+l),T++,l=g[c-k-1]+l;g=l}return n.options.numerals&&n.options.numerals.length&&(g=g.replace(/[0-9]/g,function(d){return n.options.numerals[+d]}),$=$.replace(/[0-9]/g,function(d){return n.options.numerals[+d]})),w+n.options.prefix+g+$+n.options.suffix},this.easeOutExpo=function(o,h,g,$){return g*(1-Math.pow(2,-10*o/$))*1024/1023+h},this.options=Vt(Vt({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(r),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return n.handleScroll(n)}),window.onscroll=function(){window.onScrollFns.forEach(function(o){return o()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(e){if(e&&window&&!e.once){var r=window.innerHeight+window.scrollY,a=e.el.getBoundingClientRect(),n=a.top+window.pageYOffset,o=a.top+a.height+window.pageYOffset;o<r&&o>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>o||n>r)&&!e.paused&&e.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var r=e-this.startVal;if(Math.abs(r)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var a=this.countDown?1:-1;this.endVal=e+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(e){this.error||(e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(e){var r=this.formattingFn(e);this.el&&(this.el.tagName==="INPUT"?this.el.value=r:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=r:this.el.innerHTML=r)},t.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},t.prototype.validateValue=function(e){var r=Number(e);return this.ensureNumber(r)?r:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();function he(t){let e,r,a,n,o,h,g,$,l,w,M,I,T,k,c,d,A,O;return{c(){e=N("ol"),r=N("li"),a=N("div"),n=tt(t[0]),o=B(),h=N("span"),h.textContent="years",g=B(),$=N("li"),l=N("div"),w=tt(t[1]),M=B(),I=N("span"),I.textContent="months",T=B(),k=N("li"),c=N("div"),d=tt(t[2]),A=B(),O=N("span"),O.textContent="days",m(a,"class","years__value svelte-1l3582v"),m(h,"class","sr-only svelte-1l3582v"),m(r,"class","result__years svelte-1l3582v"),m(l,"class","months__value svelte-1l3582v"),m(I,"class","sr-only svelte-1l3582v"),m($,"class","result__months svelte-1l3582v"),m(c,"class","days__value svelte-1l3582v"),m(O,"class","sr-only svelte-1l3582v"),m(k,"class","result__days svelte-1l3582v"),m(e,"class","results svelte-1l3582v")},m(C,D){Yt(C,e,D),v(e,r),v(r,a),v(a,n),t[6](a),v(r,o),v(r,h),v(e,g),v(e,$),v($,l),v(l,w),t[7](l),v($,M),v($,I),v(e,T),v(e,k),v(k,c),v(c,d),t[8](c),v(k,A),v(k,O)},p(C,[D]){D&1&&ot(n,C[0]),D&2&&ot(w,C[1]),D&4&&ot(d,C[2])},i:et,o:et,d(C){C&&mt(e),t[6](null),t[7](null),t[8](null)}}}function pe(t,e,r){let{years:a="--"}=e,{months:n="--"}=e,{days:o="--"}=e,h,g,$,l,w,M;const I={duration:1};Qt(()=>{isNaN(a)||isNaN(n)||isNaN(o)||(g||(g=new wt(h,a,I),g.start()),g.update(a),l||(l=new wt($,n,I),l.start()),l.update(n),M||(M=new wt(w,o,I),M.start()),M.update(o))});function T(d){ft[d?"unshift":"push"](()=>{h=d,r(3,h)})}function k(d){ft[d?"unshift":"push"](()=>{$=d,r(4,$)})}function c(d){ft[d?"unshift":"push"](()=>{w=d,r(5,w)})}return t.$$set=d=>{"years"in d&&r(0,a=d.years),"months"in d&&r(1,n=d.months),"days"in d&&r(2,o=d.days)},[a,n,o,h,$,w,T,k,c]}class me extends Ct{constructor(e){super(),Ot(this,e,pe,he,Et,{years:0,months:1,days:2})}}function ge(t){let e,r,a,n,o,h,g,$;return o=new de({}),o.$on("change",t[3]),g=new me({props:{years:t[0],months:t[1],days:t[2]}}),{c(){e=N("div"),r=N("div"),a=N("h1"),a.textContent="Age Calculator",n=B(),Lt(o.$$.fragment),h=B(),Lt(g.$$.fragment),m(a,"class","sr-only"),m(r,"class","calculator__container svelte-124bpp9"),m(e,"class","container svelte-124bpp9")},m(l,w){Yt(l,e,w),v(e,r),v(r,a),v(r,n),bt(o,r,null),v(r,h),bt(g,r,null),$=!0},p(l,[w]){const M={};w&1&&(M.years=l[0]),w&2&&(M.months=l[1]),w&4&&(M.days=l[2]),g.$set(M)},i(l){$||($t(o.$$.fragment,l),$t(g.$$.fragment,l),$=!0)},o(l){Tt(o.$$.fragment,l),Tt(g.$$.fragment,l),$=!1},d(l){l&&mt(e),St(o),St(g)}}}function ye(t,e,r){const a=({detail:g})=>{r(0,n=g.years),r(1,o=g.months),r(2,h=g.days)};let n,o,h;return[n,o,h,a]}class _e extends Ct{constructor(e){super(),Ot(this,e,ye,ge,Et,{})}}new _e({target:document.getElementById("app")});