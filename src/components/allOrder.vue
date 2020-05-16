<template>
  <div class="allOrder">
    <header>
      <van-nav-bar title="Order" left-arrow />
    </header>
    <div class="content">
      <article>
        <div class="order" @click="showOrder">
          <div class="orderTitle">
            <span>214124214 (12421421)</span>
            <span @click="delOrder($event)">
              <van-icon name="delete" />
            </span>
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
          </div>
          <div class="ordersum">
            <span class="orderTime">2020/10/9 10:00:00</span>
            <span class="ordersumtip">
              共2件商品 合计:
              <p class="ordersums">￥688.00</p>
            </span>
          </div>
          <!-- 再来一单 -->
          <div class="orderAgain">
            <van-button round type="info" @click="oneMore">再来一单</van-button>
          </div>
        </div>
        <div class="order" @click="showOrder">
          <div class="orderTitle">
            <span>214124214 (12421421)</span>
            <span @click="delOrder($event)">
              <van-icon name="delete" />
            </span>
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
          </div>
          <div class="ordersum">
            <span class="orderTime">2020/10/9 10:00:00</span>
            <span class="ordersumtip">
              共2件商品 合计:
              <p class="ordersums">￥688.00</p>
            </span>
          </div>
          <!-- 再来一单 -->
          <div class="orderAgain">
            <van-button round type="info" @click="oneMore">再来一单</van-button>
          </div>
        </div>
        <div class="order" @click="showOrder">
          <div class="orderTitle">
            <span>214124214 (12421421)</span>
            <span @click="delOrder($event)">
              <van-icon name="delete" />
            </span>
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
          </div>
          <div class="ordersum">
            <span class="orderTime">2020/10/9 10:00:00</span>
            <span class="ordersumtip">
              共2件商品 合计:
              <p class="ordersums">￥688.00</p>
            </span>
          </div>
          <!-- 再来一单 -->
          <div class="orderAgain">
            <van-button round type="info" @click="oneMore">再来一单</van-button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    delOrder(event) {
      event.stopPropagation
        ? event.stopPropagation()
        : (event.cancelBubble = true);
      this.$dialog
        .confirm({
          title: "是否确认删除",
          message: ""
        })
        .then(() => {
          console.log("已经成功删除了");
        })
        .catch(() => {
          console.log("还没有删除");
        });
    },
    oneMore() {
      this.$router.push("/");
    },
    showOrder() {
      this.$router.push("/fullorder");
    }
  }
};
</script>

<style lang="scss">
.allOrder {
  header {
  }
  .content {
    background: #f4f4f4;
    overflow: hidden;
    height: calc(100vh - 46px);
    overflow: auto;
    article {
      .order {
        background: white;
        margin: 10px;
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
            align-items: flex-end;
          }
        }
        .ordersum {
          padding-top: 0.1rem;
          display: flex;
          justify-content: space-between;
          .orderTime {
            line-height: 2;
          }
          .ordersumtip {
            .ordersums {
              display: inline-block;
              font-size: 18px;
              font-weight: 600;
              margin: 0;
            }
          }
        }
        .orderAgain {
          text-align: right;
          margin-top: 0.1rem;
          .van-button {
            height: 30px;
          }
        }
      }
    }
    .content::before {
      content: "";
      display: table;
    }
  }
}
</style>