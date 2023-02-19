<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-02-19 13:27:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-19 19:15:45
 * @FilePath: \front\src\layout\index.vue
-->
<template>
  <div class="app-wrapper" :style="{ '--current-color': theme }"></div>
</template>

<script setup>







</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixin.scss";
@import "@/assets/styles/variables.module.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$base-sidebar-width});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.sidebarHide .fixed-header {
  width: 100%;
}

.mobile .fixed-header {
  width: 100%;
}
</style>
