# user-sign-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

模块:

  * [x] 登录

1. 点击登录按钮, 进行表单校验
2. 将用户输入的信息提交给服务器
3. 服务器返回token和当前用户信息, 将其存储到localStorage中
4. 提醒用户登录成功, 跳转到首页

  * [ ] 注册  1.axios全局配置或请求拦截中配置cookie跨域的配置(验证码) 
                  1.拦截器配置:config.withcredentials=true
                  2.全局配置:axios.defaults.withCredentials = true

              2.注册成功存储token和userInfo,直接跳转到home页面 
  * [x] 注销

技术栈

  * [x] vue-cli@3
  * [x] Element-UI
  * [x] Axios基础
  * [x] Axios高级应用 拦截器
  * [x] 路由高级应用  导航守卫
  * [ ] Vuex的模块化

