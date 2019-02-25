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
axios.defaults.baseURL='http://www.litc.pro:9999/v1'
//设置cookie跨域(验证码的发送)
axios.defaults.withCredentials = true

//请求拦截  (可以设置请求头)
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token')   
  config.headers.Authorizations = token  //设置了请求头把token携带过去,就不需要每次发送请求是把token当参数传过去了
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
//响应拦截(可以重新包装响应的内容,如果token过期或无效,则回到登录页面)
axios.interceptors.response.use(function (response) {
   response = response.data
  return response;
}, function (error) {
  console.dir(error);
  // if(error.)
  Vue.prototype.$message({
    showClose:true,
    type:'error',
    message:error.response.data.errMsg
  })
  // return Promise.reject(error);
});


//导航守卫,用来拦截登录


//路由跳转之前
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
    //1.已登录并且直接输入登录页面的地址,那么就不让用户到登录页面,强制跳到首页
      if(token && to.path=='/login'){
        return next('/home')
      }
      //2.用户未登录,直接输入其他网址就跳转到登录页面
      if(token || to.path=='/login' || to.path=='/register'){  //用户登了了,或者请求的是登录页面和注册页面则都放行
        next()  
      }else{
        next('/login')
      }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
