<template>
  <div class="topbar">
    <el-menu  :default-active="activeIndex2"  class="el-menu-demo fl"  mode="horizontal"  @select="handleSelect"  background-color="#545c64"  text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a style="text-decoration: none" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <div class="ri">
      <el-avatar class="avator" :size="40" :src="circleUrl"></el-avatar>
      <span>我太喜欢猪</span>
    </div>
  </div>
</template>

<script>
    import Bus from './bus.js'//定义一个公共的js文件，写一个1.引入import vue from vue 2.导出vue实例export defalut new Vue()
    export default {
        name: "topNav",
        data(){
          return{
            activeIndex: '1',
            activeIndex2: '1',
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            sizeList: ["large", "medium", "small"]
          }
        },
        methods: {
          handleSelect(key, keyPath) {
            Bus.$emit('getdatas','非父组件传值')
          }
        }
    }
</script>

<style scoped>
  .topbar{
    position: absolute;
    top: 0;
    height: 60px;
    width: 100%;
    line-height: 60px;
    background-color:  rgb(84, 92, 100);
}
  .ri{
    float: right;
    margin-right: 100px;
    height: 100%;
  }
  .fl{
    float: left;
  }
  .ri span{
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    margin-left: 10px;
    font-size: 14px;
  }
</style>
