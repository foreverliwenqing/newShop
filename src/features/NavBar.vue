<template>
  <ul class="nav-bar">
    <router-link
        v-for="(item, index) in tabbars"
        :key="index"
        :class="item.id"
        :to="{ path: item.path }"
        tag="li"
        active-class="z-act"
        exact
        >
        <i :class="item.icon"></i>
        <span v-text="item.name"></span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      tabbars: [
        {
          id: "home",
          name: "首页",
          icon: "iconfont iconshouyeshouye",
          path: '/'
        },
        {
          id: "product",
          name: "购物车",
          icon: "iconfont icongouwuche",
          path: '/car'
        },
        {
          id: "userinfo",
          name: "我的",
          icon: "iconfont iconwode",
          path: '/my'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  bottom: 0;
  width: 7.5rem;
  display: flex;
  padding: 0;
  margin: 0;
  z-index: 100;
  background: #fff;
  list-style: none;
  height: 50px;
  border-top: 1px solid #f3f3f3;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    i {
      font-size: 21px;
    }
    &.z-act {
      color: #ff5f16;
    }
  }
}
</style>