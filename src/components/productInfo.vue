<template>
  <div class="info-3">
    <header>
      <van-icon name="arrow-left" @click="$router.back(-1)" />
      <div class="topTitle">
        <li
          v-for="(item, index) in headTitle"
          :key="index"
          ref="topS"
          @click="getIndex(index)"
        >{{ item.title }}</li>
      </div>
      <van-icon name="ellipsis" />
    </header>
    <div class="infoContent">
      <section id="now">
        <van-swipe>
          <van-swipe-item v-for="(item, index) in 4" :key="index">
            <img
              src="//img.alicdn.com/imgextra/i4/299331521/TB2CR0ddmOI.eBjy1zkXXadxFXa_!!299331521.jpg_640x640q80_.webp"
              alt
            />
          </van-swipe-item>
          <div class="custom-indicator" slot="indicator">1/1</div>
        </van-swipe>
      </section>

      <article>
        <div class="item-detail-info">
          <div class="productInfo">
            <div class="title">
              <div>
                <span>CNY</span>
                <span>{{productInfo.price}}</span>
              </div>
              <del class="original-price">
                <span>CNY</span>
                <span>{{productInfo.old_price}}</span>
              </del>
            </div>
          </div>
          <div class="item-ship-info">
            <div class="block1">
              <span class="line1">{{productInfo.sub_title}}</span>
            </div>
          </div>
        </div>
      </article>
      <br />
      <br />
      <div class="activeS">
        <span class="select">活动</span>
        <van-icon name="ellipsis" class="select" />
      </div>
      <!-- 已经选中，配送费 -->
      <div class="features">
        <div class="selectS" id="search">
          <span class="select">已选</span>
          <span class="selContent">已选内容</span>
          <van-icon name="ellipsis" class="select" @click="show = true" />
        </div>
        <div class="free">
          <span class="select">运费</span>
          <span class="freeTitle">包邮</span>
          <van-icon name="ellipsis" class="select" @click="show = true" />
        </div>
      </div>

      <div ref="proContent" class="proContent" id="content"></div>
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
                  ref="typeId"
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
            <van-goods-action-button type="warning" text="ADD TO BAG" @click="addCard" />
          </div>
          <!-- 提交按钮结束 -->
        </div>
      </van-popup>
      <van-overlay :show="showImgFlag" @click="showImgFlag = false" class="overlayImg">
        <div class="wrapper">
          <img :src="itemImg" alt />
        </div>
      </van-overlay>
    </div>
    <!-- 回顶部 -->
    <div class="go-top" @click="goTop()" v-if="topShow">
      <img src="../assets/img/timg.jpg" alt />
    </div>
    <footer>
      <van-goods-action>
        <van-goods-action-icon icon="cart-o" text="Cart" :badge="productNum" @click="goCar()" />
        <van-goods-action-button type="warning" text="ADD TO BAG" @click="show = true" />
      </van-goods-action>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      showImgFlag: false,
      typeTitle: "",
      colorTitle: "",
      sizeTitle: "",
      typeFlag: "",
      colorFlag: "",
      sizeFlag: "",
      num: 1,
      topShow: false,
      headTitle: [
        {
          title: "Goods"
        },
        {
          title: "Recommend"
        }
      ],
      itemImg:
        "//s4.forcloudcdn.com/merchant/upload/a3b0474768f19d435e6c0ee95e0fcc48.jpg_220.jpg",
      productNum: 0,
      productInfo: "",
      cartList: []
    };
  },
  methods: {
    reduce() {
      this.num--;
    },
    addNum() {
      this.num++;
    },
    changeType(id, index) {
      let flag = this.$refs[id];
      for (var i = 0; i < flag.length; i++) {
        flag[i].classList.remove("van-sku-row__item--active");
      }
      flag[index].classList.add("van-sku-row__item--active");
    },
    // 选择样式
    productFun(index, item) {
      if (item == 0) {
        this.changeType("typeId", index);
      } else if (item == 1) {
        this.changeType("colorId", index);
      } else if (item == 2) {
        this.changeType("sizeId", index);
      }
    },
    onscroll() {
      let scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scroll >= 300) {
        this.topShow = true;
      } else {
        this.topShow = false;
      }
    },
    goTop() {
      let scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      document.documentElement.scrollTop = 0;
    },
    addCard() {
      this.show = false;
      // 保存当前产品的数据
      let pro_title = this.productInfo["title"],
        pro_id = this.productInfo["_id"],
        pro_pic = this.productInfo["pic"],
        pro_price = this.productInfo["price"];

      // 变成缓存对象
      let cartJson = {
        pro_title: pro_title,
        pro_id: pro_id,
        pro_pic: pro_pic,
        pro_price: pro_price,
        pro_count: this.num
      };
      let cartList = JSON.parse(localStorage.getItem("cartList"));

      if (cartList && cartList.length > 0) {
        //购物车有数据
        if (this.Fun.hasData(cartList, cartJson)) {
          //已存在当前产品
          for (var i = 0; i < cartList.length; i++) {
            if (cartList[i].pro_id == cartJson.pro_id) {
              cartList[i].pro_count += cartJson.pro_count;
            }
          }
        } else {
          //不存在当前产品
          cartList.push(cartJson);
        }
        localStorage.setItem("cartList", JSON.stringify(cartList));
      } else {
        //购物车无数据
        var tempArr = [];
        tempArr.push(cartJson);
        localStorage.setItem("cartList", JSON.stringify(tempArr));
        cartList = tempArr;
      }

      this.productNum = this.Fun.getCartNum(cartList);
    },
    goCar() {
      this.$router.push("/cart");
    },
    getIndex(index) {
      let item = this.$refs.topS;
      for (var i = 0; i < item.length; i++) {
        item[i].style.borderBottom = "1px solid white";
      }
      item[index].style.borderBottom = "1px solid red";
      if (index == 0) {
        document.querySelector("#now").scrollIntoView(true);
      } else if (index == 1) {
        document.querySelector("#search").scrollIntoView(true);
      } else {
        document.querySelector("#content").scrollIntoView(true);
      }
    }
  },
  mounted() {
    let that = this;
    window.addEventListener("scroll", this.onscroll);

    this.$api.getData
      .getProductInfo(this.$route.query.id)
      .then(res => {
        // 单个产品信息
        that.productInfo = res.result;
        this.$refs.proContent.innerHTML = that.productInfo.content;
      })
      .catch(err => {});

    let carts = JSON.parse(localStorage.getItem("cartList"));

    if (carts && carts.length > 0) {
      this.productNum = this.Fun.getCartNum(carts);
    } else {
      this.productNum = 0;
    }
  }
};
</script>
<style lang="scss">
.info-3 {
  background-color: #f5f5f5;
  header {
    display: flex;
    justify-content: space-around;
    height: 44px;
    font-size: 18px;
    background: white;
    position: fixed;
    z-index: 10;
    width: 7.5rem;
    top: 0;
    i {
      width: 40px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
    }
    .topTitle {
      display: flex;
      flex: 2;
      justify-content: space-around;
      align-items: center;
      li {
        list-style: none;
        height: 43px;
        line-height: 43px;
        cursor: pointer;
        a {
          text-decoration: none;
          color: #333;
        }
      }
      li:nth-child(1) {
        border-bottom: 1px solid red;
      }
    }
  }
  .infoContent {
    margin-top: 44px;
    .activeS {
      border-radius: 5px 5px 0 0;
      background: #fff;
      padding: 12px 0.24rem;
      font-size: 0.25rem;
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-bottom: 15px;
      .select {
        font-size: 0.25rem;
        font-weight: 500;
        margin-right: 10px;
      }
      .selContent {
        flex: 1;
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
        background-color: #fff;
        padding: 0.3rem 0.24rem 0.32rem;
        .title {
          font-size: 0.32rem;
          font-weight: 500;
          color: #ff4443;
          display: flex;
          line-height: 2;
          .original-price {
            color: #999;
            margin: 0 0.14rem;
          }
        }
        .item-ship-info {
          margin-top: 0.24rem;
          .line1 {
            font-size: 0.3rem;
            font-weight: 600;
            color: #333;
          }
        }
      }
    }
    .proContent {
      margin-bottom: 50px;
      width: 7.5rem;
      overflow: hidden;
      .ssd-module {
        width: 7.5rem !important;
      }
      .activity_header {
        img {
          width: 100%;
        }
      }
      p {
        img {
          width: 100%;
        }
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
            width: 5rem;
          }

          .selected-sku-stock,
          .selected-attr {
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
        max-height: 540px;
        min-height: 400px;
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

    .features {
      background: white;
      border-radius: 5px 5px 0 0;
      padding: 0 0.24rem;
      .selectS,
      .free {
        padding: 12px 0;
        font-size: 0.25rem;
        display: flex;
        justify-content: space-between;
        position: relative;
        .select {
          font-size: 0.25rem;
          font-weight: 500;
          margin-right: 10px;
        }
        .selContent {
          flex: 1;
        }
        &::before {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          width: 7.02rem;
          border: 1px solid #f2f2f2;
        }
      }
      .free {
        .freeTitle {
          color: red;
          flex: 1;
        }
      }
    }
  }
  .van-overlay {
    width: 7.5rem;
    left: calc(50% - 3.75rem);
  }
  // 回顶部
  .go-top {
    position: fixed;
    bottom: 1.5rem;
    right: 0.3rem;
    img {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
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
        width: 5.5rem;
      }
    }
  }

  footer {
    .van-goods-action {
      width: 7.5rem;
      margin-left: calc(50% - 3.75rem);
      .van-goods-action-icon {
        width: 1rem;
      }
      .van-button {
        border-radius: 0;
      }
    }
  }
}
</style>