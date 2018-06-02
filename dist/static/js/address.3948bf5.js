webpackJsonp([35],{507:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(579),n=s.n(a);for(var r in a)"default"!==r&&function(e){s.d(t,e,function(){return a[e]})}(r);var i=s(634),o=s(195),d=o(n.a,i.a,!1,null,null,null);t.default=d.exports},520:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(89),n=function(e){return e&&e.__esModule?e:{default:e}}(a),r=s(196);t.default={props:["signinUp","headerTitle","goBack","hasLogo","paddingLeft"],methods:(0,n.default)({},(0,r.mapActions)("global/user",["getUserInfo"])),computed:(0,n.default)({},(0,r.mapState)("global/user",["userInfo"])),mounted:function(){this.getUserInfo()}}},521:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(520),n=s.n(a);for(var r in a)"default"!==r&&function(e){s.d(t,e,function(){return a[e]})}(r);var i=s(522),o=s(195),d=o(n.a,i.a,!1,null,null,null);t.default=d.exports},522:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-navbar",{staticClass:"fixed-top"},[e._t("logo"),e._v(" "),s("b-navbar-nav",{staticClass:"flex-row align-items-center flex-nowrap",class:e.hasLogo?"":"w-100"},[e._t("search"),e._v(" "),e.goBack?s("b-nav-item",{on:{click:function(t){e.$router.go(-1)}}},[s("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]):e._e(),e._v(" "),e.headerTitle?s("b-nav-text",{staticClass:"text-center text-uppercase",class:{"pl-0":e.paddingLeft}},[e._v("\n            "+e._s(e.headerTitle)+"\n        ")]):e._e(),e._v(" "),e._t("msiteTitle"),e._v(" "),e.signinUp?s("b-nav-item",{attrs:{to:e.userInfo?"/profile":"/login"}},[e.userInfo?s("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}):s("span",{staticClass:"signin-text text-uppercase"},[e._v("SIGNIN/SIGNUP")])]):e._e(),e._v(" "),e._t("edit"),e._v(" "),e._t("changeCity"),e._v(" "),e._t("changeLogin")],2)],2)},n=[],r={render:a,staticRenderFns:n};t.a=r},579:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(90),r=a(n),i=s(91),o=a(i),d=s(89),u=a(d),l=s(521),c=a(l),f=s(135),v=a(f),_=s(196);t.default={data:function(){return{deleteTriggered:!1,actionText:"edit"}},components:{headerTop:c.default},mounted:function(){this.initData()},computed:(0,u.default)({},(0,_.mapState)({removeAddress:function(e){return e.global.address.removeAddress},userInfo:function(e){return e.global.user.userInfo}})),methods:(0,u.default)({},(0,_.mapActions)("global/address",["saveAddress"]),{initData:function(){this.userInfo&&this.userInfo.user_id&&this.saveAddress()},actionFunc:function(){"edit"===this.actionText?(this.actionText="done",this.deleteTriggered=!0):(this.actionText="edit",this.deleteTriggered=!1)},deleteSite:function(){function e(e,s){return t.apply(this,arguments)}var t=(0,o.default)(r.default.mark(function e(t,s){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.userInfo||!this.userInfo.user_id){e.next=4;break}return e.next=3,v.default.deleteAddress(this.userInfo.user_id,s.id);case 3:this.removeAddress.splice(t,1);case 4:case"end":return e.stop()}},e,this)}));return e}()}),watch:{userInfo:function(e){e&&e.user_id&&this.initData()}}}},634:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"user-address-container"}},[s("header-top",{attrs:{"header-title":"edit address","go-back":"true"}},[s("b-nav-item",{attrs:{slot:"edit"},on:{click:e.actionFunc},slot:"edit"},[e._v(" "+e._s(e.actionText))])],1),e._v(" "),s("b-container",{staticClass:"px-0 main-container h-100",attrs:{fluid:""}},[s("b-card",{staticClass:"user-address-card d-flex flex-column",attrs:{"no-body":""}},[s("b-card-body",{staticClass:"px-0 pt-0"},[s("b-list-group",e._l(e.removeAddress,function(t,a){return s("b-list-group-item",{key:a,staticClass:"d-flex flex-row align-items-center justify-content-between"},[s("div",{staticClass:"address-detail-text"},[s("p",[e._v(e._s(t.address))]),e._v(" "),s("p",[s("span",[e._v(e._s(t.phone))]),t.phone_bk?s("span",[e._v(", "+e._s(t.phone_bk))]):e._e()])]),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:e.deleteTriggered,expression:"deleteTriggered"}],staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:function(s){e.deleteSite(a,t)}}})])}))],1),e._v(" "),s("b-card-footer",{staticClass:"p-0"},[s("router-link",{staticClass:"d-flex flex-row align-items-center justify-content-between",attrs:{to:"/profile/info/address/add"}},[s("span",{staticClass:"pl-0"},[e._v("ADD NEW ADDRESS")]),e._v(" "),s("i",{staticClass:"fa fa-chevron-right ml-3",attrs:{"aria-hidden":"true"}})])],1)],1),e._v(" "),s("transition",{attrs:{name:"router-slid",mode:"out-in"}},[s("router-view")],1)],1)],1)},n=[],r={render:a,staticRenderFns:n};t.a=r}});