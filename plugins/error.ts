export default defineNuxtPlugin ((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    console.error('vue error handler');
    console.log(_args[0]);
  }
  // 仅 Vue 层面的错误捕获
  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error');
  })
  // 整个应用层面的错误捕获
  nuxtApp.hook('app:error', (..._args) => {
    console.log('app:error');
  })
})