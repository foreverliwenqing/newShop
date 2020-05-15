<template>
  <div class="info-3">
    <header>
      <div class="heLeft" @click="goBack()">
        <i class="iconfont iconzuobian"></i>
      </div>
      <div class="heContent">
        <li
          class="liS"
          v-for="(item, index) in headTitle"
          :key="index"
          @click="getBotton(index)"
        >{{item}}</li>
      </div>
      <div class="heRight">
        <i class="iconfont iconshenglvehao"></i>
      </div>
    </header>
    <div style="height: 50px"></div>
    <div class="infoContent">
      <section>
        <van-swipe @change="onChange">
          <van-swipe-item>
            <img
              src="//img.alicdn.com/imgextra/i4/299331521/TB2CR0ddmOI.eBjy1zkXXadxFXa_!!299331521.jpg_640x640q80_.webp"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="//img.alicdn.com/imgextra/i4/299331521/TB2CR0ddmOI.eBjy1zkXXadxFXa_!!299331521.jpg_640x640q80_.webp"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="//img.alicdn.com/imgextra/i4/299331521/TB2CR0ddmOI.eBjy1zkXXadxFXa_!!299331521.jpg_640x640q80_.webp"
              alt
            />
          </van-swipe-item>
          <div class="custom-indicator" slot="indicator">{{ current + 1 }}/3</div>
        </van-swipe>
      </section>

      <article>
        <div class="item-detail-info">
          <div class="productInfo">
            <div class="title">
              <!-- 现价开始 -->
              <div>
                <span>CNY</span>
                <span>14.77</span>
              </div>
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
                <span class="line1">日式简约纯色天竺棉4件套 纯棉床单被套床笠4件套1.5/1.8m床</span>
                <!-- 运送全球结束 -->
              </div>
            </div>
          </div>
        </div>
      </article>
      <div class="fenge" style="height: 15px"></div>
      <!-- 活动 -->
      <div class="active" @click="show = true;">
        <div class="acTitle">规格</div>
        <div class="acType">请选择颜色款式</div>
        <div class="ico">
          <i class="iconfont iconicon--"></i>
        </div>
      </div>
      <div class="params" @click="show = true;">
        <div class="parTitle">参数</div>
        <div class="parType">请选择衣服参数</div>
        <div class="ico">
          <i class="iconfont iconicon--"></i>
        </div>
      </div>
      <div class="fenge" style="height: 15px"></div>
      <div class="productName">
        <!-- 商品信息展示 -->
        <div class="productName-small">
          <h1>White Friday Sale</h1>
          <br />
          <br />
          <h1>Buy 1 Get 1 Free (2pcs)</h1>
          <br />
          <br />❤️ QUICK EGGSHELL REMOVER. Smart kitchen gadget, effortlessly removes the top of the eggshell without
          burning fingers, so you can easily make a special egg dish.
          <br />
          <br />❤️ FOR DIFFERENT SIZE OF EGGS. The diameter of the cup is 3.3 cm which is suitable for most eggs' size.
          It also can be used on soft boiled, hard-boiled or raw eggs, make eating eggs easier.
          <br />
          <br />❤️ SIMPLE OPERATION. Crack the eggshell nicely and easily in seconds, just need to pull the ball up and
          hold it, then let it go, leaving a perfect score around the egg, then the top eggshell will be
          removable.
          <br />
          <br />❤️ REUSABLE AND EASY TO CLEAN. Made from superior quality stainless steel, hardwearing, stain-resistant
          and easy to keep clean.
          <br />
          <br />❤️ USAGE SCENARIOS. With this clever kitchen tools, you can easily make egg custard, pudding, little
          cake even some green plants artwork for your families. Perfect gift for various festivals!
          <br />
          <br />
        </div>
      </div>
      <div style="height: 100px"></div>
      <van-popup
        class="bottomPup"
        :lazy-render="false"
        round
        v-model="show"
        closeable
        close-icon="close"
        position="bottom"
        >
        <div class="content">
          <div class="head">
            <!-- 展示图片 -->
            <img
              src="//s4.forcloudcdn.com/merchant/upload/a3b0474768f19d435e6c0ee95e0fcc48.jpg_220.jpg"
              @click="showImgFlag = true"
            />
            <!-- 展示图片 -->
            <div class="select-info">
              <!-- 产品名 -->
              <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
              <!-- 产品名 -->
              <div class="selected-attr">
                <span>selected:</span>
                <span v-text="typeTitle"></span>
                <span v-text="colorTitle"></span>
                <span v-text="sizeTitle"></span>
              </div>
              <div class="option-price">
                <!-- 现价 -->
                <span class="infoPrice">
                  <span class="nowPrice"></span>
                  <span>SAR</span>
                </span>
                <!-- 现价 -->
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
              <div class="van-sku-row van-hairline--bottom">
                <div class="van-sku-row__title productText">product</div>
                <span
                  class="van-sku-row__item typeId"
                  v-for="(item, index) in 3"
                  :key="index"
                  price="53.00"
                  @click="productFun(index, 0)"
                >
                  <img
                    src="https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                    class="van-sku-row__item-img"
                  />
                  <span class="van-sku-row__item-name typeName">type</span>
                </span>
              </div>
            </div>
            <div class="van-sku-group-container">
              <div class="van-sku-row van-hairline--bottom">
                <div class="van-sku-row__title productText">product</div>
                <span
                  class="van-sku-row__item typeId"
                  v-for="(item, index) in 3"
                  :key="index"
                  price="53.00"
                  @click="productFun(index, 0)"
                >
                  <img
                    src="https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                    class="van-sku-row__item-img"
                  />
                  <span class="van-sku-row__item-name typeName">type</span>
                </span>
              </div>
            </div>
            <div class="van-sku-stepper-stock">
              <div class="van-sku-stepper-container">
                <p>Quantity</p>
                <div class="manuplator___3-16blr2">
                  <button class="btn disabled___1oMwKMQL" @click="reduce">-</button>
                  <input disabled="disabled" v-model="num" />
                  <button class="btn last_btn" @click="addNum">+</button>
                </div>
              </div>
            </div>
          </div>
          <!-- 提交按钮开始 -->
          <div class="commitBtn">
            <van-goods-action-button type="warning" text="加入购物车" @click="goCard" />
            <van-goods-action-button type="danger" text="立即购买" @click="goBuy" />
          </div>
          <!-- 提交按钮结束 -->
        </div>
      </van-popup>
      <img v-if="btnFlag" @click="backTop" class="go-top" src="@/assets/img/timg.jpg" />
      <van-overlay :show="showImgFlag" @click="showImgFlag = false" class="overlayImg">
        <div class="wrapper">
          <img :src="itemImg" alt />
        </div>
      </van-overlay>
    </div>
    <footer>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="productNum" />
        <van-goods-action-button type="warning" text="加入购物车" @click="show = true" />
        <van-goods-action-button type="danger" text="立即购买" @click="show = true" />
      </van-goods-action>
    </footer>
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
      activeNames: ["1"],
      typeTitle: "",
      colorTitle: "",
      sizeTitle: "",
      typeFlag: "",
      colorFlag: "",
      sizeFlag: "",
      num: 1,
      btnFlag: false,
      itemImg:
        "//s4.forcloudcdn.com/merchant/upload/a3b0474768f19d435e6c0ee95e0fcc48.jpg_220.jpg",
      headTitle: ["商品", "评价", "详情", "推荐"],
      productNum: 0
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    reduce() {
      this.num--;
    },
    addNum() {
      this.num++;
    },

    onscroll() {},
    onChange(index) {
      this.current = index;
    },
    productFun(index, item) {},

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
        });
      } else if ($(".colorText").length != 0 && !this.colorFlag) {
        this.$toast({
          message: "please select " + $(".colorText").text(),
          position: "center"
        });
      } else if ($(".sizeText").length != 0 && !this.sizeFlag) {
        this.$toast({
          message: "please select " + $(".sizeText").text(),
          position: "center"
        });
      }
    },
    getBotton(index) {
      $(".liS")
        .eq(index)
        .addClass("red")
        .siblings()
        .removeClass("red");
    },

    goCard() {
      this.show = false;
      this.productNum++;
    },
    goBuy() {}
  },
  mounted() {
    let that = this;
    $(".liS")
      .eq(0)
      .addClass("red");
    window.addEventListener("scroll", this.onscroll);
  }
};
</script>
<style lang="scss">
.info-3 {
  background-color: #f5f5f5;
  header {
    width: 7.5rem;
    height: 50px;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    .heLeft {
      display: flex;
      align-items: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      font-weight: 700;
      text-align: center;
      background-color: #666;
      justify-content: center;
      margin-left: 5px;
      color: white;
    }
    .heContent {
      flex: 1;
      list-style: none;
      display: flex;
      justify-content: space-around;
      font-size: 15px;
      padding: 0 1rem;
      li {
        height: 50px;
        display: flex;
        align-items: center;
      }

      .red {
        border-bottom: 2px solid red;
      }
    }
    .heRight {
      display: flex;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      background-color: #666;
      color: white;
      margin-right: 5px;
    }
  }
  section {
    .van-swipe {
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
        bottom: 0.5rem;
        font-size: 0.32rem;
        text-align: center;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.3);
        width: 100px;
        height: 0.6rem;
        line-height: 0.6rem;
      }
    }
  }

  article {
    background: white;

    .item-detail-info {
      position: relative;
      background-color: #fff;
      padding: 0.3rem 0.24rem 0.32rem;

      .title {
        max-width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-items: center;
        align-items: center;
        font-size: 0.32rem;
        font-weight: 500;
        color: #ff4443;
        .original-price {
          line-height: 0.66rem;
          height: 0.66rem;
          font-size: 0.3rem;
          font-weight: 400;
          color: #999;
          margin: 0 0.14rem;
        }

        .tax-title {
          font-size: 0.26rem;
          font-weight: 400;
          color: #999;
          line-height: 0.66rem;
        }
      }
      .item-ship-info {
        margin-top: 0.24rem;
        .block1 {
          line-height: 0.5rem;
          .flash-line {
            display: flex;
            align-items: center;

            .line1 {
              font-size: 0.3rem;
              font-weight: 600;
              color: #333;
            }
          }

          .line2 {
            font-size: 0.24rem;
            font-weight: 400;
            color: #40ae5b;
          }
        }
      }
    }
  }

  .active {
    height: 48px;
    background: white;
    display: flex;
    font-size: 14px;
    .acTitle {
      color: rgb(153, 153, 153);
      margin: 14px 0 0 14px;
    }
    .acType {
      margin: 14px 0 0 14px;
      flex: 1;
    }
    .ico {
      display: flex;
      justify-items: center;
      align-items: center;
      width: 0.4rem;
      font-weight: 700;
    }
  }
  .params {
    height: 48px;
    background: white;
    display: flex;
    font-size: 14px;
    .parTitle {
      color: rgb(153, 153, 153);
      margin: 14px 0 0 14px;
    }
    .parType {
      margin: 14px 0 0 14px;
      flex: 1;
    }
    .ico {
      display: flex;
      justify-items: center;
      align-items: center;
      width: 0.4rem;
      font-weight: 700;
    }
  }

  .productName {
    padding: 0.2rem 0.4rem;
    background: white;

    .productName-small {
      line-height: 0.3rem;
      color: #808284;
      font-size: 0.3rem;
      padding-bottom: 26px;
    }
  }
  .bottomPup {
    width: 7.5rem;
    left: calc(50% - 3.75rem);
    overflow-y: visible;

    .van-icon-close {
      font-size: 0.4rem;
      right: 16px;
    }

    .head {
      display: flex;
      padding: 12px 12px 0;
      font-size: 0.3rem;
      img {
        margin: 0 0.15rem 0 0.15rem;
        width: 1.5rem;
        height: 1.5rem;
      }

      .select-info {
        display: inline-block;
        position: relative;
        vertical-align: top;
        line-height: 0.42rem;

        .van-ellipsis {
          font-family: SFProText-Semibold;
          width: 5rem;
        }

        .selected-sku-stock,
        .selected-attr {
          font-family: SFProText-Regular;
          font-weight: 400;
          color: #666;
          line-height: 0.7rem;
        }

        .option-price {
          color: #fa2653;
          height: 0.5rem;
          .infoPrice {
            display: inline-block;
          }

          del {
            color: #666;
          }
        }
      }
    }

    .van-sku-body {
      font-size: 0.24rem;
      max-height: 440px;
      .van-sku-stepper-stock {
        .van-sku-stepper-container {
          height: 1.7rem;
          .manuplator___3-16blr2 {
            .btn,
            input {
              width: 0.64rem;
              height: 0.44rem;
              border: none;
              background-color: #f5f5f5;
              text-align: center;
              font-size: 0.3rem;
              cursor: pointer;
            }
          }
        }
      }
    }
    .commitBtn {
      display: flex;
    }
  }

  .van-overlay {
    width: 7.5rem;
    left: calc(50% - 3.75rem);
  }

  // 回顶部
  .go-top {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    position: fixed;
    bottom: 1.5rem;
    right: 0.3rem;
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

  footer {
    .van-goods-action {
      width: 7.5rem;
      margin-left: calc(50% - 3.75rem);
    }
  }
}
</style>