import fetch from '../config/fetch'
import localStoreAPI from '../config/utils'

const getUser = () => fetch('/v1/user', { user_id: localStoreAPI.getStore('userid') })

const defaultCity = () => fetch('/v1/cities', {
    type: 'guess'
})

const hotCity = () => fetch('/v1/cities', {
    type: 'hot'
})

const groupCity = () => fetch('/v1/cities', {
    type: 'group'
})

const currentCity = number => fetch('/v1/cities/' + number)

const searchPlace = (cityid, value) => fetch('/v1/pois', {
    type: 'search',
    city_id: cityid,
    keyword: value
})

const msiteAddress = geohash => fetch('/v2/pois/' + geohash)

const msiteFoodCates = geohash => fetch('/v2/index_entry', {
    geohash,
    group_type: '1',
    'flags[]': 'F'
})

const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
    let supportStr = ''
    support_ids.forEach(item => {
        if (item.status) supportStr += '&support_ids[]=' + item.id
    })

    const data = {
        latitude,
        longitude,
        offset,
        limit: '20',
        'extras[]': 'activities',
        keyword: '',
        restaurant_category_id,
        'restaurant_category_ids[]': restaurant_category_ids,
        order_by,
        'delivery_mode[]': delivery_mode + supportStr
    }

    return fetch('/shopping/restaurants', data)
}

const foodCateList = (latitude, longitude) => fetch('/shopping/v2/restaurant/category', {
    latitude,
    longitude
})

const foodDelivery = (latitude, longitude) => fetch('/shopping/v1/restaurants/delivery_modes', {
    latitude,
    longitude,
    kw: ''
})

const foodPromotion = (latitude, longitude) => fetch('/shopping/v1/restaurants/activity_attributes', {
    latitude,
    longitude,
    kw: ''
})

const searchRestaurant = (geohash, keyword) => fetch('/v4/restaurants', {
    'extras[]': 'restaurant_activity',
    geohash,
    keyword,
    type: 'search'
})

const shopDetail = (shopid, latitude, longitude) => fetch('/shopping/restaurant/' + shopid, {
    latitude,
    longitude: longitude + '&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics'
})

const foodMenu = restaurant_id => fetch('/shopping/v2/menu', {
    restaurant_id
})

const shopRatingList = (shopid, offset, tag_name = '') => fetch('/ugc/v2/restaurants/' + shopid + '/ratings', {
    has_content: true,
    offset,
    limit: 10,
    tag_name
})

const shopRatingScore = shopid => fetch('/ugc/v2/restaurants/' + shopid + '/ratings/scores')

const shopRatingTags = shopid => fetch('/ugc/v2/restaurants/' + shopid + '/ratings/tags')

const getServiceInfo = () => fetch('/v3/profile/explain')

const mobileCode = phone => fetch('/v4/mobile/verify_code/send', {
    mobile: phone,
    scene: 'login',
    type: 'sms'
}, 'POST')

const checkExsit = (checkNumber, type) => fetch('/v1/users/exists', {
    [type]: checkNumber,
    type
})

const sendMobile = (sendData, captcha_code, type, password) => fetch('/v1/mobile/verify_code/send', {
    action: "send",
    captcha_code,
    [type]: sendData,
    type: "sms",
    way: type,
    password,
}, 'POST')

const getcaptchas = () => fetch('/v1/captchas', {}, 'POST')

const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {
    username,
    password,
    captcha_code
}, 'POST')

const mobileLogin = (code, mobile, validate_token) => fetch('/v1/login/app_mobile', {
    code,
    mobile,
    validate_token
}, 'POST')

const changePassword = (username, oldPassword, newPassword, confirmPassword, captcha_code) => fetch('/v2/changepassword', {
    username,
    oldPassword,
    newPassword,
    confirmPassword,
    captcha_code
}, 'POST')

const topupVipBalance = (id, number, password) => fetch('/member/v1/users/' + id + '/delivery_card/physical_card/bind', {
    number,
    password
}, 'POST')

