<template>
  <div class="home">
    <van-search v-model="value" readonly placeholder="Please enter a keyword" shape="round" background="#dcdcdc" @click="goBack()"/>
    <div style="height: 62px"></div>
    <div class="headBanner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in swiper" :key="index" @click="goProduct()">
          <img v-lazy="prefix + image.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品分类展示更多 -->
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
    <van-divider>商品列表</van-divider>
    <!-- 单个商品展示 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="我也是有底线的" @load="onLoad">
        <van-card
          v-for="(tit,index) in plist"
          :key="index"
          num="2"
          price="2.00"
          :title="tit.title"
          desc="Description"
          :thumb="prefix + tit.pic"
        />
      </van-list>
    </van-pull-refresh>
    <div style="height: 50px"></div>
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
      price: 100,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/search");
    },
    goProduct() {
      this.$router.push("/product");
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
    }
  },
  mounted() {
    this.$api.getData.swiper().then(res => {
      this.swiper = res.result;
    });
    this.$api.getData.classify().then(res => {
      this.classList = res.result;
    });
    this.$api.getData.plist().then(res => {
      this.plist = res.result;
    });
  },
  created() {
    console.log(1)
    fbq('track', 'Purchase',{value:this.price,currency:'USD'});
    console.log(2)
    console.log(this.price)
  }
};
</script>
<style lang="scss">
.home {
  .van-search {
    position: fixed;
    top: 0;
    z-index: 10;
    width: 7.5rem;
    height: 62px;
    .van-search__content {
      background: #ededed;
    }
  }
  .headBanner {
    margin: .1rem 0.1rem 0.1rem 0.1rem;
    height: auto;
    border-radius: 0.2rem;
    box-shadow: 0 0 0.12rem 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    .van-swipe {
      .van-swipe-item {
        height: 3.65rem;
        width: 7.3rem !important;
        img {
          width: 7.3rem;
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
    height: 1.34rem;
    padding: 0.32rem 0.2rem;
    display: flex;
    flex-direction: column;
    .productS {
      display: flex;
      margin-bottom: 0.2rem;
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
  }
  .van-pull-refresh {
    .van-card {
      background: white;
      .van-card__header {
        font-size: 0.22rem;
      }
      .van-card__thumb {
      }
      .van-card__content {
        font-size: 0.22rem;
        .van-card__title {
          line-height: 0.32rem;
        }
      }
    }
  }
}
</style>