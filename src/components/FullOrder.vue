<template>
  <div class="fullorder">
    <header>
      <van-nav-bar title="订单完成" @click-left="onClickLeft" left-arrow />
    </header>
    <div class="buyagain">
      <van-button round type="info">One more order</van-button>
    </div>
    <article>
      <div
        role="button"
        tabindex="0"
        class="addressContent van-cell van-cell--center"
        >
        <van-icon name="location-o" />
        <div class="van-cell__value van-cell__value--alone van-contact-card__value">
          <div>Street：{{ choiceAddress.address }}</div>
          <div>Phone：{{ choiceAddress.tel }}</div>
        </div>
      </div>
      <div class="order">
        <div class="orderTitle">
          <span>订单编号:</span>
          <span>214124214 (12421421)</span>
        </div>
        <div class="orderContent">
          <div class="proimg">
            <img src="http://jd.itying.com/public\upload\RinsvExKu7Ed-ocs_7W1DxYO.png" />
          </div>
          <div class="protitle">
            <p class="proname">磨砂牛皮男休闲鞋-有属性</p>
            <p class="proattr">牛皮 /系带/白色</p>
          </div>
          <div class="pronum">
            <span>x 1</span>
          </div>
          <div class="proprice">
            <span>￥688</span>
          </div>
        </div>
        <div class="ordersum">
          <span class="orderTime">配送费</span>
          <span class="ordersumtip">免费</span>
        </div>
        <!-- 再来一单 -->
        <div class="orderAgain">
          <p>
            共1件商品 实付
            <span>￥688.00</span>
          </p>
        </div>
      </div>
      <div class="ordertime">下单时间: 1230-12-12</div>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      choiceAddress: { address: "123", tel: "123213213" }
    };
  },
  methods: {
    onClickLeft() {
        this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
.fullorder {
  height: 100vh;
  background: rgb(244, 244, 244);
  .buyagain {
    display: flex;
    justify-content: center;
    padding: 36px 0 20px 0;
    .van-button {
      background: #3dc2ff;
      border: none;
      height: 30px;
    }
  }
  article {
    padding: 0.2rem;
    width: 7.1rem;
    .addressContent {
      border-radius: 10px;
      cursor: pointer;
      border: 2px dashed #b8c0cc;
      transition: border 0.2s ease;
      font-size: 16px;
      padding: 0.2rem;
      color: #b8c0cc;
      border: none;
      height: 70px;
      i {
        font-size: 23px;
      }
    }
    .order {
      background: white;
      margin-top: 10px;
      padding: 10px;
      border-radius: 10px;
      .orderTitle {
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        display: flex;
        font-size: 14px;
        justify-content: space-between;
      }
      .orderContent {
        padding: 0.1rem 0;
        display: flex;
        .proimg {
          flex: 1;
          img {
            width: 50px;
            height: 50px;
          }
        }
        .protitle {
          flex: 6;
          height: 50px;
          .proname {
            font-weight: 600;
            line-height: 1;
          }
        }
        .pronum {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .proprice {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 550;
          font-size: 16px;
        }
      }
      .ordersum {
        padding: 0.1rem 0;
        display: flex;
        justify-content: space-between;
        position: relative;
        .orderTime {
          line-height: 2;
        }
        .ordersumtip {
          color: #f60;
          .ordersums {
            display: inline-block;
            font-size: 18px;
            font-weight: 600;
            margin: 0;
          }
        }
      }
      .ordersum::before {
        content: ""; // 必须
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #e6e6e6;
      }
      .orderAgain {
        text-align: right;
        margin-top: 0.1rem;
        span {
          font-weight: 550;
          font-size: 16px;
        }
      }
    }
    .ordertime {
      margin-top: 0.1rem;
      background: white;
      padding: 0.12rem;
      border-radius: 10px;
      font-size: 16px;
      color: #999;
    }
    .addressContent::before {
      background: transparent;
    }
  }
}
</style>