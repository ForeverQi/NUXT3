// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // modules: ['@huntersofbook/naive-ui-nuxt','@nuxtjs/axios', '@nuxtjs/proxy'],
  // server: {
  //   port: 3000, // 设置本地开发服务器的端口号
  // },
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: {
        '^/api': ''
      }
    }
  }
};
