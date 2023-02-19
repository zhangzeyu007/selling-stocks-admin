/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2023-02-12 17:24:12
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-19 18:10:32
 * @FilePath: \front\src\main.js
 */

import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import store from "./store";
import router from "./router";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(store);

app.mount("#app");
