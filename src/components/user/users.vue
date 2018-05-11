<template>
<div class="users-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
        <el-row :gutter="20">
            <el-col :span="12">
                <el-input placeholder="请输入内容" v-model="keywords">
                    <el-button icon="el-icon-search" @click=" getUsersData"></el-button>
                </el-input>
            </el-col>
            <el-col :span="8">
                <el-button type='primary'>添加用户</el-button>
            </el-col>
        </el-row>
    </el-card>
    <el-table :data="userData" height="250" border style="width: 100%">
        <el-table-column type="index" width="100">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="email" label="邮箱">
        </el-table-column>
        <el-table-column prop="mobile" label="电话">
        </el-table-column>
        <el-table-column prop="role_name" label="角色">
        </el-table-column>
        <el-table-column label="状态" >
            <template  slot-scope="scope">
                <el-switch v-model="scope.row.mg_state"  @change="changeEve(scope.row)">
                </el-switch>
            </template>
        </el-table-column>
        <el-table-column label="操作"  width="300">
            <template slot-scope="scope">
                <el-row>
                    <el-button type="primary" icon="el-icon-edit" circle></el-button> 
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                        <el-tooltip class="item" effect="dark" content="分配角色" placement="top-start" :enterable="false">
                             <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                        </el-tooltip>
                </el-row>
            </template>
        </el-table-column>
  </el-table>
</div>
</template>

<script>
import mix from './users.mixins.js'
export default {
  mixins: [mix]
}
</script>
<style lang="less" scopet>
.el-breadcrumb {
  font-size: 20px;
}
.el-card {
  margin-top: 20px;
}
</style>
