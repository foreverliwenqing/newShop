<template>
  <div class="addressList">
    <header>
      <div class="headerBox">
        <i class="iconfont iconzuobian" @click="goCart()"></i>
        <span>AddressList</span>
      </div>
    </header>
    <div class="list">
      <van-address-list
        v-model="chosenAddressId"
        :list="addresList"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="choice"
      />
      <van-empty description="描述文字" v-if="!addressFlag" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      addresList: [],
      addressFlag: false,
    };
  },
  methods: {
    onAdd() {
      console.log(1);
      this.$router.push("/addressAdd");
    },
    onEdit(item, index) {
      this.$router.push({ path: "/addressAdd", query: item });
    },
    choice(item, index) {
      console.log(index);
      this.$router.push("/car");
    },
    goCart() {
      this.$router.push("/car");
    }
  },
  mounted() {
    this.addresList.push(JSON.parse(localStorage.getItem("list"))[0]);
    this.addressFlag = true;
  }
};
</script>
<style lang="scss">
.addressList {
  header {
    position: fixed;
    height: 55px;
    top: 0;
    width: 7.5rem;
    border-bottom: 1px solid #e4e4e4;
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
  .list {
    box-sizing: border-box;
    min-height: calc(100vh - 56px);
    padding-bottom: 20px;
    background: #f7f8fa;
    margin-top: 55px;
    .van-address-list__bottom {
      width: 7.5rem;
      margin-left: calc(50% - 3.75rem);
    }
  }
  .addAress {
  }
}
</style>