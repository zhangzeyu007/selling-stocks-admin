/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-05-21 16:11:33
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-05-21 16:12:09
 * @FilePath: \selling-stocks-admin\unocss.config.ts
 */
import {
  transformerVariantGroup,
  transformerDirectives,
  presetAttributify,
  defineConfig,
  presetMini,
  presetUno,
} from "unocss";

// https://github.com/unocss/unocss#readme
export default defineConfig({
  presets: [presetMini({ dark: "class" }), presetAttributify(), presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  include: [`${__dirname}/**/*`],
  exclude: [`${__dirname}/node_modules/**/*`],
  shortcuts: {
    "wh-full": "w-full h-full",
    "flex-ac": "flex justify-around items-center",
    "flex-bc": "flex justify-between items-center",
  },
  theme: {},
});