const userAddressList = user_id => fetch('/v1/users/' + user_id + '/addresses')

const postAddress = (userId, address, address_detail, geohash, name, phone, phone_bk, poi_type, sex, tag, tag_type) => fetch('/v1/users/' + userId + '/addresses', {
    address,
    address_detail,
    geohash,
    name,
    phone,
    phone_bk,
    poi_type,
    sex,
    tag,
    tag_type,
}, 'POST')

// const searchNearby = keyword => fetch('/v1/pois', {
//     type: 'nearby',
//     keyword
// })

const searchNearby = (cityid, value) => fetch('/v1/pois', {
    type: 'search',
    city_id: cityid,
    keyword: value
})

const deleteAddress = (userid, addressid) => fetch('/v1/users/' + userid + '/addresses/' + addressid, {}, 'DELETE')

const signout = () => fetch('/v2/signout')

const getRedPocketsList = id => fetch('/promotion/v2/users/' + id + '/hongbaos?limit=20&offset=0')

const getExpiredRedPocketsList = id => fetch('/promotion/v2/users/' + id + '/expired_hongbaos?limit=20&offset=0')

const exchangeRedPockets = (id, exchange_code, captcha_code) => fetch('/v1/users/' + id + '/hongbao/exchange', {
    exchange_code,
    captcha_code,
}, 'POST')

const checkout = (geohash, entities, shopid) => fetch('/v1/carts/checkout', {
    come_from: "web",
    geohash,
    entities,
    restaurant_id: shopid,
}, 'POST')

const getRemark = (id, sig) => fetch('/v1/carts/' + id + '/remarks', {
    sig
})

const payRequest = (merchantOrderNo, userId) => fetch('/payapi/payment/queryOrder', {
    merchantId: 5,
    merchantOrderNo,
    source: 'MOBILE_WAP',
    userId,
    version: '1.0.0',
})

const rePostVerify = (cart_id, sig, type) => fetch('/v1/carts/' + cart_id + '/verify_code', {
    sig,
    type,
}, 'POST')

const validateOrders = ({
    user_id,
    cart_id,
    address_id,
    description,
    entities,
    geohash,
    sig,
    validation_code,
    validation_token
}) => fetch('/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
    address_id,
    come_from: "mobile_web",
    deliver_time: "",
    description,
    entities,
    geohash,
    paymethod_id: 1,
    sig,
    validation_code,
    validation_token,
}, 'POST')

const placeOrders = (user_id, cart_id, address_id, description, entities, geohash, sig) => fetch('/v1/users/' + user_id + '/carts/' + cart_id + '/orders', {
    address_id,
    come_from: "mobile_web",
    deliver_time: "",
    description,
    entities,
    geohash,
    paymethod_id: 1,
    sig,
}, 'POST')

const getOrderList = (user_id, offset) => fetch('/bos/v2/users/' + user_id + '/orders', {
    limit: 10,
    offset,
})

const getOrderDetail = (user_id, orderid) => fetch('/bos/v1/users/' + user_id + '/orders/' + orderid + '/snapshot')

export default {
    getUser,
    defaultCity,
    hotCity,
    groupCity,
    currentCity,
    searchPlace,
    msiteAddress,
    msiteFoodCates,
    shopList,
    foodCateList,
    foodDelivery,
    foodPromotion,
    searchRestaurant,
    shopDetail,
    foodMenu,
    shopRatingList,
    shopRatingScore,
    shopRatingTags,
    getServiceInfo,
    mobileCode,
    checkExsit,
    sendMobile,
    getcaptchas,
    accountLogin,
    mobileLogin,
    changePassword,
    topupVipBalance,
    userAddressList,
    postAddress,
    searchNearby,
    deleteAddress,
    signout,
    getRedPocketsList,
    getExpiredRedPocketsList,
    exchangeRedPockets,
    checkout,
    getRemark,
    payRequest,
    rePostVerify,
    validateOrders,
    placeOrders,
    getOrderList,
    getOrderDetail
}