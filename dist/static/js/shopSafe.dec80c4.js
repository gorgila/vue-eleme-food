webpackJsonp([29],{482:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(554),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var r=s(600),o=s(195),l=o(i.a,r.a,!1,null,null,null);e.default=l.exports},520:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(89),i=function(t){return t&&t.__esModule?t:{default:t}}(a),n=s(196);e.default={props:["signinUp","headerTitle","goBack","hasLogo","paddingLeft"],methods:(0,i.default)({},(0,n.mapActions)("global/user",["getUserInfo"])),computed:(0,i.default)({},(0,n.mapState)("global/user",["userInfo"])),mounted:function(){this.getUserInfo()}}},521:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(520),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var r=s(522),o=s(195),l=o(i.a,r.a,!1,null,null,null);e.default=l.exports},522:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{staticClass:"fixed-top"},[t._t("logo"),t._v(" "),s("b-navbar-nav",{staticClass:"flex-row align-items-center flex-nowrap",class:t.hasLogo?"":"w-100"},[t._t("search"),t._v(" "),t.goBack?s("b-nav-item",{on:{click:function(e){t.$router.go(-1)}}},[s("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.headerTitle?s("b-nav-text",{staticClass:"text-center text-uppercase",class:{"pl-0":t.paddingLeft}},[t._v("\n            "+t._s(t.headerTitle)+"\n        ")]):t._e(),t._v(" "),t._t("msiteTitle"),t._v(" "),t.signinUp?s("b-nav-item",{attrs:{to:t.userInfo?"/profile":"/login"}},[t.userInfo?s("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}):s("span",{staticClass:"signin-text text-uppercase"},[t._v("SIGNIN/SIGNUP")])]):t._e(),t._v(" "),t._t("edit"),t._v(" "),t._t("changeCity"),t._v(" "),t._t("changeLogin")],2)],2)},i=[],n={render:a,staticRenderFns:i};e.a=n},531:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={methods:{getImgPath:function(t){var e=void 0;return t?(e=-1!==t.indexOf("jpeg")?".jpeg":".png","https://fuss10.elemecdn.com/"+t.substr(0,1)+"/"+t.substr(1,2)+"/"+t.substr(3)+e):"http://test.fe.ptdev.cn/elm/elmlogo.jpeg"}}};e.default={getImgPath:a}},554:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(89),n=a(i),r=s(531),o=a(r),l=s(521),c=a(l),p=s(196);e.default={computed:(0,n.default)({},(0,p.mapState)("global/shop",["shopDetail"])),components:{headerTop:c.default},mixins:[o.default.getImgPath]}},600:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"safety-container"}},[s("header-top",{attrs:{"header-title":"food safety and notice","go-back":"true"}}),t._v(" "),s("b-container",{staticClass:"px-0 main-container",attrs:{fluid:""}},[s("b-card",{staticClass:"safety-info-card",attrs:{"body-class":"px-0"}},[s("h4",{staticClass:"d-flex flex-row flex-nowrap align-items-center"},[t._v("FOOD SAFETY AND NOTICE")]),t._v(" "),s("div",{staticClass:"d-flex flex-row flex-nowrap align-items-center"},[1==t.shopDetail.status?s("i",{staticClass:"fa fa-smile-o text-success",attrs:{"aria-hidden":"true"}}):s("i",{staticClass:"fa fa-frown-o text-danger",attrs:{"aria-hidden":"true"}}),t._v(" "),s("div",{staticClass:"date-info"},[s("p",[s("span",[t._v("CHECKED RESULTS: ")]),t._v(" "),1==t.shopDetail.status?s("span",{staticClass:"text-success"},[t._v("GOOD")]):s("span",{staticClass:"text-danger"},[t._v("BAD")])]),t._v(" "),s("p",[s("span",[t._v("CHECKED DATE: ")]),t._v(" "),s("span",[t._v(t._s(t.shopDetail.identification.identificate_date&&t.shopDetail.identification.identificate_date.split("T")[0]))])])])])]),t._v(" "),s("b-card",{staticClass:"shop-detail-card",attrs:{"body-class":"px-0"}},[s("h4",[t._v("BUSNIESS REGISTER INFORMATION")]),t._v(" "),s("b-list-group",[s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("COMAPNY NAME: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.company_name)+"\n                ")]),t._v(" "),s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("REGISTER CERTIFICATE NO: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.registered_number)+"\n                ")]),t._v(" "),s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("REGISTER PRINCIPAL: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.registered_principal)+"\n                ")]),t._v(" "),s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("REGISTER ADDRESS: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.registered_address)+"\n                ")]),t._v(" "),s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("IDENTIFICATE AUTHERATION: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.identificate_agency)+"\n                ")]),t._v(" "),s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("LEGAL REPRESENTATIVE: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.legal_person)+"\n                ")]),t._v(" "),s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("BUSNIESS SCOPE: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.operation_period)+"\n                ")])],1)],1),t._v(" "),s("b-card",{staticClass:"startup-permission-card",attrs:{"body-class":"px-0"}},[s("h4",[t._v("STARTUP PERMISSION INFORMATION")]),t._v(" "),s("b-list-group",[s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("LICENSE SCOPE: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.licenses_scope)+"\n                ")]),t._v(" "),s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("LICENSE NO: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.licenses_number)+"\n                ")]),t._v(" "),s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("LICENSE EXPIRED DATE: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.licenses_date)+"\n                ")]),t._v(" "),s("b-list-group-item",[s("span",{staticClass:"prop-name"},[t._v("IDENTIFICATE AUTHERATION: ")]),t._v("\n                    "+t._s(t.shopDetail.identification.identificate_agency)+"\n                ")])],1)],1),t._v(" "),s("b-card",{staticClass:"license-img-card",attrs:{"body-class":"px-0"}},[s("h4",[t._v("PERMISSION LICENSE PHOTOCOPY")]),t._v(" "),s("div",{staticClass:"license-img-container d-flex flex-row flex-nowrap align-items-center justify-content-around"},[s("b-img",{attrs:{src:t.getImgPath(t.shopDetail.license.business_license_image)}}),t._v(" "),s("b-img",{attrs:{src:t.getImgPath(t.shopDetail.license.catering_service_license_image)}})],1)])],1)],1)},i=[],n={render:a,staticRenderFns:i};e.a=n}});