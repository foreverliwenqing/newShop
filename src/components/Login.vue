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
        <van-field v-model="regCode" placeholder="输入验证码" readonly class="telInp" />
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
          this.falseText = "验证码已经存在";
          this.timer(this.falseText);
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
        this.falseText = "手机号格式有误";
        this.timer(this.falseText)
      }
    },
    test() {
      this.getReg();
    },
    timer(text) {
      this.visible = true;
      this.falseText = text;
      let time = setInterval(() => {
        this.visible = false;
        clearInterval(time);
      }, 1000);
    },
    saveLogin() {
      if (/^1[3|4|5|7|8][0-9]{9}$/.test(this.tel)) {

        if(this.regCode != "") {
          localStorage.setItem("login", this.tel);
          this.$router.push("/my");
        } else {
          this.falseText = "验证码不能为空";
          this.timer(this.falseText);
        }
      } else {
        this.falseText = "手机号格式错误!";
        this.timer(this.falseText);
      }
    }
  }
};
</script>
<style lang="scss">
.login {
  background-size: cover;
  height: 100vh;
  width: 7.5rem;
  .from {
    opacity: 0.7;
    padding: 16px 30px;
    .van-field {
      height: 1rem;
      .van-field__body {
        height: 100%;
        font-size: 0.3rem;
        margin-left: 0.5rem;
      }
    }
    .telInp {
      border-radius: 1rem;
    }
    .tel,
    .reg {
      position: relative;
      height: 1rem;
      margin-bottom: 0.1rem;
      i {
        position: absolute;
        top: 0.25rem;
        left: 0.18rem;
        z-index: 10;
        font-size: 0.4rem;
        color: #999997;
      }
      .regCode {
        position: absolute;
        right: 0.18rem;
        top: 0.24rem;
        z-index: 10;
        font-size: 0.3rem;
        color: #999997;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 0.5rem;
        min-width: 0.4rem;
        background: linear-gradient(
          to right,
          rgba(222, 157, 60, 0.28),
          rgb(197, 150, 72)
        );
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
      font-size: 0.2rem;
      height: 0.6rem;
      background: linear-gradient(
        to right,
        rgba(222, 157, 60, 0.28),
        rgb(197, 150, 72)
      );
      border: none;
    }
  }

  .van-cell::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
</style>