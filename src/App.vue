<template>
  <div id="app">
    <noscript>
      <img height="1" width="1" :src="imgurl" />
    </noscript>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      faceBookCode: "756018728136117",
      imgurl: ""
    };
  },
  created() {
    this.imgurl = "https://www.facebook.com/tr?id=" +  this.faceBookCode + "&ev=PageView&noscript=1";
    console.log(123);
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", this.faceBookCode); 
    fbq("track", "PageView");
    console.log(this.faceBookCode);
    // fbq("track", "AddPaymentInfo"); //添加支付信息
    // fbq("track", "AddToCart"); //加入购物车
    // fbq("track", "InitiateCheckout"); //发起结账
    // fbq("track", "Purchase", { value: 0.0, currency: "USD" }); //购物
    // fbq("track", "ViewContent"); //查看内容
  }
};
</script>

<style lang="scss">
</style>
