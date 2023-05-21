/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2023-05-02 16:18:50
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-05-21 15:48:52
 * @FilePath: \selling-stocks-admin\front\src\router\staticModules\dashboard.ts
 */
import type { RouteRecordRaw } from "vue-router";
import RouterView from "@/layout/routerView/index.vue";


const moduleName = "dashboard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: moduleName,
    redirect: "/dashboard/welcome",
    component: RouterView,
    meta: {
      title: '',
      icon: "icon-yibiaopan",
    },
    children: [
      {
        path: "welcome",
        name: `${moduleName}-welcome`,
        meta: {
          title: '',
          icon: "icon-shouye",
        },
        component: () =>
          import(
            /* webpackChunkName: "dashboard-welcome" */ "@/views/dashboard/welcome/index.vue"
          ),
      },
    ],
  },
];

export default routes;
