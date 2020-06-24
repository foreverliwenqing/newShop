<template>
  <div class="car">
    <header>
      <div class="headerBox">
        <span>购物车</span>
      </div>
    </header>
    <!-- 购物车内容添加 -->
    <div class="productList">
      <div class="list">
        <div class="listCard" v-for="(item, index) in cartList" :key="index">
          <van-checkbox v-model="item.selected" @change="onChange(item.productId)"></van-checkbox>
          <div class="shopImg">
            <img :src="proFix + item.pro_pic" alt />
          </div>
          <div class="shopsright">
            <h4>{{item.pro_title}}</h4>
            <div class="shoprightbot">
              <span>￥{{item.pro_price}}</span>
              <div class="shopradd">
                <button class="NumBtn" @click="onNum('reduce', item.productId)">-</button>
                <input type="text" :value="item.pro_count" class="van-stepper__input" />
                <button class="NumBtn" @click="onNum('add', item.productId)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      role="button"
      tabindex="0"
      class="addressContent van-cell van-cell--clickable van-cell--center van-cell--borderless van-contact-card van-contact-card--add"
      @click="onClickEditAddress()"
      v-if="!addressFlag"
    >
      <i class="van-icon van-icon-add-square van-cell__left-icon"></i>
      <div class="van-cell__value van-cell__value--alone van-contact-card__value">Address</div>
      <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
    </div>

    <div
      role="button"
      tabindex="0"
      class="addressContent van-cell van-cell--clickable van-cell--center van-cell--borderless van-contact-card van-contact-card--edit"
      v-if="addressFlag"
      @click="onClickEditAddress()"
    >
      <van-icon name="location-o" />
      <div class="van-cell__value van-cell__value--alone van-contact-card__value">
        <div>
          Street：
          <span v-text="choiceAddress.province + '·' + choiceAddress.city"></span>
        </div>
        <div>Phone：{{ choiceAddress.phone }}</div>
      </div>
      <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
    </div>
    <van-submit-bar
      :loading="isLoading"
      :price="priceTotal*100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="selectedAll" @click="toggleAll" ref="checkboxGroup">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      selectedAll: false,
      cartList: [],
      Num: 1,
      isLoading: false,
      addressFlag: false,
      choiceAddress: "",
      proFix: "http://jd.itying.com/",
      priceTotal: 0
    };
  },
  methods: {
    ...mapActions([
      "addNum",
      "jianNum",
      "select",
      "selectAll",
      "del",
      "submit"
    ]),

    onSubmit() {
      this.isLoading = true;
      let time = setTimeout(() => {
        if (this.priceTotal) {
          this.submit();
          this.$router.push("/fullorder");
        } else {
          alert("没有数据不能提交");
        }

        this.isLoading = false;
        clearInterval(time);
      }, 1000);
    },

    // 复选框
    toggleAll() {
      this.selectAll();
    },
    // 选择单个
    onChange(index) {
      this.select(index);
      this.selectedAll = this.$store.state.all_selsect;
      this.priceTotal = this.$store.getters.allMoney;
    },
    onClickEditAddress() {
      this.$router.push("/addressList");
    },
    onNum(index, id) {
      if (index == "add") {
        this.addNum(id);
      } else {
        this.jianNum(id);
      }
      this.priceTotal = this.$store.getters.allMoney;
    }
  },
  mounted() {
    let that = this;
    that.cartList = that.$store.getters.cartList;
    that.selectedAll = that.$store.state.all_selsect;

    that.priceTotal = that.$store.getters.allMoney;

    let choiceId = that.Fun.get("choiceId");

    let addressS = that.Fun.get("address") ? that.Fun.get("address") : [];

    if (choiceId != undefined) {
      that.addressFlag = true;
      addressS.forEach(item => {
        if (item._id == choiceId) {
          that.choiceAddress = item;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.car {
  height: 100vh;
  width: 7.5rem;
  header {
    height: .8rem;
    width: 7.5rem;
    background: white;
    z-index: 10;
    line-height: .8rem;
    .headerBox {
      height: .8rem;
      display: flex;
      align-items: center;
      span {
        flex: 1;
        text-align: center;
        font-size: 18px;
      }
      i {
        position: absolute;
        left: 0;
        width: 44px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        font-size: 22px;
        font-weight: 700;
      }
    }
  }
  .productList {
    padding: 10px;
    height: calc(100vh - 4rem);
    overflow: auto;
    background: #f2f3f5;
    .list {
      .listCard {
        display: flex;
        padding-left: 10px;
        position: relative;
        padding-bottom: 10px;
        background: white;
        border-radius: 10px;
        margin: .1rem;
        .shopImg {
          width: 60px;
          height: 60px;
          margin: 11px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .shopsright {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          h4 {
            display: -webkit-box;
            overflow: hidden;
            font-size: .3rem;
          }
          .shoprightbot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: 10px;
            .shopradd {
              display: flex;
              .NumBtn {
                border: 0;
                background-color: #f2f3f5;
                font-size: 16px;
                width: 28px;
                height: 28px;
              }
            }
          }
        }
        &::after {
          content: " ";
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          height: 1px;
          border-bottom: 1px solid #ededed;
          color: #ededed;
          transform-origin: 0 100%;
          transform: scaleY(0.5);
          left: 13px;
        }
      }
    }
  }
  .addressContent {
    cursor: pointer;
    position: fixed;
    border: 2px dashed #b8c0cc;
    border-radius: 4px;
    transition: border 0.2s ease;
    box-sizing: border-box;
    font-size: 16px;
    padding: 0.2rem;
    color: #b8c0cc;
    width: 7.5rem;
    bottom: 2rem;
    height: 1.2rem;
    i {
      font-size: 23px;
    }
  }
  .van-submit-bar {
    bottom: 1rem;
    width: 7.5rem;
    height: 1rem;
    left: calc(50% - 3.75rem);
    display: flex;
    align-items: center;
    .van-submit-bar__bar {
      width: 7.5rem;
    }
  }
}
</style>