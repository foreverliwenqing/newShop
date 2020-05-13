<template>
  <div class="addressList">
    <header>
      <div class="headerBox">
        <i class="iconfont iconzuobian"></i>
        <span>AddressList</span>
      </div>
    </header>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
        this.$router.push("/addressAdd")
    },
    onEdit(item, index) {
    }
  }
};
</script>
<style lang="scss">
.addressList {
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
  .van-address-list {
    margin-top: 44px;
    background: #efefef;
    .van-address-list__bottom {
        bottom: 15px;
    }
  }
}
</style>