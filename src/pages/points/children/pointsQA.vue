<template>
    <div id="answer-detail-container">
        <header-top header-title="POINT Q&A" go-back="true"></header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card class="answer-detail-card p-0 h-100">
                <h4>Q1: 怎么获得积分?</h4>
                <h6 class="small-gap">在线支付的订单将获得订单积分奖励：</h6>
                <ul>
                    <li> - 积分将在用户完成评价后获得。</li>
                    <li> - 可获得积分=订单金额×10（即1元=10点积分）。</li>
                    <li> - 订单金额指实际付款金额，不包含活动优惠金额。</li>
                    <li> - 每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</li>
                </ul>
                <h4>Q2: 积分用来做什么?</h4>
                <h6>可以在积分商城兑换各种礼品。</h6>
                <h4>Q3: 礼品兑换很多天了还没有收到，该怎么办?</h4>
                <h6>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</h6>
                <h4>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛?</h4>
                <h6>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</h6>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'

    export default {
        components: {
            headerTop
        }
    }
</script>