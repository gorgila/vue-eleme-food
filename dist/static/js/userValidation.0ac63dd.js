webpackJsonp([23],{487:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(559),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var s=a(606),o=a(195),l=o(r.a,s.a,!1,null,null,null);t.default=l.exports},520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(89),r=function(e){return e&&e.__esModule?e:{default:e}}(n),i=a(196);t.default={props:["signinUp","headerTitle","goBack","hasLogo","paddingLeft"],methods:(0,r.default)({},(0,i.mapActions)("global/user",["getUserInfo"])),computed:(0,r.default)({},(0,i.mapState)("global/user",["userInfo"])),mounted:function(){this.getUserInfo()}}},521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(520),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var s=a(522),o=a(195),l=o(r.a,s.a,!1,null,null,null);t.default=l.exports},522:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{staticClass:"fixed-top"},[e._t("logo"),e._v(" "),a("b-navbar-nav",{staticClass:"flex-row align-items-center flex-nowrap",class:e.hasLogo?"":"w-100"},[e._t("search"),e._v(" "),e.goBack?a("b-nav-item",{on:{click:function(t){e.$router.go(-1)}}},[a("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]):e._e(),e._v(" "),e.headerTitle?a("b-nav-text",{staticClass:"text-center text-uppercase",class:{"pl-0":e.paddingLeft}},[e._v("\n            "+e._s(e.headerTitle)+"\n        ")]):e._e(),e._v(" "),e._t("msiteTitle"),e._v(" "),e.signinUp?a("b-nav-item",{attrs:{to:e.userInfo?"/profile":"/login"}},[e.userInfo?a("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}):a("span",{staticClass:"signin-text text-uppercase"},[e._v("SIGNIN/SIGNUP")])]):e._e(),e._v(" "),e._t("edit"),e._v(" "),e._t("changeCity"),e._v(" "),e._t("changeLogin")],2)],2)},r=[],i={render:n,staticRenderFns:r};t.a=i},523:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["alertText","showAlert"],methods:{closeTip:function(){this.$emit("closeTip")}}}},524:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(523),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var s=a(525),o=a(195),l=o(r.a,s.a,!1,null,null,null);t.default=l.exports},525:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"alertTipModal",staticClass:"alert-tip-container",attrs:{centered:"","hide-header":"","hide-footer":"",visible:e.showAlert,"body-class":"d-flex flex-column align-items-center"},on:{hidden:e.closeTip}},[a("i",{staticClass:"fa fa-exclamation-circle",attrs:{"aria-hidden":"true"}}),e._v(" "),a("p",{staticClass:"text-center"},[e._v(e._s(e.alertText))]),e._v(" "),a("b-button",{staticClass:"btn btn-outline-success w-100 frame-btn",on:{click:e.closeTip}},[e._v("CONFIRM")])],1)},r=[],i={render:n,staticRenderFns:r};t.a=i},559:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(90),i=n(r),s=a(91),o=n(s),l=a(89),c=n(l),u=a(521),d=n(u),f=a(524),v=n(f),p=a(135),m=n(p),h=a(196);t.default={data:function(){return{sig:null,validateCode:null,computedTime:60,type:"sms",reSendVerifyCode:null,showAlert:!1,alertText:null,isVoiceTipShown:!1}},components:{alertTip:v.default,headerTop:d.default},created:function(){this.sig=this.$route.query.sig},mounted:function(){this.getMobileCode()},beforeDestroy:function(){clearInterval(this.timer)},computed:(0,c.default)({},(0,h.mapState)("global/order",["needValidation","cart_Id","orderParam"])),methods:(0,c.default)({},(0,h.mapMutations)("global/order",["changeOrderParam","orderSuccess"]),{getMobileCode:function(){var e=this;this.computedTime=60,clearInterval(this.timer),this.timer=setInterval(function(){0===--e.computedTime&&clearInterval(e.timer)},1e3),this.type="sms",this.getData()},getData:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.default.rePostVerify(this.cart_Id,this.sig,this.type);case 2:this.reSendVerifyCode=e.sent,this.reSendVerifyCode.message&&(this.showAlert=!0,this.alertText=this.reSendVerifyCode.message);case 4:case"end":return e.stop()}},e,this)}));return e}(),sendVoice:function(){this.isVoiceTipShown=!0,this.type="voice",this.getData()},confirmedOrder:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(){var t;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.changeOrderParam({validation_code:this.validateCode,validation_token:this.reSendVerifyCode.validate_token}),e.next=3,m.default.validateOrders(this.orderParam);case 3:if(t=e.sent,!t.message){e.next=8;break}return this.showAlert=!0,this.alertText=t.message,e.abrupt("return");case 8:this.orderSuccess(t),this.$router.push("/confirmOrder/payment");case 10:case"end":return e.stop()}},e,this)}));return e}()})}},606:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"order-validation-container"}},[a("header-top",{attrs:{"go-back":"true","header-title":"user mobile validation"}}),e._v(" "),a("b-container",{staticClass:"position-relative px-0 main-container d-flex flex-column h-100",attrs:{fluid:""}},[a("b-card",{staticClass:"order-validation-card h-100",attrs:{"no-body":""}},[a("b-card-header",[a("p",[e._v("Cannot recieve message? Please use "),a("span",{on:{click:e.sendVoice}},[e._v("voice validation")])]),e._v(" "),e.isVoiceTipShown?a("div",{staticClass:"voice-tip"},[a("p",[e._v("Calling ...")]),e._v(" "),a("p",[e._v("Please be aware calling from "),a("span",[e._v("10105757")]),e._v(" or "),a("span",[e._v("021-315754XX")])])]):e._e()]),e._v(" "),a("b-card-body",{staticClass:"d-flex flex-column"},[a("b-form",{staticClass:"d-flex flex-column align-items-center",on:{sumbit:function(e){e.preventDefault()}}},[a("b-input-group",{staticClass:"d-flex flex-row align-items-center"},[a("b-form-input",{staticClass:"form-control app-input",attrs:{type:"text",placeholder:"validate code",maxlength:"6"},model:{value:e.validateCode,callback:function(t){e.validateCode=t},expression:"validateCode"}}),e._v(" "),a("b-input-group-append",{staticClass:"ml-2 align-items-center"},[a("b-button",{directives:[{name:"show",rawName:"v-show",value:!e.computedTime,expression:"!computedTime"}],staticClass:"btn btn-outline-success frame-btn",on:{click:function(t){t.preventDefault(),e.getMobileCode(t)}}},[e._v("GET CODE")]),e._v(" "),a("b-button",{directives:[{name:"show",rawName:"v-show",value:e.computedTime,expression:"computedTime"}],staticClass:"btn btn-outline-success frame-btn",attrs:{disabled:""},on:{click:function(e){e.preventDefault()}}},[e._v("SENT ("+e._s(e.computedTime)+"s)")])],1)],1)],1),e._v(" "),a("b-button",{staticClass:"btn filled-btn",attrs:{name:"confirmBtn",value:"CONFIRM"},on:{click:function(t){t.preventDefault(),e.confirmedOrder(t)}}},[e._v("CONFIRM")])],1)],1),e._v(" "),a("alert-tip",{attrs:{alertText:e.alertText,showAlert:e.showAlert},on:{closeTip:function(t){e.showAlert=!1}}})],1)],1)},r=[],i={render:n,staticRenderFns:r};t.a=i}});