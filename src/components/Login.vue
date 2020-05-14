<template>
  <div class="login">
    <div class="loginImg">
      <div class="imgBor"></div>
    </div>
    <div class="from">
      <div class="tel">
        <i class="iconfont iconshouji"></i>
        <van-field v-model="value" placeholder="请输入用户名" class="telInp" />
      </div>
      <div class="reg">
        <i class="iconfont iconicon-"></i>
        <van-field v-model="value1" placeholder="请输入用户名" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      value1: ""
    };
  }
};
</script>
<style lang="scss">
.login {
  background: url("~@/assets/img/loginBg.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
  .from {
    opacity: 0.7;
    padding: 0.32rem 0.48rem;
    .van-field {
      height: 1rem;
      .van-field__body {
        height: 100%;
        font-size: 0.3rem;
        margin-left: .5rem;
      }
    }
    .telInp {
      margin-bottom: 0.4rem;
    }
    .tel, .reg{
        position: relative;
        i {
            position: absolute;
            top: .28rem;
            left: .2rem;
            z-index: 10;
            font-size: .4rem;
            color: #999997;
        }
    }
  }
  .loginImg {
    padding: 1.3rem 0.8rem;
    text-align: center;
    display: flex;
    justify-content: center;
    .imgBor {
      border: 3px solid white;
      width: 1.52rem;
      height: 1.52rem;
      border-radius: 50%;
      background: url("~@/assets/img/face.png") center center no-repeat;
      background-size: cover;
      img {
        width: 1.4rem;
      }
    }
  }
}
</style>