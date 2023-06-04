/*
 * @Author       : zhouqi
 * @description  : 请求封装
 * @Date         : 2022-02-24 14:49:49
 * @FilePath     : /NUXT3/utils/request.ts
 */

import axios, { AxiosRequestHeaders } from 'axios';
// import $util from '../util/util';
// 创建一个axios实例
const instance = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  // baseURL: 'https://test-api-changzheng.chinaath.com',
  // baseURL: 'http://localhost:7777',
  timeout: 60000
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // let headers: AxiosRequestHeaders = {
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    //   'Content-Length': '100',
    //   'User-Agent': 'MyApp',
    //   'Content-Encoding': 'gzip',
    //   Authorization: 'Bearer token',
    // };
    const CType = {
      // userToken: $util.getQueryVariable('userToken'),
      'Content-Type':
        config.method === 'get' ? 'application/json' : 'application/x-www-form-urlencoded'
    };
    // headers = { ...headers, ...CType };

    // config1.headers = { ...config1.headers, ...CType };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    if (response.data.code != 0) {
      // $util.showToast(response.data.msg);
      return false;
    }
    return response.data;
  },
  (error) => {
    // $util.showToast(error.message || '请求失败');
    return Promise.reject(error);
  }
);

// module.exports = {
//   get(url, data = {}, option = {}) {
//     return instance.get(url, {
//       data,
//       method: 'GET',
//       ...option
//     });
//   },
//   post(url, data = {}, option = {}) {
//     return instance.post(url, {
//       data,
//       method: 'POST',
//       ...option
//     });
//   }
// };
export function get(data: any) {
  return instance.get(data.url, {
    params: data.data
  });
}
export function post(data: any) {
  return instance.post(data.url, { ...data.data });
}
