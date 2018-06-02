<template>
    <div id="answer-detail-container">
        <header-top header-title="POINT Q&A" go-back="true"></header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card class="answer-detail-card p-0 h-100">
                <p>
                    尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
                    购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
                    注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
                </p>
                <h4>Q1: 特权介绍</h4>
                <ul>
                    <li> - 身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</li>
                    <li> - 减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</li>
                    <li> - 更多特权，敬请期待！</li>
                </ul>
                <h4>Q2: 资费介绍</h4>
                <ul>
                    <li> - 饿了么会员卡：20元</li>
                </ul>
                <h4>Q3: 使用说明</h4>
                <h6 class="small-gap">当用户满足以下任一条件，会员服务自动失效：</h6>
                <ul>
                    <li> - 自绑定之日起超过31天；</li>
                    <li> - 在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
                </ul>
                <h4>Q4: 购卡说明</h4>
                <ul>
                    <li> - 在线购买：饿了么App <span class="font-weight-bold">&gt;</span> 我的 <span class="font-weight-bold">&gt;</span> 饿了么会员卡</li>
                </ul>
                <h4>Q5: 温馨提示</h4>
                <ul>
                    <li> - 用户在当前会员服务失效前，无法购买新卡。</li>
                    <li> - 请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</li>
                </ul>
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