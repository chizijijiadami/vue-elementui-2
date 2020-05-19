<template>
  <div class="app-menu">
    <el-menu
      :collapse="isCollapse"
      :collapse-transition="false"
      router
      default-active="/index/index"
      class="el-menu-vertical-demo"
      :mode="menuLocation==='H'?'horizontal':'vertical'"
    >
      <el-menu-item index="/index/index">
        <i class="el-icon-location"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="list">
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span>列表</span>
        </template>
        <el-menu-item index="/list/detail">
          <i class="el-icon-goods"></i>
          <span>详情</span>
        </el-menu-item>
        <el-menu-item index="/list/feature">
          <i class="el-icon-document"></i>
          <span>特性</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    isCollapse() {
      return this.$store.state.menu.isCollapse;
    },
    menuLocation() {
      return this.$store.state.menu.location;
    }
  }
};
</script>

<style lang="stylus" scope></style>