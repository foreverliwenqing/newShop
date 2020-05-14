<template>
  <div class="center-view">
    <div class="avatar">
      <img src="@/assets/img/login.png" alt class="avator-icon" />
      <div class="nick-name" @click="login()">立即登录</div>
    </div>
    <div style="height: 10px"></div>
    <div class="myCard">
      <i class="iconfont icondingdan"></i>
      <span>所有订单</span>
      <i class="iconfont iconyoubian"></i>
    </div>
    <div class="myCard">
      <i class="iconfont icondingdan"></i>
      <span>所有订单</span>
      <i class="iconfont iconyoubian"></i>
    </div>
    <div class="myCard">
      <i class="iconfont icondingdan"></i>
      <span>所有订单</span>
      <i class="iconfont iconyoubian"></i>
    </div>
    <div class="myCard">
      <i class="iconfont icondingdan"></i>
      <span>所有订单</span>
      <i class="iconfont iconyoubian"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Center",
  methods: {
    login() {
      this.$router.push({
        path: "/login"
      });
    },
    myCard() {
      this.$router.push({
        path: "/user/card"
      });
    }
  }
};
</script>

<style lang="scss">
.center-view {
  background: #f4f4f4;
  .avatar {
    text-align: center;
    height: 156px;
    padding-left: 22px;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    .avator-icon {
      width: 63px;
      height: 63px;
      border-radius: 35px;
      margin-right: 20px;
      border: 2px solid #fff;
    }
    .nick-name {
      font-size: 16px;
    }
  }
  .myCard {
    height: 50px;
    background: white;
    padding: 0 15px;
    display: flex;
    align-items: center;
    position: relative;
    span {
      flex: 1;
      margin-left: 15px;
    }
    i {
      font-size: 20px;
      &.icondingdan {
        color: #ffc82f;
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
</style>