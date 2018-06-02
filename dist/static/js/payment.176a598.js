webpackJsonp([8],{486:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(558),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);var s=i(604),o=i(195),l=o(n.a,s.a,!1,null,null,null);t.default=l.exports},520:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(89),n=function(e){return e&&e.__esModule?e:{default:e}}(a),r=i(196);t.default={props:["signinUp","headerTitle","goBack","hasLogo","paddingLeft"],methods:(0,n.default)({},(0,r.mapActions)("global/user",["getUserInfo"])),computed:(0,n.default)({},(0,r.mapState)("global/user",["userInfo"])),mounted:function(){this.getUserInfo()}}},521:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(520),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);var s=i(522),o=i(195),l=o(n.a,s.a,!1,null,null,null);t.default=l.exports},522:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-navbar",{staticClass:"fixed-top"},[e._t("logo"),e._v(" "),i("b-navbar-nav",{staticClass:"flex-row align-items-center flex-nowrap",class:e.hasLogo?"":"w-100"},[e._t("search"),e._v(" "),e.goBack?i("b-nav-item",{on:{click:function(t){e.$router.go(-1)}}},[i("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]):e._e(),e._v(" "),e.headerTitle?i("b-nav-text",{staticClass:"text-center text-uppercase",class:{"pl-0":e.paddingLeft}},[e._v("\n            "+e._s(e.headerTitle)+"\n        ")]):e._e(),e._v(" "),e._t("msiteTitle"),e._v(" "),e.signinUp?i("b-nav-item",{attrs:{to:e.userInfo?"/profile":"/login"}},[e.userInfo?i("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}):i("span",{staticClass:"signin-text text-uppercase"},[e._v("SIGNIN/SIGNUP")])]):e._e(),e._v(" "),e._t("edit"),e._v(" "),e._t("changeCity"),e._v(" "),e._t("changeLogin")],2)],2)},n=[],r={render:a,staticRenderFns:n};t.a=r},523:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["alertText","showAlert"],methods:{closeTip:function(){this.$emit("closeTip")}}}},524:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(523),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);var s=i(525),o=i(195),l=o(n.a,s.a,!1,null,null,null);t.default=l.exports},525:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{ref:"alertTipModal",staticClass:"alert-tip-container",attrs:{centered:"","hide-header":"","hide-footer":"",visible:e.showAlert,"body-class":"d-flex flex-column align-items-center"},on:{hidden:e.closeTip}},[i("i",{staticClass:"fa fa-exclamation-circle",attrs:{"aria-hidden":"true"}}),e._v(" "),i("p",{staticClass:"text-center"},[e._v(e._s(e.alertText))]),e._v(" "),i("b-button",{staticClass:"btn btn-outline-success w-100 frame-btn",on:{click:e.closeTip}},[e._v("CONFIRM")])],1)},n=[],r={render:a,staticRenderFns:n};t.a=r},544:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAw1BMVEUAAAAA0A0A0A0A0A0A0A4A0Q4A0xIA5ikA0Q4A0A4A0A4A0Q0A0Q8A0w4A0hIA1xQAzw4A0A4A0A0Azw4A0A4A0A0Azw8Azw8Azw4AzxAA0Q4Azw3///8I0BQT0h4Z1CT6/vrV99fy/PK38rpi4mqO6pNE3E0v2DnP9tHE9Mem7qqC54go1zP2/fad7aJ75oFP3lfe+N/a+Nvv/O/r++zj+uTI9cqF6Isi1S3o+um98sCW65s920au77Jc4GQ22UBq43GiLjBXAAAAG3RSTlMA68X64EkqBlW6pJljNhwT9e/Sy7Ksi3trQDhS7vz/AAAEfElEQVRo3rzWWQKDIAwE0CQgoFC1m13m/vfsAdSKQnw3yMx8hHbzLry6Vm6WjWF7k7Z7BedJl3s/LRbZ59uRjiF1jL+4SwNV5sPDIIN5hJqpX+IV2a7xQnV8WuzUfqhcIzhAmtKQ7zjoXhL4EFEgHp54YhThREf0gmLSHxgVowLeOzI/oZLJl8esH7ezqMg6yvRlVMXfzFmNqGzMmlgwqM6EjHsNFJhms98RKsaNnh1DCTv6o7dQY3ta5QWKxNOaCaqm1UFDWbNSMEMZL9csUCe0IOEEiWYGxgl4/odFnCLO/tgfr3W2kzAQhQFYA0owMcYtav4zTEs3lhawVfbF938qO2QooPQMw0W/u7n6M5M5Cyryd+t9RkWeKy7hvZuKSokvqQ9U6ONqr4kKNe2/tAj7q26aOTO32/uJcKl7uxoW/jyhQ+3BEhxzLTceYdTqz+i/1McFHhu7vRJGfptOc0PY2+2cLzCQHpXrCdh60eOhBl70RZyOhKXag56HxlzeLIZiPR3vwIq/yORTws7dlXINjuiQlvWCzmFa0B8Xry1g5Xq7w4M1JM2VxUnxVNaEtAnsqO3+HZzYIW0JpbikhJLqUzKFlfc8+BWcBWkOtgJ9/MZWj7QVrLzmwXUwREY78ijJEVC6pDkt2Kjn/RKcERUC5KYJaX3kQir4sNIw/K0B7Q020/Xs4LjcDBPKJR1vMAksg28NjXpuLOEgFBAyCsOoZdeu38BJieWuIUZFdSfeMMKZ3gx9KyFG24ecZHRkPDq3dzXBaXPXjUXgnHj8EGdoGvbLTyrlicilkxbinF3zCRyPyozFyCl9CwmTJ75/YEgl0pbKvTy5bphNMZVYbhxiuMI4n2pgjcv2HZd2MjohAK/2y5zZ7TQIBUE4atLWqjEaE01mu4dS+oMgrQoWi619/6cyRn4CIpO0aeW75eLAsjtndpcdvJA6LONJimvwEWavE5txHhJ2MOvHR/UZndeZX2RCNACQqcmKhZqN1ExdJJ2NZCgAJ/340kUZk+S6BaEue7WIgwcM3FQyfUDD/AEpp1MwHKkSIZScVZILericR8XvIAJyDsrC/iUewhkSyeyD41eUc+0L54lcEvcAR9/KVWyEY5NrsYcqvKhWsPYNdS+1PgStCDWehRIQ69NFCk1se7wcpZ5LE6EsiNnLFIRZL3upAKDTyWbr6KcwIqIf34aeYuTVU5QYCsGhhv4BlM1cUWEizbi8helgJ4Jm16topNPQphJ01lTDxOaeNDTmFB3+fS4zmv29RvPGlXqiKQiXZPjCmFu7DWPOrsm4iTJd1yY0444O2Dhx8l76uz+mhNArRor74G+D0Sx6cR+9iapn81b5pnuIRYhJLDaWuDjQJiQOiJu/+v9B+ZFXA21Yhhx1/dOOhdcRV3xtWWp+dW8HRAAAIAgD+7e2gwI3zLFfLONywnUm1bNwQoBj0ACKndzwkJGXVTEhmY/OcbGgh0eyQaiewPLRr5Y5d8BuGWVvwvuCXaFv0LgsKb0TzmY76h+tNmvZg5lOvA8OU9y6bDob0foAAAAASUVORK5CYII="},558:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(90),r=a(n),s=i(91),o=a(s),l=i(89),c=a(l),u=i(521),d=a(u),A=i(524),h=a(A),f=i(135),p=a(f),v=i(196);t.default={data:function(){return{payDetail:"",showAlert:!1,alertText:null,timeRemainMilliseconds:900,gotoPayOrder:!1,payWay:1}},components:{headerTop:d.default,alertTip:h.default},computed:(0,c.default)({},(0,v.mapState)({shopid:function(e){return e.global.shop.shopid},userInfo:function(e){return e.global.user.userInfo},membershipPrice:function(e){return e.global.order.membershipPrice},orderMessage:function(e){return e.global.order.orderMessage}}),{timeRemain:function(){var e=parseInt(this.timeRemainMilliseconds/60);e<10&&(e="0"+e);var t=parseInt(this.timeRemainMilliseconds%60);return t<10&&(t="0"+t),"00 : "+e+" : "+t}}),created:function(){this.initData(),this.shopid&&this.clearShoppingCart(this.shopid)},mounted:function(){this.remainingTime()},beforeDestroy:function(){clearInterval(this.timer)},methods:(0,c.default)({},(0,v.mapMutations)({confirmInvoice:"global/order/confirmInvoice",clearShoppingCart:"global/cart/clearShoppingCart"}),{initData:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(r.default.mark(function e(){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.default.payRequest(this.orderMessage.order_id,this.userInfo.user_id);case 2:if(this.payDetail=e.sent,!this.payDetail.message){e.next=7;break}return this.showAlert=!0,this.alertText=this.payDetail.message,e.abrupt("return");case 7:case"end":return e.stop()}},e,this)}));return e}(),remainingTime:function(){var e=this;clearInterval(this.timer),this.timer=setInterval(function(){0===--e.timeRemainMilliseconds&&(clearInterval(e.timer),e.showAlert=!0,e.alertText="Payment Timeout !!!",e.$router.go(-1))},1e3)},confirmedToPay:function(){this.showAlert=!0,this.alertText="Cannot payment on here, please open the offical APP to pay !!!",this.gotoPayOrder=!0},closeTipFun:function(){this.showAlert=!1,this.gotoPayOrder&&this.$router.push("/order")}})}},604:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"order-payment-container"}},[a("header-top",{attrs:{"go-back":"true","header-title":"order online payment"}}),e._v(" "),a("b-container",{staticClass:"position-relative px-0 main-container d-flex flex-column h-100",attrs:{fluid:""}},[a("b-card",{staticClass:"order-payment-card h-100",attrs:{"no-body":""}},[a("b-card-header",[a("h4",{staticClass:"text-center"},[e._v("remaining time to pay")]),e._v(" "),a("p",{staticClass:"text-center"},[e._v(e._s(e.timeRemain))]),e._v(" "),e.payDetail.resultData?a("div",{staticClass:"price-detail d-flex flex-row align-items-center justify-content-between w-100"},[a("span",[e._v("detail")]),e._v(" "),a("span",[e._v("$ "+e._s(e.membershipPrice&&e.membershipPrice.toFixed(2)||e.payDetail.resultData.orderInfo.orderAmount&&(e.payDetail.resultData.orderInfo.orderAmount/100).toFixed(2)))])]):e._e()]),e._v(" "),a("b-card-body",{staticClass:"p-0 d-flex flex-column"},[a("h4",[e._v("payment option")]),e._v(" "),a("b-list-group",[a("b-list-group-item",{staticClass:"d-flex flex-row align-items-center justify-content-between",class:{chosed:1==e.payWay},on:{click:function(t){e.payWay=1}}},[a("div",{staticClass:"d-flex flex-row align-items-center"},[a("img",{staticClass:"mr-3",attrs:{src:i(605)}}),e._v(" "),a("span",[e._v("zhifubao")])]),e._v(" "),a("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}})]),e._v(" "),a("b-list-group-item",{staticClass:"d-flex flex-row align-items-center justify-content-between",class:{chosed:2==e.payWay},on:{click:function(t){e.payWay=2}}},[a("div",{staticClass:"d-flex flex-row align-items-center"},[a("img",{staticClass:"mr-3",attrs:{src:i(544)}}),e._v(" "),a("span",[e._v("wechat")])]),e._v(" "),a("i",{staticClass:"fa fa-check-circle",attrs:{"aria-hidden":"true"}})])],1),e._v(" "),a("b-button",{staticClass:"btn filled-btn",attrs:{name:"confirmBtn",value:"CONFIRM TO PAY"},on:{click:function(t){t.preventDefault(),e.confirmedToPay(t)}}},[e._v("CONFIRM TO PAY")])],1)],1),e._v(" "),a("alert-tip",{attrs:{alertText:e.alertText,showAlert:e.showAlert},on:{closeTip:e.closeTipFun}})],1)],1)},n=[],r={render:a,staticRenderFns:n};t.a=r},605:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAIAAABsNpe/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMjgzMDhGREVFQUIxMUU2OUE4QjgyRUYwMDgxQTc4QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMjgzMDhGRUVFQUIxMUU2OUE4QjgyRUYwMDgxQTc4QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQyODMwOEZCRUVBQjExRTY5QThCODJFRjAwODFBNzhBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQyODMwOEZDRUVBQjExRTY5QThCODJFRjAwODFBNzhBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i3VM1AAACXJJREFUeNrcW3lQlOcZ/+5j99uF5ZAjgHKjgHEUI4LBNlqqqZaUxjRObeuYaGOaVmuS0WQ605p0mrTT5mhjW+xMSTVTkyY0Rm2bRA2iAh4QEDURCYcccsi17PndfRdYZJc9vj04kmc+9g9m9nvf3/tcv+d53oVlWYa+/IIF8V2SDF0aEBqGxBt6sc0kdVvlQU4yiBAKQzoMnkdCsTSSpEHTtehiHZoZggZxaThwbdwYkY52cCe6uMpeHpIUf42AvxmFr48lNsbhSQwymzD+3syVNFkvgd0HJrnRxOPJ5GMpxEzDePUG+/x1i9UoBtPAaeTXi+i9mRQGTz+MsnZuT52lfViYLm9VIX+5V/VEGjldMIyCvPOi6a0v2BmIPKtj8QPL1ZmhaJBhlPfwm6pMAwYRmjFBoIO5zPZUMmgwSprYJ6qMs5IQfraIfn25KggwXrhq+eWn5llMbcWJZFkBExCM5+osLzfMJoYxKYwnPnpA49EA3cuvGuYEBiAfd3Abyw3+wDjQyO6vmxMYxuREO7etyuQbjA9v809dMEJzTEqbrL+5ZlXqG31WKeq4HjJL0JyUjwu134jBvcMorjC838YFvt66eED7CNaeaWAYuniHf7sl0OwZE4J1FoUgsEeiXtrMBQUDBEMAw5OOnOI1CAocRrdeeKbW/EqOyq1v8BL0WJ1p7hdJr1631A+JbmG82GCRTRL0ZRCwVddGBZjfi59ZlL4GhxMZNBR3S6l7WFnr7IdQnApOCMXCCdgzAW0CzI33wi3+3cbWZNE54aizi7983fpcjVKLSg3DLhRqdCTi0Ttci+cNmgV58X9HWoa8FwJbU6nSPLWzUb3eZFWuU6CHMNIWLTw8HuB5eNQYrMMV1U1vfmE12JWGTfDwHr0PJPzyiAioCuO+ThNk6OEEIkWDOFXtxzo5z3U3jsC1CotKGTrSxu0YZfKYvabzsZ62SF6oCgJpcThF4xBwT3bzey8HMxK+286OwRg/mne7uCCHElceIAa7JXaqi+ckeRxGi1HqGwl2WYe6sDebEcJBPqwzvcK4UV3s97NDsymJ/Ot9KqurEyBQKIxw9oIfJOJFcTreTWZicBjwoNNdvm2m6o5QGIPbYNQN+qkKVpTDSB86ZSQKR6Ju1QGs4/SAzzupGbBr43O9nzAsok2naswfQ4mikAS1wxcvgQ357jy1o5u3wWjyl4Cc7OTA45+5P51J/36ZyhGGCLE+76THYIfRaJGCHpQUMGBnizp5269oKU1kcW7GZwMwlKhBHTOjeGrQ/2iJjKfcGRYMXhXpUOoAHwukI4z5Dx+BvxaF5YfjyVqURqFkDUqhUP2gYBJABBcq+oVWsC3Jdc7bMp/ImtTYBBZV1h5QOYWN78kX71gYju1MpbYlE1NjVPbo5sYayYCrnu0TQPyp6OWbzfItO2kl1OgvslWTq9BWo/TJbT5gGGA3Ct0DhV/LUW9egM+jkAn3Bkxfz8tqDKgHRielaRUGr4vFwQNl05/rpS6zeLZXqB7gl4Ri6VqHbPOnG1YoMLu2wQgnkQFOgV3i8OGV6i2JtpMeYKVrw9KJTu54N98IQt7YJhA4gUbWR2ErIvHcCOweFay1U+6FIQh41sbgFpEiHNsBTQbpnYAZnQ1GsgpR0irfn02PYQA2sKXSWNUz1QzkdlYqGRZKGq0QARdEYKsj8W/F4Ssi7nogPSWLgxNJoJAef1MwNEojbNXfDyuNh71NLdQMenmtFpwowJDx4QhnEpUvk6ZGXlpCr4vBVW7yfZ9Vqu4X3mxmj3bx7qKCO1kciV95UGs7pywd+PQCI4tBAQZbExJwY5MvJ8dKN1npu58YVkQTezLIR+a7GPABTyuKI8ADosLbt/j329lavdStVzTQWjoaVGwwcsK8D3Wy7E55uttPOx7ipBSNl4WAukAABM/NEalhWDjewR/q4DwzlDGLtf3lR3rPHhPm4GfpQyKHVqqXhikdgqVpkTQt8Z144ncsfaSNf6+drQTO46ofmz8PG8/igD+vmtIVdWYPdhhTqwivkjMPr1yjmezog6y0rdpU3sN7Lb0AEd6dQZ4v1Nas0f4tX/NtYJOT1qcYdCxTjf/voXgvM+lae5fu0QUERCjmtCgMFi4r0ORNUjhw6OKzxtIW9oFyQ3GFsX5ItChQ8bIw9PEU4nA+0/2w7h/3M7nRBEgAW+Nwhz5Vu0me/96gh7dEaNHza7QgbYHa7ec15gM3rV7NKy0MezqD2uE4gwQYdlwwfXBrkoMhMDiaXQup3AjfmFHDkMhL8rJwzKHdtqHc8J92T+77Ri7zk3TbnkAVf6SNe+aKpX8i8Tny77wofFsytT4Wi1UhThgeOWescMk7aKQ4Ct9/L52leIg8xMk6u13chQEi6cZTI54MRI22PRgSp4In+BygTGf7+A6TNMDKkizH0Eh6CPZQPJ6gQpwa92CNz/Tixgpjq+d2IAztXkTvTKNSNM5vmCqArd0XjjnDALL8fyM1fZ7cLjoELctn8iJ90z4A/MZNdle9GbIqY6A08qM44qcZ1DL3kQ28Exg1ble2A4xjnVzRaYOXNSjkqURyRxoZS8PhHvsJJkEWJAik5331liuDgs+hGod/nETuy6YjSXgqlQavXTnJl5ynTUVnDMduKUpwICuDnJitw7JDEVBsJKhtViCPntO5PqHTLFbfEf4MXhXg8A2Dn0wlt6dSS3R3NdNrlaIohxN0hgHSZ/oHQz6VHyC1JaoQBrWxdGm0s9/KybIpqP07FbL1HuLZTGrR6GWyywPi8nDUEwwgf2xkd829MexY0N+TSuWEo4pGmEA2nzMGPqSbDknUYY0bQnDEZUthihxexWRG4HMOBAK/k8/giLvOiCsieLSAAYliTqH4VwHj5BJeYAABCaj66xqIROYIhoP5zKb5hMc+lRsB0C+s1YBkNOsYSvKY7Sme7od5v091dVhcX2Hsmr7Lhd7kn6s1mxd4IeCKbreBqv/R88ZTnfwMAwAR9ugqRklV58OVyX2fWn57deauJn0viTyYq9Yqm8r6doH1ZDe/s8bcPDjNBqZCSpeqtyb7cLvYn+vEL12zPt9g9nqRwB+BoWezaFB10KhvQxM/b0WP8PIfrltfADWgJUh3TChkbyq1eyEZ7VdgDPSq/aEW9q3W0ZmTn4kZ2hBHgCL2+4lkQFoMyu839Lz80W3+TA9/vl+8OuSttKCQ+3UoqBYKonBA8ohgpCX4q/EzlP8LMABoSAFkOs78cgAAAABJRU5ErkJggg=="}});