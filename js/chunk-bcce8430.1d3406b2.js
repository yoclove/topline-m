(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bcce8430"],{1925:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return i}));var r=e("b775");function a(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/suggestion",params:{q:t}})}function i(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/search",params:t})}},2909:function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("0d03"),e("d3b7"),e("25f0"),e("3ca3"),e("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){return r(t)||a(t)||i()}e.d(n,"a",(function(){return o}))},"3ca3":function(t,n,e){"use strict";var r=e("6547").charAt,a=e("69f3"),i=e("7dd0"),o="String Iterator",c=a.set,s=a.getterFor(o);i(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,n=s(this),e=n.string,a=n.index;return a>=e.length?{value:void 0,done:!0}:(t=r(e,a),n.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,n,e){"use strict";var r=e("f8c2"),a=e("7b0b"),i=e("9bdd"),o=e("e95a"),c=e("50c4"),s=e("8418"),u=e("35a1");t.exports=function(t){var n,e,l,d,f,p=a(t),h="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,b=void 0!==g,m=0,y=u(p);if(b&&(g=r(g,v>2?arguments[2]:void 0,2)),void 0==y||h==Array&&o(y))for(n=c(p.length),e=new h(n);n>m;m++)s(e,m,b?g(p[m],m):p[m]);else for(d=y.call(p),f=d.next,e=new h;!(l=f.call(d)).done;m++)s(e,m,b?i(d,g,[l.value,m],!0):l.value);return e.length=m,e}},"4e5d":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-nav-bar",{staticClass:"page-navbar",attrs:{title:t.title,"left-arrow":""},on:{"click-left":function(n){return t.$router.back()}}}),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,(function(t){return e("van-cell",{key:t.art_id.toString(),attrs:{title:t.title}})})),1)],1)},a=[],i=(e("d3b7"),e("2909")),o=(e("96cf"),e("1925")),c={name:"SearchResult",components:{},props:{},data:function(){return{list:[],loading:!1,finished:!1,page:1}},computed:{title:function(){return"".concat(this.$route.params.q,"的搜索结果")}},watch:{},created:function(){},methods:{onLoad:function(){var t,n,e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(Object(o["a"])({page:this.page,per_page:20,q:this.$route.params.q}));case 2:n=r.sent,e=n.data.data.results,(t=this.list).push.apply(t,Object(i["a"])(e)),this.loading=!1,e.length?this.page++:this.finished=!0;case 7:case"end":return r.stop()}}),null,this)}}},s=c,u=e("2877"),l=Object(u["a"])(s,r,a,!1,null,"3feafa67",null);n["default"]=l.exports},6547:function(t,n,e){var r=e("a691"),a=e("1d80"),i=function(t){return function(n,e){var i,o,c=String(a(n)),s=r(e),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):i:t?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},a630:function(t,n,e){var r=e("23e7"),a=e("4df4"),i=e("1c7e"),o=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:a})},d28b:function(t,n,e){var r=e("746f");r("iterator")},e01a:function(t,n,e){"use strict";var r=e("23e7"),a=e("83ab"),i=e("da84"),o=e("5135"),c=e("861d"),s=e("9bf2").f,u=e("e893"),l=i.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[n]=!0),n};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var h=p.toString,v="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,n=h.call(t);if(o(d,t))return"";var e=v?n.slice(7,-1):n.replace(g,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:f})}}}]);
//# sourceMappingURL=chunk-bcce8430.1d3406b2.js.map