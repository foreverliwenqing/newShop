let Fun = {
  //购物车是否存在数据
  hasData(cartList, current) {
    if (cartList && cartList.length > 0) {
      for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].pro_id == current.pro_id) {
          return true;
        }
      }
      return false;
    }

    return false;
  },


  getCartNum(cartList) {

    if (cartList && cartList.length > 0) {
      var sum = 0;
      for (var i = 0; i < cartList.length; i++) {
        sum += cartList[i].pro_count;
      }
      return sum;
    }
  },
  //获取购物车合计
  getCartSum(cartList) {
    var sumprice = 0;
    for (var i = 0; i < cartList.length; i++) {
      if (cartList[i].checked) {
        sumprice += cartList[i].pro_count * cartList[i].pro_price;
      }
    }
    return sumprice;
  },
  // 保存在本地
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeAll(key) {
    localStorage.removeItem(key);
  },
  text(){
    console.log("测试，测试！！！")
  }
}

export default Fun;
