<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-02-25 13:11:39
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-25 13:12:36
 * @FilePath: \front\src\layout\components\IframeToggle\index.vue
-->
<template>
  <transition-group name="fade-transform" mode="out-in">
    <inner-link
      v-for="(item, index) in tagsViewStore.iframeViews"
      :key="item.path"
      :iframeId="'iframe' + index"
      v-show="route.path === item.path"
      :src="item.meta.link"
    ></inner-link>
  </transition-group>
</template>



<script setup>
import InnerLink from "../InnerLink/index"
import useTagsViewStore from '@/store/modules/tagsView'

const route = useRoute();
const tagsViewStore = useTagsViewStore()
</script>
