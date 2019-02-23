import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import './styles/common.css'

import axios from 'axios'
Vue.prototype.$http=axios
//设置默认的请求路径
axios.defaults.baseURL='http://litc.pro:9999/v1'

//请求拦截
// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });
//响应拦截
axios.interceptors.response.use(function (response) {
   response = response.data
  return response;
}, function (error) {
  Vue.prototype.$message({
    
  })
  return Promise.reject(error);
});




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
