import jsonp from "assets/js/jsonp";
import { commonParams, options } from './config';

import axios from "axios";

const debug = process.env.NODE_ENV !== "production";

// 获取轮播图
export function getRecommend() {
    const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?";

    const data = Object.assign({}, commonParams, {
        platform: "h5",
        uin: 0,
        needNewCode: 1
    });

    // 返回值还是 promise
    return jsonp(url, data, options)
}

// 获取歌单列表接口
export function getDiscList() {
    // 线上环境地址，同学们根据自己的需要配置修改
    // debugger;
    const url = debug ? '/api/getDiscList' : 'http://ustbhuangyi.com/music/api/getDiscList';
    const data = Object.assign({}, commonParams, {
        picmid: 1,
        rnd: Math.random(),
        loginUin: 0,
        hostUin: 0,
        platform: "yqq.json",
        needNewCode: 0,
        categoryId: 10000000,
        sortId: 5,
        sin: 0,
        ein: 29,
        format: "json"
    });

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}
