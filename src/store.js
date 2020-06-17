import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from 'vant';

Vue.use(Vuex)

const store = new Vuex.Store({
    // 设置全局访问的state值
    state: {
        car: localStorage["cartList"] ? JSON.parse(localStorage["cartList"]) : [],  //购物车刷新造成的数据丢失,所以存储到本地
        all_money: 0, //总价
        all_order: localStorage["allOrder"] ? JSON.parse(localStorage["allOrder"]) : [],
        all_selsect: true,  //全选状态。
    },
    // 实时监听state值的变化
    getters: {
        //购物车列表
        cartList(state) {
            // 初始化全选状态
            if(state.all_selsect) {
                state.car.forEach(element => {
                    element.selected = true;
                });
            }
            // 列表变化存本地
            localStorage.setItem("cartList", JSON.stringify(state.car));
            return state.car
        },
        // 选中商品的金额
        allMoney(state) {
            let all_money=0
            state.car.forEach((item) => {
                if(item.selected) {
                    all_money += item.pro_count * item.pro_price
                }
            })     
            return state.all_money = all_money
        }
    },
    // 改变state里的初始值 同步的
    mutations :{
    	//添加商品
        ADDGoods(state,data){
            let datas={       //传入的商品属性
                pro_title:data.title,
                pro_pic:data.picture,
                pro_count: data.pro_count,
                pro_price: data.sellPrice,
                selected:true,
                productId:data.productId
            }
            let index=-1
            index=state.car.findIndex(item=>{     //返回元素的索引位置，如果没有符合条件的元素返回 -1
                return item.productId==data.productId
             })
             if(index==-1){    //返回-1说明购物车里没有这个商品，则push进去，如果返回下标，则让此商品的数量加1
                state.car.push(datas)
             }else{
                state.car[index].pro_count++
             }
             Toast.success('ADD SUCCESS！');
        },
        //购物车页面数量加减
        ADDNUM(state,productId){
            let index = state.car.findIndex(item=>{
                return item.productId==productId
             })
            return state.car[index].pro_count++
        },
         //购物车页面数量加减
        JIANNUM(state,productId){
            let index=state.car.findIndex(item=>{
                return item.productId==productId
             })
            if(state.car[index].pro_count<=1){
               return state.car[index].pro_count=1
            }else{
               return state.car[index].pro_count--
            }
        },
         //购物车单选
        SELECT(state, productId){
            let flag = state.car.some((item)=>{
                return item.selected==false
            })

            if(!flag){       //如果全部选中，则全选状态也改变
                state.all_selsect=true
            }else{   
                state.all_selsect=false
            }
        },
        // 购物车全选
        SELECTALL(state){
            state.all_selsect=!state.all_selsect
            if(state.all_selsect){
                state.car.forEach((item)=>{
                    item.selected=true
                })
            }else{
                state.car.forEach((item)=>{
                    item.selected=false
                })
            }
        },
        //删除选中的商品，注意这里不能使用数组删除的方法，索引值会有问题
        DEL(state){
            let flag=state.car.some((item)=>{
                return item.selected==true
            })
            if(!flag){
                Toast.text('请至少选择一个商品')
            }else{
                Dialog[0]({
                    title:'确定从购物车中删除吗？',
                    onOkBtn() {  //确定按钮点击事件
                        this.close(); //关闭对话框
                        var list=[];
                        state.car.forEach((item,index)=>{
                            if(!item.selected){
                                list.push(item)
                            }
                        })
                        return state.car=list
                    },
                })
            }
        },
        // 提交订单
        SUBMIT(state) {
            let list = [];
            let list1 = [];
            state.car.some((item, index) => {
                if(item.selected == true) {
                    list.push(item);
                } else {
                    list1.push(item);
                }
            })
            state.all_order = list;
            state.car = list1;

            localStorage.setItem("allOrder", JSON.stringify(state.all_order));
        }
    },
    // 异步触发mutations里面的方法 在外部组件里进行全局执行actions里面方法的时候，你只需要用执行this.$store.dispatch('headTitle'，132) 这样就可以全局改变改变标题的值了
    actions:{
        addGoods({commit},data){
            commit('ADDGoods',data)
        },
        addNum({commit},id){
            commit('ADDNUM',id)
        },
        jianNum({commit},id){
            commit('JIANNUM',id)
        },
        select({commit},id){
            commit('SELECT',id)
        },
        selectAll({commit}){
            commit('SELECTALL')
        },
        del({commit}){
            commit('DEL')
        },
        submit({commit}) {
            commit('SUBMIT')
        }
    }
})

export default store;