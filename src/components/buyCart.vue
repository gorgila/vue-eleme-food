<template>
    <b-col cols="9" class="flex-row align-items-center text-right">
        <div v-if="!food.specifications.length" class="d-flex flex-row flex-nowrap align-items-center justify-content-end">
            <transition name="showReduce">
                <i v-if="foodNum" 
                class="fa fa-minus-circle" 
                aria-hidden="true" 
                @click="removeOutCart(food.category_id, food.item_id, food.specfoods[0].food_id, food.specfoods[0].name, food.specfoods[0].price, '', food.specfoods[0].packing_fee, food.specfoods[0].sku_id, food.specfoods[0].stock)"></i>
            </transition>
            <transition name="fade">
                <span class="food-count-num" v-if="foodNum">{{foodNum}}</span>
            </transition>
            <i class="fa fa-plus-circle" 
            aria-hidden="true"
            @click="addItemToCart(food.category_id, food.item_id, food.specfoods[0].food_id, food.specfoods[0].name, food.specfoods[0].price, '', food.specfoods[0].packing_fee, food.specfoods[0].sku_id, food.specfoods[0].stock, $event)"></i>
        </div>
        <div v-else class="d-flex flex-row flex-nowrap align-items-center justify-content-end">
            <transition name="showReduce">
                <i class="fa fa-minus-circle" aria-hidden="true" v-if="foodNum" @click="shopRemoveTip"></i>
            </transition>
            <transition name="fade">
                <span class="food-count-num" v-if="foodNum">{{foodNum}}</span>
            </transition>
            <b-button class="btn btn-outline-success frame-btn btn-choose" @click="showChoices(food)">CHOOSE</b-button>
        </div>
    </b-col>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        data() {
            return {
                showMoveDot: []
            }
        },
        props: ['food', 'shopId'],
        computed: {
            ...mapState('global/cart', [
                'shoppingList'
            ]),
            shopCart: function() {
                return Object.assign({}, this.shoppingList[this.shopId])
            },
            foodNum: function() {
                const categoryId = this.food.category_id
                const itemId = this.food.item_id

                if (this.shopCart && this.shopCart[categoryId] && this.shopCart[categoryId][itemId]) {
                    let num = 0
                    Object.values(this.shopCart[categoryId][itemId]).forEach((item, index) => {
                        num += item.num
                    })

                    return num
                } else {
                    return 0
                }
            }
        },
        methods: {
            ...mapMutations('global/cart', [
                'addToCart',
                'moveoutFromCart'
            ]),
            removeOutCart(category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock) {
                if (this.foodNum > 0)
                    this.moveoutFromCart({
                        shopid: this.shopId,
                        category_id,
                        item_id,
                        food_id,
                        name,
                        price,
                        specs,
                        packing_fee,
                        sku_id,
                        stock
                    })
            },
            addItemToCart(category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock, event) {
                this.addToCart({
                    shopid: this.shopId,
                    category_id,
                    item_id,
                    food_id,
                    name,
                    price,
                    specs,
                    packing_fee,
                    sku_id,
                    stock
                })
                const elLeft = event.target.getBoundingClientRect().left
                const elBottom = event.target.getBoundingClientRect().bottom
                this.showMoveDot.push(true)
                this.$emit('showMoveDot', this.showMoveDot, elLeft, elBottom)
            },
            showChoices(food) {
                this.$emit('showChoicesList', food)
            },
            shopRemoveTip() {
                this.$emit('showRemoveTip')
            }
        }
    }
</script>