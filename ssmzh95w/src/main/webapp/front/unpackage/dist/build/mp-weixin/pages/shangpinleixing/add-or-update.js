(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinleixing/add-or-update"],{"82db":function(e,n,t){"use strict";t.r(n);var r=t("ce7e"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},a63c:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},a7ab:function(e,n,t){},c32a:function(e,n,t){"use strict";(function(e){t("26fc");r(t("66fd"));var n=r(t("f327"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},c849:function(e,n,t){"use strict";var r=t("a7ab"),a=t.n(r);a.a},ce7e:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,i){try{var c=e[u](i),o=c.value}catch(s){return void t(s)}c.done?n(o):Promise.resolve(o).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){u(i,r,a,c,o,"next",e)}function o(e){u(i,r,a,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("17ba"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{ruleForm:{fenlei:""},user:{},ro:{fenlei:!1}}},components:{wPicker:c},computed:{},onLoad:function(n){var t=this;return i(r.default.mark((function a(){var u,i,c,o;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,t.$api.session(u);case 3:if(i=a.sent,t.user=i.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=13;break}return t.ruleForm.id=n.id,a.next=11,t.$api.info("shangpinleixing",t.ruleForm.id);case 11:i=a.sent,t.ruleForm=i.data;case 13:if(!n.cross){a.next=24;break}c=e.getStorageSync("crossObj"),a.t0=r.default.keys(c);case 16:if((a.t1=a.t0()).done){a.next=24;break}if(o=a.t1.value,"fenlei"!=o){a.next=22;break}return t.ruleForm.fenlei=c[o],t.ro.fenlei=!0,a.abrupt("continue",16);case 22:a.next=16;break;case 24:t.styleChange();case 25:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.id){n.next=5;break}return n.next=3,e.$api.update("shangpinleixing",e.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,e.$api.add("shangpinleixing",e.ruleForm);case 7:e.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])},f327:function(e,n,t){"use strict";t.r(n);var r=t("a63c"),a=t("82db");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("c849");var i,c=t("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"f1eeaf8a",null,!1,r["a"],i);n["default"]=o.exports}},[["c32a","common/runtime","common/vendor"]]]);