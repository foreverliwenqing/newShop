<template>
  <div class="home">
    <!-- <transition name="fade"> -->
      <router-view></router-view>
    <!-- </transition> -->
    <NavBar></NavBar>
  </div>
</template>

<script>
// 引入NavBar组件
import NavBar from "@/features/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>