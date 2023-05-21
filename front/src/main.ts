/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-05-14 14:33:56
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-05-21 16:45:01
 * @FilePath: \selling-stocks-admin\front\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import {setupAssets} from "./plugins/assets";

const app = createApp(App);

function setupPlugins() {
	// 引入静态资源
	setupAssets();
}

async function setupApp() {
	// 挂载路由
	await setupRouter(app);
	console.log(app);
	
	app.mount("#app");
}

setupPlugins();

setupApp();