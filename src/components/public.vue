<template>
  <div class="home">
    <transition
      mode="out-in"
      appear
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
    >
      <router-view></router-view>
    </transition>
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
</style>