(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"005a":function(n,t,i){"use strict";(function(n){i("26fc");e(i("66fd"));var t=e(i("c374"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,i("543d")["createPage"])},"48bf":function(n,t,i){"use strict";var e=i("9832"),a=i.n(e);a.a},9832:function(n,t,i){},c374:function(n,t,i){"use strict";i.r(t);var e=i("f336"),a=i("dbd1");for(var r in a)"default"!==r&&function(n){i.d(t,n,(function(){return a[n]}))}(r);i("48bf");var o,u=i("f0c5"),l=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);t["default"]=l.exports},d67c:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,t){var i;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(i=o(n))||t&&n&&"number"===typeof n.length){i&&(n=i);var e=0,a=function(){};return{s:a,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u=!0,l=!1;return{s:function(){i=n[Symbol.iterator]()},n:function(){var n=i.next();return u=n.done,n},e:function(n){l=!0,r=n},f:function(){try{u||null==i.return||i.return()}finally{if(l)throw r}}}}function o(n,t){if(n){if("string"===typeof n)return u(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);return"Object"===i&&n.constructor&&(i=n.constructor.name),"Map"===i||"Set"===i?Array.from(n):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(n,t):void 0}}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=n[i];return e}function l(n,t,i,e,a,r,o){try{var u=n[r](o),l=u.value}catch(s){return void i(s)}u.done?t(l):Promise.resolve(l).then(e,a)}function s(n){return function(){var t=this,i=arguments;return new Promise((function(e,a){var r=n.apply(t,i);function o(n){l(r,e,a,o,u,"next",n)}function u(n){l(r,e,a,o,u,"throw",n)}o(void 0)}))}}i("9769");var c=function(){Promise.all([i.e("common/vendor"),i.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(i("eb76"))}.bind(null,i)).catch(i.oe)},f={components:{uniIcons:c},data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"商品名称"}],queryIndex:0,searchForm:{shangpinxinxishangpinmingcheng:""},CustomBar:"0",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],maijialist:[],shangpinxinxilist:[],homemaijialist:[],homeshangpinxinxilist:[],news:[]}},onShow:function(){var n=this;return s(e.default.mark((function t(){var i,a,o,u,l;return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),i=[],t.next=4,n.$api.page("config",{page:1,limit:5});case 4:a=t.sent,o=r(a.data.list);try{for(o.s();!(u=o.n()).done;)l=u.value,l.name.indexOf("picture")>=0&&l.value&&""!=l.value&&null!=l.value&&i.push({img:l.value})}catch(e){o.e(e)}finally{o.f()}return i&&(n.swiperList=i),t.next=10,n.$api.list("news",{page:1,limit:3});case 10:return a=t.sent,n.news=a.data.list,t.next=14,n.$api.recommend("maijia",1,6);case 14:return a=t.sent,n.maijialist=a.data.list,t.next=18,n.$api.recommend("shangpinxinxi",1,6);case 18:return a=t.sent,n.shangpinxinxilist=a.data.list,t.next=22,n.$api.list("maijia",{page:1,limit:4});case 22:return a=t.sent,n.homemaijialist=a.data.list,t.next=26,n.$api.list("shangpinxinxi",{page:1,limit:4});case 26:a=t.sent,n.homeshangpinxinxilist=a.data.list;case 28:case"end":return t.stop()}}),t)})))()},methods:{queryChange:function(n){this.queryIndex=n.detail.value,this.searchForm.shangpinxinxishangpinmingcheng=""},onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){0==this.queryIndex&&(n.setStorageSync("indexQueryCondition",this.searchForm.shangpinxinxishangpinmingcheng),this.searchForm.shangpinxinxishangpinmingcheng=""),n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=f}).call(this,i("543d")["default"])},dbd1:function(n,t,i){"use strict";i.r(t);var e=i("d67c"),a=i.n(e);for(var r in e)"default"!==r&&function(n){i.d(t,n,(function(){return e[n]}))}(r);t["default"]=a.a},f336:function(n,t,i){"use strict";var e;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return e}));var a=function(){var n=this,t=n.$createElement,i=(n._self._c,n.__map(n.maijialist,(function(t,i){var e=n.__get_orig(t),a=t.zhaopian?t.zhaopian.split(","):null;return{$orig:e,g0:a}}))),e=null,a=n.__map(n.shangpinxinxilist,(function(t,i){var e=n.__get_orig(t),a=t.shangpintupian?t.shangpintupian.split(","):null;return{$orig:e,g2:a}})),r=null,o=n.__map(n.homemaijialist,(function(t,i){var e=n.__get_orig(t),a=t.zhaopian?t.zhaopian.split(","):null;return{$orig:e,g4:a}})),u=null,l=n.__map(n.homeshangpinxinxilist,(function(t,i){var e=n.__get_orig(t),a=t.shangpintupian?t.shangpintupian.split(","):null;return{$orig:e,g6:a}})),s=null;n.$mp.data=Object.assign({},{$root:{l0:i,l1:e,l2:a,l3:r,l4:o,l5:u,l6:l,l7:s}})},r=[]}},[["005a","common/runtime","common/vendor"]]]);