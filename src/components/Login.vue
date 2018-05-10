<template>
<div class="login-container">
    <div class="login-box">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>

      <!-- 登录表单 -->
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
        <el-form-item prop="username">
        <el-input placeholder="登录名称" v-model="loginForm.username"></el-input>
        </el-form-item>

        <el-form-item prop="password">
        <el-input placeholder="登录密码" v-model="loginForm.password"></el-input>
        </el-form-item>

        <!-- 登录按钮组 -->
        <el-form-item class="btn">
          <el-button type="primary" @click="sendData">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
      </el-form-item>
      </el-form>
    </div>
</div>
</template>
<script>
import mix from './Login.mixins.js'
export default {
  mixins: [mix]
}
</script>
<style lang="less" scope>
.login-container {
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
}
.login-box {
  width: 405px;
  height: 304px;
  background-color: #fff;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}
.logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #eee;
  padding: 10px;
  position: relative;
  left: 50%;
  top: -20%;
  transform: translateX(-50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.el-form {
  padding: 15px;
  margin-top: -40px;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
