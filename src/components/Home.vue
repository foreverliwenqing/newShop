<template>
  <div class="home">
    <div class="searchBox" ref="searchBox">
      <van-search @click="goBack" placeholder="请输入搜索关键词" />
      <div class="saoIcon">
        <van-icon name="scan" @click="startRecognize" />
      </div>
    </div>
    <ion-content class="ionContent">
      <div class="headBanner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in swiper" :key="index">
            <img v-lazy="prefix + image.pic" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="shopMore">
        <div class="productS">
          <div class="scrollS">
            <div
              class="card"
              v-for="(img,index) in classList"
              :key="index"
              @click="getProduct(img._id)"
            >
              <img src="http://jd.itying.com/public\upload\FNIJ1lUH1bfuK82mbpIszetN.jpg" />
              <p>{{img.title}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 加载更多 -->
      <div class="moreTitle">
        <span>
          <van-icon name="circle" />
          <span style="color: #666">商品列表</span>
        </span>
        <span>
          更多...
          <van-icon name="arrow" />
        </span>
      </div>
      <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="我也是有底线的" @load="onLoad">
          <van-card
            v-for="(tit,index) in plist"
            :key="index"
            :price="tit.price"
            :title="tit.title"
            lazy-load
            :thumb="prefix + tit.pic"
            @click="goProduct(tit._id)"
          />
        </van-list>
      </van-pull-refresh>
    </ion-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      swiper: [],
      plist: [],
      classList: [],
      loading: false,
      finished: false,
      refreshing: false,
      prefix: "http://jd.itying.com/",
      price: 100
    };
  },
  methods: {
    goBack() {
      this.$router.push("/search");
    },
    goProduct(id) {
      this.$router.push({ path: "/product", query: { id: id } });
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false;
        }
        this.loading = false;
      }, 1000);
    },
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
    getProduct(e) {
      this.$api.getData.pcate(e).then(res => {
        this.plist = res.result;
      });
    },
    //创建扫描控件
    startRecognize() {
      let that = this;
      if (!window.plus) return;
      scan = new plus.barcode.Barcode("bcid");
      scan.onmarked = onmarked;

      function onmarked(type, result, file) {
        switch (type) {
          case plus.barcode.QR:
            type = "QR";
            break;
          case plus.barcode.EAN13:
            type = "EAN13";
            break;
          case plus.barcode.EAN8:
            type = "EAN8";
            break;
          default:
            type = "其它" + type;
            break;
        }
        result = result.replace(/\n/g, "");
        that.codeUrl = result;
        alert(result);
        that.closeScan();
      }
    },
    //关闭条码识别控件
    closeScan() {
      if (!window.plus) return;
      scan.close();
    }
  },
  mounted() {
    let that = this;
    var content = document.querySelector("ion-content");
    content.scrollEvents = true;
    content.addEventListener("ionScroll", ev => {
      let flag = ev.detail.scrollTop;
      if (flag > 200) {
        that.$refs.searchBox.style.opacity = 1;
        that.$refs.searchBox.style.background = "white";
      } else {
        that.$refs.searchBox.style.opacity = 0.4;
        that.$refs.searchBox.style.background = "transparent";
      }
    });

    this.$api.getData.swiper().then(res => {
      this.swiper = res.result;
    });
    this.$api.getData.classify().then(res => {
      this.classList = res.result;
    });
    this.$api.getData.plist().then(res => {
      this.plist = res.result;
    });
  }
};
</script>
<style lang="scss">
ion-content ion-toolbar {
  --background: translucent;
}

.home {
  width: 7.5rem;
  .searchBox {
    position: absolute;
    top: 0;
    z-index: 1;
    opacity: 0.5;
    display: flex;
    justify-content: space-between;
    width: 7.5rem;
    padding: 0.1rem 0;
    .van-search {
      z-index: 10;
      width: 6.7rem;
      border-radius: 0.3rem;
      background: transparent;
      .van-search__content {
        background: #e3e3e3;
        border-radius: 0.5rem;
      }
    }
    .saoIcon {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      color: #ccc;
    }
  }
  .headBanner {
    height: 3.65rem;
    .van-swipe {
      .van-swipe-item {
        height: 3.65rem;
        img {
          width: 7.5rem;
          height: 3.65rem;
        }
      }
    }
  }
  // 分割符号
  .van-divider {
    background: #f2f2f2;
    font-size: 0.3rem;
    padding: 16px 0;
    margin: 0;
  }
  // 展示商品分类
  .shopMore {
    padding: 0.32rem 0.2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    .productS {
      display: flex;
      .scrollS {
        overflow: scroll;
        display: flex;
        .card {
          width: 1.44rem;
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 0.88rem;
            height: 0.88rem;
            border-radius: 50%;
          }
          p {
            width: 1.4rem;
            line-height: 0.3rem;
            margin: 0.1rem 0 0;
            text-align: center;
            font-size: 0.2rem;
            color: #666;
            white-space: normal;
          }
        }
      }
    }
    &::after {
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
  .moreTitle {
    padding: .1rem;
    color: #666;
    font-size: .24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;;
    color: #ff5f16;
    span {
      display: flex;
      align-items: center;
      margin: .1rem;
    }
  }
  .van-pull-refresh {
    .van-list {
      padding: 0 0.2rem;
    }
    .van-card {
      background: white;
      position: relative;
      border: 1px solid #f9f9f9;;
      padding: .2rem;
      .van-card__header {
        font-size: 0.22rem;
      }
      .van-card__content {
        font-size: 0.22rem;
        .van-card__title {
          line-height: 0.32rem;
        }
      }
    }
    .van-card::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-bottom: 1px solid #e5e3e3;
      transform-origin: 50% 100%;
    }
  }
  .ionContent {
    height: calc(100vh - 1rem);
    .inner-scroll {
      padding: 0;
    }
  }
  .van-swipe__indicators {
    left: 90%;
  }
  .van-card__price {
    color: #ff5f16;
    .van-card__price-integer {
      font-size: 0.24rem !important;
    }
  }
}
</style>