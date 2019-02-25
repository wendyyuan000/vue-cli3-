<template>
    <div class="loginContainer">
        <el-form ref="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
            </el-form-item>

            <el-form-item label="密码">
                <el-input v-model="password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
                <router-link to="/register">未登录,去注册</router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        username:'',
        password:''
      }
    },
    methods: {
      login(){ 
          let username = this.username
          let password = this.password
          this.$http.post('users/login',{username,password}).then(result=>{
              // console.dir(result)
              if(username.trim().length==0 || password.trim().length==0){
                  return this.$message({
                      type:'error',
                      message:'用户名或密码不能为空'
                  })
              }
              //登录成功
              //1.设置localstorage
              localStorage.setItem('token',result.data.token)
              localStorage.setItem('userInfo',result.data)
              //2.跳转到首页
              this.$router.push('/home')
          })
      }
    }
  }
</script>

<style lang="less">
    .loginContainer{
        width: 600px;
        // border:1px solid #ccc;
        margin:200px auto;
        text-align: center;
        .el-form-item__content{
            display: flex;
            justify-content: center;
            a{
                color: #409EFF;
                margin-left: 30px;
                text-decoration: underline
            }
        }
    }
</style>
