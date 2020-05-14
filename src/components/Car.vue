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
        <div class="listCard" v-for="(item, index) in all" :key="index">
          <van-checkbox v-model="item.checked" @change="changeOne"></van-checkbox>
          <div class="shopImg">
            <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
          </div>
          <div class="shopsright">
            <h4>磨砂牛皮男休闲鞋-有属性</h4>
            <div class="shoprightbot">
              <span>￥120.50</span>
              <div class="shopradd">
                <button class="NumBtn" @click="reduce()">-</button>
                <input type="text" :value="Num" class="van-stepper__input" />
                <button class="NumBtn" @click="addNum()">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :loading="isLoading" :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checkedAll" @click="toggleAll" ref="checkboxGroup">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedAll: false,
      all: [{ checked: false }, { checked: false }, { checked: false }],
      Num: 1,
      isLoading: false
    };
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      setTimeout(function() {
        this.isLoading = false;
      }, 100);
    },
    // 复选框
    toggleAll() {
      for (var i = 0; i < this.all.length; i++) {
        this.all[i].checked = this.checkedAll;
      }
    },
    // 选择单个
    changeOne(item) {
      !item.checked;
      if (this.all.length == this.reCheck()) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    },
    reCheck() {
      let number = 0;
      for (let i = 0; i < this.all.length; i++) {
        if (this.all[i].checked) {
          number++;
        }
      }
      return number;
    },

    onClickEditAddress() {
      this.$router.push("/addressList");
    },
    reduce() {
      if (this.Num <= 1) {
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
      } else {
        this.Num--;
      }
    },
    addNum() {
      this.Num++;
    }
  }
};
</script>
<style lang="scss">
.car {
  header {
    position: fixed;
    height: 44px;
    top: 0;
    width: 7.5rem;
    .headerBox {
      height: 44px;
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
    margin-top: 44px;
    .list {
      .listCard {
        display: flex;
        padding-left: 10px;
        position: relative;
        padding-bottom: 10px;
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
  .van-submit-bar {
    bottom: 50px;
    width: 7.5rem;
    left: calc(50% - 3.75rem);
  }
}
</style>