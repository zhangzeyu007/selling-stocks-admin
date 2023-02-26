/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-02-19 19:25:50
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-26 14:02:28
 * @FilePath: \front\src\store\modules\app.js
 */
import Cookies from "js-cookie";

const useAppStore = defineStore("app", {
  state: () => ({
    sidebar: {
      opened: true,
      withoutAnimation: false,
      hide: false,
    },
    device: "desktop",
    size: "default",
  }),
  
  actions: {
    toggleSideBar(withoutAnimation) {
      if (this.sidebar.hide) {
        return false;
      }
      this.sidebar.opened = !this.sidebar.opened;
      this.sidebar.withoutAnimation = withoutAnimation;
      if (this.sidebar.opened) {
        Cookies.set("sidebarStatus", 1);
      } else {
        Cookies.set("sidebarStatus", 0);
      }
    },
    closeSideBar({ withoutAnimation }) {
      Cookies.set("sidebarStatus", 0);
      this.sidebar.opened = false;
      this.sidebar.withoutAnimation = withoutAnimation;
    },
    toggleDevice(device) {
      this.device = device;
    },
    setSize(size) {
      this.size = size;
      Cookies.set("size", size);
    },
    toggleSideBarHide(status) {
      this.sidebar.hide = status;
    },
  },
});


export default useAppStore;
