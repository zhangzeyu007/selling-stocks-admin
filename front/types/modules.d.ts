/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-05-14 15:50:15
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-05-14 15:50:15
 * @FilePath: \front\types\modules.d.ts
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module 'mitt' {
  import mitt from 'mitt';
  export default mitt;
}

declare module 'ant-design-vue/es/locale/*' {
  import { Locale } from 'ant-design-vue/types/locale-provider';
  const locale: Locale & ReadonlyRecordable;
  export default locale as Locale & ReadonlyRecordable;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}
