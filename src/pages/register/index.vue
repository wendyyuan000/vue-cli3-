<template>
    <div class="registerContainer">
        <el-form ref="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
            </el-form-item>

            <el-form-item label="昵称">
                <el-input v-model="nickname"></el-input>
            </el-form-item>

             <el-form-item label="密码">
                <el-input v-model="password"></el-input>
            </el-form-item>

             <el-form-item label="确认密码">
                <el-input v-model="confirmPassword"></el-input>
            </el-form-item>

             <el-form-item label="手机号">
                <el-input v-model="mobile"></el-input>
            </el-form-item>

            <el-form-item label="验证码" class="vcode">
                <el-input v-model="vCode"></el-input>
                <span @click="getVcode" v-html="vcodeSvg"></span>  <!-- 验证码不清晰可以点击切换 -->
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="register">注册</el-button>
                <router-link to="/login">已注册,去登录</router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            nickname:'',
            password:'',
            confirmPassword:'',
            mobile:'',
            vCode:'',
            vcodeSvg:''
        }
    },
    created() {
        this.getVcode()  //初次进入页面获取验证码
    },
    methods: {
        register(){
            let {username,nickname,password,confirmPassword,mobile,vCode,vcodeSvg} = this
            if(!username.trim() ||
               !nickname.trim() ||
               !password.trim() ||
               !confirmPassword.trim() ||
               !mobile.trim() ||
               !vCode.trim() ){
                 return  this.$message({
                       type:'error',
                       message:'输入的信息不能为空'
                   })
               }

                // 记得全局设置cookie跨域
               this.$http.post('users/register',{username,nickname,password,confirmPassword,mobile,vCode}).then(result=>{
                   console.log(result)
                   if(result.status===200){
                       this.$message({
                           type:'success',
                           message:'注册成功'
                       })
                       localStorage.setItem('token',result.data.token)
                       localStorage.setItem('userInfo',result.data)
                       this.$router.push('/login')
                   }
                
               })
        },
        getVcode(){
            this.$http.get('users/getVCode').then(result=>{
                this.vcodeSvg = result
            })
        }
    },
}
</script>

<style lang="less">
    .registerContainer{
        width: 600px;
        // border:1px solid #ccc;
        margin:50px auto;
        text-align: center;
        .vcode{
            display: flex;
            // justify-content: flex-start;
            .el-input{
                width: 100%;
            }
            span{
                margin-left: 30px;
            }
        }
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