/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-05-20 13:58:12
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-05-20 13:59:34
 * @FilePath: \selling-stocks-admin\front\src\router\constant.ts
 */

export const LOGIN_NAME = "Login";

export const REDIRECT_NAME = "Redirect";

export const PARENT_LAYOUT_NAME = "ParentLayout";

export const PAGE_NOT_FOUND_NAME = "PageNotFound";

// 路由白名单
export const whiteNameList = [
	LOGIN_NAME,
	"icons",
	"error",
	"error-404",
] as const; // no redirect whitelist

export type WhiteNameList = typeof whiteNameList;

export type WhiteName = (typeof whiteNameList)[number];
