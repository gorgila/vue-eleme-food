webpackJsonp([20],{508:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(580),r=s.n(a);for(var i in a)"default"!==i&&function(e){s.d(t,e,function(){return a[e]})}(i);var n=s(635),l=s(195),d=l(r.a,n.a,!1,null,null,null);t.default=d.exports},520:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(89),r=function(e){return e&&e.__esModule?e:{default:e}}(a),i=s(196);t.default={props:["signinUp","headerTitle","goBack","hasLogo","paddingLeft"],methods:(0,r.default)({},(0,i.mapActions)("global/user",["getUserInfo"])),computed:(0,r.default)({},(0,i.mapState)("global/user",["userInfo"])),mounted:function(){this.getUserInfo()}}},521:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(520),r=s.n(a);for(var i in a)"default"!==i&&function(e){s.d(t,e,function(){return a[e]})}(i);var n=s(522),l=s(195),d=l(r.a,n.a,!1,null,null,null);t.default=d.exports},522:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-navbar",{staticClass:"fixed-top"},[e._t("logo"),e._v(" "),s("b-navbar-nav",{staticClass:"flex-row align-items-center flex-nowrap",class:e.hasLogo?"":"w-100"},[e._t("search"),e._v(" "),e.goBack?s("b-nav-item",{on:{click:function(t){e.$router.go(-1)}}},[s("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]):e._e(),e._v(" "),e.headerTitle?s("b-nav-text",{staticClass:"text-center text-uppercase",class:{"pl-0":e.paddingLeft}},[e._v("\n            "+e._s(e.headerTitle)+"\n        ")]):e._e(),e._v(" "),e._t("msiteTitle"),e._v(" "),e.signinUp?s("b-nav-item",{attrs:{to:e.userInfo?"/profile":"/login"}},[e.userInfo?s("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}):s("span",{staticClass:"signin-text text-uppercase"},[e._v("SIGNIN/SIGNUP")])]):e._e(),e._v(" "),e._t("edit"),e._v(" "),e._t("changeCity"),e._v(" "),e._t("changeLogin")],2)],2)},r=[],i={render:a,staticRenderFns:r};t.a=i},523:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["alertText","showAlert"],methods:{closeTip:function(){this.$emit("closeTip")}}}},524:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(523),r=s.n(a);for(var i in a)"default"!==i&&function(e){s.d(t,e,function(){return a[e]})}(i);var n=s(525),l=s(195),d=l(r.a,n.a,!1,null,null,null);t.default=d.exports},525:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-modal",{ref:"alertTipModal",staticClass:"alert-tip-container",attrs:{centered:"","hide-header":"","hide-footer":"",visible:e.showAlert,"body-class":"d-flex flex-column align-items-center"},on:{hidden:e.closeTip}},[s("i",{staticClass:"fa fa-exclamation-circle",attrs:{"aria-hidden":"true"}}),e._v(" "),s("p",{staticClass:"text-center"},[e._v(e._s(e.alertText))]),e._v(" "),s("b-button",{staticClass:"btn btn-outline-success w-100 frame-btn",on:{click:e.closeTip}},[e._v("CONFIRM")])],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},580:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(90),i=a(r),n=s(91),l=a(n),d=s(89),o=a(d),u=s(521),c=a(u),f=s(524),p=a(f),h=s(135),b=a(h),m=s(196);t.default={data:function(){return{usernameVerify:!1,addressVerify:!1,teleVerify:!1,backupTeleVerify:!1,isBtnNotOpacity:!1,username:"",detailAddress:"",addressVeriMsg:"",teleNumber:"",teleVeriMsg:"",backupTeleNumber:"",backupTeleVeriMsg:"",showAlert:!1,alertText:null}},components:{headerTop:c.default,alertTip:p.default},computed:(0,o.default)({},(0,m.mapState)({userInfo:function(e){return e.global.user.userInfo},addAddress:function(e){return e.global.address.addAddress},geohash:function(e){return e.global.order.geohash}})),methods:(0,o.default)({},(0,m.mapMutations)("global/address",["addUserAddress"]),{usernameInput:function(){this.username?this.usernameVerify=!1:this.usernameVerify=!0,this.setButtonOpacity()},addressInput:function(){this.addressVerify=!0,0===this.detailAddress.length?this.addressVeriMsg="Please fill in delivery address in detail !!!":this.detailAddress.length>0&&this.detailAddress.length<=2?this.addressVeriMsg="The delivery address is too short, cannot be recognized !!!":(this.addressVeriMsg="",this.addressVerify=!1),this.setButtonOpacity()},teleInput:function(){this.teleVerify=!0,/^[1][358][0-9]{9}$/.test(this.teleNumber)?this.teleVerify=!1:0===this.teleNumber.length?this.teleVeriMsg="telephone cannot be empty !!!":this.teleVeriMsg="Please fill in correct telephone number !!!",this.setButtonOpacity()},backupTeleInput:function(){this.backupTeleVerify=!0,/^[1][358][0-9]{9}$/.test(this.backupTeleNumber)||""==this.backupTeleNumber?this.backupTeleVerify=!1:this.backupTeleVeriMsg="Please fill in correct backup telephone number !!!",this.setButtonOpacity()},setButtonOpacity:function(){this.username&&this.detailAddress&&!this.teleVerify?this.isBtnNotOpacity=!0:this.isBtnNotOpacity=!1},submitAddress:function(){function e(){return t.apply(this,arguments)}var t=(0,l.default)(i.default.mark(function e(){var t;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.default.postAddress(this.userInfo.user_id,this.detailAddress,this.addAddress,this.geohash,this.username,this.teleNumber,this.backupTeleNumber,0,1,"company",4);case 2:t=e.sent,t.message?(this.showAlert=!0,this.alertText=t.message):this.isBtnNotOpacity&&(this.addUserAddress({name:this.username,address:this.detailAddress,address_detail:this.addAddress,geohash:"wtw37r7cxep4",phone:this.teleNumber,phone_bk:this.backupTeleNumber,poi:this.addAddress,poi_type:0}),this.$router.go(-1));case 4:case"end":return e.stop()}},e,this)}));return e}()})}},635:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"add-address-container"}},[s("header-top",{attrs:{"header-title":"add new address","go-back":"true"}}),e._v(" "),s("b-container",{staticClass:"px-0 main-container h-100",attrs:{fluid:""}},[s("b-card",{staticClass:"add-address-card d-flex flex-column",attrs:{"no-body":""}},[s("b-card-body",[s("b-form",{staticClass:"d-flex flex-column",on:{sumbit:function(e){e.preventDefault()}}},[s("b-form-input",{staticClass:"form-control app-input",class:{invaildated:e.usernameVerify},attrs:{type:"text",placeholder:"Username"},on:{input:e.usernameInput},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),e.usernameVerify?s("p",{staticClass:"verify-text"},[e._v("Please fill in your name !!!")]):e._e(),e._v(" "),s("router-link",{attrs:{to:"/profile/info/address/add/addDetail"}},[s("b-form-input",{staticClass:"form-control app-input",attrs:{type:"text",placeholder:"Community/building/school etc",readonly:"",value:e.addAddress}})],1),e._v(" "),s("b-form-input",{staticClass:"form-control app-input",class:{invaildated:e.addressVerify},attrs:{type:"text",placeholder:"Delivery address detail"},on:{input:e.addressInput},model:{value:e.detailAddress,callback:function(t){e.detailAddress=t},expression:"detailAddress"}}),e._v(" "),e.addressVerify?s("p",{staticClass:"verify-text"},[e._v(e._s(e.addressVeriMsg))]):e._e(),e._v(" "),s("b-form-input",{staticClass:"form-control app-input",class:{invaildated:e.teleVerify},attrs:{type:"text",placeholder:"Phone number"},on:{input:e.teleInput},model:{value:e.teleNumber,callback:function(t){e.teleNumber=t},expression:"teleNumber"}}),e._v(" "),e.teleVerify?s("p",{staticClass:"verify-text"},[e._v(e._s(e.teleVeriMsg))]):e._e(),e._v(" "),s("b-form-input",{staticClass:"form-control app-input",attrs:{type:"text",placeholder:"Backup phone number (optional)"},on:{input:e.backupTeleInput},model:{value:e.backupTeleNumber,callback:function(t){e.backupTeleNumber=t},expression:"backupTeleNumber"}}),e._v(" "),e.backupTeleVerify?s("p",{staticClass:"verify-text"},[e._v(e._s(e.backupTeleVeriMsg))]):e._e()],1)],1),e._v(" "),s("b-card-footer",[s("b-button",{staticClass:"w-100 btn filled-btn fade-btn",class:{"font-opacity":e.isBtnNotOpacity},attrs:{name:"addAddressBtn",value:"ADD ADDRESS"},on:{click:function(t){t.preventDefault(),e.submitAddress(t)}}},[e._v("ADD ADDRESS")])],1)],1),e._v(" "),s("alert-tip",{attrs:{alertText:e.alertText,showAlert:e.showAlert},on:{closeTip:function(t){e.showAlert=!1}}}),e._v(" "),s("transition",{attrs:{name:"router-slid",mode:"out-in"}},[s("router-view")],1)],1)],1)},r=[],i={render:a,staticRenderFns:r};t.a=i}});