/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2023-02-19 13:37:39
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-19 19:11:15
 * @FilePath: \front\src\router\index.js
 */

import { createWebHistory, createRouter } from "vue-router";
import Layout from "@/layout";
// 公共路由
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
