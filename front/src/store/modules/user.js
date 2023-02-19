/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-02-19 19:17:14
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-19 19:19:35
 * @FilePath: \front\src\store\modules\user.js
 */


const useUserStore = defineStore("user", {
  state: () => ({
    token:'',
	name:""
  }),

  actions: {
    // 登录
    login(userInfo) {},

    // 获取用户信息
    getInfo() {},

    // 退出系统
    logOut() {},
  },
});

export default useUserStore;

