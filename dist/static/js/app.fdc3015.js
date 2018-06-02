webpackJsonp([45],{135:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(59),o=r(u),a=n(419),i=r(a),c=n(92),d=r(c),s=function(){return(0,i.default)("/v1/user",{user_id:d.default.getStore("userid")})},l=function(){return(0,i.default)("/v1/cities",{type:"guess"})},f=function(){return(0,i.default)("/v1/cities",{type:"hot"})},h=function(){return(0,i.default)("/v1/cities",{type:"group"})},p=function(e){return(0,i.default)("/v1/cities/"+e)},m=function(e,t){return(0,i.default)("/v1/pois",{type:"search",city_id:e,keyword:t})},v=function(e){return(0,i.default)("/v2/pois/"+e)},g=function(e){return(0,i.default)("/v2/index_entry",{geohash:e,group_type:"1","flags[]":"F"})},_=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],d="";c.forEach(function(e){e.status&&(d+="&support_ids[]="+e.id)});var s={latitude:e,longitude:t,offset:n,limit:"20","extras[]":"activities",keyword:"",restaurant_category_id:r,"restaurant_category_ids[]":u,order_by:o,"delivery_mode[]":a+d};return(0,i.default)("/shopping/restaurants",s)},b=function(e,t){return(0,i.default)("/shopping/v2/restaurant/category",{latitude:e,longitude:t})},y=function(e,t){return(0,i.default)("/shopping/v1/restaurants/delivery_modes",{latitude:e,longitude:t,kw:""})},w=function(e,t){return(0,i.default)("/shopping/v1/restaurants/activity_attributes",{latitude:e,longitude:t,kw:""})},P=function(e,t){return(0,i.default)("/v4/restaurants",{"extras[]":"restaurant_activity",geohash:e,keyword:t,type:"search"})},O=function(e,t,n){return(0,i.default)("/shopping/restaurant/"+e,{latitude:t,longitude:n+"&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics"})},k=function(e){return(0,i.default)("/shopping/v2/menu",{restaurant_id:e})},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return(0,i.default)("/ugc/v2/restaurants/"+e+"/ratings",{has_content:!0,offset:t,limit:10,tag_name:n})},S=function(e){return(0,i.default)("/ugc/v2/restaurants/"+e+"/ratings/scores")},A=function(e){return(0,i.default)("/ugc/v2/restaurants/"+e+"/ratings/tags")},M=function(){return(0,i.default)("/v3/profile/explain")},L=function(e){return(0,i.default)("/v4/mobile/verify_code/send",{mobile:e,scene:"login",type:"sms"},"POST")},I=function(e,t){var n;return(0,i.default)("/v1/users/exists",(n={},(0,o.default)(n,t,e),(0,o.default)(n,"type",t),n))},T=function(e,t,n,r){var u;return(0,i.default)("/v1/mobile/verify_code/send",(u={action:"send",captcha_code:t},(0,o.default)(u,n,e),(0,o.default)(u,"type","sms"),(0,o.default)(u,"way",n),(0,o.default)(u,"password",r),u),"POST")},j=function(){return(0,i.default)("/v1/captchas",{},"POST")},C=function(e,t,n){return(0,i.default)("/v2/login",{username:e,password:t,captcha_code:n},"POST")},D=function(e,t,n){return(0,i.default)("/v1/login/app_mobile",{code:e,mobile:t,validate_token:n},"POST")},R=function(e,t,n,r,u){return(0,i.default)("/v2/changepassword",{username:e,oldPassword:t,newPassword:n,confirmPassword:r,captcha_code:u},"POST")},E=function(e,t,n){return(0,i.default)("/member/v1/users/"+e+"/delivery_card/physical_card/bind",{number:t,password:n},"POST")},U=function(e){return(0,i.default)("/v1/users/"+e+"/addresses")},q=function(e,t,n,r,u,o,a,c,d,s,l){return(0,i.default)("/v1/users/"+e+"/addresses",{address:t,address_detail:n,geohash:r,name:u,phone:o,phone_bk:a,poi_type:c,sex:d,tag:s,tag_type:l},"POST")},N=function(e,t){return(0,i.default)("/v1/pois",{type:"search",city_id:e,keyword:t})},B=function(e,t){return(0,i.default)("/v1/users/"+e+"/addresses/"+t,{},"DELETE")},H=function(){return(0,i.default)("/v2/signout")},V=function(e){return(0,i.default)("/promotion/v2/users/"+e+"/hongbaos?limit=20&offset=0")},F=function(e){return(0,i.default)("/promotion/v2/users/"+e+"/expired_hongbaos?limit=20&offset=0")},X=function(e,t,n){return(0,i.default)("/v1/users/"+e+"/hongbao/exchange",{exchange_code:t,captcha_code:n},"POST")},$=function(e,t,n){return(0,i.default)("/v1/carts/checkout",{come_from:"web",geohash:e,entities:t,restaurant_id:n},"POST")},G=function(e,t){return(0,i.default)("/v1/carts/"+e+"/remarks",{sig:t})},J=function(e,t){return(0,i.default)("/payapi/payment/queryOrder",{merchantId:5,merchantOrderNo:e,source:"MOBILE_WAP",userId:t,version:"1.0.0"})},Q=function(e,t,n){return(0,i.default)("/v1/carts/"+e+"/verify_code",{sig:t,type:n},"POST")},W=function(e){var t=e.user_id,n=e.cart_id,r=e.address_id,u=e.description,o=e.entities,a=e.geohash,c=e.sig,d=e.validation_code,s=e.validation_token;return(0,i.default)("/v1/users/"+t+"/carts/"+n+"/orders",{address_id:r,come_from:"mobile_web",deliver_time:"",description:u,entities:o,geohash:a,paymethod_id:1,sig:c,validation_code:d,validation_token:s},"POST")},z=function(e,t,n,r,u,o,a){return(0,i.default)("/v1/users/"+e+"/carts/"+t+"/orders",{address_id:n,come_from:"mobile_web",deliver_time:"",description:r,entities:u,geohash:o,paymethod_id:1,sig:a},"POST")},K=function(e,t){return(0,i.default)("/bos/v2/users/"+e+"/orders",{limit:10,offset:t})},Y=function(e,t){return(0,i.default)("/bos/v1/users/"+e+"/orders/"+t+"/snapshot")};t.default={getUser:s,defaultCity:l,hotCity:f,groupCity:h,currentCity:p,searchPlace:m,msiteAddress:v,msiteFoodCates:g,shopList:_,foodCateList:b,foodDelivery:y,foodPromotion:w,searchRestaurant:P,shopDetail:O,foodMenu:k,shopRatingList:x,shopRatingScore:S,shopRatingTags:A,getServiceInfo:M,mobileCode:L,checkExsit:I,sendMobile:T,getcaptchas:j,accountLogin:C,mobileLogin:D,changePassword:R,topupVipBalance:E,userAddressList:U,postAddress:q,searchNearby:N,deleteAddress:B,signout:H,getRedPocketsList:V,getExpiredRedPocketsList:F,exchangeRedPockets:X,checkout:$,getRemark:G,payRequest:J,rePostVerify:Q,validateOrders:W,placeOrders:z,getOrderList:K,getOrderDetail:Y}},136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="",u=void 0;t.baseUrl=r="http://cangdu.org:8001",t.imgBaseUrl=u="http://cangdu.org:8001/img/",t.baseUrl=r,t.routerMode="hash",t.imgBaseUrl=u},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,o=n(93),a=r(o),i=n(89),c=r(i),d=n(59),s=r(d),l=n(90),f=r(l),h=n(91),p=r(h),m=n(92),v=r(m),g=n(135),_=r(g),b={userInfo:null,login:!0,imgPath:null},y=(0,s.default)({},"getUserInfo",function(){function e(e){return t.apply(this,arguments)}var t=(0,p.default)(f.default.mark(function e(t){var n,r=t.commit;t.state;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.getUser();case 2:n=e.sent,r("getUserInfo",n);case 4:case"end":return e.stop()}},e,this)}));return e}()),w=(u={},(0,s.default)(u,"getUserInfo",function(e,t){e.userInfo&&e.userInfo.username!==t.username||e.login&&(t.message?e.userInfo=null:e.userInfo=(0,c.default)({},t))}),(0,s.default)(u,"recordUserInfo",function(e,t){e.userInfo=t,e.login=!0,v.default.setStore("user_id",t.user_id)}),(0,s.default)(u,"loginOut",function(e){e.userInfo={},e.login=!1}),(0,s.default)(u,"resetName",function(e,t){e.userInfo=(0,a.default)({},e.userInfo,{username:t})}),(0,s.default)(u,"saveAvander",function(e,t){e.imgPath=t}),u);t.default={namespaced:!0,state:b,actions:y,mutations:w}},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(201);var u=n(121),o=r(u),a=n(404),i=r(a),c=n(406),d=r(c),s=n(456),l=r(s);n(461);var f=n(462),h=r(f),p=n(463),m=n(464),v=r(m),g=n(468),_=r(g),b=n(470),y=r(b);n(471),n(472),n(473),"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){h.default.attach(document.body)},!1),(0,p.sync)(l.default,d.default),o.default.use(v.default),o.default.use(_.default,{name:"v-touch"}),o.default.use(y.default),new o.default({router:d.default,store:l.default,render:function(e){return e(i.default)}}).$mount("#app")},404:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(172),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var a=n(405),i=n(195),c=i(u.a,a.a,!1,null,null,null);t.default=c.exports},405:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1)],1),e._v(" "),n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[e.$route.meta.keepAlive?e._e():n("router-view")],1)],1)},u=[],o={render:r,staticRenderFns:u};t.a=o},406:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(121),o=r(u),a=n(407),i=r(a),c=n(136);o.default.use(i.default);var d=function(e){return n.e(37).then(function(){return e(n(474))}.bind(null,n)).catch(n.oe)},s=function(e){return n.e(40).then(function(){return e(n(475))}.bind(null,n)).catch(n.oe)},l=function(e){return n.e(2).then(function(){return e(n(476))}.bind(null,n)).catch(n.oe)},f=function(e){return n.e(5).then(function(){return e(n(477))}.bind(null,n)).catch(n.oe)},h=function(e){return n.e(18).then(function(){return e(n(478))}.bind(null,n)).catch(n.oe)},p=function(e){return n.e(0).then(function(){return e(n(479))}.bind(null,n)).catch(n.oe)},m=function(e){return n.e(31).then(function(){return e(n(480))}.bind(null,n)).catch(n.oe)},v=function(e){return n.e(16).then(function(){return e(n(481))}.bind(null,n)).catch(n.oe)},g=function(e){return n.e(29).then(function(){return e(n(482))}.bind(null,n)).catch(n.oe)},_=function(e){return n.e(1).then(function(){return e(n(483))}.bind(null,n)).catch(n.oe)},b=function(e){return n.e(17).then(function(){return e(n(484))}.bind(null,n)).catch(n.oe)},y=function(e){return n.e(38).then(function(){return e(n(485))}.bind(null,n)).catch(n.oe)},w=function(e){return n.e(8).then(function(){return e(n(486))}.bind(null,n)).catch(n.oe)},P=function(e){return n.e(23).then(function(){return e(n(487))}.bind(null,n)).catch(n.oe)},O=function(e){return n.e(24).then(function(){return e(n(488))}.bind(null,n)).catch(n.oe)},k=function(e){return n.e(25).then(function(){return e(n(489))}.bind(null,n)).catch(n.oe)},x=function(e){return n.e(39).then(function(){return e(n(490))}.bind(null,n)).catch(n.oe)},S=function(e){return n.e(11).then(function(){return e(n(491))}.bind(null,n)).catch(n.oe)},A=function(e){return n.e(21).then(function(){return e(n(492))}.bind(null,n)).catch(n.oe)},M=function(e){return n.e(22).then(function(){return e(n(493))}.bind(null,n)).catch(n.oe)},L=function(e){return n.e(32).then(function(){return e(n(494))}.bind(null,n)).catch(n.oe)},I=function(e){return n.e(7).then(function(){return e(n(495))}.bind(null,n)).catch(n.oe)},T=function(e){return n.e(13).then(function(){return e(n(496))}.bind(null,n)).catch(n.oe)},j=function(e){return n.e(36).then(function(){return e(n(497))}.bind(null,n)).catch(n.oe)},C=function(e){return n.e(15).then(function(){return e(n(498))}.bind(null,n)).catch(n.oe)},D=function(e){return n.e(43).then(function(){return e(n(499))}.bind(null,n)).catch(n.oe)},R=function(e){return n.e(14).then(function(){return e(n(500))}.bind(null,n)).catch(n.oe)},E=function(e){return n.e(27).then(function(){return e(n(501))}.bind(null,n)).catch(n.oe)},U=function(e){return n.e(30).then(function(){return e(n(502))}.bind(null,n)).catch(n.oe)},q=function(e){return n.e(28).then(function(){return e(n(503))}.bind(null,n)).catch(n.oe)},N=function(e){return n.e(19).then(function(){return e(n(504))}.bind(null,n)).catch(n.oe)},B=function(e){return n.e(12).then(function(){return e(n(505))}.bind(null,n)).catch(n.oe)},H=function(e){return n.e(33).then(function(){return e(n(506))}.bind(null,n)).catch(n.oe)},V=function(e){return n.e(35).then(function(){return e(n(507))}.bind(null,n)).catch(n.oe)},F=function(e){return n.e(20).then(function(){return e(n(508))}.bind(null,n)).catch(n.oe)},X=function(e){return n.e(34).then(function(){return e(n(509))}.bind(null,n)).catch(n.oe)},$=function(e){return n.e(6).then(function(){return e(n(510))}.bind(null,n)).catch(n.oe)},G=function(e){return n.e(41).then(function(){return e(n(511))}.bind(null,n)).catch(n.oe)},J=function(e){return n.e(42).then(function(){return e(n(512))}.bind(null,n)).catch(n.oe)},Q=function(e){return n.e(10).then(function(){return e(n(513))}.bind(null,n)).catch(n.oe)},W=function(e){return n.e(26).then(function(){return e(n(514))}.bind(null,n)).catch(n.oe)},z=function(e){return n.e(4).then(function(){return e(n(515))}.bind(null,n)).catch(n.oe)},K=function(e){return n.e(3).then(function(){return e(n(516))}.bind(null,n)).catch(n.oe)},Y=function(e){return n.e(9).then(function(){return e(n(517))}.bind(null,n)).catch(n.oe)},Z=[{path:"*",redirect:"/home"},{path:"/home",component:d},{path:"/city/:cityid",component:s},{path:"/msite",component:l,meta:{keepAlive:!0}},{path:"/food",component:f},{path:"/search/:geohash",component:h},{path:"/shop",component:p,children:[{path:"shopDetail",component:m,children:[{path:"shopSafe",component:g}]},{path:"foodDetail",component:v}]},{path:"/confirmOrder",component:_,children:[{path:"remark",component:b},{path:"invoice",component:y},{path:"payment",component:w},{path:"userValidation",component:P},{path:"chooseAddress",component:O,children:[{path:"addAddress",component:k,children:[{path:"searchAddress",component:x}]}]}]},{path:"/order",component:K,children:[{path:"orderDetail",component:Y}]},{path:"/profile",component:S,children:[{path:"info",component:B,children:[{path:"setUsername",component:H},{path:"address",component:V,children:[{path:"add",component:F,children:[{path:"addDetail",component:X}]}]}]}]},{path:"/login",component:A},{path:"/forget",component:M},{path:"/service",component:L,children:[{path:"answerDetail",component:I}]},{path:"/points",component:T,children:[{path:"detail",component:j}]},{path:"/balance",component:C,children:[{path:"detail",component:D}]},{path:"/benefit",component:$,children:[{path:"coupon",component:G},{path:"hbDetail",component:J},{path:"hbHistory",component:Q},{path:"hbExchange",component:W},{path:"recommend",component:z}]},{path:"/vipcard",component:E,children:[{path:"vipDetail",component:U},{path:"invoiceRecord",component:q},{path:"topupvip",component:N}]},{path:"/download",component:R}],ee=new i.default({routes:Z,mode:c.routerMode,strict:!1,scrollBehavior:function(e,t,n){return n||(t.meta.keepAlive&&(t.meta.savedPosition=document.body.scrollTop),{x:0,y:e.meta.savedPosition||0})}});t.default=ee},419:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(90),o=r(u),a=n(421),i=r(a),c=n(183),d=r(c),s=n(193),l=r(s),f=n(198),h=r(f),p=n(91),m=r(p),v=n(136);t.default=(0,m.default)(o.default.mark(function e(){var t,n,r,u,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"fetch";return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=s.toUpperCase(),a=v.baseUrl+a,"GET"===s&&(t="",(0,h.default)(c).forEach(function(e){t+=e+"="+c[e]+"&"}),""!==t&&(t=t.substr(0,t.lastIndexOf("&")),a=a+"?"+t)),!window.fetch||"fetch"!==f){e.next=21;break}return n={credentials:"include",method:s,headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",cache:"force-cache"},"POST"===s&&Object.defineProperty(n,"body",{value:(0,l.default)(c),writable:!1}),e.prev=6,e.next=9,fetch(a,n);case 9:return r=e.sent,e.next=12,r.json();case 12:return u=e.sent,e.abrupt("return",u);case 16:throw e.prev=16,e.t0=e.catch(6),new Error(e.t0);case 19:e.next=22;break;case 21:return e.abrupt("return",new d.default(function(e,t){var n=void 0;n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var r="";"POST"===s&&(r=(0,l.default)(c)),n.open(s,a,!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.send(r),n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var r=n.response;"object"!==(void 0===r?"undefined":(0,i.default)(r))&&(r=JSON.parse(r)),e(r)}else t(n)}}));case 22:case"end":return e.stop()}},e,void 0,[[6,16]])}))},456:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(121),o=r(u),a=n(196),i=r(a),c=n(194),d=r(c),s=n(457),l=r(s),f=n(458),h=r(f),p=n(459),m=r(p),v=n(460),g=r(v);o.default.use(i.default),t.default=new i.default.Store({modules:{global:{namespaced:!0,modules:{user:d.default,cart:l.default,order:h.default,shop:m.default,address:g.default}}}})},457:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,o=n(59),a=r(o),i=n(89),c=r(i),d=n(92),s=r(d),l={shoppingList:{}},f=(u={},(0,a.default)(u,"initShoppingCart",function(e){var t=s.default.getStore("shoppingList");t&&(e.shoppingList=JSON.parse(t))}),(0,a.default)(u,"addToCart",function(e,t){var n=t.shopid,r=t.category_id,u=t.item_id,o=t.food_id,a=t.name,i=t.price,d=t.specs,l=t.packing_fee,f=t.sku_id,h=t.stock,p=e.shoppingList,m=p[n]=p[n]||{},v=m[r]=m[r]||{},g=v[u]=v[u]||{};g[o]?g[o].num++:g[o]={num:1,id:o,name:a,price:i,specs:d,packing_fee:l,sku_id:f,stock:h},e.shoppingList=(0,c.default)({},p),s.default.setStore("shoppingList",e.shoppingList)}),(0,a.default)(u,"clearShoppingCart",function(e,t){e.shoppingList[t]=null,e.shoppingList=(0,c.default)({},e.shoppingList),s.default.setStore("shoppingList",e.shoppingList)}),(0,a.default)(u,"moveoutFromCart",function(e,t){var n=t.shopid,r=t.category_id,u=t.item_id,o=t.food_id,a=(t.name,t.price,t.specs,e.shoppingList),i=a[n]||{},d=i[r]||{},l=d[u]||{};l&&l[o]&&(l[o].num>0?(l[o].num--,e.shoppingList=(0,c.default)({},a),s.default.setStore("shoppingList",e.shoppingList)):l[o]=null)}),u);t.default={namespaced:!0,state:l,mutations:f}},458:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,o=n(59),a=r(o),i=n(89),c=r(i),d=n(93),s=r(d),l={orderDetail:null,orderParam:null,orderMessage:null,membershipPrice:null,question:null,invoice:!1,needValidation:null,remarkText:null,inputText:"",cart_Id:null,sig:null,geohash:"31.22299,121.36025"},f=(u={},(0,a.default)(u,"saveOrder",function(e,t){e.orderDetail=t}),(0,a.default)(u,"saveOrderParam",function(e,t){e.orderParam=t}),(0,a.default)(u,"changeOrderParam",function(e,t){e.orderParam=(0,s.default)({},e.orderParam,t)}),(0,a.default)(u,"orderSuccess",function(e,t){e.membershipPrice=null,e.orderMessage=t}),(0,a.default)(u,"orderMembership",function(e,t){e.membershipPrice=t}),(0,a.default)(u,"saveQuestion",function(e,t){e.question=(0,c.default)({},t)}),(0,a.default)(u,"confirmInvoice",function(e,t){e.invoice=t}),(0,a.default)(u,"comfirmRemark",function(e,t){var n=t.remarkText,r=t.inputText;e.remarkText=n,e.inputText=r}),(0,a.default)(u,"validationRequired",function(e,t){e.needValidation=t}),(0,a.default)(u,"saveCartIdSig",function(e,t){var n=t.cart_Id,r=t.sig;e.cart_Id=n,e.sig=r}),(0,a.default)(u,"saveGeohash",function(e,t){e.geohash=t}),u);t.default={namespaced:!0,state:l,mutations:f}},459:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(59),o=function(e){return e&&e.__esModule?e:{default:e}}(u),a={shopDetail:null,shopid:null},i=(r={},(0,o.default)(r,"recordShopInfo",function(e,t){e.shopDetail=t}),(0,o.default)(r,"saveShopId",function(e,t){e.shopid=t}),r);t.default={namespaced:!0,state:a,mutations:i}},460:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,o=n(197),a=r(o),i=n(59),c=r(i),d=n(90),s=r(d),l=n(91),f=r(l),h=n(194),p=r(h),m=n(135),v=r(m),g={latitude:"",longitude:"",searchAddress:null,removeAddress:[],choosedAddress:null,addressIndex:null,newAddress:[],addAddress:""},_=(0,c.default)({},"saveAddress",function(){function e(e){return t.apply(this,arguments)}var t=(0,f.default)(s.default.mark(function e(t){var n,r=t.commit,u=t.state;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u.removeAddress.length>0)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v.default.userAddressList(p.default.state.userInfo.user_id);case 4:n=e.sent,r("saveAddress",n);case 6:case"end":return e.stop()}},e,this)}));return e}()),b=(u={},(0,c.default)(u,"recordAddress",function(e,t){var n=t.latitude,r=t.longitude;e.latitude=n,e.longitude=r}),(0,c.default)(u,"saveSearchAddress",function(e,t){e.searchAddress=t}),(0,c.default)(u,"addUserAddress",function(e,t){e.removeAddress=[t].concat((0,a.default)(e.removeAddress))}),(0,c.default)(u,"chooseAddress",function(e,t){var n=t.address,r=t.index;e.choosedAddress=n,e.addressIndex=r}),(0,c.default)(u,"confirmAddress",function(e,t){e.newAddress.push(t)}),(0,c.default)(u,"saveAddress",function(e,t){e.removeAddress=t}),(0,c.default)(u,"saveAddressName",function(e,t){e.addAddress=t}),u);t.default={namespaced:!0,state:g,actions:_,mutations:b}},461:function(e,t,n){"use strict"},465:function(e,t){},467:function(e,t){},471:function(e,t){},472:function(e,t){},473:function(e,t){},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(193),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e,t){e&&("string"!=typeof t&&(t=(0,u.default)(t)),window.localStorage.setItem(e,t))},a=function(e){if(e)return window.localStorage.getItem(e)},i=function(e){e&&window.localStorage.removeItem(e)};t.default={setStore:o,getStore:a,removeStore:i}}},[200]);