<template>
  <div class="addressList">
    <header>
      <div class="headerBox">
        <i class="iconfont iconzuobian" @click="goCar"></i>
        <span>AddressList</span>
      </div>
    </header>
    <ion-content class="ionContent">
      <div class="list">
        <div class="van-address-list">
          <van-radio-group v-model="radio">
            <div class="van-address-item" v-for="(item, index) in addresList" :key="index">
              <div class="van-cell van-cell--borderless">
                <div class="van-cell__value van-cell__value--alone van-address-item__value">
                  <van-radio :name="index" checked-color="#ee0a24" @click="onchoiceAddress(item)">
                    <span class="van-radio__label">
                      <div class="van-address-item__name">
                        <span v-text="item.name"></span>
                        <span v-text="item.phone"></span>
                        <span class="van-tag van-tag--round van-tag--danger van-address-item__tag" v-if="item.default">默认</span>
                      </div>
                      <div class="van-address-item__address">
                        <span v-text="item.province"></span>
                        <span v-text="item.city"></span>
                      </div>
                    </span>
                    <i class="van-icon van-icon-edit van-address-item__edit" @click="onEdit(item, $event)"></i>
                  </van-radio>
                </div>
              </div>
            </div>
          </van-radio-group>
          <div class="van-address-list__bottom" @click="onAdd">
            <button
              class="van-button van-button--danger van-button--normal van-button--block van-button--round van-address-list__add"
            >
              <div class="van-button__content">
                <span class="van-button__text">新增地址</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </ion-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addresList: [],
      radio: 0
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/addressAdd");
    },
    onEdit(item, e) {
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
      this.$router.push({ path: "/addressAdd", query: item });
    },
    onchoiceAddress(item) {
      this.Fun.set("choiceId", item._id)
      this.$router.push("/cart");
    },
    goCar() {
      this.$router.push("/cart");
    }
  },
  mounted() {
    let that = this;
    that.addresList = that.Fun.get("address") ? that.Fun.get("address") : [];

    let flag = that.Fun.get("choiceId");

    that.addresList.forEach((item, index) => {
      if(item._id == flag) {
        that.radio = index;
      }
    })
  }
};
</script>
<style lang="scss">
.addressList {
  width: 7.5rem;
  header {
    height: 55px;
    top: 0;
    width: 7.5rem;
    border-bottom: 1px solid #e4e4e4;
    z-index: 10;
    .headerBox {
      display: flex;
      align-items: center;
      height: 55px;
      background: white;
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
  .ionContent {
    height: calc(100vh - 100px);
  }
  .list {
    box-sizing: border-box;
    min-height: calc(100vh - 100px);
    padding-bottom: 20px;
    background: #f7f8fa;
    .van-address-list__bottom {
      width: 7.5rem;
      margin-left: calc(50% - 3.75rem);
    }
  }
}
</style>