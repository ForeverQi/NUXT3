/*
 * @Author       : zhouqi
 * @description  : description
 * @Date         : 2022-02-24 15:11:34
 * @FilePath     : /NUXT3/api/api.ts
 */
import { get, post } from '../utils/request';
// const env = functions.getQueryVariable('env') || 'develop';
// const BASE_API = `https://${env === 'production' ? 'api' : 'test'}.tanchetu.com`;
const BASE_API = `https://test-api-changzheng.chinaath.com`;

export default {
  // testApi(data: object) {
  //   return get({
  //     url: '/changzheng-race-center-api/api/race/query/h5/detail',
  //     params: data
  //   });
  // },
  eventItemDetailApiName: BASE_API+'/changzheng-race-center-api/api/race/query/h5/detail',

  nodeApi(data: object) {
    return post({
      url: '/api/users/login',
      data
    });
  },
  getReportDetailsApi(data: object) {
    return get({
      url: BASE_API + '/api/getReportDetails',
      data
    });
  },
  // 赛事详情
  eventItemDetailApi(data: object) {
    return get({
      url: BASE_API + '/changzheng-race-center-api/api/race/query/h5/detail',
      data
    });
  },
  getByRaceIdAndAccountIdApi(data: object) {
    return get({
      url: BASE_API + '/changzheng-order-center-api/api/order/query/getByRaceIdAndAccountId',
      data
    });
  }
};
