/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-05-14 14:33:56
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-05-14 15:44:01
 * @FilePath: \front\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";

const app = createApp(App);

function setupPlugins() {

}

async function setupApp() {
	// 挂载路由
	await setupRouter(app);

	app.mount("#app");
}

setupPlugins();

setupApp();