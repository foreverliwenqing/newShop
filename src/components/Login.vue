<template>
  <div class="login">
    <div class="loginImg">
      <div class="imgBor"></div>
    </div>
    <div class="from">
      <div class="tel">
        <i class="iconfont iconshouji"></i>
        <van-field v-model="tel" maxlength="11" placeholder="请输入手机号" class="telInp" />
      </div>
      <div class="reg">
        <i class="iconfont iconicon-"></i>
        <van-field v-model="regCode" placeholder="输入验证码" readonly />
        <div class="regCode" @click="test">{{regText}}</div>
      </div>
    </div>
    <div class="tip">
      <transition name="van-slide-up">
        <div v-show="visible" class="slide">{{ falseText }}</div>
      </transition>
    </div>
    <div class="rouBtn">
      <van-button round type="info" @click="saveLogin()">保存</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tel: "",
      regCode: "",
      visible: false,
      falseText: "",
      regText: "验证码"
    };
  },
  methods: {
    getReg() {
      if (/^1[3|4|5|7|8][0-9]{9}$/.test(this.tel)) {
        if (this.regCode) {
          this.visible = true;
          this.falseText = "验证码已经存在";
          let time = setInterval(() => {
            this.visible = false;
            clearInterval(time);
          }, 1000);
        } else {
          this.$api.getData.getTelCode({ tel: this.tel }).then(res => {
            let index = 15;
            this.regCode = res.code;
            let time = setInterval(() => {
              this.regText = index;
              index--;
              if (this.regText == 0) {
                clearInterval(time);
                this.regText = "验证码";
              }
            }, 1000);
          });
        }
      } else {
        this.visible = true;
        this.falseText = "手机号格式有误";
        let time = setInterval(() => {
          this.visible = false;
          clearInterval(time);
        }, 1000);
      }
    },
    test() {
      this.getReg();
    },
    saveLogin() {
      if (/^1[3|4|5|7|8][0-9]{9}$/.test(this.tel)) {
        localStorage.setItem("login", this.tel);
        this.$router.push("/my");
      }
    }
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
    padding: 16px 30px;
    .van-field {
      height: 65px;
      .van-field__body {
        height: 100%;
        font-size: 20px;
        margin-left: 50px;
      }
    }
    .telInp {
      margin-bottom: 20px;
    }
    .tel,
    .reg {
      position: relative;
      i {
        position: absolute;
        top: 17px;
        left: 18px;
        z-index: 10;
        font-size: 28px;
        color: #999997;
      }
      .regCode {
        position: absolute;
        right: 18px;
        top: 17px;
        z-index: 10;
        font-size: 20px;
        color: #999997;
        cursor: pointer;
      }
    }
  }
  .loginImg {
    padding: 57px 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    .imgBor {
      border: 3px solid white;
      width: 76px;
      height: 76px;
      border-radius: 50%;
      background: url("~@/assets/img/face.png") center center no-repeat;
      background-size: cover;
      img {
        width: 75px;
      }
    }
  }
  // 提示文字
  .tip {
    position: absolute;
    bottom: 25px;
    display: flex;
    justify-content: center;
    width: 7.5rem;
    .slide {
      background: white;
      color: black;
      border-radius: 0.5rem;
      font-size: 0.2rem;
      opacity: 0.7;
      line-height: 50px;
      height: 50px;
      width: 3rem;
      text-align: center;
    }
  }
  // 提交按钮
  .rouBtn {
    display: flex;
    justify-content: center;
    padding: 100px 30px;
    .van-button {
      width: 100%;
      height: 65px;
      font-size: 22px;
      background: linear-gradient(
        to right,
        rgba(222, 157, 60, 0.28),
        rgb(197, 150, 72)
      );
      border: none;
    }
  }
}
</style>