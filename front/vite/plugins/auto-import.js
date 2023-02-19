/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2023-02-19 14:39:42
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-19 14:39:43
 * @FilePath: \front\src\vite\plugins\auto-import.js
 */
import autoImport from "unplugin-auto-import/vite";

export default function createAutoImport() {
  return autoImport({
    imports: ["vue", "vue-router", "pinia"],
    dts: false,
  });
}
