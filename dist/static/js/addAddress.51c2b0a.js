webpackJsonp([25],{489:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(561),r=a.n(s);for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);var i=a(608),l=a(195),o=l(r.a,i.a,!1,null,null,null);t.default=o.exports},520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(89),r=function(e){return e&&e.__esModule?e:{default:e}}(s),n=a(196);t.default={props:["signinUp","headerTitle","goBack","hasLogo","paddingLeft"],methods:(0,r.default)({},(0,n.mapActions)("global/user",["getUserInfo"])),computed:(0,r.default)({},(0,n.mapState)("global/user",["userInfo"])),mounted:function(){this.getUserInfo()}}},521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(520),r=a.n(s);for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);var i=a(522),l=a(195),o=l(r.a,i.a,!1,null,null,null);t.default=o.exports},522:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{staticClass:"fixed-top"},[e._t("logo"),e._v(" "),a("b-navbar-nav",{staticClass:"flex-row align-items-center flex-nowrap",class:e.hasLogo?"":"w-100"},[e._t("search"),e._v(" "),e.goBack?a("b-nav-item",{on:{click:function(t){e.$router.go(-1)}}},[a("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]):e._e(),e._v(" "),e.headerTitle?a("b-nav-text",{staticClass:"text-center text-uppercase",class:{"pl-0":e.paddingLeft}},[e._v("\n            "+e._s(e.headerTitle)+"\n        ")]):e._e(),e._v(" "),e._t("msiteTitle"),e._v(" "),e.signinUp?a("b-nav-item",{attrs:{to:e.userInfo?"/profile":"/login"}},[e.userInfo?a("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}):a("span",{staticClass:"signin-text text-uppercase"},[e._v("SIGNIN/SIGNUP")])]):e._e(),e._v(" "),e._t("edit"),e._v(" "),e._t("changeCity"),e._v(" "),e._t("changeLogin")],2)],2)},r=[],n={render:s,staticRenderFns:r};t.a=n},523:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["alertText","showAlert"],methods:{closeTip:function(){this.$emit("closeTip")}}}},524:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(523),r=a.n(s);for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);var i=a(525),l=a(195),o=l(r.a,i.a,!1,null,null,null);t.default=o.exports},525:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"alertTipModal",staticClass:"alert-tip-container",attrs:{centered:"","hide-header":"","hide-footer":"",visible:e.showAlert,"body-class":"d-flex flex-column align-items-center"},on:{hidden:e.closeTip}},[a("i",{staticClass:"fa fa-exclamation-circle",attrs:{"aria-hidden":"true"}}),e._v(" "),a("p",{staticClass:"text-center"},[e._v(e._s(e.alertText))]),e._v(" "),a("b-button",{staticClass:"btn btn-outline-success w-100 frame-btn",on:{click:e.closeTip}},[e._v("CONFIRM")])],1)},r=[],n={render:s,staticRenderFns:r};t.a=n},561:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(90),n=s(r),i=a(91),l=s(i),o=a(89),d=s(o),u=a(521),c=s(u),f=a(524),p=s(f),h=a(135),m=s(h),v=a(196);t.default={data:function(){return{username:null,gender:1,phoneNum:null,hasBackupPhone:!1,backupPhoneNum:null,addressDetail:null,addressTag:null,addressTagType:1,showAlert:!1,alertText:null}},components:{headerTop:c.default,alertTip:p.default},computed:(0,d.default)({},(0,v.mapState)({userInfo:function(e){return e.global.user.userInfo},searchAddress:function(e){return e.global.address.searchAddress},geohash:function(e){return e.global.order.geohash}})),methods:(0,d.default)({},(0,v.mapMutations)("global/address",["confirmAddress"]),{addedAddress:function(){function e(){return t.apply(this,arguments)}var t=(0,l.default)(n.default.mark(function e(){var t;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.addressTag,e.next="home"===e.t0?3:"school"===e.t0?5:"company"===e.t0?7:9;break;case 3:return this.addressTagType=2,e.abrupt("break",9);case 5:return this.addressTagType=3,e.abrupt("break",9);case 7:return this.addressTagType=4,e.abrupt("break",9);case 9:if(this.userInfo&&this.userInfo.user_id){e.next=14;break}this.showAlert=!0,this.alertText="Please login !!!",e.next=38;break;case 14:if(this.username){e.next=19;break}this.showAlert=!0,this.alertText="Please fill in contact name !!!",e.next=38;break;case 19:if(this.phoneNum){e.next=24;break}this.showAlert=!0,this.alertText="Please fill in contact phone number !!!",e.next=38;break;case 24:if(this.searchAddress){e.next=29;break}this.showAlert=!0,this.alertText="Please fill in address !!!",e.next=38;break;case 29:if(this.addressDetail){e.next=34;break}this.showAlert=!0,this.alertText="Please fill in address detail !!!",e.next=38;break;case 34:return e.next=36,m.default.postAddress(this.userInfo.user_id,this.searchAddress.name,this.addressDetail,this.geohash,this.username,this.phoneNum,this.backupPhoneNum,0,this.gender,this.addressTag,this.addressTagType);case 36:t=e.sent,t.message?(this.showAlert=!0,this.alertText=t.message):(this.confirmAddress(1),this.$router.go(-1));case 38:case"end":return e.stop()}},e,this)}));return e}()})}},608:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"order-add-address-container"}},[a("header-top",{attrs:{"header-title":"add new address","go-back":"true"}}),e._v(" "),a("b-container",{staticClass:"px-0 main-container h-100",attrs:{fluid:""}},[a("b-card",{staticClass:"add-address-card h-100",attrs:{"body-class":"p-0 h-100 d-flex flex-column"}},[a("b-list-group",[a("b-list-group-item",{staticClass:"d-flex flex-column align-items-end"},[a("b-input-group",{staticClass:"d-flex flex-row align-items-center"},[a("b-input-group-prepend",[a("span",[e._v("Contact Name: ")])]),e._v(" "),a("b-form-input",{staticClass:"form-control app-input",attrs:{type:"text",placeholder:"contact name"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),a("b-form-radio-group",{staticClass:"d-flex flex-row align-items-center justify-content-around",attrs:{id:"gender",name:"genderRadio",plain:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[a("b-form-radio",{staticClass:"m-0",attrs:{value:"1"}},[e._v("Mr")]),e._v(" "),a("b-form-radio",{staticClass:"m-0",attrs:{value:"2"}},[e._v("Ms")])],1)],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex flex-column align-items-end"},[a("b-input-group",{staticClass:"d-flex flex-row align-items-center"},[a("b-input-group-prepend",[a("span",[e._v("Phone Number: ")])]),e._v(" "),a("b-form-input",{staticClass:"form-control app-input",attrs:{type:"text",placeholder:"phone number",name:"phone"},model:{value:e.phoneNum,callback:function(t){e.phoneNum=t},expression:"phoneNum"}}),e._v(" "),a("b-input-group-append",{staticClass:"ml-2 align-items-center"},[a("i",{staticClass:"fa fa-plus ml-2",attrs:{"aria-hidden":"true"},on:{click:function(t){e.hasBackupPhone=!0}}})])],1),e._v(" "),e.hasBackupPhone?a("b-form-input",{staticClass:"form-control app-input short-input",attrs:{type:"text",placeholder:"backup phone number",name:"backup phone"},model:{value:e.backupPhoneNum,callback:function(t){e.backupPhoneNum=t},expression:"backupPhoneNum"}}):e._e()],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex flex-column align-items-end"},[a("div",{staticClass:"delivery-item d-flex flex-row align-items-center w-100"},[a("span",[e._v("Delivery address: ")]),e._v(" "),a("router-link",{attrs:{to:"/confirmOrder/chooseAddress/addAddress/searchAddress",tag:"p"}},[e._v(e._s(e.searchAddress?e.searchAddress.name:"Community/building/school etc"))])],1),e._v(" "),a("b-form-input",{staticClass:"form-control app-input short-input",attrs:{type:"text",placeholder:"address detail (such as house number etc)",name:"address detail"},model:{value:e.addressDetail,callback:function(t){e.addressDetail=t},expression:"addressDetail"}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex flex-row align-items-center"},[a("span",[e._v("Tag: ")]),e._v(" "),a("b-form-radio-group",{staticClass:"d-flex flex-row align-items-center justify-content-between",attrs:{id:"addressTag",name:"addressTagRadio",plain:""},model:{value:e.addressTag,callback:function(t){e.addressTag=t},expression:"addressTag"}},[a("b-form-radio",{staticClass:"m-0",attrs:{value:"none"}},[e._v("none")]),e._v(" "),a("b-form-radio",{staticClass:"m-0",attrs:{value:"home"}},[e._v("home")]),e._v(" "),a("b-form-radio",{staticClass:"m-0",attrs:{value:"school"}},[e._v("school")]),e._v(" "),a("b-form-radio",{staticClass:"m-0",attrs:{value:"company"}},[e._v("company")])],1)],1)],1),e._v(" "),a("b-button",{staticClass:"btn filled-btn",attrs:{name:"addBtn",value:"ADD"},on:{click:function(t){t.preventDefault(),e.addedAddress(t)}}},[e._v("ADD")])],1),e._v(" "),a("alert-tip",{attrs:{alertText:e.alertText,showAlert:e.showAlert},on:{closeTip:function(t){e.showAlert=!1}}}),e._v(" "),a("transition",{attrs:{name:"router-slid",mode:"out-in"}},[a("router-view")],1)],1)],1)},r=[],n={render:s,staticRenderFns:r};t.a=n}});