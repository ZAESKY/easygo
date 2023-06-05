<template>
  <el-container class="homeContainer">
    <el-header class="homeHeader">
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container">
  <a class="navbar-brand" href="#"><el-image
      style="width: 30px; height: 30px"
      :src="require('@/assets/logo.png')">
    </el-image></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="navbar-nav mr-auto">
      <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/users">用户</el-menu-item>
        <el-menu-item index="/my">我的</el-menu-item>
      </el-menu>
    </div>
    <div>
    </div>
        <el-avatar size="small" class="mr-2"></el-avatar>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    </nav>
    </el-header>
      <router-view />
  </el-container>
</template>
<script>
export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">
  .el-header{
    height: unset !important;
    border-bottom: solid 1px #e6e6e6;
    .el-menu.el-menu--horizontal{
      border-bottom: none;
    }
    .navbar{
      padding: 0;
    }
  }
</style>