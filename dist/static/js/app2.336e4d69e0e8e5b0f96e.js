webpackJsonp([2],{"+7Mv":function(e,i,t){"use strict";var r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"preview",attrs:{id:"preview-page"}},[t("div",{staticClass:"preview-personalInformation"},[t("p",[e._v("姓名："+e._s(e.profile.personalInformation.name))]),e._v(" "),t("p",[e._v("出生日期："+e._s(e.profile.personalInformation.birthday))]),e._v(" "),t("p",[e._v("性别："+e._s(e.profile.personalInformation.sex))]),e._v(" "),t("p",[e._v("目前状态："+e._s(e.profile.personalInformation.currentStatus))]),e._v(" "),t("p",[e._v("工作年限："+e._s(e.profile.personalInformation.workingYears))]),e._v(" "),t("p",[e._v("所在城市："+e._s(e.profile.personalInformation.liveCity))]),e._v(" "),t("p",[e._v("期望城市："+e._s(e.profile.personalInformation.expectCity))]),e._v(" "),t("p",[e._v("期望职位："+e._s(e.profile.personalInformation.expectPosition))])]),e._v(" "),e.profile.work.length>0?t("div",{staticClass:"preview-work"},[t("h2",[e._v("工作经历")]),e._v(" "),e._l(e.profile.work,function(i){return t("ul",[t("li",[e._v("时间："+e._s(i.time))]),e._v(" "),t("li",[e._v("公司："+e._s(i.company))]),e._v(" "),t("li",[e._v("项目描述："+e._s(i.project))])])})],2):e._e(),e._v(" "),e.profile.education.length>0?t("div",{staticClass:"preview-education"},[t("h2",[e._v("教育情况")]),e._v(" "),e._l(e.profile.education,function(i){return t("ul",[t("li",[e._v("时间："+e._s(i.time))]),e._v(" "),t("li",[e._v("学校："+e._s(i.school))]),e._v(" "),t("li",[e._v("学习情况："+e._s(i.situation))])])})],2):e._e(),e._v(" "),e.profile.hobbies.length>0?t("div",{staticClass:"preview-hobbies"},[t("h2",[e._v("爱好")]),e._v(" "),t("ul",e._l(e.profile.hobbies,function(i){return t("li",[e._v(e._s(i.hobby))])}))]):e._e(),e._v(" "),e.profile.prize.length>0?t("div",{staticClass:"preview-prize"},[t("h2",[e._v("获奖情况")]),e._v(" "),e._l(e.profile.prize,function(i){return t("ul",[t("li",[e._v("获奖名："+e._s(i.name))]),e._v(" "),t("li",[e._v("获奖描述："+e._s(i.description))])])})],2):e._e(),e._v(" "),t("div",{staticClass:"preview-contact"},[t("ul",[t("li",[e._v("手机："+e._s(e.profile.contact.phone))]),e._v(" "),t("li",[e._v("邮箱："+e._s(e.profile.contact.email))])])])])},n=[],o={render:r,staticRenderFns:n};i.a=o},"+g7w":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=t("5vqR"),n=t("YtJ0"),o=t("1msT"),a=t("0SyO"),s=t.n(a),l=t("dHzK"),p=(t.n(l),t("KrKn")),c=(t.n(p),t("D4Bm"));t.n(c);r.default.config.productionTip=!1,r.default.use(s.a),new r.default({el:"#preview-page",store:n.a,template:"<App2/>",components:{App2:o.a}})},"1msT":function(e,i,t){"use strict";function r(e){t("S1Ea")}var n=t("Kc6h"),o=t("+7Mv"),a=t("0HdQ"),s=r,l=a(n.a,o.a,!1,s,null,null);i.a=l.exports},D4Bm:function(e,i){},Kc6h:function(e,i,t){"use strict";var r=t("UM2g"),n=t.n(r);i.a={name:"app2",created:function(){var e=this,i=new n.a.Query("Todo"),t=window.location.search,r=t.indexOf("="),o=t.substr(r+1);i.contains("username",o),i.find().then(function(i){if(0!==i.length){var t=i[0];e.$store.commit("CHANGE_PROFILE",JSON.parse(t.attributes.data))}},function(e){return console.log(e)})},computed:{profile:function(){return this.$store.getters.getProfile}}}},KrKn:function(e,i){},S1Ea:function(e,i){},YtJ0:function(e,i,t){"use strict";var r=t("Q+Ik"),n=t.n(r),o=t("KH7x"),a=t.n(o),s=t("MgeX"),l=t.n(s),p=t("HzJ8"),c=t.n(p),u=t("9rMa"),f=t("5vqR"),v=t("UM2g"),_=t.n(v);f.default.use(u.a);_.a.init({appId:"mvEzkoDQA3TSp6uTIbz81Mk0-gzGzoHsz",appKey:"hV7aJ6xx0vtOh9FIvc3e8eei"});var h=new u.a.Store({state:{profile:{personalInformation:{name:"",birthday:"",sex:"",currentStatus:"",workingYears:"",liveCity:"",expectCity:"",expectPosition:""},work:[{time:"",company:"",project:""},{time:"",company:"",project:""}],education:[{time:"",school:"",situation:""},{time:"",school:"",situation:""}],hobbies:[{hobby:""},{hobby:""}],prize:[{name:"",desription:""},{name:"",description:""}],contact:{phone:"",email:""}}},getters:{getProfile:function(e){var i={},t=e.profile,r=function(e){var i=!0,t=!0,r=!1,n=void 0;try{for(var o,a=c()(l()(e));!(t=(o=a.next()).done);t=!0){if(o.value){i=!1;break}}}catch(e){r=!0,n=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw n}}return i},o=!0,s=!1,p=void 0;try{for(var u,f=c()(n()(t));!(o=(u=f.next()).done);o=!0){var v=u.value,_=a()(v,2),h=_[0],d=_[1];!function(e,t){Array.isArray(t)?i[e]=t.filter(function(e){return!r(e)}):i[e]=t}(h,d)}}catch(e){s=!0,p=e}finally{try{!o&&f.return&&f.return()}finally{if(s)throw p}}return i}},mutations:{ADD_ITEM:function(e,i){switch(i){case 1:e.profile.work.push({time:"",company:"",project:""});break;case 2:e.profile.education.push({time:"",school:"",situation:""});break;case 3:e.profile.hobbies.push({hobby:""});break;case 4:e.profile.prize.push({name:"",description:""});break;default:return}},REMOVE_ITEM:function(e,i){var t=i.i1,r=i.i2,n=function(e,i){1!==e.length&&e.splice(i,1)};switch(t){case 1:n(e.profile.work,r);break;case 2:n(e.profile.education,r);break;case 3:n(e.profile.hobbies,r);break;case 4:n(e.profile.prize,r);break;default:return}},CHANGE_PROFILE:function(e,i){e.profile=i}}});i.a=h},dHzK:function(e,i){}},["+g7w"]);
//# sourceMappingURL=app2.336e4d69e0e8e5b0f96e.js.map