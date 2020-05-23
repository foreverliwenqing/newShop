<template>
  <div class="userInfo">
    <van-nav-bar
      title="AddressEdit"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="editContent">
      <div class="addressList">
        <van-field v-model="user.name" placeholder="请输入用户名" label="用户名" />
        <van-field v-model="user.tel" placeholder="请输入手机号" type="tel" label="手机号" />
        <van-field v-model="user.address" placeholder="请输入邮箱地址" type="tel" label="邮箱地址" />
        <van-field
          v-model="user.tel"
          placeholder="请选择地区"
          label="地区"
          readonly
          @click="changeCity()"
        />
        <van-field
          v-model="user.address"
          placeholder="请选择城市"
          label="城市"
          readonly
          @click="areaShow = true"
        />
      </div>
      <div class="van-cell van-cell--center van-switch-cell van-address-edit__default moren">
        <div class="van-cell__title">
          <span>设为默认收货地址</span>
        </div>
        <div class="van-cell__value">
          <van-switch v-model="user.isDefault" @input="onInput" />
        </div>
      </div>
    </div>

    <!-- 保存按钮 -->
    <div class="opaBtn">
      <div class="dele" v-if="delFlag">
        <van-button round type="info" @click="onDel">删除</van-button>
      </div>
      <div class="saveEdit">
        <van-button round type="info" @click="onSave">保存</van-button>
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
            <van-index-anchor :index="item.title"></van-index-anchor>
          </div>
          <div
            class="van-cell"
            v-for="(prefix, index) in item.items"
            :key="index"
            @click="vanArea(prefix)"
          >
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
      user: {},
      stateShow: false,
      areaShow: false,
      indexList: [],
      arIndexList: [],
      list: [],
      areaList: [],
      delFlag: false,
      checked: false,
      localList: [],    //获取地址
    };
  },
  methods: {
    onSave() {
      if (!this.delFlag) {
        // 添加地址
        console.log(2);
        for (var i in this.user) {
          if (!this.user[i] && i != "isDefault") {
            return false;
          }
        }
        this.localList.push(this.user);
        localStorage.setItem("addList", JSON.stringify(this.localList));
        this.$router.push("/addressList");
      } else {
        // 编辑地址
        // for (var i in this.user) {
        //   if (!this.user[i] && i != "isDefault") {
        //     return false;
        //   }
        // }
        console.log(this.user.index);
        this.localList.splice(this.user.index, 1, this.user);
        localStorage.setItem("addList", JSON.stringify(this.localList));
        this.$router.push("/addressList");
      }
    },
    onInput(checked) {
      this.user.isDefault = checked;
    },
    onDel() {
      console.log(1);
    },
    onClickLeft() {
      this.$router.push("/addressList");
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
      that.indexList = that.getState(that.stateList).arr1;
      that.list = that.getState(that.stateList).arr2;
    });
    if (JSON.stringify(this.$route.query) != "{}") {
      that.delFlag = true;
      that.user = this.$route.query;
    }

    // 获取地址
    let falg = JSON.parse(localStorage.getItem("addList"));
    if( falg && falg.length > 0 ) {
      that.localList = JSON.parse(localStorage.getItem("addList"));
    } else {
      falg = []
    }
  }
};
</script>
<style lang="scss">
.userInfo {
  .editContent {
    padding: 12px;
    .addressList,
    .moren {
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
  .opaBtn {
    display: flex;
    position: absolute;
    bottom: 20px;
    justify-content: space-around;
    width: 7.5rem;
    .saveEdit,
    .dele {
      flex: 1;
      display: flex;
      justify-content: center;
      .van-button--info {
        flex: 1;
      }
    }
    .dele {
      .van-button--info {
        background: #808289;
        color: white;
        border: 1px solid #808289;
      }
    }
  }
}
</style>