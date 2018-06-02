webpackJsonp([2],{476:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(547),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var r=s(592),o=s(195),l=o(a.a,r.a,!1,null,null,null);e.default=l.exports},520:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(89),a=function(t){return t&&t.__esModule?t:{default:t}}(i),n=s(196);e.default={props:["signinUp","headerTitle","goBack","hasLogo","paddingLeft"],methods:(0,a.default)({},(0,n.mapActions)("global/user",["getUserInfo"])),computed:(0,a.default)({},(0,n.mapState)("global/user",["userInfo"])),mounted:function(){this.getUserInfo()}}},521:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(520),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var r=s(522),o=s(195),l=o(a.a,r.a,!1,null,null,null);e.default=l.exports},522:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{staticClass:"fixed-top"},[t._t("logo"),t._v(" "),s("b-navbar-nav",{staticClass:"flex-row align-items-center flex-nowrap",class:t.hasLogo?"":"w-100"},[t._t("search"),t._v(" "),t.goBack?s("b-nav-item",{on:{click:function(e){t.$router.go(-1)}}},[s("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.headerTitle?s("b-nav-text",{staticClass:"text-center text-uppercase",class:{"pl-0":t.paddingLeft}},[t._v("\n            "+t._s(t.headerTitle)+"\n        ")]):t._e(),t._v(" "),t._t("msiteTitle"),t._v(" "),t.signinUp?s("b-nav-item",{attrs:{to:t.userInfo?"/profile":"/login"}},[t.userInfo?s("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}):s("span",{staticClass:"signin-text text-uppercase"},[t._v("SIGNIN/SIGNUP")])]):t._e(),t._v(" "),t._t("edit"),t._v(" "),t._t("changeCity"),t._v(" "),t._t("changeLogin")],2)],2)},a=[],n={render:i,staticRenderFns:a};e.a=n},529:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["rating"]}},530:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(89),a=function(t){return t&&t.__esModule?t:{default:t}}(i),n=s(196);e.default={computed:(0,a.default)({},(0,n.mapState)("global/order",["geohash"])),methods:{goToURL:function(t){this.$router.push(t)}}}},532:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(529),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var r=s(533),o=s(195),l=o(a.a,r.a,!1,null,null,null);e.default=l.exports},533:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rating-container"},[s("div",{staticClass:"star-container"},t._l(5,function(t){return s("svg",{key:t,staticClass:"grey-fill"},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#star"}})])})),t._v(" "),s("div",{staticClass:"star-overflow",style:"width:"+2.75*t.rating/5+"rem"},[s("div",{staticClass:"star-container"},t._l(5,function(t){return s("svg",{key:t,staticClass:"highlight-fill"},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#star"}})])}))]),t._v(" "),s("svg",{staticStyle:{position:"absolute",width:"0",height:"0",visibility:"hidden"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("symbol",{attrs:{id:"star",viewBox:"0 0 32 32"}},[s("path",{staticClass:"path1",attrs:{d:"M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"}})])])])])},a=[],n={render:i,staticRenderFns:a};e.a=n},534:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(530),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var r=s(535),o=s(195),l=o(a.a,r.a,!1,null,null,null);e.default=l.exports},535:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"bv-example-row fixed-bottom footer-menu",attrs:{fluid:""}},[s("b-row",{staticClass:"align-items-center justify-content-around"},[s("b-col",{staticClass:"menu-item d-flex flex-column align-items-center justify-content-center",attrs:{cols:"3"},on:{click:function(e){t.goToURL({path:"/msite",query:{geohash:t.geohash}})}}},[s("i",{staticClass:"fa fa-car",attrs:{"aria-hidden":"true"}}),t._v(" "),s("p",{staticClass:"text-uppercase"},[t._v("DELIVERY")])]),t._v(" "),s("b-col",{staticClass:"menu-item d-flex flex-column align-items-center justify-content-center",attrs:{cols:"3"},on:{click:function(e){t.goToURL({path:"/search/"+t.geohash})}}},[s("i",{staticClass:"fa fa-compass",attrs:{"aria-hidden":"true"}}),t._v(" "),s("p",{staticClass:"text-uppercase"},[t._v("SEARCH")])]),t._v(" "),s("b-col",{staticClass:"menu-item d-flex flex-column align-items-center justify-content-center",attrs:{cols:"3"},on:{click:function(e){t.goToURL("/order")}}},[s("i",{staticClass:"fa fa-list-ul",attrs:{"aria-hidden":"true"}}),t._v(" "),s("p",{staticClass:"text-uppercase"},[t._v("ORDER")])]),t._v(" "),s("b-col",{staticClass:"menu-item d-flex flex-column align-items-center justify-content-center",attrs:{cols:"3"},on:{click:function(e){t.goToURL("/profile")}}},[s("i",{staticClass:"fa fa-user-o",attrs:{"aria-hidden":"true"}}),t._v(" "),s("p",{staticClass:"text-uppercase"},[t._v("ME")])])],1)],1)},a=[],n={render:i,staticRenderFns:a};e.a=n},536:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(90),n=i(a),r=s(197),o=i(r),l=s(91),c=i(l),u=s(89),d=i(u),f=s(196),h=s(136),v=s(135),p=i(v),g=s(532),_=i(g);e.default={data:function(){return{offset:0,shopListArr:[],imgBaseUrl:h.imgBaseUrl,touchend:!1}},mounted:function(){this.initData()},props:["restaurantCategoryId","restaurantCategoryIds","sortByType","deliveryMode","supportIds","confirmSelect","geohash"],computed:(0,d.default)({},(0,f.mapState)("global/address",["latitude","longitude"])),components:{ratingStar:_.default},methods:{initData:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.default.shopList(this.latitude,this.longitude,this.offset,this.restaurantCategoryId);case 2:if(e=t.sent,this.shopListArr=[].concat((0,o.default)(e)),!(e.length<20)){t.next=7;break}return this.touchend=!0,t.abrupt("return");case 7:case"end":return t.stop()}},t,this)}));return t}(),nextShopPage:function(t,e){this.$router.push({path:"/shop",query:{geohash:t,id:e}})},listenPropChange:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.offset=0,t.next=3,p.default.shopList(this.latitude,this.longitude,this.offset,"",this.restaurantCategoryIds,this.sortByType,this.deliveryMode,this.supportIds);case 3:e=t.sent,this.shopListArr=[].concat((0,o.default)(e));case 5:case"end":return t.stop()}},t,this)}));return t}()},watch:{sortByType:function(t){this.listenPropChange()},confirmSelect:function(t){this.listenPropChange()},restaurantCategoryIds:function(t){this.listenPropChange()}}}},538:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(536),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var r=s(539),o=s(195),l=o(a.a,r.a,!1,null,null,null);e.default=l.exports},539:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.shopListArr.length?s("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},t._l(t.shopListArr,function(e){return s("b-row",{key:e.id,on:{click:function(s){t.nextShopPage(t.geohash,e.id)}}},[s("b-col",{attrs:{cols:"3"}},[s("img",{staticClass:"shop-img",attrs:{src:t.imgBaseUrl+e.image_path}})]),t._v(" "),s("b-col",{attrs:{cols:"9"}},[s("b-row",[s("h4",{staticClass:"shop-title col-8 px-0",class:e.is_premium?"premium":""},[t._v(t._s(e.name))]),t._v(" "),s("b-button-group",{staticClass:"px-0 col-4 justify-content-end"},t._l(e.supports,function(e){return s("b-button",{key:e.id,staticClass:"support-icon",attrs:{disabled:""}},[t._v(t._s(e.icon_name))])}))],1),t._v(" "),s("b-row",{staticClass:"py-1 align-items-center"},[s("div",{staticClass:"rating d-flex flex-row align-items-center"},[s("rating-star",{attrs:{rating:e.rating}}),t._v(" "),s("p",{staticClass:"rating-text"},[s("span",{staticClass:"rating-num"},[t._v(t._s(e.rating)+" ")]),t._v("月售"+t._s(e.recent_order_num)+"单")])],1),t._v(" "),s("div",{staticClass:"delivery-mode"},[e.delivery_mode?s("b-button",{attrs:{disabled:"",variant:"success"}},[t._v(t._s(e.delivery_mode.text))]):t._e(),t._v(" "),s("b-button",{attrs:{disabled:"",variant:"outline-success"}},[t._v("准时达")])],1)]),t._v(" "),s("b-row",[s("p",{staticClass:"delivery-info"},[t._v("¥"+t._s(e.float_minimum_order_amount)+"起送 "),s("span",{staticClass:"segmentation"},[t._v(" / ")]),t._v(" "+t._s(e.piecewise_agent_fee.tips))]),t._v(" "),s("p",{staticClass:"delivery-time"},[Number(e.distance)?s("span",[t._v(t._s(e.distance>1e3?(e.distance/1e3).toFixed(2)+"km":e.distance+"m")+" /")]):s("span",[t._v(t._s(e.distance)+" /")]),t._v(" "),s("span",{staticClass:"time-text"},[t._v(t._s(e.order_lead_time))])])])],1)],1)})):t._e()},a=[],n={render:i,staticRenderFns:a};e.a=n},547:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(89),n=i(a),r=s(197),o=i(r),l=s(90),c=i(l),u=s(91),d=i(u),f=s(196),h=s(135),v=i(h),p=s(521),g=i(p),_=s(538),m=i(_),C=s(534),b=i(C);e.default={data:function(){return{geohash:"",foodCates:[],msiteTitle:"Please Select Address ...",hasGetData:!1,imgBaseUrl:"https://fuss10.elemecdn.com",slider:{sensitivity:25,slideCount:2,paginationCount:2,activeSlide:0,isAnimating:!1,transform:"",activeClass:{0:{isActive:!0},1:{isActive:!1}},timer:null}}},components:{headerTop:g.default,shopList:m.default,footerMenu:b.default},beforeMount:function(){function t(){return e.apply(this,arguments)}var e=(0,d.default)(c.default.mark(function t(){var e,s;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$route.query.geohash){t.next=7;break}return t.next=3,v.default.defaultCity();case 3:e=t.sent,this.geohash=e.latitude+","+e.longitude,t.next=8;break;case 7:this.geohash=this.$route.query.geohash;case 8:return this.saveGeohash(this.geohash),t.next=11,v.default.msiteAddress(this.geohash);case 11:s=t.sent,this.msiteTitle=s.name,this.recordAddress(s),this.hasGetData=!0;case 15:case"end":return t.stop()}},t,this)}));return t}(),mounted:function(){var t=this;v.default.msiteFoodCates(this.geohash).then(function(e){for(var s=[].concat((0,o.default)(e)),i=[],a=0,n=0;a<e.length;a+=8,n++)i[n]=s.splice(0,8);t.foodCates=i})},methods:(0,n.default)({},(0,f.mapMutations)({recordAddress:"global/address/recordAddress",saveGeohash:"global/order/saveGeohash"}),{getCategoryId:function(t){var e=decodeURIComponent(t.split("=")[1].replace("&target_name",""));return/restaurant_category_id/gi.test(e)?JSON.parse(e).restaurant_category_id.id:void 0},onPan:function(t){var e=100/this.slider.slideCount*t.deltaX/window.innerWidth;this.slider.slideCount,this.slider.activeSlide;t.isFinal&&(t.velocityX>1?this.goTo(this.slider.activeSlide-1):t.velocityX<-1?this.goTo(this.slider.activeSlide+1):e<=-this.slider.sensitivity/this.slider.slideCount?this.goTo(this.slider.activeSlide+1):e>=this.slider.sensitivity/this.slider.slideCount?this.goTo(this.slider.activeSlide-1):this.goTo(this.slider.activeSlide))},goTo:function(t){var e=this;t<0?this.slider.activeSlide=0:t>this.slider.slideCount-1?this.slider.activeSlide=this.slider.slideCount-1:this.slider.activeSlide=t,this.slider.isAnimating=!0;var s=-100/this.slider.slideCount*this.slider.activeSlide;this.slider.transform="translateX( "+s+"% )",clearTimeout(this.slider.timer),this.slider.timer=setTimeout(function(){e.slider.isAnimating=!1},400);for(var i=0;i<this.slider.paginationCount;i++)this.slider.activeClass[i].isActive=i===this.slider.activeSlide}})}},592:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"text-light px-0",attrs:{fluid:""}},[s("div",{attrs:{id:"app-container"}},[s("header-top",{attrs:{"signin-up":"msite"}},[s("b-nav-item",{attrs:{slot:"search",to:"/search/geohash"},slot:"search"},[s("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("b-nav-item",{staticClass:"text-center text-uppercase msite-title",attrs:{slot:"msiteTitle",to:"/home"},slot:"msiteTitle"},[t._v("\n                "+t._s(t.msiteTitle)+"\n            ")])],1),t._v(" "),s("b-container",{staticClass:"px-0 main-container msite-main",attrs:{fluid:""}},[s("b-card",{staticClass:"shop-nav-card",attrs:{"body-class":"p-0 border-0"}},[s("div",{staticClass:"has-slider w-100"},[s("v-touch",{staticClass:"slider d-flex",class:{"is-animating":t.slider.isAnimating},style:{transform:t.slider.transform},attrs:{"pan-options":{pointers:0,threshold:0}},on:{pan:t.onPan}},t._l(t.foodCates.length,function(e){return s("div",{staticClass:"slider-panel d-flex align-items-center flex-wrap justify-content-center w-100"},t._l(t.foodCates[e-1],function(e,i){return s("router-link",{key:e.id,staticClass:"food-cate-item d-flex align-items-center flex-column justify-content-center",attrs:{to:{path:"/food",query:{geohash:t.geohash,title:e.title,restaurant_category_id:t.getCategoryId(e.link)}}}},[s("figure",{staticClass:"figure"},[s("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:t.imgBaseUrl+e.image_url}}),t._v(" "),s("figcaption",{staticClass:"figure-caption text-center"},[t._v(t._s(e.title))])])])}))})),t._v(" "),s("div",{staticClass:"slider-pagination w-100"},t._l(t.foodCates.length,function(e){return s("div",{class:t.slider.activeClass[e-1].isActive?"is-active":""})}))],1)]),t._v(" "),s("b-card",{staticClass:"shops-card",attrs:{"no-body":""}},[s("b-card-header",[s("i",{staticClass:"fa fa-shopping-basket",attrs:{"aria-hidden":"true"}}),t._v("\n                    shops nearby\n                ")]),t._v(" "),s("b-card-body",{staticClass:"p-0"},[t.hasGetData?s("shop-list",{attrs:{geohash:t.geohash}}):t._e()],1)],1)],1),t._v(" "),s("footer-menu")],1)])},a=[],n={render:i,staticRenderFns:a};e.a=n}});