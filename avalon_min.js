(function(){function N(){return"avalon"+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}function J(a,b){for(var c in b)a[c]=b[c];return a}function O(){if(E){for(var a=0,b;b=E[a++];)b();E=null}try{document.readyState="complete"}catch(c){}}function ba(a){return a.replace(/([a-z\d])([A-Z]+)/g,"$1-$2").toLowerCase()}function P(a){return 0>a.indexOf("-")&&0>a.indexOf("_")?a:a.replace(/[-_][^-_]/g,function(a){return a.charAt(1).toUpperCase()})}function F(a,b,c){a="for(var "+
a+"i=0,n = this.length;i < n;i++){"+b.replace("_","((i in this) && fn.call(scope,this[i],i,this))")+"}"+c;return Function("fn,scope",a)}function G(){}function ma(a,b){a.length&&a.clear();b.forEach(function(b){a.push(b)})}function H(a){var b=a.$skipArray,c={},d={},e=[],f=[],g=[],b=Array.isArray(b)?b:[];avalon.Array.ensure(b,"$skipArray","$watch","$unwatch","$fire","$events");y(a,function(a,h){if("function"===typeof h)g.push(a);else{if(-1!==b.indexOf(a)||"$"===a.charAt(0)&&!na[a]&&-1!==b.indexOf(a))return g.push(a);
var l,n,m;"object"===typeof h&&"function"===typeof h.get&&2>=Object.keys(h).length?(l=function(b){if(arguments.length)K||("function"===typeof h.set&&h.set.call(d,b),m!==b&&(m=b,z(l),d.$events&&d.$fire(a,b,n)));else return Q&&ca(l),n=h.get.call(d)},f.push(function(){t[q]=this;this();delete t[q]}.bind(l))):(e.push(a),l=function(b){if(arguments.length){if(!K&&m!==b){if(Array.isArray(b))n&&n.isCollection?ma(n,b):n=da(b);else if("Object"===avalon.type(b))if(n&&n.$id){var c=n,e;for(e in b)b.hasOwnProperty(e)&&
(c.hasOwnProperty(e)&&"$id"!==e)&&(c[e]=b[e])}else n=H(b);else n=b;z(l);d.$events&&d.$fire(a,b,n)}}else return ca(l),n});l[A]=[];c[a]={set:l,get:l,enumerable:!0}}});L?L(d,c):d=pa(c,g);g.forEach(function(b){d[b]=a[b]});e.forEach(function(b){d[b]=a[b]});f.forEach(function(a){a()});d.$watch&&(d.$events={},d.$watch=R.$watch.bind(d),d.$unwatch=R.$unwatch.bind(d),d.$fire=R.$fire.bind(d));d.$id=N();return d}function ca(a){t[q]&&(a=a[A])&&avalon.Array.ensure(a,t[q])}function z(a){var b=a[A];if(b&&b.length)for(var c=
[].slice.call(arguments,1),d=b.concat(),e,f=0,g;g=d[f++];)(e=g.element)&&!e.noRemove&&(0===e.sourceIndex||null===e.parentNode)?avalon.Array.remove(b,g):g.apply(0,c)}function S(a,b,c){b=b||[];var d=a.getAttribute(r+"skip"),e=a.getAttribute(r+"important"),f=a.getAttribute(r+"controller");if("string"!==typeof d){if(e)if(avalon.models[e])b=[avalon.models[e]],a.removeAttribute(r+"important");else return;else if(f){d=avalon.models[f];if(!d)return;b=[d].concat(b);a.removeAttribute(r+"controller")}for(var d=
b,e=[],f=0,g;g=a.attributes[f++];)if(g.specified){var k=!1,h=!1;if(-1!==g.name.indexOf(r)){var l=g.name.replace(r,"");if(0<l.indexOf("-"))var n=l.split("-"),l=n.shift();h=!0;k="function"===typeof p[l]}else p[g.name]&&T(g.value)&&(l=g.name,k=!0);k&&e.push({type:l,args:n,element:a,remove:h,node:g,value:g.nodeValue})}U(e,d);if(!1===a.canHaveChildren||!ea[a.tagName]){l=[];for(d=a.firstChild;d;d=d.nextSibling)1===d.nodeType?S(d,b,c):3===d.nodeType&&l.push(d);for(a=0;d=l[a++];)n=b,d=fa(d,c),d.length&&U(d,
n)}}}function ga(a){var b=[];if(T(a)){do a=a.replace(qa,function(a,d){d&&b.push({value:d,expr:!1});return""}),a=a.replace(ra,function(a,d){if(d){var e=[];0<d.indexOf("|")&&(d=d.replace(/\|\s*(\w+)\s*(\([^)]+\))?/g,function(a,b,d){e.push(b+(d||""));return""}));b.push({value:d,expr:!0,filters:e.length?e:void 0})}return""});while(T(a));a&&b.push({value:a,expr:!1})}return b}function U(a,b){a.forEach(function(a){p[a.type](avalon.mix({},a),b);a.remove&&a.element.removeAttribute(a.node.name)})}function fa(a,
b){var c=[],d=ga(a.nodeValue);if(d.length){for(var e=b.createDocumentFragment();d.length;){var f=d.shift(),g=b.createTextNode(f.value);f.expr&&c.push({type:"text",node:g,element:a.parentNode,value:f.value,filters:f.filters});e.appendChild(g)}a.parentNode.replaceChild(e,a)}return c}function sa(a,b,c,d,e,f){var g=!1;if(g=window.dispatchEvent?a instanceof ReferenceError:a instanceof TypeError){a=window.opera?a.message.split("Undefined variable: ")[1]:a.message.replace("Can't find variable: ","").replace("\u201c",
"").replace("'","");a=(a.match(/^[\w$]+/)||[""])[0];for(var g=0,k;k=c[g++];)if(k.hasOwnProperty(a)){var h=k.$id+f;-1===d.indexOf(h)&&(d.push(h),e.push(k));c=RegExp("(^|[^\\w\\u00c0-\\uFFFF_])("+a.replace(ta,"\\$1")+")($|[^\\w\\u00c0-\\uFFFF_])","g");return b.replace(c,function(a,b,d,c){return b+h+"."+d+c})}}}function V(a,b,c){var d=[],e=[],f=new Date-0,g;if(ua){var k=f+1,h=k+1,l=[],n=[],m=!0;a=a.replace(va,function(a){l.push(a);return k}).replace(wa,function(a){n.push(a);return h});do try{var v=Function.apply(Function,
d.concat("return "+a));g=v.apply(v,e);m=!1}catch(oa){a=sa(oa,a,b,d,e,f),m="string"===typeof a}while(m);if(a)l.length&&(a=a.replace(RegExp(k,"g"),function(){return l.shift()})),n.length&&(a=a.replace(RegExp(h,"g"),function(){return n.shift()})),a="var ret"+f+" = "+a;else return c.compileFn=function(){return""},""}else{b.forEach(function(a){var b=a.$id+""+f;-1===d.indexOf(b)&&(d.push(b),e.push(a))});a="var ret"+f+" = "+a+"\r\n";for(b=0;m=d[b++];)a="with("+m+"){\r\n"+a+"\r\n}\r\n"}if(c.filters){m=[];
m.push(a,"\r\n");b=0;for(var x;x=c.filters[b++];){var p=x.indexOf("(");-1!==p?(a=x.slice(p+1,x.lastIndexOf(")")).trim(),a=","+a,x=x.slice(0,p).trim()):a="";m.push(" if(filters",f,".",x,"){\r\n\ttry{ret",f," = filters",f,".",x,"(ret",f,a,")}catch(e){};\r\n}\r\n")}a=m.join("");d.push("filters"+f);e.push(avalon.filters);delete c.filters}c.compileArgs=e;try{v=Function.apply(Function,d.concat(a+("\r\nreturn ret"+f))),g=v.apply(v,e),c.compileFn=v}catch(q){c.compileFn=function(){return""},g=""}m=d=null;
return g}function T(a){var b=a.indexOf("{{");return-1!==b&&b<a.indexOf("}}")}function u(a,b,c,d,e){var f,g;f=c.filters;var k=a.trim();if(!f){f=0;for(var h;h=b[f++];)if(h.hasOwnProperty(k)){g=h;break}}f=g?function(){d(g[k])}:function(){var f=c.compileFn,f="function"===typeof f?f.apply(f,c.compileArgs||[]):e?e.map(function(a){return a.expr?V(a.value,b,c):a.value}).join(""):V(a,b,c);d(f)};f.toString=function(){return"eval("+a+")"};f.element=c.element;t[q]=f;Q=!0;f();Q=!1;delete t[q]}function xa(a){var b=
a.target=a.srcElement;a.which=null!=a.charCode?a.charCode:a.keyCode;a.timeStamp=new Date-0;/mouse|click/.test(a.type)&&(b=b.ownerDocument||document,b="BackCompat"===b.compatMode?b.body:b.documentElement,a.pageX=a.clientX+(b.scrollLeft>>0)-(b.clientLeft>>0),a.pageY=a.clientY+(b.scrollTop>>0)-(b.clientTop>>0));a.preventDefault=function(){a.returnValue=!1};a.stopPropagation=function(){a.cancelBubble=!0};return a}function W(a,b,c){for(a=a.firstChild;a;a=a.nextSibling)if(8===a.nodeType&&a.nodeValue===
b+c)return a}function M(a,b){for(var c=0,d=a.firstChild;d;d=d.nextSibling)8===d.nodeType&&0===d.nodeValue.indexOf(b)&&(d.nodeValue!==b+c&&(d.nodeValue=b+c,(d.$scope||{}).$index=c),c++)}function ya(a,b,c,d){d=d[0]||"$data";var e={};e.$index=a;e[d]={get:function(){return b}};e.$first={get:function(){return 0===this.$index}};e.$last={get:function(){return this.$index===c.size()-1}};e.$remove=function(){c.remove(b);return b};return H(e)}function I(a,b,c){var d=c.scopeList,e=c.collection,f=c.element,g=
f.ownerDocument,k=[];b=ya(a,b,e,c.args);for(var d=[b].concat(d),h=c.view.firstChild;h;h=h.nextSibling)c=h.cloneNode(!0),e.insertBefore?f.insertBefore(c,e.insertBefore):f.appendChild(c),1===c.nodeType?S(c,d.concat(),g):3===c.nodeType?k.push(c):8===c.nodeType&&(c.nodeValue=h.nodeValue+""+a,c.$scope=c.$scope||b,c.$view=g.createDocumentFragment());avalon.nextTick(function(){for(var a=0;h=k[a++];){var b=d.concat(),c=fa(h,g);c.length&&U(c,b)}})}function X(a,b){for(var c=[a],d=a.$view,e=a.nextSibling;e&&
!(8===e.nodeType&&0===e.nodeValue.indexOf(b));e=e.nextSibling)c.push(e);for(var f=0;a=c[f++];)d.appendChild(a);return[d,e]}function za(a,b,c){var d=[];do if(a=X(a,b),a[1])d.push(a[0]),a=a[1];else break;while(d.length!==c);return d}function ha(a){return Array.isArray(a)?a.$id?a:da(a):"object"===typeof a?a.$id?a:H(a):a}function da(a){var b=a.map(ha);b.$id=N();b[A]=[];var c=H({length:a.length});"push,pop,shift,unshift,splice".replace(s,function(a){var e=Array.prototype[a];b[a]=function(){var b=this.length,
g=[].slice.call(arguments);/push|unshift|splice/.test(a)&&(g=g.map(ha));var k=e.apply(this,g);z(this,a,g,b);c.length=this.length;return k}});"sort,reverse".replace(s,function(a){var c=Array.prototype[a];b[a]=function(){var a="object"===typeof this[0],b=a?this.map(function(a){return a.$id}).join(""):this.join(""),d=c.apply(this,arguments),a=a?this.map(function(a){return a.$id}).join(""):this.join("");b!==a&&z(this,"update",[]);return d}});b.isCollection=!0;b.clear=function(){this.length=0;z(this,"clear",
[]);c.length=0;return this};b.sortBy=function(a,b){var c=avalon.Array.sortBy(this,a,b);z(this,"sort",[]);return c};b.contains=function(a){return-1!==this.indexOf(a)};b.ensure=function(a){this.contains(a)||this.push(a);return this};b.update=function(){z(this,"update",[]);return this};b.size=function(){return c.length};b.remove=function(a){a=this.indexOf(a);0<=a&&this.removeAt(a)};b.removeAt=function(a){0<=a&&0===a%1&&this.splice(a,1)};b.removeAll=function(a){if(Array.isArray(a))a.forEach(function(a){b.remove(a)});
else if("function"===typeof a)for(var c=this.length-1;0<=c;c--)a(this[c],c)&&this.splice(c,1);else this.clear()};return b}var Aa=Object.prototype.toString,t={},q=new Date-0,A="$"+q,ia={},s=/[^, ]+/g,r="ms-",B=window.dispatchEvent,K=!1,Q=!1,Y="propertyIsEnumerable isPrototypeOf hasOwnProperty toLocaleString toString valueOf constructor".split(" "),ja=Object.prototype.hasOwnProperty,E=[];avalon=function(a){return new avalon.init(a)};avalon.init=function(a){this[0]=this.element=a};avalon.fn=avalon.prototype=
avalon.init.prototype;J(avalon,{mix:J,subscribers:A,models:{},rword:s,error:function(a,b){throw new (b||Error)(a);},log:function(a){window.console&&console.log(a)},ui:{},ready:function(a){E?(E.push(a),"complete"===document.readyState&&O()):a()},oneObject:function(a,b){"string"===typeof a&&(a=a.match(s)||[]);for(var c={},d=void 0!==b?b:1,e=0,f=a.length;e<f;e++)c[a[e]]=d;return c},type:function(a){return null===a?"Null":void 0===a?"Undefined":Aa.call(a).slice(8,-1)},range:function(a,b,c){c||(c=1);null==
b&&(b=a||0,a=0);var d=-1;b=Math.max(0,Math.ceil((b-a)/c));for(var e=Array(b);++d<b;)e[d]=a,a+=c;return e},bind:B?function(a,b,c,d){a.addEventListener(b,c,!!d);return c}:function(a,b,c){function d(b){return c.call(a,xa(b))}a.attachEvent("on"+b,d);return d},unbind:B?function(a,b,c,d){a.removeEventListener(b,c||G,!!d)}:function(a,b,c){a.detachEvent("on"+b,c||G)},forEach:function(a,b){if(a){var c=0;if(Array.isArray(a)||"Object"===avalon.type(a)&&!a.document&&!a.setTimeout&&isFinite(a.length)&&a[0])for(var d=
a.length;c<d;c++)b(c,a[c]);else for(c in a)a.hasOwnProperty(c)&&b(c,a[c])}}});var y=avalon.forEach;avalon.bind(window,"load",O);avalon.bind(window,"DOMContentLoaded",O);var Ba=/^(?:null|false|true|NaN|\{.*\}|\[.*\])$/;J(avalon.fn,{hasClass:function(a){if(this[0]&&1===this[0].nodeType)return-1<(" "+(this[0]||{}).className+" ").indexOf(" "+a+" ")},addClass:function(a){!1===this.hasClass(a)&&(this[0].className+=" "+a);return this},removeClass:function(a){!0===this.hasClass(a)&&(this[0].className=this[0].className.replace(RegExp("(\\s|^)"+
a+"(\\s|$)")," "));return this},toggleClass:function(a,b){var c;c="boolean"===typeof b?b:!this.hasClass(a);return this[c?"addClass":"removeClass"](a)},attr:function(a,b){return 2===arguments.length?(this[0].setAttribute(a,b),this):this[0].getAttribute(a)},data:function(a,b){a="data-"+ba(a);if(2===arguments.length)return this[0].setAttribute(a,b),this;var c=this[0].getAttribute(a),d=!1;if(Ba.test(c)||+c+""===c)d=!0;try{return d?eval("0,"+c):c}catch(e){return c}},removeData:function(a){a="data-"+ba(a);
this[0].removeAttribute(a);return this},css:function(a,b){var c=this[0];if(c&&c.style){var d=/\_/.test(a)?P(a):a,e;a:{var f=e=void 0;if(Z[d])e=Z[d];else{e=e||ka.style;for(var g=0,k=la.length;g<k;g++)if(f=P(la[g]+d),f in e){e=Z[d]=f;break a}e=null}}a=e||d;if(1===arguments.length)return d=w[d+":get"]||w["_default:get"],d(c,a);e=typeof b;if("number"!==e||isFinite(b+""))return"number"===e&&!Ca[d]&&(b+="px"),d=w[d+":set"]||w["_default:set"],d(c,a,b),this}},bind:function(a,b,c){if(this[0])return avalon.bind(this[0],
a,b,c)},unbind:function(a,b,c){this[0]&&avalon.unbind(this[0],a,b,c);return this},val:function(a){var b=this[0];if(b&&1===b.nodeType){var c=0===arguments.length,d=c?":get":":set",e=$,f;f=b.tagName.toLowerCase();f="input"===f&&/checkbox|radio/.test(b.type)?"checked":f;if(d=e[f+d])var g=d(b,a);else{if(c)return(b.value||"").replace(/\r/g,"");b.value=a}}return c?g:this}});var w={},ka=document.documentElement,la=" -webkit- -o- -moz- -ms- WebKit- moz- webkit- ms- -khtml-".split(" "),Z={"float":"cssFloat"in
ka.style?"cssFloat":"styleFloat",background:"backgroundColor"},Ca=avalon.oneObject("columnCount,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");w["_default:set"]=function(a,b,c){a.style[b]=c};if(window.getComputedStyle)w["_default:get"]=function(a,b){var c,d=window.getComputedStyle(a,null);d&&(c="filter"===b?d.getPropertyValue(b):d[b],""===c&&(c=a.style[b]));return c};else{var Da=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Ea=/^(top|right|bottom|left)$/,B=!!window.XDomainRequest,Fa=
{thin:B?"1px":"2px",medium:B?"3px":"4px",thick:B?"5px":"6px"};w["_default:get"]=function(a,b){var c=a.currentStyle,d=c[b];if(Da.test(d)&&!Ea.test(d)){var e=a.style,f=e.left,g=a.runtimeStyle.left;a.runtimeStyle.left=c.left;e.left="fontSize"===b?"1em":d||0;d=e.pixelLeft+"px";e.left=f;a.runtimeStyle.left=g}"medium"===d&&(b=b.replace("Width","Style"),"none"===c[b]&&(d="0px"));return""===d?"auto":Fa[d]||d};w["opacity:set"]=function(a,b){a.style.filter="alpha(opacity="+100*b+")"};w["opacity:get"]=function(a){a=
a.filters.alpha||a.filters["DXImageTransform.Microsoft.Alpha"];return(a?a.opacity:100)/100+""}}"Width,Height".replace(s,function(a){var b=a.toLowerCase(),c="client"+a,d="scroll"+a,e="offset"+a;avalon.fn[b]=function(f){var g=this[0];if(0===arguments.length){if(g.setTimeout)return g["inner"+a]||g.document.documentElement[c];if(9===g.nodeType){var k=g.documentElement;return Math.max(g.body[d],k[d],g.body[e],k[e],k[c])}return parseFloat(this.css(b))||0}return this.css(b,f)}});avalon.fn.offset=function(){var a=
this[0],b=a&&a.ownerDocument,c={left:0,top:0};if(!b)return c;var a=a.getBoundingClientRect(),d=b.defaultView||b.parentWindow,b=navigator.vendor||"BackCompat"===b.compatMode?b.body:b.documentElement,e=b.clientLeft>>0,f=d.pageXOffset||b.scrollLeft;c.top=a.top+(d.pageYOffset||b.scrollTop)-(b.clientTop>>0);c.left=a.left+f-e;return c};var $={"option:get":function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text},"select:get":function(a,b){for(var c,d=a.options,e=a.selectedIndex,f=$["option:get"],
g="select-one"===a.type||0>e,k=g?null:[],h=g?e+1:d.length,l=0>e?h:g?e:0;l<h;l++)if(c=d[l],(c.selected||l===e)&&!c.disabled){b=f(c);if(g)return b;k.push(b)}return k},"select:set":function(a,b){b=[].concat(b);for(var c=$["option:get"],d=0,e;e=a.options[d++];)e.selected=!!~b.indexOf(c(e));b.length||(a.selectedIndex=-1)}};"\u53f8\u5f92\u6b63\u7f8e".trim||(String.prototype.trim=function(){return this.replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")});for(var Ha in{toString:1})Y=!1;Object.keys||(Object.keys=
function(a){var b=[],c;for(c in a)ja.call(a,c)&&b.push(c);if(Y&&a)for(var d=0;c=Y[d++];)ja.call(a,c)&&b.push(c);return b});Array.isArray||(Array.isArray=function(a){return"Array"===avalon.type(a)});Function.prototype.bind||(Function.prototype.bind=function(a){if(2>arguments.length&&void 0===a)return this;var b=this,c=arguments;return function(){var d=[],e;for(e=1;e<c.length;e++)d.push(c[e]);for(e=0;e<arguments.length;e++)d.push(arguments[e]);return b.apply(a,d)}});J(Array.prototype,{indexOf:function(a,
b){var c=this.length,d=~~b;for(0>d&&(d+=c);d<c;d++)if(this[d]===a)return d;return-1},lastIndexOf:function(a,b){var c=this.length,d=null==b?c-1:b;for(0>d&&(d=Math.max(0,c+d));0<=d;d--)if(this[d]===a)return d;return-1},forEach:F("","_",""),filter:F("r=[],j=0,","if(_)r[j++]=this[i]","return r"),map:F("r=[],","r[i]=_","return r"),some:F("","if(_)return true","return false"),every:F("","if(!_)return false","return true")});avalon.Array={sortBy:function(a,b,c){a=a.map(function(a,e){return{el:a,re:b.call(c,
a,e)}}).sort(function(a,b){var c=a.re,g=b.re;return c<g?-1:c>g?1:0});return avalon.Array.pluck(a,"el")},pluck:function(a,b){return a.filter(function(a){return null!=a[b]})},ensure:function(a){[].slice.call(arguments,1).forEach(function(b){~a.indexOf(b)||a.push(b)});return a},removeAt:function(a,b){return!!a.splice(b,1).length},remove:function(a,b){var c=a.indexOf(b);return~c?avalon.Array.removeAt(a,c):!1}};var C;"function"===typeof setImmediate?C=setImmediate.bind(window):function(){function a(){--e;
if(++g>=d){g=0;d*=4;for(var a=f&&Math.min(f-1,d);e<a;)++e,k()}for(;f;)--f,b=b.next,a=b.task,b.task=void 0,a();g=0}var b={task:void 0,next:null},c=b,d=2,e=0,f=0,g=0,k=void 0;C=function(a){c=c.next={task:a,next:null};e<++f&&e<d&&(++e,k())};if("undefined"!==typeof MessageChannel){var h=new MessageChannel;h.port1.onmessage=a;k=function(){h.port2.postMessage(0)}}else k=function(){setTimeout(a,0)}}();avalon.nextTick=C;avalon.define=function(a,b,c){var d=[].slice.call(arguments);"string"!==typeof a&&(a=
!avalon.models.root?"root":N(),d.unshift(a));Array.isArray(d[1])||d.splice(1,0,[]);b=d[1];"function"!==typeof d[2]&&avalon.error("factory\u5fc5\u987b\u662f\u51fd\u6570");c=d[2];d={$events:{},$watch:G,$unwatch:G,$fire:G};b.unshift(d);c(d);d=H(d);K=!0;b[0]=d;c.apply(0,b);b.shift();K=!1;d.$id=a;return avalon.models[a]=d};var R={$watch:function(a,b){var c=this.$events[a];c?c.push(b):this.$events[a]=[b];return this},$unwatch:function(a,b){var c=arguments.length;if(0===c)this.$events={};else if(1===c)this.$events[a]=
[];else for(var c=this.$events[a]||[],d=c.length;-1<--d;)if(c[d]===b)return c.splice(d,1);return this},$fire:function(a){for(var b=this.$events[a]||[],c=this.$events.$all||[],d=[].slice.call(arguments,1),e=0,f;f=b[e++];)f.apply(this,d);for(e=0;f=c[e++];)f.apply(this,d)}},na=avalon.oneObject("$index,$remove,$first,$last"),aa=Object.defineProperty;try{aa({},"_",{value:"x"});var L=Object.defineProperties}catch(Ia){"__defineGetter__"in avalon&&(aa=function(a,b,c){"value"in c&&(a[b]=c.value);"get"in c&&
a.__defineGetter__(b,c.get);"set"in c&&a.__defineSetter__(b,c.set);return a},L=function(a,b){for(var c in b)b.hasOwnProperty(c)&&aa(a,c,b[c]);return a})}if(!L&&window.VBArray){window.execScript("Function parseVB(code)\n\tExecuteGlobal(code)\nEnd Function","VBScript");var Ga=function(a,b,c){var d=a[b]&&a[b].set;if(3===arguments.length)d(c);else return d()},pa=function(a,b){b=b.concat();avalon.Array.ensure(b,"hasOwnProperty");avalon.Array.ensure(b,"$id");var c="VBClass"+setTimeout("1"),d={},e=[];e.push("Class "+
c,"\tPrivate [__data__], [__proxy__]","\tPublic Default Function [__const__](d, p)","\t\tSet [__data__] = d: set [__proxy__] = p","\t\tSet [__const__] = Me","\tEnd Function");b.forEach(function(a){d[a]=!0;e.push("\tPublic ["+a+"]")});Object.keys(a).forEach(function(a){d[a]=!0;e.push("\tPublic Property Let ["+a+"](val)",'\t\tCall [__proxy__]([__data__], "'+a+'", val)',"\tEnd Property","\tPublic Property Set ["+a+"](val)",'\t\tCall [__proxy__]([__data__], "'+a+'", val)',"\tEnd Property","\tPublic Property Get ["+
a+"]","\tOn Error Resume Next","\t\tSet["+a+'] = [__proxy__]([__data__],"'+a+'")',"\tIf Err.Number <> 0 Then","\t\t["+a+'] = [__proxy__]([__data__],"'+a+'")',"\tEnd If","\tOn Error Goto 0","\tEnd Property")});e.push("End Class");e.push("Function "+c+"Factory(a, b)","\tDim o","\tSet o = (New "+c+")(a, b)","\tSet "+c+"Factory = o","End Function");window.parseVB(e.join("\r\n"));c=window[c+"Factory"](a,Ga);c.hasOwnProperty=function(a){return!0===d[a]};return c}}avalon.scan=function(a,b){a=a||document.documentElement;
S(a,b?[b]:[],a.ownerDocument||document)};var ea={};"area,base,basefont,br,col,hr,img,input,link,meta,param,embed,wbr,script,style,textarea".replace(s,function(a){ea[a.toLowerCase()]=1});var ta=/([-.*+?^${}()|[\]\/\\])/g,ua=function(){return!this}(),wa=/"([^\\"\n]|\\.)*"/g,va=/'([^\\'\n]|\\.)*'/g,qa=/([^{]*)\{\{/,ra=/([^}]*)\}\}/;"contentEditable,isMap,longDesc,noHref,noResize,noShade,readOnly,useMap".replace(s,function(a){ia[a.toLowerCase()]=a});var p=avalon.bindingHandlers={"if":function(a,b){var c=
a.element,d=c.ownerDocument.createComment("placehoder"),e=c.parentNode;u(a.value,b,a,function(a){C(function(){if(a){if(!c.parentNode||11===c.parentNode.nodeType)e.replaceChild(c,d),c.noRemove=void 0}else 1===c.parentNode.nodeType&&(e.replaceChild(d,c),c.noRemove=!0)})})},on:function(a,b){var c=a.element;u(a.value,b,a,function(d){var e=a.args&&a.args[0];e&&"function"===typeof d&&(c.$scope=c.$scope||b[0],c.$scopes=b,avalon.bind(c,e,d))})},text:function(a,b){var c=a.node;u(a.value,b,a,function(a){c.nodeValue=
a})},visible:function(a,b){var c=a.element;u(a.value,b,a,function(a){c.style.display=a?"block":"none"})},href:function(a,b){var c=a.value.trim(),d=0===a.node.name.indexOf(r),e=a.type;!d&&/^\{\{([^}]+)\}\}$/.test(c)&&(d=!0,c=RegExp.$1);u(c,b,a,function(b){a.element[e]=b},d?null:ga(a.value))},disabled:function(a,b){var c=a.element,d=a.type,e=ia[d]||d;u(a.value,b,a,function(a){c[e]=!!a})},"class":function(a,b){var c=a.element,d=avalon(c);u(a.value,b,a,function(e){if(a.args){var f=a.args.join("-");"function"===
typeof e&&(c.$scope=b[0]||{},c.$scopes=b,e=e.call(c));d.toggleClass(f,e)}else"string"===typeof e?e.replace(s,function(a){d.addClass(a)}):e&&"object"===typeof e&&y(e,function(a,b){d.toggleClass(a,b)})})},ui:function(a,b){var c=a.value.trim();if("function"===typeof avalon.ui[c]){var d=(avalon(a.element).data("id")||"").trim(),d=d||c+setTimeout("1");a.element.setAttribute(r+"controller",d);var e=a.args&&a.args[0];if(e)for(var f,g=0,k;k=b[g++];)if(k.hasOwnProperty(e)){f=k[e];break}avalon.ui[c](a.element,
d,f)}},options:function(a,b){var c=a.element;for("SELECT"!==c.tagName&&avalon.error("options\u7ed1\u5b9a\u53ea\u80fd\u7ed1\u5728SELECT\u5143\u7d20");0<c.length;)c.remove(0);var d=a.args&&a.args[0];u(a.value,b,a,function(e){Array.isArray(e)?C(function(){c.setAttribute(r+"each-option",a.value);var f=new Option("{{option}}","");f.setAttribute("ms-value","option");c.options[0]=f;avalon.scan(c);if(isFinite(d)&&(f=c.options[d]))f.selected=!0;f=b[0];if(d&&Array.isArray(f[d])){var g=avalon(c);g.val(f[d]);
g.bind("change",function(){var a=g.val();e.clear();e.push.apply(e,a)})}}):avalon.error("options\u7ed1\u5b9a\u5fc5\u987b\u5bf9\u5e94\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4")})}},D=p.model=function(a,b){var c=a.element,d=c.tagName;if("function"===typeof D[d]){var e=a.node.value,f;b.forEach(function(a){!f&&a.hasOwnProperty(e)&&(f=a)});f=f||{};D[d](c,f,e)}};D.INPUT=function(a,b,c){void 0===a.name&&(a.name=c);var d=a.type,e=function(){b[c]=a.value},f=function(){var d=b[c];d!==a.value&&(a.value=void 0===
d?"":d)};/^(password|textarea|text)$/.test(d)?(d=a.attributes[r+"event"]||{},d=d.value,"change"===d?avalon.bind(a,d,e):(window.addEventListener?a.addEventListener("input",e,!1):a.attachEvent("onpropertychange",e),window.VBArray&&window.addEventListener&&(a.attachEvent("onkeydown",function(a){a=a.keyCode;(8===a||46===a)&&e()}),a.attachEvent("oncut",e)))):"radio"===d?(f=function(){a.checked=b[c]===a.value},e=function(){var d=!a.beforeChecked;b[c]=d;a.beforeChecked=a.checked=d},d=function(){a.beforeChecked=
a.checked},null===a.onbeforeactivate?avalon.bind(a,"beforeactivate",d):avalon.bind(a,"mouseover",d),avalon.bind(a,"click",e)):"checkbox"===d&&(e=function(){a.checked?avalon.Array.ensure(b[c],a.value):avalon.Array.remove(b[c],a.value)},f=function(){var d=[].concat(b[c]);a.checked=0<=d.indexOf(a.value)},avalon.bind(a,"click",e));t[q]=f;f.element=a;f();delete t[q]};D.SELECT=function(a,b,c){function d(){e.val(b[c])}var e=avalon(a);e.bind("change",function(){b[c]=e.val();e.val(b[c])});t[q]=d;d.element=
a;d();delete t[q]};D.TEXTAREA=D.INPUT;"autofocus,autoplay,async,checked,controls,declare,contenteditable,loop,multiple,noresize,readonly,selected".replace(s,function(a){p[a]=p.disabled});p.enabled=function(a,b){var c=a.element;u(a.value,b,a,function(a){c.disabled=!a})};p.html=function(a,b){var c=a.element;u(a.value,b,a,function(a){c.innerHTML=null==a?"":a+""})};"title, alt, src, value".replace(s,function(a){p[a]=p.href});"dblclick,mouseout,click,mouseover,mousemove,mousedown,mouseup,keypress,keydown,keyup,blur,focus,change".replace(s,
function(a){p[a]=function(b){b.args=[a];p.on.apply(0,arguments)}});p.each=function(a,b){function c(b,c,e){var g=f.$id;switch(b){case "push":y(f.slice(e),function(b,c){I(e+b,c,a)});break;case "unshift":f.insertBefore=d.firstChild;y(f.slice(0,f.length-e),function(b,c){I(b,c,a)});M(d,g);delete f.insertBefore;break;case "pop":var m=W(d,g,e-1);m&&X(m,g);break;case "shift":X(d.firstChild,g);M(d,g);break;case "splice":b=c[0];m=c[1];c=[].slice.call(c,2);var v=0<=m?m:e-b;if(v&&(m=W(d,g,b)))za(m,g,v),M(d,g);
c.length&&(m=W(d,g,b),f.insertBefore=m,y(c,function(b,c){I(b,c,a)}),M(d,g),delete f.insertBefore);break;case "clear":for(;d.firstChild;)d.removeChild(d.firstChild);break;case "update":for(;d.firstChild;)d.removeChild(d.firstChild);y(f,function(b,c){I(b,c,a)})}}var d=a.element,e=a.value,f=1===b.length?b[0][e]:V(e,b,a),g=d.ownerDocument,e=g.createDocumentFragment(),g=g.createComment(f.$id);for(e.appendChild(g);d.firstChild;)e.appendChild(d.firstChild);a.view=e;a.collection=f;a.scopeList=b;C(function(){y(f,
function(b,c){I(b,c,a)})});(f||{}).isCollection&&f[A].push(c)};avalon.filters={uppercase:function(a){return a.toUpperCase()},lowercase:function(a){return a.toLowerCase()},truncate:function(a,b,c){b=b||30;c=void 0===c?"...":c;return a.length>b?a.slice(0,b-c.length)+c:String(a)},camelize:P,escape:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},currency:function(a,b){return(b||"\uffe5")+avalon.filters.number(a)},number:function(a,
b,c,d){a=(a+"").replace(/[^0-9+\-Ee.]/g,"");a=!isFinite(+a)?0:+a;b=!isFinite(+b)?0:Math.abs(b);d=d||",";c=c||".";var e="",e=function(a,b){var c=Math.pow(10,b);return""+Math.round(a*c)/c},e=(b?e(a,b):""+Math.round(a)).split(".");3<e[0].length&&(e[0]=e[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,d));if((e[1]||"").length<b)e[1]=e[1]||"",e[1]+=Array(b-e[1].length+1).join("0");return e.join(c)}};avalon.filters.date=function(a){function b(a,b,c){var d="";0>a&&(d="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;c&&(a=
a.substr(a.length-b));return d+a}function c(a,c,d,e){return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return b(f,c,e)}}function d(a,b){return function(c,d){var e=c["get"+a](),f=(b?"SHORT"+a:a).toUpperCase();return d[f][e]}}function e(a){var b;if(b=a.match(h)){a=new Date(0);var c=0,d=0,e=b[8]?a.setUTCFullYear:a.setFullYear,f=b[8]?a.setUTCHours:a.setHours;b[9]&&(c=parseInt(b[9]+b[10],10),d=parseInt(b[9]+b[11],10));e.call(a,parseInt(b[1],10),parseInt(b[2],10)-1,parseInt(b[3],
10));f.call(a,parseInt(b[4]||0,10)-c,parseInt(b[5]||0,10)-d,parseInt(b[6]||0,10),parseInt(b[7]||0,10))}return a}var f={yyyy:c("FullYear",4),yy:c("FullYear",2,0,!0),y:c("FullYear",1),MMMM:d("Month"),MMM:d("Month",!0),MM:c("Month",2,1),M:c("Month",1,1),dd:c("Date",2),d:c("Date",1),HH:c("Hours",2),H:c("Hours",1),hh:c("Hours",2,-12),h:c("Hours",1,-12),mm:c("Minutes",2),m:c("Minutes",1),ss:c("Seconds",2),s:c("Seconds",1),sss:c("Milliseconds",3),EEEE:d("Day"),EEE:d("Day",!0),a:function(a,b){return 12>a.getHours()?
b.AMPMS[0]:b.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(b(Math[0<a?"floor":"ceil"](a/60),2)+b(Math.abs(a%60),2))}},g=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,k=/^\d+$/,h=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(b,c){var d="",h=[],p,q;c=c||"mediumDate";c=a[c]||c;"string"===typeof b&&(b=k.test(b)?parseInt(b,10):e(b));"Number"===avalon.type(b)&&(b=new Date(b));
if("Date"===avalon.type(b)){for(;c;)(q=g.exec(c))?(h=h.concat(q.slice(1)),c=h.pop()):(h.push(c),c=null);h.forEach(function(c){p=f[c];d+=p?p(b,a):c.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return d}}}({AMPMS:{"0":"\u4e0a\u5348",1:"\u4e0b\u5348"},DAY:{"0":"\u661f\u671f\u65e5",1:"\u661f\u671f\u4e00",2:"\u661f\u671f\u4e8c",3:"\u661f\u671f\u4e09",4:"\u661f\u671f\u56db",5:"\u661f\u671f\u4e94",6:"\u661f\u671f\u516d"},MONTH:{"0":"1\u6708",1:"2\u6708",2:"3\u6708",3:"4\u6708",4:"5\u6708",5:"6\u6708",6:"7\u6708",
7:"8\u6708",8:"9\u6708",9:"10\u6708",10:"11\u6708",11:"12\u6708"},SHORTDAY:{"0":"\u5468\u65e5",1:"\u5468\u4e00",2:"\u5468\u4e8c",3:"\u5468\u4e09",4:"\u5468\u56db",5:"\u5468\u4e94",6:"\u5468\u516d"},SHORTMONTH:{"0":"1\u6708",1:"2\u6708",2:"3\u6708",3:"4\u6708",4:"5\u6708",5:"6\u6708",6:"7\u6708",7:"8\u6708",8:"9\u6708",9:"10\u6708",10:"11\u6708",11:"12\u6708"},fullDate:"y\u5e74M\u6708d\u65e5EEEE",longDate:"y\u5e74M\u6708d\u65e5",medium:"yyyy-M-d ah:mm:ss",mediumDate:"yyyy-M-d",mediumTime:"ah:mm:ss",
"short":"yy-M-d ah:mm",shortDate:"yy-M-d",shortTime:"ah:mm"});avalon.ready(function(){avalon.scan()})})();
