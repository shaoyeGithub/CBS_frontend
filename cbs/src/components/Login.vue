<template>
  <div class="login" clearfix>
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm"  status-icon label-width="80px">
          <h3>登录</h3>
          <hr>
          <el-form-item prop="telnumber" label="用户名">
            <el-input v-model="user.telnumber" placeholder="请输入用户名" prefix-icon></el-input>
          </el-form-item>
          <el-form-item id="password" prop="password" label="密码">
            <el-input v-model="user.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <router-link to="/">找回密码</router-link>
          <router-link to="/register">注册账号</router-link>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="doLogin()">登 录</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
 
<script>
import qs from 'qs';
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      user: {
        telnumber: "",
        password: ""
      }  
    };
  },
  created() {},
  methods: {
    doLogin() {
      
      if (!this.user.telnumber) {
        this.$message.error("请输入电话号码！");
        return;
      } else if (!this.user.password) {
        this.$message.error("请输入密码！");
        return;
      } else {
        //校验用户名和密码是否正确;
        
        this.$axios
          .post("/phoneNumber/queryPhoneNumberMoney", 
            qs.stringify(this.user.telnumber)
        )
          .then(res => {
            console.log(res.data);
            if (res.data === -1 ) {
              alert("用户未注册");
            } else {
              
              this.$router.push({ path: "/mainpage" });
            }
          }).catch(function (error) {
        // this.$message(error)
        console.log(error)
      });
      }
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 740px;
  background: url("../assets/1.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  background: url("../assets/1.jpg") no-repeat;
  background-size: cover;
  width: 400px;
  height: 300px;
  margin: 215px auto;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
}
#password {
  margin-bottom: 5px;
}
h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}
a:hover {
  color: coral;
}
.el-button {
  width: 80%;
  margin-left: -50px;
}
</style>
