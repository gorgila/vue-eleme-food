webpackJsonp([34],{509:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(581),n=s.n(a);for(var r in a)"default"!==r&&function(e){s.d(t,e,function(){return a[e]})}(r);var i=s(636),d=s(195),l=d(n.a,i.a,!1,null,null,null);t.default=l.exports},520:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(89),n=function(e){return e&&e.__esModule?e:{default:e}}(a),r=s(196);t.default={props:["signinUp","headerTitle","goBack","hasLogo","paddingLeft"],methods:(0,n.default)({},(0,r.mapActions)("global/user",["getUserInfo"])),computed:(0,n.default)({},(0,r.mapState)("global/user",["userInfo"])),mounted:function(){this.getUserInfo()}}},521:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(520),n=s.n(a);for(var r in a)"default"!==r&&function(e){s.d(t,e,function(){return a[e]})}(r);var i=s(522),d=s(195),l=d(n.a,i.a,!1,null,null,null);t.default=l.exports},522:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-navbar",{staticClass:"fixed-top"},[e._t("logo"),e._v(" "),s("b-navbar-nav",{staticClass:"flex-row align-items-center flex-nowrap",class:e.hasLogo?"":"w-100"},[e._t("search"),e._v(" "),e.goBack?s("b-nav-item",{on:{click:function(t){e.$router.go(-1)}}},[s("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]):e._e(),e._v(" "),e.headerTitle?s("b-nav-text",{staticClass:"text-center text-uppercase",class:{"pl-0":e.paddingLeft}},[e._v("\n            "+e._s(e.headerTitle)+"\n        ")]):e._e(),e._v(" "),e._t("msiteTitle"),e._v(" "),e.signinUp?s("b-nav-item",{attrs:{to:e.userInfo?"/profile":"/login"}},[e.userInfo?s("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}):s("span",{staticClass:"signin-text text-uppercase"},[e._v("SIGNIN/SIGNUP")])]):e._e(),e._v(" "),e._t("edit"),e._v(" "),e._t("changeCity"),e._v(" "),e._t("changeLogin")],2)],2)},n=[],r={render:a,staticRenderFns:n};t.a=r},581:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(89),r=a(n),i=s(521),d=a(i),l=s(135),o=a(l),c=s(196);t.default={data:function(){return{warning:!0,inputAddress:"",addressList:[]}},components:{headerTop:d.default},computed:(0,r.default)({},(0,c.mapState)("global/address",["addAddress"])),created:function(){this.inputAddress=this.addAddress?this.addAddress:this.inputAddress},methods:(0,r.default)({},(0,c.mapMutations)("global/address",["saveAddressName"]),{search:function(){var e=this;o.default.searchNearby(1,this.inputAddress).then(function(t){e.addressList=t,e.warning=!0,e.addressList.length>0&&(e.warning=!1,e.inputAddress.length||(e.warning=!0,e.addressList=[]))})},chooseAddress:function(e){this.saveAddressName(this.addressList[e].name),this.$router.go(-1)}})}},636:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"search-address-container"}},[s("header-top",{attrs:{"header-title":"search address","go-back":"true"}}),e._v(" "),s("b-container",{staticClass:"px-0 main-container d-flex flex-column h-100",attrs:{fluid:""}},[s("b-card",{staticClass:"search-address-card h-100",attrs:{"body-class":"d-flex flex-column h-100"}},[s("b-input-group",{staticClass:"d-flex flex-row align-items-center"},[s("b-form-input",{staticClass:"form-control app-input",attrs:{type:"text",placeholder:"Community/building/school etc"},model:{value:e.inputAddress,callback:function(t){e.inputAddress=t},expression:"inputAddress"}}),e._v(" "),s("b-input-group-append",{staticClass:"ml-2 align-items-center"},[s("b-button",{staticClass:"w-100 btn filled-btn",attrs:{name:"searchBtn",value:"search"},on:{click:function(t){t.preventDefault(),e.search(t)}}},[e._v("SEARCH")])],1)],1),e._v(" "),e.warning?s("div",{staticClass:"search-result d-flex flex-column"},[s("p",{staticClass:"warning-text-title"},[e._v("In order to delivery accurately, please choosing from searched address list !!!")]),e._v(" "),s("div",{staticClass:"warning-text d-flex flex-column align-items-center justify-content-center"},[s("p",[e._v("cannot find address ?")]),e._v(" "),s("p",[e._v("try to type community, building or school name in")]),e._v(" "),s("p",[e._v("detail address, such as house number, could fill in later !!!")])])]):s("div",{directives:[{name:"show",rawName:"v-show",value:e.addressList,expression:"addressList"}],staticClass:"search-result d-flex flex-column"},[s("p",{staticClass:"warning-text-title"},[e._v("Result")]),e._v(" "),s("b-list-group",e._l(e.addressList,function(t,a){return s("b-list-group-item",{key:a,on:{click:function(t){e.chooseAddress(a)}}},[s("h4",[e._v(e._s(t.name))]),e._v(" "),s("p",[e._v(e._s(t.address))])])}))],1)],1)],1)],1)},n=[],r={render:a,staticRenderFns:n};t.a=r}});