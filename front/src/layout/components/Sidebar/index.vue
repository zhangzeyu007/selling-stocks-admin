<template>
  <div >
    <el-scrollbar  wrap-class="scrollbar-wrapper">
      <el-menu
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
      >
      <!-- <sidebar-item 
          v-for="(route, index) in sidebarRouters"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
      /> -->
    </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
import variables from '@/assets/styles/variables.module.scss'
// import useSettingsStore from '@/store/modules/settings'
import usePermissionStore from '@/store/modules/permission'


// const settingsStore = useSettingsStore()
const permissionStore = usePermissionStore()
const route = useRoute();
const appStore = useAppStore()
// console.log(settingsStore);
console.log(permissionStore);

</script>
