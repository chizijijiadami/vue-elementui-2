<template>
  <div class="app-crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right" :style="{'line-height':crumbs.height,padding:'0 '+content.padding}">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props:{
    crumbs:Object,
    content:Object,
  }
};
</script>

<style>
</style>