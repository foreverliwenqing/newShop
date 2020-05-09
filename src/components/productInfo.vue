<template>
      <div class="info-3">
        <!-- <van-sticky>
            <header>
                <div class="left">
                    <div class="wrap">
                        <i class="iconfont iconleft icon" @click="showSlider()"></i>
                    </div>
                </div>
                <div class="right">
                    <div class="account" @click="changeShow = true">
                        <i class="iconfont iconshenglvehao icon"></i>
                    </div>
                </div>
            </header>
        </van-sticky> -->
    
        <section>
            <!-- 轮播图片 -->
            <van-swipe @change="onChange">
                <!-- 循环体开始 -->
                <van-swipe-item>
                    <img src="//s4.forcloudcdn.com/item/images/dmc/2a5554a3-8ffd-422a-8fec-b85833ae68d4-800x800.jpeg_750x0c.jpeg"
                        alt="">
                </van-swipe-item>
                <!-- 循环体结束 -->
                <van-swipe-item>
                    <img src="//s4.forcloudcdn.com/item/images/dmc/2a5554a3-8ffd-422a-8fec-b85833ae68d4-800x800.jpeg_750x0c.jpeg"
                        alt="">
                </van-swipe-item>

                <van-swipe-item>
                    <img src="//s4.forcloudcdn.com/item/images/dmc/2a5554a3-8ffd-422a-8fec-b85833ae68d4-800x800.jpeg_750x0c.jpeg"
                        alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="//s4.forcloudcdn.com/item/images/dmc/2a5554a3-8ffd-422a-8fec-b85833ae68d4-800x800.jpeg_750x0c.jpeg"
                        alt="">
                </van-swipe-item>
                <div class="custom-indicator" slot="indicator">
                    {{ current + 1 }}/4
                </div>
            </van-swipe>
            <!-- 轮播图片结束 -->
        </section>

        <article>
            <div class="item-detail-info">
                <div class="productInfo">
                    <div class="title">
                        <!-- 现价开始 -->
                        <div><span>CNY</span> <span>14.77</span></div>
                        <!-- 现价结束 -->
                        <!-- 原价开始 -->
                        <del class="original-price">
                            <span>CNY</span>
                            <span>23.43</span>
                        </del>
                        <!-- 原价结束 -->
                        <div class="tax-title">(VAT Inclusive)</div>
                    </div>
                </div>
                <div class="item-ship-info">
                    <div class="block1">
                        <div class="flash-line">
                            <!-- 运送全球 -->
                            <span class="line1">Ship from Global</span>
                            <!-- 运送全球结束 -->
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <div class="productName">
            <!-- 商品信息展示 -->
            <div class="productName-small">
                <h1>White Friday Sale</h1><br><br>
                <h1>Buy 1 Get 1 Free (2pcs) </h1><br><br>
                ❤️ QUICK EGGSHELL REMOVER. Smart kitchen gadget, effortlessly removes the top of the eggshell without
                burning fingers, so you can easily make a special egg dish.<br><br>
                ❤️ FOR DIFFERENT SIZE OF EGGS. The diameter of the cup is 3.3 cm which is suitable for most eggs' size.
                It also can be used on soft boiled, hard-boiled or raw eggs, make eating eggs easier.<br><br>
                ❤️ SIMPLE OPERATION. Crack the eggshell nicely and easily in seconds, just need to pull the ball up and
                hold it, then let it go, leaving a perfect score around the egg, then the top eggshell will be
                removable.<br><br>
                ❤️ REUSABLE AND EASY TO CLEAN. Made from superior quality stainless steel, hardwearing, stain-resistant
                and easy to keep clean.<br><br>
                ❤️ USAGE SCENARIOS. With this clever kitchen tools, you can easily make egg custard, pudding, little
                cake even some green plants artwork for your families. Perfect gift for various festivals!<br><br>
            </div>
            <!-- 商品数据展示结束 -->
        </div>
        <!-- 商品图片展示开始 -->
        <!-- <div class="imgContainer visible-img-detail">
            <p><img src="https://sgp-pic-temp.oss-ap-southeast-1.aliyuncs.com/www.ghol.store/image/bm78s1574153462.jpg"
                    title="1574153462803138.jpg"></p>
            <p><img src="https://sgp-pic-temp.oss-ap-southeast-1.aliyuncs.com/www.ghol.store/image/68x2c1574153462.jpg"
                    title="1574153462704104.jpg"><br><img
                    src="https://sgp-pic-temp.oss-ap-southeast-1.aliyuncs.com/www.ghol.store/image/gdp831574157772.gif"
                    title="1574157772606401.gif" alt="封面13(5)(1).gif"></p>
            <p><img src="https://sgp-pic-temp.oss-ap-southeast-1.aliyuncs.com/www.ghol.store/image/tk7qy1574153462.jpg"
                    title="1574153462492148.jpg"></p>
            <p><img src="https://sgp-pic-temp.oss-ap-southeast-1.aliyuncs.com/www.ghol.store/image/3z5i41574153463.jpg"
                    title="1574153463547043.jpg"></p>
            <p><img src="https://sgp-pic-temp.oss-ap-southeast-1.aliyuncs.com/www.ghol.store/image/5k1qf1574153464.jpg"
                    title="1574153464783161.jpg"></p>
            <p><img src="https://sgp-pic-temp.oss-ap-southeast-1.aliyuncs.com/www.ghol.store/image/6ea8t1574153467.jpg"
                    title="1574153467161872.jpg"></p>
            <p><img src="https://sgp-pic-temp.oss-ap-southeast-1.aliyuncs.com/www.ghol.store/image/8sbxa1574153468.jpg"
                    title="1574153468668961.jpg"></p>
            <p><img src="https://sgp-pic-temp.oss-ap-southeast-1.aliyuncs.com/www.ghol.store/image/e7sfn1574153468.jpg"
                    title="1574153468739764.jpg"></p>
            <p><br></p>
        </div> -->
        <!-- 商品图片展示结束 -->
        <div style="height: 100px"></div>
        <footer>
            <div class="page-bottom">
                <!--add Cart 按钮开始 -->
                <div class="wrapper">
                    <div class="item"><i class="iconfont iconhome"></i> <span>Shop</span></a></div>
                    <div class="item"><i class="iconfont icongouwuche"></i> <span>Cart</span></a></div>
                    <button class="item-add2cart" @click="( show = true )">
                        ADD TO Cart
                    </button>
                </div>
                <!-- add Cart 按钮结束 -->
            </div>
        </footer>
        <!-- 底部弹出框开始 -->
        <van-popup class="bottomPup" :lazy-render="false" round v-model="show" closeable close-icon="close"
            position="bottom">
            <div class="content">
                <div class="head">
                    <!-- 展示图片 -->
                    <img src="//s4.forcloudcdn.com/merchant/upload/a3b0474768f19d435e6c0ee95e0fcc48.jpg_220.jpg"
                        @click="showImgFlag = true" />
                    <!-- 展示图片 -->
                    <div class="select-info">
                        <!-- 产品名 -->
                        <div class="title">Portable USB Electric Juicer Cup</div>
                        <!-- 产品名 -->
                        <div class="selected-attr">
                            <span>selected:</span>
                            <span v-text="typeTitle">
                            </span>
                            <span v-text="colorTitle">
                            </span>
                            <span v-text="sizeTitle"></span>
                        </div>
                        <div class="option-price">
                            <!-- 现价 -->
                            <span class="infoPrice">
                                <span class="nowPrice"></span>
                                <span>SAR</span>
                            </span>
                            <!-- 现价 -->
                            <!-- 原价 -->
                            <del>
                                <span class="allpricenodis oldPrice"></span>
                                <span class="allpricenodis">SAR</span>
                            </del>
                            <!-- 原价 -->
                        </div>
                    </div>
                </div>
                <div class="van-sku-body">
                    <div class="van-sku-group-container">
                        <!-- product -->
                        <div class="van-sku-row van-hairline--bottom">
                            <div class="van-sku-row__title productText">product</div>
                            <span class="van-sku-row__item typeId" v-for="(item, index) in 3" :key="index" price="53.00"
                                @click="productFun(index, 0)">
                                <img src="https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                                    class="van-sku-row__item-img">
                                <span class="van-sku-row__item-name typeName">type</span>
                            </span>
                        </div>
                        <!-- color -->
                        <div class="van-sku-row van-hairline--bottom">
                            <div class="van-sku-row__title colorText">color</div>
                            <span class="van-sku-row__item colorId" v-for="(item, index) in 5" :key="index"
                                @click="productFun(index, 1)">
                                <img src="https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg"
                                    class="van-sku-row__item-img">
                                <span class="van-sku-row__item-name colorName">blue</span>
                            </span>
                        </div>
                        <!-- size -->
                        <div class="van-sku-row van-hairline--bottom">
                            <div class="van-sku-row__title sizeText">Size</div>
                            <span class="van-sku-row__item sizeId" v-for="(item, index) in 5" :key="index"
                                @click="productFun(index, 2)">
                                <span class="van-sku-row__item-name sizeName">1</span>
                            </span>
                        </div>
                    </div>
                    <div class="van-sku-stepper-stock">
                        <div class="van-sku-stepper-container">
                            <p>Quantity</p>
                            <div class="manuplator___3-16blr2">
                                <button class="btn disabled___1oMwKMQL" @click="reduce">-</button>
                                <input disabled="disabled" v-model="num">
                                <button class="btn last_btn" @click="addNum">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 提交按钮开始 -->
                <button class="button-confirm" @click="goAddress">
                    Confirm
                </button>
                <!-- 提交按钮结束 -->
            </div>
        </van-popup>
        <!-- 底部弹出框结束 -->
        <!-- 回顶部开始 -->
        <img v-if="btnFlag" @click="backTop" class="go-top"  src="@/assets/img/timg.jpg">
        <!-- 回顶部结束 -->
        <!-- 图片点击弹出框结束 -->
        <van-overlay :show="showImgFlag" @click="showImgFlag = false" class="overlayImg">
            <div class="wrapper">
                <img :src="itemImg" alt="">
            </div>
        </van-overlay>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    data() {
        return {
            nowPrice: "",
            oldPrice: "",
            current: 0,
            show: false,
            changeShow: false,
            showImgFlag: false,
            activeNames: ['1'],
            typeTitle: "",
            colorTitle: "",
            sizeTitle: "",
            typeFlag: "",
            colorFlag: "",
            sizeFlag: "",
            num: 1,
            btnFlag: false,
            itemImg: "//s4.forcloudcdn.com/merchant/upload/a3b0474768f19d435e6c0ee95e0fcc48.jpg_220.jpg"
        }
    },
    methods: {

        backTop() {
            const that = this
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if (that.scrollTop === 0) {
                    clearInterval(timer)
                }
            }, 16)
        },
        reduce() {
            if (this.num > 1) {
                this.num--;
                var price = ((this.num) * this.nowPrice).toFixed(2);
                var oldPrice = ((this.num) * this.oldPrice).toFixed(2);
                $(".nowPrice").html(price);
                $(".oldPrice").html(oldPrice);
            } else {
                this.num = 1;
            }
        },
        addNum() {
            if (this.num < 999) {
                this.num++;
                var price = ((this.num) * this.nowPrice).toFixed(2);
                var oldPrice = ((this.num) * this.oldPrice).toFixed(2);
                $(".nowPrice").html(price);
                $(".oldPrice").html(oldPrice);
            } else {
                this.num = 999
            }
        },

        onscroll() {
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            that.scrollTop = scrollTop
            if (that.scrollTop > 340) {
                this.btnFlag = true
            } else {
                this.btnFlag = false
            }
            let falg = scrollTop / 100;
            $("header").css("background-color", `rgba(255, 255, 255, ${falg})`);
            $(".center").css("opacity", `${falg}`)
            var objArr = [$(".wrap"), $(".cart"), $(".account")];
            if (scrollTop > $("header").height()) {
                for (var i = 0; i < objArr.length; i++) {
                    objArr[i].css("background-color", "transparent");
                    $(".icon").eq(i).css("color", "#000");
                }
            } else {
                for (var i = 0; i < objArr.length; i++) {
                    objArr[i].css("background-color", "#d1d1d1");
                    $(".icon").eq(i).css("color", "white");
                }
            }
        },
        onChange(index) {
            this.current = index;
        },
        changeLang(index) {
            for (var i = 0; i < $(".langIcon").length; i++) {
                $(".langIcon").eq(i).removeClass("iconziyuan");
            }
            $(".langIcon").eq(index).addClass("iconziyuan");
            this.changeShow = false;
            if (index == 0) {
                $(".info-3").css("direction", "ltr");
                $(".van-icon-close").css("right", "16px")
            } else {
                $(".info-3").css("direction", "rtl");
                $(".van-icon-close").css("right", "6.86rem")
            }
        },
        changeCountry(index) {
            for (var i = 0; i < $(".changeIcon").length; i++) {
                $(".changeIcon").eq(i).removeClass("iconziyuan");
            }
            $(".changeIcon").eq(index).addClass("iconziyuan");
        },
        showSlider() {

        },

        productFun(index, item) {
            if (item == 0) {
                $(".typeId").eq(index).addClass("van-sku-row__item--active").siblings().removeClass("van-sku-row__item--active");
                this.typeTitle = $(".typeName").eq(index).text();
                this.typeFlag = true;
                if ($(".head img").length) {
                    $(".head img").attr("src", $(".typeId").eq(index).find("img").attr("src"));
                    this.itemImg = $(".typeId").eq(index).find("img").attr("src");
                }
                $(".nowPrice").html(($(".typeId").attr("price") * this.num).toFixed(2));
                this.nowPrice = $(".typeId").attr("price");
                let i = 0;
                i++
            } else if (item == 1) {
                $(".colorId").eq(index).addClass("van-sku-row__item--active").siblings().removeClass("van-sku-row__item--active");
                this.colorTitle = $(".colorName").eq(index).text();
                this.colorFlag = true;
                if ($(".head img").length) {
                    $(".head img").attr("src", $(".colorId").eq(index).find("img").attr("src"));
                    this.itemImg = $(".colorId").eq(index).find("img").attr("src");
                }
            } else if (item == 2) {
                $(".sizeId").eq(index).addClass("van-sku-row__item--active").siblings().removeClass("van-sku-row__item--active");
                this.sizeTitle = $(".sizeName").eq(index).text();
                this.sizeFlag = true;
            }
        },

        Post(URL, params) {
            var temp_form = document.createElement("form");
            temp_form.action = URL;
            temp_form.target = "_self";
            temp_form.method = "post";
            temp_form.style.display = "none";

            document.body.appendChild(temp_form);
            temp_form.submit();
        },
        goAddress() {
            if (!this.typeFlag) {
                this.$toast({
                    message: "please select " + $(".productText").text(),
                    position: "center"
                })
            } else if ($(".colorText").length != 0 && !this.colorFlag) {
                this.$toast({
                    message: "please select " + $(".colorText").text(),
                    position: "center"
                })
            } else if ($(".sizeText").length != 0 && !this.sizeFlag) {
                this.$toast({
                    message: "please select " + $(".sizeText").text(),
                    position: "center"
                })
            }
        }
    },
    created() {
        let that = this;
        window.addEventListener('scroll', this.onscroll);
        $(".langIcon").eq(0).addClass("iconziyuan");
        $(".nowPrice").text("229.00");
        $(".oldPrice").text("383.00");
        that.nowPrice = $(".nowPrice").text();
        that.oldPrice = $(".oldPrice").text();
    }
};
</script>
<style lang="scss">
.info-3 {
    background-color: #f5f5f5;

    header {
        height: .88rem;
        left: calc(50% - 3.75rem);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .12rem .08rem;
        position: absolute;
        width: 7.5rem;
        z-index: 10;
        direction: ltr !important;

        .left {
            flex: 1;

            .wrap {
                display: flex;
                width: .64rem;
                height: .64rem;
                border-radius: .64rem;
                text-align: center;
                padding: .06rem;
                margin: 0 .08rem;
                background: hsl(0, 0%, 82%);
                justify-content: center;
                align-items: center;

                i {
                    font-size: .4rem;
                    color: white;
                    font-weight: 700;
                }
            }
        }

        .center {
            display: flex;
            flex: 1;
            justify-content: center;
            opacity: 0;

            .logo-text {
                img {
                    width: .52rem;
                    height: .52rem;
                }
            }
        }

        .right {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .cart,
            .account {
                display: flex;
                width: .64rem;
                height: .64rem;
                border-radius: .64rem;
                text-align: center;
                padding: .06rem;
                background: hsl(0, 0%, 82%);
                margin: 0 .08rem;
                justify-content: center;
                align-items: center;

                i {
                    font-size: .4rem;
                    color: white;
                }
            }
        }
    }

    section {
        .van-swipe {
            direction: ltr;

            .van-swipe-item {
                img {
                    width: 7.5rem;
                    height: 7.5rem;
                }
            }

            .custom-indicator {
                position: absolute;
                padding: 0;
                right: 2.6%;
                bottom: .5rem;
                font-size: .32rem;
                text-align: center;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.3);
                width: 100px;
                height: .6rem;
                line-height: .6rem;
                border-radius: 0.8533333333rem;
            }
        }
    }

    article {
        background: white;

        .item-detail-info {
            position: relative;
            background-color: #fff;
            padding: .3rem .24rem .32rem;

            .title {
                max-width: 80%;
                display: flex;
                flex-wrap: wrap;
                justify-items: center;
                align-items: center;
                font-size: .32rem;
                font-family: SFProText-Semibold, Helvetica, Arial, sans-serif;
                font-weight: 500;
                color: #ff4443;

                .original-price {
                    line-height: .66rem;
                    height: .66rem;
                    font-size: .3rem;
                    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
                    font-weight: 400;
                    color: #999;
                    margin: 0 .14rem;
                }

                .tax-title {
                    font-size: .26rem;
                    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
                    font-weight: 400;
                    color: #999;
                    line-height: .66rem;
                }
            }

            .btn-share {
                display: flex;
                align-items: center;
                justify-content: space-around;
                position: absolute;
                top: .4rem;
                right: 0;
                width: 1.44rem;
                padding: .12rem .2rem;
                background: #f5f5f5;
                vertical-align: middle;
                font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
                font-weight: 400;
                color: #999;
                right: 0;
                border-top-left-radius: .5rem;
                border-bottom-left-radius: .5rem;
                border: none;
                font-size: .24rem;

                i {
                    font-size: .24rem;
                }
            }

            .item-title {
                font-size: .3rem;
                font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
                font-weight: 400;
                color: #999;
                line-height: .5rem;
            }

            .item-ship-info {
                position: relative;
                background-color: #fff;
                margin-top: .24rem;
                padding: 0;

                .block1 {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    line-height: .5rem;

                    .flash-line {
                        display: flex;
                        align-items: center;

                        .line1 {
                            font-size: .3rem;
                            font-family: SFProText-Semibold, Helvetica, Arial, sans-serif;
                            font-weight: 600;
                            color: #333;
                        }
                    }

                    .line2 {
                        font-size: .24rem;
                        font-weight: 400;
                        color: #40ae5b;
                    }
                }
            }
        }

    }

    .productName {
        padding: .2rem .4rem;
        background: white;

        .productName-small {
            line-height: 0.3rem;
            color: #808284;
            font-size: 0.3rem;
            padding-bottom: 26px;
        }
    }

    .imgContainer {
        img {
            width: 100%;
        }
    }

    footer {
        .page-bottom {
            width: 100%;
            position: fixed;
            bottom: 0;
            margin: 0 auto;
            max-width: 7.5rem;
            background: white;

            .wrapper {
                width: 100%;
                background-color: #fff;
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;

                .item {
                    position: relative;
                    width: 1.57rem;
                    border-right: .01rem solid #e6e6e6;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding-bottom: 10px;

                    .iconfont {
                        width: .52rem;
                        height: .52rem;
                        font-size: .45rem;
                        line-height: .45rem;
                        color: #999;
                        margin-top: .16rem;
                    }

                    span {
                        text-align: center;
                        font-size: .22rem;
                        font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
                        font-weight: 400;
                        color: #666;
                        display: block;
                        width: 100%;
                        text-align: center;
                    }
                }

                .item-add2cart {
                    flex-basis: 4.3rem;
                    background: #fedb43;
                    font-size: .28rem;
                    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
                    font-weight: 400;
                    color: #333;
                    border: none;
                }
            }
        }
    }

    .bottomPup {
        width: 7.5rem;
        left: calc(50% - 3.75rem);
        overflow-y: visible;

        .van-icon-close {
            font-size: .4rem;
            right: 16px;
        }

        .head {
            display: flex;
            padding: .24rem .24rem 0;

            img {
                margin: 0 .15rem 0 .15rem;
                width: 2.2rem;
                height: 2.2rem;
            }

            .select-info {
                display: inline-block;
                position: relative;
                vertical-align: top;
                line-height: .42rem;

                .title {
                    font-size: .28rem;
                    font-family: SFProText-Semibold;
                    width: 4rem;
                }

                .selected-sku-stock,
                .selected-attr {
                    font-size: .32rem;
                    font-family: SFProText-Regular;
                    font-weight: 400;
                    color: #666;
                    line-height: .9rem;
                }

                .option-price {
                    font-size: .4rem;
                    color: #fa2653;
                    height: .5rem;
                    line-height: .4rem;

                    .infoPrice {
                        display: inline-block;
                    }

                    del {
                        font-size: .24rem;
                        color: #666;
                    }
                }
            }
        }

        .van-sku-body {
            font-size: .24rem;
            max-height: 440px;

            .van-sku-group-container {
                margin: 0 16px;

                .van-sku-row {
                    .van-sku-row__title {
                        line-height: .4rem;
                    }

                    .van-sku-row__item {
                        padding: .1rem .12rem;
                        cursor: pointer;

                        span {
                            font-size: .24rem;
                        }
                    }
                }
            }

            .van-sku-stepper-stock {
                .van-sku-stepper-container {
                    height: 1.5rem;

                    p {
                        line-height: .6rem;
                    }

                    .manuplator___3-16blr2 {

                        .btn,
                        input {
                            width: .64rem;
                            height: .64rem;
                            border: none;
                            background-color: #f5f5f5;
                            text-align: center;
                            font-size: .3rem;
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .button-confirm {
            width: 100%;
            height: .96rem;
            background: #fedb43;
            font-size: .28rem;
            font-family: SFProText-Regular;
            font-weight: 700;
            color: #333;
            border: none;
            z-index: 10;
            display: flex;
            justify-content: center;
            cursor: pointer;
        }
    }

    .van-overlay {
        width: 7.5rem;
        left: calc(50% - 3.75rem);
    }

    // 回顶部
    .go-top {
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        position: fixed;
        bottom: 1.5rem;
        right: .3rem;
    }

    .changeStyle {
        width: 6rem;
        right: calc(50% - 3.75rem);

        .van-collapse {
            margin-top: 50px;
            direction: ltr !important;

            .van-collapse-item {
                padding: 0 .24rem;

                ul {
                    li {
                        line-height: .8rem;
                        font-size: .28rem;
                        cursor: pointer;
                        display: flex;
                        justify-content: space-between;

                        .iconziyuan {
                            color: red;
                        }
                    }

                    .countryIcon {
                        // background: url("../../img/sprite_gj.png") no-repeat;
                        background-position: 0px -7616px;
                        height: 35px;
                        line-height: 35px;
                        margin: .26rem 0 .26rem 0;

                        a {
                            display: flex;
                            width: 100%;
                            justify-content: end;
                            ;

                            span {
                                float: left;
                                margin-left: 40px;
                                text-align: left;
                                font-size: .24rem;
                            }

                            .changeIcon {
                                margin-inline-start: auto;
                                -webkit-margin-inline-start: auto;
                            }
                        }
                    }

                    .countryIcon:last-child {
                        margin-bottom: 0;
                    }
                }

                .van-cell {
                    font-size: .28rem;
                    font-weight: 400;
                    padding: .26rem 0;
                }
            }
        }
    }

    .overlayImg {
        z-index: 2020 !important;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;

        .wrapper {
            img {
                width: 7.5rem;
            }
        }
    }
}
</style>