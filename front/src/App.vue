<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-05-02 15:59:37
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-05-21 15:47:06
 * @FilePath: \selling-stocks-admin\front\src\App.vue
-->
<template>
  <ConfigProvider>
   <router-view></router-view>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { watchEffect , onMounted ,inject } from "vue";
import { useRoute } from "vue-router";
import { ConfigProvider } from "ant-design-vue";

const router = inject('$router');
const route = useRoute();


watchEffect(() => {
  if (route.meta?.title) {
    // 翻译网页标题
    document.title =  'zeyu'
  }
});

 

onMounted(() => {
  console.log(router);
  if (router) {
      // Vue Router 已挂载到当前组件的 Vue 实例上
      console.log('Vue Router 已挂载');
    } else {
      console.log('Vue Router 未挂载');
    }  
})

</script>

