import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from './pages/login'
import homeComponent from './pages/home'
import registerComponent from './pages/register'
Vue.use(Router)

export default new Router({
  routes: [
      {path:'/',redirect:'/login'},
      {path:'/login',component:loginComponent},
      {path:'/home',component:homeComponent},
      {path:'/register',component:registerComponent},
  ]
})
