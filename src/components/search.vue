<template>
  <div class="search">
    <div style="height: 56px"></div>
    <div class="tabbar_box">
      <div class="searchHead">
        <van-icon name="arrow-left" @click="$router.back(-1)" />
        <van-search v-model="searchVal" placeholder="请输入搜索关键词" />
        <van-icon name="search" @click="searchFun(searchVal)" />
      </div>
    </div>
    <div class="fenge" v-if="searchFlag"></div>
    <div class="searchcardtitle" v-if="searchFlag">
      Search history
      <van-icon name="delete" @click="del()" />
    </div>
    <ul class="history-list">
      <li>
        <van-button round type="info">Round</van-button>
      </li>
      <li>
        <van-button round type="info">Round</van-button>
      </li>
    </ul>
    <!-- 展示搜索商品内容 -->
    <div class="proTyle" v-if="!searchFlag">
      <van-dropdown-menu active-color="#ee0a24">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="fenge" v-if="!searchFlag"></div>
    <div class="proList" v-if="!searchFlag">
      <van-card
        v-for="(item,index) in searchList"
        :key="index"
        num="2"
        price="2.00"
        :desc="item.title"
        title
        :thumb="Prefix + item.pic"
      />
      <van-empty image="search" description="没有搜索内容" v-if="empty" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchVal: "",
      searchFlag: true,
      empty: false,
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      Prefix: "http://jd.itying.com/",
      searchList: []
    };
  },
  methods: {
    del() {
      this.$dialog
        .alert({
          title: "请确认操作！",
          message: "您确定要删除所有内容！",
          showCancelButton: true
        })
        .then(() => {
          console.log("点击了确认按钮噢");
        })
        .catch(() => {
          console.log("点击了取消按钮噢");
        });
    },
    searchFun(val) {
      this.searchFlag = false;
      this.$api.getData.getSearch(val).then(res => {
        this.searchList = res.result;
        if (!res.result.length) {
          this.empty = true;
          this.searchFlag = false;
        } else {
          this.empty = false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.search {
  .tabbar_box {
    position: fixed;
    top: 0;
    width: 7.5rem;
    z-index: 10;
    background: white;
    .searchHead {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.02rem;
      top: 0;
      z-index: 10;
      .van-icon {
        font-size: 26px;
        padding: 0 5px;
      }
      .van-search {
        flex: 1;
        .van-search__content {
          background: #ededed;
          border-radius: 10px;
        }
      }
    }
  }
  .fenge {
    height: 10px;
    background: #eee;
  }
  .searchcardtitle {
    font-size: 16px;
    padding: 0.2rem 0.15rem;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .history-list {
    padding: 0 0.3rem;
    li {
      padding-right: 0.1rem;
      float: left;
      .van-button {
        list-style: none;
        background: #ededed;
        border: none;
        color: black;
        height: 0.6rem;
        height: 40px;
      }
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .proTyle {
    position: fixed;
    z-index: 10;
    top: 55px;
    width: 7.5rem;
    .van-dropdown-menu {
      .van-dropdown-menu__bar {
        box-shadow: 0 0px 0px rgba(100, 101, 102, 0.08);
      }
    }
  }
  .proList {
    height: calc(100vh - 114px);
    overflow: auto;
    .van-card {
      background: white;
      color: #000;
      font-size: 0.24rem;
      .van-card__header {
        .van-card__content {
          .van-card__title,
          .van-card__desc {
            line-height: 30px;
            max-height: 30px;
          }
          .van-card__price-integer {
            font-size: 20px;
          }
          .van-card__price {
            color: red;
          }
        }
      }
    }
  }
}
</style>