import base from './base'; // 导入接口域名列表
import axios from '@/axios'; // 导入http中创建的axios实例(进行请求时的拦截)
import qs from 'qs';    //post请求时数据序列化

const getData = {
    swiper() {
        return axios.get(`${base.jd}/api/focus`);
    },
    classify() {
        return axios.get(`${base.jd}/api/pcate`);
    },
    plist() {
        return axios.get(`${base.jd}/api/plist`)
    },
    // 分类
    // return axios.post(`${base.jd}/api/pcate?pid+${parmes}`, qs.stringify(parmes))
    pcate(parmes) {
        return axios.get(`${base.jd}/api/pcate?pid=${parmes}`)
    },
    // 获取国家地区信息
    getCountry() {
        return axios.get("../../static/json/country.json");
    },
    // 获取手机验证码
    getTelCode(parmes) {
        return axios.post(`${base.jd}/api/sendCode`, qs.stringify(parmes));
    },
    // 返回商品详情
    getProductInfo(params) {
        return axios.get(`${base.jd}/api/pcontent?id=${params}`);
    }
}

export default getData;
