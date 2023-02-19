/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2023-02-19 14:39:55
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-19 14:55:52
 * @FilePath: \front\vite\plugins\index.js
 */
import vue from "@vitejs/plugin-vue";

import createAutoImport from "./auto-import";
import createCompression from "./compression";
import createSetupExtend from "./setup-extend";

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue()];
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createSetupExtend());
  isBuild && vitePlugins.push(...createCompression(viteEnv));
  return vitePlugins;
}
