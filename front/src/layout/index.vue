<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-02-19 13:27:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-26 14:30:48
 * @FilePath: \front\src\layout\index.vue
-->
<template>
  <div class="app-wrapper" :class="classObj" :style="{ '--current-color': theme }">
  <div  v-if="device === 'mobile' && sidebar.opened"  class="drawer-bg"/>
    <sidebar v-if="!sidebar.hide" class="sidebar-container" />
    <div :class="{ hasTagsView: needTagsView, sidebarHide: sidebar.hide }" class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
      
      </div>
      <app-main />
    </div>>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar/index.vue'
import { AppMain } from './components'
import { useWindowSize } from '@vueuse/core'
import useSettingsStore from '@/store/modules/settings'
import useAppStore from '@/store/modules/app'


const settingsStore = useSettingsStore()
const fixedHeader = computed(() => settingsStore.fixedHeader);
const theme = computed(() => settingsStore.theme);
const sideTheme = computed(() => settingsStore.sideTheme);
const sidebar = computed(() => useAppStore().sidebar);
const device = computed(() => useAppStore().device);
const { width, height } = useWindowSize();
const WIDTH = 992; // refer to Bootstrap's responsive design

watchEffect(() => {
  if (device.value === 'mobile' && sidebar.value.opened) {
    useAppStore().closeSideBar({ withoutAnimation: false })
  }
  if (width.value - 1 < WIDTH) {
    useAppStore().toggleDevice('mobile')
    useAppStore().closeSideBar({ withoutAnimation: true })
  } else {
    useAppStore().toggleDevice('desktop')
  }
})

const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation,
  mobile: device.value === 'mobile'
}))

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
