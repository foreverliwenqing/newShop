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
        console.log(parmes);
        return axios.get(`${base.jd}/api/pcate?pid=${parmes}`)
    }
}

export default getData;
