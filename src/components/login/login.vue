<template>
    <div class="login" style="width: 100%;height: 100%;">
      <div class="shu">
        <h1>LOGIN</h1>
        <el-input placeholder="请输入账号" v-model="account"></el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-button type="success" @click="login">登录</el-button>
      </div>
    </div>
</template>

<script>
    var store = {
      debug: true,
      state: {
        loginState: ''
      },
      setMessageAction (newValue) {
        if (this.debug){
          console.log("进来")
          this.state.loginState = newValue
        }
      },
      clearMessageAction () {
        if (this.debug){
          this.state.loginState = ''

        }
      }
    }
    export default {
        name: "login.vue",
        data(){
          return{
            account: '',
            password:''
          }
        },
        mounted(){
        },
        methods: {
          open3() {
            this.$message({
              showClose: true,
              message: '登录失败',
              type: 'warning'
            });
          },
          open4() {
            this.$message({
              showClose: true,
              message: '账号或密码不正确',
              type: 'warning'
            });
          },
          open2() {
            this.$message({
              message: '恭喜你，登录成功',
              type: 'success',
              duration:2000,
              onClose:()=>{
                store.setMessageAction('1');
                this.$router.push({name: '系统设置',params:{loginState:store.state.loginState}})
                sessionStorage.setItem('loginState','1')
              }
            });
          },
          login(){
            this.$http.post(this.HOST + "/manage/ce/log", {
              username: this.account,
              password: this.password
            }).then((res) => {
              if (res.data.status == 1) {
                this.open2();
              }else if(res.data.status==-2){
                this.open4();
              }else {
                this.open3();
              }
            })
          }
        }
    }
</script>

<style scoped>
  .login{
    position:fixed;
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(45deg,rgba(254,172,94,0.5),rgba(199,121,208,0.5),rgba(75,192,200,0.5));/* Safari 5.1-6.0 */
    background: -o-linear-gradient(45deg,rgba(254,172,94,0.5),rgba(199,121,208,0.5),rgba(75,192,200,0.5));/* Opera 11.1-12.0 */
    background: -moz-linear-gradient(45deg,rgba(254,172,94,0.5),rgba(199,121,208,0.5),rgba(75,192,200,0.5));/* Firefox 3.6-15 */
    background: linear-gradient(45deg,rgba(254,172,94,0.5),rgba(199,121,208,0.5),rgba(75,192,200,0.5));/* 标准语法 */
  }
  .shu{
    width: 20%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .login h1 {
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    text-align: center;
  }
  .el-input {
    width: 100%;
    margin-bottom: 10px;
  }
  .el-button{
    background-color: #4a77d4;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    color: #ffffff;
    transition: background-position 0.1s linear;
    width: 100%;
    display: block;
    background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4);
  }
</style>
