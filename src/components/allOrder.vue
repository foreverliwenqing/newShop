<template>
  <div class="allOrder">
    <header>
      <van-nav-bar title="Order" left-arrow @click-left="$router.back(-1)" />
    </header>
    <div class="content">
      <article v-if="!empty">
        <div class="order" @click="showOrder" v-for="(item, index) in orderAll" :key="index">
          <div class="orderTitle">
            <span>214124214 (12421421)</span>
            <span @click="delOrder($event, index)">
              <van-icon name="delete" />
            </span>
          </div>
          <div class="orderContent">
            <div class="proimg">
              <img :src="prefix + item.pro_pic" />
            </div>
            <div class="protitle">
              <p class="proname">{{item.pro_title}}</p>
              <p class="proattr">牛皮 /系带/白色</p>
            </div>
            <div class="pronum">
              <span>x <span v-text="item.pro_count"></span></span>
            </div>
          </div>
          <div class="ordersum">
            <span class="orderTime">2020/10/9 10:00:00</span>
            <span class="ordersumtip">
              共<span v-text="item.pro_count"></span>件商品 合计:
              <p class="ordersums">￥<span v-text="item.total"></span></p>
            </span>
          </div>
          <!-- 再来一单 -->
          <div class="orderAgain">
            <van-button round type="info" @click="oneMore">再来一单</van-button>
          </div>
        </div>
      </article>
      <van-empty description="Description" v-if="empty" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderAll: [],
      prefix: "http://jd.itying.com/",
      empty: true
    };
  },
  methods: {
    delOrder(event, index) {
      event.stopPropagation
        ? event.stopPropagation()
        : (event.cancelBubble = true);
      this.$dialog
        .confirm({
          title: "是否确认删除",
          message: ""
        })
        .then(() => {
          console.log(index);
        })
        .catch(() => {
          console.log("还没有删除");
        });
    },
    oneMore(e) {
      window.event? window.event.cancelBubble = true : e.stopPropagation();
      this.$router.push("/");
    },
    showOrder() {
      this.$router.push("/fullorder");
    }
  },
  mounted() {
    let that = this;
    let list =  that.$store.state.all_order;

    if(list != [] && list != "") {
      that.orderAll = list;
      that.orderAll.forEach((item, index) => {

        item["total"] = (item.pro_price * item.pro_count).toFixed(2);
      })
      that.empty = false;
    } else {
      that.empty = true;
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
            margin-right: 10px;
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