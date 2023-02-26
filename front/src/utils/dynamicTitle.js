/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-02-26 12:50:49
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-26 12:51:13
 * @FilePath: \front\src\utils\dynamicTitle.js
 */
import store from '@/store'
import defaultSettings from '@/settings'
import useSettingsStore from '@/store/modules/settings'

/**
 * 动态修改标题
 */
export function useDynamicTitle() {
  const settingsStore = useSettingsStore();
  if (settingsStore.dynamicTitle) {
    document.title = settingsStore.title + ' - ' + defaultSettings.title;
  } else {
    document.title = defaultSettings.title;
  }
}