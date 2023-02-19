/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2023-02-12 17:24:12
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-19 13:48:45
 * @FilePath: \front\src\main.ts
 */

import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount("#app");
