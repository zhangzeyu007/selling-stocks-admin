/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-05-14 14:42:51
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-05-14 14:53:52
 * @FilePath: \front\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import type { App } from "vue";

export const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Layout",
		redirect: "/dashboard/welcome",
		component: () =>
			import(/* webpackChunkName: "layout" */ "@/layout/index.vue"),
		meta: {
			title: "首页",
		},
		children: [],
	},
];


export const router = createRouter({
	// process.env.BASE_URL
	history: createWebHashHistory(""),
	routes,
});



export async function setupRouter(app: App) {

	app.use(router);

	// 路由准备就绪后挂载APP实例
	await router.isReady();
}


export default router;