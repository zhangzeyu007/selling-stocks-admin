<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-05-02 15:59:37
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-05-14 15:07:08
 * @FilePath: \front\src\App.vue
-->
<template>
  <ConfigProvider>
    <router-view #="{ Component }">
      <component :is="Component" />
    </router-view>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { ConfigProvider } from "ant-design-vue";

const route = useRoute();

watchEffect(() => {
  if (route.meta?.title) {
    // 翻译网页标题
    document.title =  'zeyu'
  }
});

</script>

