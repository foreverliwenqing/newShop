<template>
  <div class="userInfo">
    <van-nav-bar
      title="AddressEdit"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="editContent">
      <div class="addressList">
        <van-field v-model="name" placeholder="请输入用户名" label="用户名" />
        <van-field v-model="phone" placeholder="请输入手机号" type="tel" label="手机号" />
        <van-field v-model="phone" placeholder="请输入邮箱地址" type="tel" label="邮箱地址" />
        <van-field v-model="city" placeholder="请选择地区" label="地区" readonly @click="changeCity()" />
        <van-field v-model="state" placeholder="请选择城市" label="城市" readonly @click="areaShow = true"/>
      </div>
    </div>

    <!-- 保存按钮 -->
    <div class="saveEdit">
      <div class="saveContent">
        保存
      </div>
    </div>
    <!-- 选择城市 -->
    <van-popup class="bottomPopup" v-model="stateShow" position="bottom" :style="{ height: '75%' }">
      <van-index-bar :index-list="indexList">
        <div v-for="(item, index) in list" :key="index">
          <div>
            <van-index-anchor :index="item.title"></van-index-anchor>
          </div>
          <div
            class="van-cell"
            v-for="(prefix, index) in item.items"
            :key="index"
            @click="van(prefix)"
          >
            <div class="van-cell__title">
              <span>{{prefix}}</span>
            </div>
          </div>
        </div>
      </van-index-bar>
    </van-popup>

    <!-- area popup -->
    <van-popup class="bottomPopup" v-model="areaShow" position="bottom" :style="{ height: '75%' }">
        <van-index-bar :index-list="arIndexList">
            <div v-for="(item, index) in areaList" :key="index">
                <div>
                    <van-index-anchor :index="item.title">
                    </van-index-anchor>
                </div>
                <div class="van-cell" v-for="(prefix, index) in item.items" :key="index"
                    @click="vanArea(prefix)">
                    <div class="van-cell__title">
                        <span>{{prefix}}</span>
                    </div>
                </div>
            </div>
        </van-index-bar>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchResult: [],
      name: "",
      phone: "",
      stateShow: false,
      areaShow: false,
      indexList: [],
      arIndexList: [],
      list: [],
      areaList: [],
      city: "",
      state: ""
    };
  },
  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    changeCity() {
      this.stateShow = true;
    },
    getState(dataItem) {
      let arrListFlag = [];
      let arrIndex = [];
      let arrIndexFlag = [];
      let falgArr = [];
      for (var i in dataItem) {
        arrListFlag.push(i);
      }
      arrListFlag.sort((a, b) => {
        return a.localeCompare(b);
      });
      arrListFlag.map((item, index) => {
        arrIndex.push(item.charAt());
      });
      arrIndexFlag = [...new Set(arrIndex)];

      for (var i = 0; i < arrIndexFlag.length; i++) {
        let obj = {};
        let arrFlag = [];
        obj["title"] = arrIndexFlag[i];
        for (var j = 0; j < arrListFlag.length; j++) {
          if (arrListFlag[j].charAt() == arrIndexFlag[i]) {
            arrFlag.push(arrListFlag[j]);
          }
        }
        obj["items"] = arrFlag;
        falgArr.push(obj);
      }

      return {
        arr1: arrIndexFlag,
        arr2: falgArr
      };
    },
    van(e) {
      this.city = e;
      this.stateShow = false;
      this.state = "";
      this.stateShow = false;
      for (var i in this.stateList) {
          if (e == i) {
              this.areaList = this.getState(this.stateList[e]).arr2;
              this.arIndexList = this.getState(this.stateList[e]).arr1;
              console.log(this.areaList)
          }
      }
    },
    vanArea(e) {
      this.state = e;
      this.areaShow = false;
    }
  },
  mounted() {
    let that = this;
    this.$api.getData.getCountry().then(res => {
      that.stateList = res.SA;
      console.log(that.stateList);
      that.indexList = that.getState(that.stateList).arr1;
      that.list = that.getState(that.stateList).arr2;
    });
  }
};
</script>
<style lang="scss">
.userInfo {
  .editContent {
    padding: 12px;
    .addressList {
      box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
      overflow: hidden;
      border-radius: 8px;
    }
  }
  .bottomPopup {
    width: 7.5rem;
    left: calc(50% - 3.75rem);
  }
  .van-overlay {
    width: 7.5rem;
    left: calc(50% - 3.75rem);
  }
  .saveEdit {
    padding: 15px;
    .saveContent {
      text-align: center;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-weight: 700;
      background: #e4393c;
      border-radius: 20px;
      color: white;
      position: fixed;
      bottom: 20px;
      width: 7rem;
    }
  }
}
</style>