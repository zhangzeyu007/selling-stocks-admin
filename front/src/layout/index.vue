<template>
    <Layout class="layout">
      <Layout.Sider
      collapsible    
      class="layout-sider">
  
    </Layout.Sider>
    <Layout.Content>
       dd33
    </Layout.Content>
    </Layout>
</template>

<script lang="ts" setup>
import { Layout } from "ant-design-vue";

</script>

<style lang="less" scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  .ant-layout {
    overflow: hidden;
  }
  .layout-content {
    flex: none;
  }
}
</style>
