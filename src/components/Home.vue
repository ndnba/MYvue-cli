<template>
  <el-container>

  <el-header>
        <div class="logoimg">
          <img src="../assets/images/logo.png" >
        </div>
        <h3>电商后台管理系统</h3>
      <el-button type="info" @click="logout">退出</el-button>
  </el-header>

  <el-container>
    <el-aside :style="{width: toggleBar ? '65px' : '200px'}">
      <div class="menuTop" @click="toggleBar=!toggleBar">|||</div>
      <el-menu :collapse="toggleBar" :collapse-transition="false" :unique-opened="true" background-color="#373d41" text-color="#fff" active-text-color="#fff" :router="true">
        <el-submenu :index="(i+1).toString()" v-for="(item, i) in asideData" :key="item.id" :style="{width: toggleBar ? '65px' : '200px'}">
          <template slot="title">
            <i :class="['iconfont', menuIcons[i]]" style="margin-right:10px;"></i>
            <span>{{item.authName}}</span>
          </template>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          <el-menu-item-group :index="(i+1).toString()" v-for="(item, i) in item.children" :key="item.id">
            <el-menu-item :index="item.path">{{item.authName}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
    </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import mix from './Home.mixins.js'
export default {
  mixins: [mix]
}
</script>
<style lang="less" scoped>
.el-header {
  height: 60px;
  background-color: #373d41;
  padding: 0;
  user-select: none;
}
.logoimg {
  float: left;
}
h3 {
  font-weight: 400;
  color: #fff;
  float: left;
  margin-left: 15px;
}
.el-button {
  color: #fff;
  float: right;
  margin: 10px 0;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside {
  height: 100%;
  background-color: #373d41;
  user-select: none;
}
.menuTop {
  color: #fff;
  text-align: center;
  user-select: none;
}
</style>
