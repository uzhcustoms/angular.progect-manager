(self.webpackChunkproject_manager=self.webpackChunkproject_manager||[]).push([[263],{263:(t,e,s)=>{"use strict";s.r(e),s.d(e,{ProgectsModule:()=>st});var n=s(583),i=s(639),o=s(917),r=s(574),a=s(612),c=s(435),d=s(2);class p{}class m{}class h{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(t=>{const e=t.indexOf(":");if(e>0){const s=t.slice(0,e),n=s.toLowerCase(),i=t.slice(e+1).trim();this.maybeSetNormalizedName(s,n),this.headers.has(n)?this.headers.get(n).push(i):this.headers.set(n,[i])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let s=t[e];const n=e.toLowerCase();"string"==typeof s&&(s=[s]),s.length>0&&(this.headers.set(n,s),this.maybeSetNormalizedName(e,n))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof h?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new h;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof h?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let s=t.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(t.name,e);const n=("a"===t.op?this.headers.get(e):void 0)||[];n.push(...s),this.headers.set(e,n);break;case"d":const i=t.value;if(i){let t=this.headers.get(e);if(!t)return;t=t.filter(t=>-1===i.indexOf(t)),0===t.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,t)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class l{encodeKey(t){return u(t)}encodeValue(t){return u(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}function u(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}function g(t){return`${t}`}class k{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new l,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(t,e){const s=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(t=>{const n=t.indexOf("="),[i,o]=-1==n?[e.decodeKey(t),""]:[e.decodeKey(t.slice(0,n)),e.decodeValue(t.slice(n+1))],r=s.get(i)||[];r.push(o),s.set(i,r)}),s}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const s=t.fromObject[e];this.map.set(e,Array.isArray(s)?s:[s])})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(s=>{const n=t[s];Array.isArray(n)?n.forEach(t=>{e.push({param:s,value:t,op:"a"})}):e.push({param:s,value:n,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new k({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(g(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let e=this.map.get(t.param)||[];const s=e.indexOf(g(t.value));-1!==s&&e.splice(s,1),e.length>0?this.map.set(t.param,e):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class T{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}keys(){return this.map.keys()}}function f(t){return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer}function x(t){return"undefined"!=typeof Blob&&t instanceof Blob}function y(t){return"undefined"!=typeof FormData&&t instanceof FormData}class C{constructor(t,e,s,n){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==s?s:null,i=n):i=s,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new h),this.context||(this.context=new T),this.params){const t=this.params.toString();if(0===t.length)this.urlWithParams=e;else{const s=e.indexOf("?");this.urlWithParams=e+(-1===s?"?":s<e.length-1?"&":"")+t}}else this.params=new k,this.urlWithParams=e}serializeBody(){return null===this.body?null:f(this.body)||x(this.body)||y(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof k?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||y(this.body)?null:x(this.body)?this.body.type||null:f(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof k?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var e;const s=t.method||this.method,n=t.url||this.url,i=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,r=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let c=t.headers||this.headers,d=t.params||this.params;const p=null!==(e=t.context)&&void 0!==e?e:this.context;return void 0!==t.setHeaders&&(c=Object.keys(t.setHeaders).reduce((e,s)=>e.set(s,t.setHeaders[s]),c)),t.setParams&&(d=Object.keys(t.setParams).reduce((e,s)=>e.set(s,t.setParams[s]),d)),new C(s,n,o,{params:d,headers:c,context:p,reportProgress:a,responseType:i,withCredentials:r})}}var b=(()=>((b=b||{})[b.Sent=0]="Sent",b[b.UploadProgress=1]="UploadProgress",b[b.ResponseHeader=2]="ResponseHeader",b[b.DownloadProgress=3]="DownloadProgress",b[b.Response=4]="Response",b[b.User=5]="User",b))();class v{constructor(t,e=200,s="OK"){this.headers=t.headers||new h,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||s,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class P extends v{constructor(t={}){super(t),this.type=b.ResponseHeader}clone(t={}){return new P({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class Z extends v{constructor(t={}){super(t),this.type=b.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new Z({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class w extends v{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function N(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}let A=(()=>{class t{constructor(t){this.handler=t}request(t,e,s={}){let n;if(t instanceof C)n=t;else{let i,o;i=s.headers instanceof h?s.headers:new h(s.headers),s.params&&(o=s.params instanceof k?s.params:new k({fromObject:s.params})),n=new C(t,e,void 0!==s.body?s.body:null,{headers:i,context:s.context,params:o,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const i=(0,o.of)(n).pipe((0,a.b)(t=>this.handler.handle(t)));if(t instanceof C||"events"===s.observe)return i;const r=i.pipe((0,c.h)(t=>t instanceof Z));switch(s.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return r.pipe((0,d.U)(t=>{if(null!==t.body&&!(t.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return t.body}));case"blob":return r.pipe((0,d.U)(t=>{if(null!==t.body&&!(t.body instanceof Blob))throw new Error("Response is not a Blob.");return t.body}));case"text":return r.pipe((0,d.U)(t=>{if(null!==t.body&&"string"!=typeof t.body)throw new Error("Response is not a string.");return t.body}));case"json":default:return r.pipe((0,d.U)(t=>t.body))}case"response":return r;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,e={}){return this.request("DELETE",t,e)}get(t,e={}){return this.request("GET",t,e)}head(t,e={}){return this.request("HEAD",t,e)}jsonp(t,e){return this.request("JSONP",t,{params:(new k).append(e,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,e={}){return this.request("OPTIONS",t,e)}patch(t,e,s={}){return this.request("PATCH",t,N(s,e))}post(t,e,s={}){return this.request("POST",t,N(s,e))}put(t,e,s={}){return this.request("PUT",t,N(s,e))}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(p))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})();class M{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const S=new i.OlP("HTTP_INTERCEPTORS");let E=(()=>{class t{intercept(t,e){return e.handle(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})();const I=/^\)\]\}',?\n/;let q=(()=>{class t{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new r.y(e=>{const s=this.xhrFactory.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((t,e)=>s.setRequestHeader(t,e.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const e=t.detectContentTypeHeader();null!==e&&s.setRequestHeader("Content-Type",e)}if(t.responseType){const e=t.responseType.toLowerCase();s.responseType="json"!==e?e:"text"}const n=t.serializeBody();let i=null;const o=()=>{if(null!==i)return i;const e=1223===s.status?204:s.status,n=s.statusText||"OK",o=new h(s.getAllResponseHeaders()),r=function(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}(s)||t.url;return i=new P({headers:o,status:e,statusText:n,url:r}),i},r=()=>{let{headers:n,status:i,statusText:r,url:a}=o(),c=null;204!==i&&(c=void 0===s.response?s.responseText:s.response),0===i&&(i=c?200:0);let d=i>=200&&i<300;if("json"===t.responseType&&"string"==typeof c){const t=c;c=c.replace(I,"");try{c=""!==c?JSON.parse(c):null}catch(p){c=t,d&&(d=!1,c={error:p,text:c})}}d?(e.next(new Z({body:c,headers:n,status:i,statusText:r,url:a||void 0})),e.complete()):e.error(new w({error:c,headers:n,status:i,statusText:r,url:a||void 0}))},a=t=>{const{url:n}=o(),i=new w({error:t,status:s.status||0,statusText:s.statusText||"Unknown Error",url:n||void 0});e.error(i)};let c=!1;const d=n=>{c||(e.next(o()),c=!0);let i={type:b.DownloadProgress,loaded:n.loaded};n.lengthComputable&&(i.total=n.total),"text"===t.responseType&&s.responseText&&(i.partialText=s.responseText),e.next(i)},p=t=>{let s={type:b.UploadProgress,loaded:t.loaded};t.lengthComputable&&(s.total=t.total),e.next(s)};return s.addEventListener("load",r),s.addEventListener("error",a),s.addEventListener("timeout",a),s.addEventListener("abort",a),t.reportProgress&&(s.addEventListener("progress",d),null!==n&&s.upload&&s.upload.addEventListener("progress",p)),s.send(n),e.next({type:b.Sent}),()=>{s.removeEventListener("error",a),s.removeEventListener("abort",a),s.removeEventListener("load",r),s.removeEventListener("timeout",a),t.reportProgress&&(s.removeEventListener("progress",d),null!==n&&s.upload&&s.upload.removeEventListener("progress",p)),s.readyState!==s.DONE&&s.abort()}})}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(n.JF))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})();const O=new i.OlP("XSRF_COOKIE_NAME"),j=new i.OlP("XSRF_HEADER_NAME");class _{}let U=(()=>{class t{constructor(t,e,s){this.doc=t,this.platform=e,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,n.Mx)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(n.K0),i.LFG(i.Lbi),i.LFG(O))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})(),J=(()=>{class t{constructor(t,e){this.tokenService=t,this.headerName=e}intercept(t,e){const s=t.url.toLowerCase();if("GET"===t.method||"HEAD"===t.method||s.startsWith("http://")||s.startsWith("https://"))return e.handle(t);const n=this.tokenService.getToken();return null===n||t.headers.has(this.headerName)||(t=t.clone({headers:t.headers.set(this.headerName,n)})),e.handle(t)}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(_),i.LFG(j))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})(),D=(()=>{class t{constructor(t,e){this.backend=t,this.injector=e,this.chain=null}handle(t){if(null===this.chain){const t=this.injector.get(S,[]);this.chain=t.reduceRight((t,e)=>new M(t,e),this.backend)}return this.chain.handle(t)}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(m),i.LFG(i.zs3))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})(),F=(()=>{class t{static disable(){return{ngModule:t,providers:[{provide:J,useClass:E}]}}static withOptions(e={}){return{ngModule:t,providers:[e.cookieName?{provide:O,useValue:e.cookieName}:[],e.headerName?{provide:j,useValue:e.headerName}:[]]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({providers:[J,{provide:S,useExisting:J,multi:!0},{provide:_,useClass:U},{provide:O,useValue:"XSRF-TOKEN"},{provide:j,useValue:"X-XSRF-TOKEN"}]}),t})(),H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({providers:[A,{provide:p,useClass:D},q,{provide:m,useExisting:q}],imports:[[F.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),t})();var z=s(855);const L=[{id:1,name:"Progect 1",description:"Text 1",tasks:[{id:1,name:"Tasks 1",projectId:1,description:"Text task 1",comments:"Comments task 1"},{id:2,name:"Tasks 2",projectId:1,description:"Text task 2",comments:"Comments task 2"},{id:3,name:"Tasks 3",projectId:1,description:"Text task 3",comments:"Comments task 3"},{id:4,name:"Tasks 4",projectId:1,description:"Text task 4",comments:"Comments task 4"},{id:5,name:"Tasks 5",projectId:1,description:"Text task 5",comments:"Comments task 5"},{id:6,name:"Tasks 6",projectId:1,description:"Text task 6",comments:"Comments task 6"}]},{id:2,name:"Progect 2",description:"Text 2",tasks:[{id:1,name:"Tasks 1",projectId:1,description:"Text task 1",comments:"Comments task 1"},{id:2,name:"Tasks 2",projectId:1,description:"Text task 2",comments:"Comments task 2"},{id:3,name:"Tasks 3",projectId:1,description:"Text task 3",comments:"Comments task 3"},{id:4,name:"Tasks 4",projectId:1,description:"Text task 4",comments:"Comments task 4"},{id:5,name:"Tasks 5",projectId:1,description:"Text task 5",comments:"Comments task 5"},{id:6,name:"Tasks 6",projectId:1,description:"Text task 6",comments:"Comments task 6"}]},{id:3,name:"Progect 3",description:"Text 3",tasks:[{id:1,name:"Tasks 1",projectId:1,description:"Text task 1",comments:"Comments task 1"},{id:2,name:"Tasks 2",projectId:1,description:"Text task 2",comments:"Comments task 2"},{id:3,name:"Tasks 3",projectId:1,description:"Text task 3",comments:"Comments task 3"},{id:4,name:"Tasks 4",projectId:1,description:"Text task 4",comments:"Comments task 4"},{id:5,name:"Tasks 5",projectId:1,description:"Text task 5",comments:"Comments task 5"},{id:6,name:"Tasks 6",projectId:1,description:"Text task 6",comments:"Comments task 6"}]},{id:4,name:"Progect 4",description:"Text 4",tasks:[{id:1,name:"Tasks 1",projectId:1,description:"Text task 1",comments:"Comments task 1"},{id:2,name:"Tasks 2",projectId:1,description:"Text task 2",comments:"Comments task 2"},{id:3,name:"Tasks 3",projectId:1,description:"Text task 3",comments:"Comments task 3"},{id:4,name:"Tasks 4",projectId:1,description:"Text task 4",comments:"Comments task 4"},{id:5,name:"Tasks 5",projectId:1,description:"Text task 5",comments:"Comments task 5"},{id:6,name:"Tasks 6",projectId:1,description:"Text task 6",comments:"Comments task 6"}]},{id:5,name:"Progect 5",description:"Text 5",tasks:[{id:1,name:"Tasks 1",projectId:1,description:"Text task 1",comments:"Comments task 1"},{id:2,name:"Tasks 2",projectId:1,description:"Text task 2",comments:"Comments task 2"},{id:3,name:"Tasks 3",projectId:1,description:"Text task 3",comments:"Comments task 3"},{id:4,name:"Tasks 4",projectId:1,description:"Text task 4",comments:"Comments task 4"},{id:5,name:"Tasks 5",projectId:1,description:"Text task 5",comments:"Comments task 5"},{id:6,name:"Tasks 6",projectId:1,description:"Text task 6",comments:"Comments task 6"}]},{id:6,name:"Progect 6",description:"Text 6",tasks:[{id:1,name:"Tasks 1",projectId:1,description:"Text task 1",comments:"Comments task 1"},{id:2,name:"Tasks 2",projectId:1,description:"Text task 2",comments:"Comments task 2"},{id:3,name:"Tasks 3",projectId:1,description:"Text task 3",comments:"Comments task 3"},{id:4,name:"Tasks 4",projectId:1,description:"Text task 4",comments:"Comments task 4"},{id:5,name:"Tasks 5",projectId:1,description:"Text task 5",comments:"Comments task 5"},{id:6,name:"Tasks 6",projectId:1,description:"Text task 6",comments:"Comments task 6"}]},{id:7,name:"Progect 7",description:"Text 7",tasks:[{id:1,name:"Tasks 1",projectId:1,description:"Text task 1",comments:"Comments task 1"},{id:2,name:"Tasks 2",projectId:1,description:"Text task 2",comments:"Comments task 2"},{id:3,name:"Tasks 3",projectId:1,description:"Text task 3",comments:"Comments task 3"},{id:4,name:"Tasks 4",projectId:1,description:"Text task 4",comments:"Comments task 4"},{id:5,name:"Tasks 5",projectId:1,description:"Text task 5",comments:"Comments task 5"},{id:6,name:"Tasks 6",projectId:1,description:"Text task 6",comments:"Comments task 6"}]}];let R=(()=>{class t{constructor(t){this.http=t}getProgects(){return(0,o.of)(L)}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(A))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Y=(()=>{class t{constructor(){this.idxProgect=0}getProgects(){return(0,o.of)(L)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var B=s(665);function Q(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"tr"),i.TgZ(1,"td",4),i.NdJ("click",function(){const e=i.CHM(t).$implicit,s=i.oxw();return s.navigate(s.path),s.getIdx(e)}),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.qZA(),i.TgZ(5,"td"),i.TgZ(6,"button",5),i.NdJ("click",function(){const e=i.CHM(t).$implicit;return i.oxw().editProgect(e)}),i._uU(7,"Edit"),i.qZA(),i.TgZ(8,"button",5),i.NdJ("click",function(){const e=i.CHM(t).$implicit;return i.oxw().removeProgect(e)}),i._uU(9,"Delete"),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=e.$implicit;i.xp6(2),i.hij(" ",t.name," "),i.xp6(2),i.hij(" ",t.description," ")}}function K(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"form",6),i.NdJ("ngSubmit",function(e){return i.CHM(t),i.oxw().onSubmitEditProduct(e)}),i.TgZ(1,"p",7),i._uU(2,"Edit progect"),i.qZA(),i.TgZ(3,"div",8),i.TgZ(4,"label",9),i._uU(5,"Name"),i.qZA(),i.TgZ(6,"input",10),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().editName=e}),i.qZA(),i.TgZ(7,"label",11),i._uU(8,"Description"),i.qZA(),i.TgZ(9,"input",12),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().editDescription=e}),i.qZA(),i.TgZ(10,"input",13),i.NdJ("click",function(e){return i.CHM(t),i.oxw().onSubmitEditProduct(e)}),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(6),i.Q6J("ngModel",t.editName),i.xp6(3),i.Q6J("ngModel",t.editDescription)}}function $(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"form",14),i.NdJ("ngSubmit",function(e){return i.CHM(t),i.oxw().onSubmitCreateProduct(e)}),i.TgZ(1,"p",7),i._uU(2,"Create new project"),i.qZA(),i.TgZ(3,"div",15),i.TgZ(4,"label",16),i._uU(5,"Name"),i.qZA(),i.TgZ(6,"input",17),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().inputNameProgect=e}),i.qZA(),i.TgZ(7,"label",18),i._uU(8,"Description"),i.qZA(),i.TgZ(9,"input",19),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().inputDescriptionProgect=e}),i.qZA(),i.TgZ(10,"input",20),i.NdJ("click",function(e){return i.CHM(t),i.oxw().onSubmitCreateProduct(e)}),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(6),i.Q6J("ngModel",t.inputNameProgect),i.xp6(3),i.Q6J("ngModel",t.inputDescriptionProgect)}}function G(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"tr"),i.TgZ(1,"td",5),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.qZA(),i.TgZ(5,"td"),i._uU(6),i.qZA(),i.TgZ(7,"td"),i.TgZ(8,"button",6),i.NdJ("click",function(){const e=i.CHM(t).$implicit;return i.oxw(2).editTasks(e)}),i._uU(9,"Edit"),i.qZA(),i.TgZ(10,"button",6),i.NdJ("click",function(){const e=i.CHM(t).$implicit;return i.oxw(2).removeTasks(e)}),i._uU(11,"Delete"),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=e.$implicit;i.xp6(2),i.hij(" ",t.name," "),i.xp6(2),i.hij(" ",t.description," "),i.xp6(2),i.hij(" ",t.comments," ")}}function X(t,e){if(1&t&&(i.TgZ(0,"table"),i.TgZ(1,"thead"),i.TgZ(2,"tr"),i.TgZ(3,"th"),i._uU(4,"Name"),i.qZA(),i.TgZ(5,"th"),i._uU(6,"Description"),i.qZA(),i.TgZ(7,"th"),i._uU(8,"Comment"),i.qZA(),i._UZ(9,"th"),i.qZA(),i.qZA(),i.TgZ(10,"tbody"),i.YNc(11,G,12,3,"tr",4),i.qZA(),i.qZA()),2&t){const t=i.oxw();i.xp6(11),i.Q6J("ngForOf",t.progects[t.tasksService.idxProgect].tasks)}}function V(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"form",7),i.NdJ("ngSubmit",function(e){return i.CHM(t),i.oxw().onSubmitEditTasks(e)}),i.TgZ(1,"p",8),i._uU(2,"Edit task"),i.qZA(),i.TgZ(3,"div",9),i.TgZ(4,"div",10),i.TgZ(5,"label",11),i._uU(6,"Name"),i.qZA(),i.TgZ(7,"input",12),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().editNameTasks=e}),i.qZA(),i.qZA(),i.TgZ(8,"div",10),i.TgZ(9,"label",13),i._uU(10,"Description"),i.qZA(),i.TgZ(11,"input",14),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().editDescriptionTasks=e}),i.qZA(),i.qZA(),i.TgZ(12,"div",10),i.TgZ(13,"label",15),i._uU(14,"Comments"),i.qZA(),i.TgZ(15,"input",16),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().editCommentsTasks=e}),i.qZA(),i.qZA(),i.TgZ(16,"input",17),i.NdJ("click",function(e){return i.CHM(t),i.oxw().onSubmitEditTasks(e)}),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(7),i.Q6J("ngModel",t.editNameTasks),i.xp6(4),i.Q6J("ngModel",t.editDescriptionTasks),i.xp6(4),i.Q6J("ngModel",t.editCommentsTasks)}}function W(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"form",18),i.NdJ("ngSubmit",function(e){return i.CHM(t),i.oxw().onSubmitCreateTask(e)}),i.TgZ(1,"p",8),i._uU(2,"Create new task"),i.qZA(),i.TgZ(3,"div",19),i.TgZ(4,"div",10),i.TgZ(5,"label",20),i._uU(6,"Name"),i.qZA(),i.TgZ(7,"input",21),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().inputNameTask=e}),i.qZA(),i.qZA(),i.TgZ(8,"div",10),i.TgZ(9,"label",22),i._uU(10,"Description"),i.qZA(),i.TgZ(11,"input",23),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().inputDescriptionTask=e}),i.qZA(),i.qZA(),i.TgZ(12,"div",10),i.TgZ(13,"label",24),i._uU(14,"Comments"),i.qZA(),i.TgZ(15,"input",25),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().inputCommentsTasks=e}),i.qZA(),i.qZA(),i.TgZ(16,"input",26),i.NdJ("click",function(e){return i.CHM(t),i.oxw().onSubmitCreateTask(e)}),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(7),i.Q6J("ngModel",t.inputNameTask),i.xp6(4),i.Q6J("ngModel",t.inputDescriptionTask),i.xp6(4),i.Q6J("ngModel",t.inputCommentsTasks)}}const tt=[{path:"",component:(()=>{class t{constructor(t,e,s){this.progectsService=t,this.router=e,this.tasksService=s,this.idxProgect=0,this.inputNameProgect="",this.inputDescriptionProgect="",this.toggleEditProgect=!0,this.editName="",this.editDescription="",this.editIdx=0,this.path="tasks"}getProgects(){this.progectsService.getProgects().subscribe(t=>this.progects=t)}removeProgect(t){let e=this.progects.indexOf(t);this.progects.splice(e,1),this.toggleEditProgect=!0}editProgect(t){this.toggleEditProgect=!1,this.editIdx=this.progects.indexOf(t),this.editName=this.progects[this.editIdx].name,this.editDescription=this.progects[this.editIdx].description}onSubmitCreateProduct(t){t.preventDefault(),""!=this.inputNameProgect&&this.progects.push({id:this.progects[this.progects.length-1].id+1,name:this.inputNameProgect,description:this.inputDescriptionProgect,tasks:[]})}onSubmitEditProduct(t){t.preventDefault(),this.progects[this.editIdx].name=this.editName,this.progects[this.editIdx].description=this.editDescription,this.toggleEditProgect=!0}navigate(t){this.router.navigate([t])}getIdx(t){this.idxProgect=this.progects.indexOf(t),this.tasksService.idxProgect=this.idxProgect,console.log(this.idxProgect)}ngOnInit(){this.getProgects(),console.log(this.progects),localStorage.setItem("progects",JSON.stringify(L))}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(R),i.Y36(z.F0),i.Y36(Y))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-progects"]],decls:15,vars:3,consts:[[1,"progects"],[4,"ngFor","ngForOf"],["id","formEditProgect",3,"ngSubmit",4,"ngIf"],["id","formCreateProgect",3,"ngSubmit",4,"ngIf"],[1,"name-progect",3,"click"],[3,"click"],["id","formEditProgect",3,"ngSubmit"],[1,"title-progect"],[1,"edit-progect"],["for","editNameProgect"],["id","editNameProgect","type","text","name","editName","placeholder","Progect name",3,"ngModel","ngModelChange"],["for","editDescriptionProgect"],["id","editDescriptionProgect","type","text","name","editDescription","placeholder","Progect description",3,"ngModel","ngModelChange"],["id","btnEdit","type","submit","value","Save",3,"click"],["id","formCreateProgect",3,"ngSubmit"],[1,"new-progect"],["for","nameProgect"],["id","nameProgect","name","inputNameProgect","type","text","placeholder","Progect name",3,"ngModel","ngModelChange"],["for","descriptionProgect"],["id","descriptionProgect","name","inputDescriptionProgect","type","text","placeholder","Progect description",3,"ngModel","ngModelChange"],["id","btnSave","type","submit","value","Save",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"h3"),i._uU(2,"Progects"),i.qZA(),i.TgZ(3,"table"),i.TgZ(4,"thead"),i.TgZ(5,"tr"),i.TgZ(6,"th"),i._uU(7,"Name"),i.qZA(),i.TgZ(8,"th"),i._uU(9,"Description"),i.qZA(),i._UZ(10,"th"),i.qZA(),i.qZA(),i.TgZ(11,"tbody"),i.YNc(12,Q,10,2,"tr",1),i.qZA(),i.qZA(),i.YNc(13,K,11,2,"form",2),i.YNc(14,$,11,2,"form",3),i.qZA()),2&t&&(i.xp6(12),i.Q6J("ngForOf",e.progects),i.xp6(1),i.Q6J("ngIf",!e.toggleEditProgect),i.xp6(1),i.Q6J("ngIf",e.toggleEditProgect))},directives:[n.sg,n.O5,B._Y,B.JL,B.F,B.Fj,B.JJ,B.On],styles:["h3[_ngcontent-%COMP%]{margin-bottom:10px}table[_ngcontent-%COMP%]{border:1px solid #9b9b9b;padding:0 15px 15px}th[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]{text-align:center;padding:20px}.progects[_ngcontent-%COMP%]{margin-left:100px}.title-progect[_ngcontent-%COMP%]{text-align:center;font-weight:700}.edit-progect[_ngcontent-%COMP%], .new-progect[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}label[_ngcontent-%COMP%]{padding:10px;text-align:center;width:25%}input[type=text][_ngcontent-%COMP%]{padding:7px}#btnEdit[_ngcontent-%COMP%], #btnSave[_ngcontent-%COMP%]{width:25%;margin:5px;padding:5px}.name-progect[_ngcontent-%COMP%]:hover{background-color:#dbdbdb;border-radius:5px;transform:scale(1.1)}"]}),t})()},{path:"tasks",component:(()=>{class t{constructor(t,e){this.progectsService=t,this.tasksService=e,this.inputNameTask="",this.inputDescriptionTask="",this.inputCommentsTasks="",this.toggleEditTask=!0,this.editNameTasks="",this.editDescriptionTasks="",this.editCommentsTasks="",this.editIdx=0}getProgects(){this.progectsService.getProgects().subscribe(t=>this.progects=t)}removeTasks(t){let e=this.progects[this.tasksService.idxProgect].tasks.indexOf(t);this.progects[this.tasksService.idxProgect].tasks.splice(e,1),this.toggleEditTask=!0}editTasks(t){this.toggleEditTask=!1,this.editIdx=this.progects[this.tasksService.idxProgect].tasks.indexOf(t),this.editNameTasks=this.progects[this.tasksService.idxProgect].tasks[this.editIdx].name,this.editDescriptionTasks=this.progects[this.tasksService.idxProgect].tasks[this.editIdx].description,this.editCommentsTasks=this.progects[this.tasksService.idxProgect].tasks[this.editIdx].comments}onSubmitEditTasks(t){t.preventDefault(),this.progects[this.tasksService.idxProgect].tasks[this.editIdx].name=this.editNameTasks,this.progects[this.tasksService.idxProgect].tasks[this.editIdx].description=this.editDescriptionTasks,this.progects[this.tasksService.idxProgect].tasks[this.editIdx].comments=this.editCommentsTasks,this.toggleEditTask=!0}onSubmitCreateTask(t){let e;t.preventDefault(),e=0!=this.progects[this.tasksService.idxProgect].tasks.length?this.progects[this.tasksService.idxProgect].tasks[this.progects[this.tasksService.idxProgect].tasks.length-1].id:0,""!=this.inputNameTask&&this.progects[this.tasksService.idxProgect].tasks.push({id:e+1,name:this.inputNameTask,projectId:this.tasksService.idxProgect,description:this.inputDescriptionTask,comments:this.inputCommentsTasks})}ngOnInit(){this.getProgects()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(R),i.Y36(Y))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-tasks"]],decls:8,vars:4,consts:[[1,"tasks"],[4,"ngIf"],["id","formEditTask",3,"ngSubmit",4,"ngIf"],["id","formCreateTask",3,"ngSubmit",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"name-task"],[3,"click"],["id","formEditTask",3,"ngSubmit"],[1,"title-task"],[1,"edit-task"],[1,"flex-input"],["for","editNameTask"],["id","editNameTask","type","text","name","editNameTasks","placeholder","Task name",3,"ngModel","ngModelChange"],["for","editDescriptionTask"],["id","editDescriptionTask","type","text","name","editDescriptionTasks","placeholder","Task description",3,"ngModel","ngModelChange"],["for","editCommentsTask"],["id","editCommentsTask","type","text","name","editCommentsTasks","placeholder","Task comments",3,"ngModel","ngModelChange"],["id","btnEditTask","type","submit","value","Save",3,"click"],["id","formCreateTask",3,"ngSubmit"],[1,"new-task"],["for","nameTask"],["id","nameTask","type","text","placeholder","Task name","name","inputNameTask",3,"ngModel","ngModelChange"],["for","descriptionTask"],["id","descriptionTask","type","text","placeholder","Task description","name","inputDescriptionTask",3,"ngModel","ngModelChange"],["for","inputCommentsTask"],["id","inputCommentsTask","type","text","name","inputCommentsTasks","placeholder","Task comments",3,"ngModel","ngModelChange"],["id","btnSaveTask","type","submit","value","Save",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"h3"),i._uU(2),i.qZA(),i.TgZ(3,"h4"),i._uU(4,"Tasks"),i.qZA(),i.YNc(5,X,12,1,"table",1),i.YNc(6,V,17,3,"form",2),i.YNc(7,W,17,3,"form",3),i.qZA()),2&t&&(i.xp6(2),i.Oqu(e.progects[e.tasksService.idxProgect].name),i.xp6(3),i.Q6J("ngIf",e.progects[e.tasksService.idxProgect].tasks.length>0),i.xp6(1),i.Q6J("ngIf",!e.toggleEditTask),i.xp6(1),i.Q6J("ngIf",e.toggleEditTask))},directives:[n.O5,n.sg,B._Y,B.JL,B.F,B.Fj,B.JJ,B.On],styles:[".tasks[_ngcontent-%COMP%]{margin-left:100px}h3[_ngcontent-%COMP%]{margin-bottom:10px}table[_ngcontent-%COMP%]{border:1px solid #9b9b9b;padding:0 15px 15px}th[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]{text-align:center;padding:20px}.title-task[_ngcontent-%COMP%]{text-align:center;font-weight:700}.edit-task[_ngcontent-%COMP%], .new-task[_ngcontent-%COMP%]{display:flex;flex-direction:column}.flex-input[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:10px}label[_ngcontent-%COMP%]{padding:10px;width:30%}input[type=text][_ngcontent-%COMP%]{padding:7px;width:70%}#btnEditTask[_ngcontent-%COMP%], #btnSaveTask[_ngcontent-%COMP%]{width:68%;margin-left:auto;padding:5px}"]}),t})()}];let et=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[z.Bz.forChild(tt)],z.Bz]}),t})(),st=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({providers:[R],imports:[[n.ez,H,et,B.u5]]}),t})()}}]);