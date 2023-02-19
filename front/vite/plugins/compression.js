/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-02-19 14:53:42
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-19 14:54:23
 * @FilePath: \front\vite\plugins\compression.js
 */
import compression from 'vite-plugin-compression'

export default function createCompression(env) {
    const { VITE_BUILD_COMPRESS } = env
    const plugin = []
    if (VITE_BUILD_COMPRESS) {
        const compressList = VITE_BUILD_COMPRESS.split(',')
        if (compressList.includes('gzip')) {
            // http://doc.ruoyi.vip/ruoyi-vue/other/faq.html#使用gzip解压缩静态文件
            plugin.push(
                compression({
                    ext: '.gz',
                    deleteOriginFile: false
                })
            )
        }
        if (compressList.includes('brotli')) {
            plugin.push(
                compression({
                    ext: '.br',
                    algorithm: 'brotliCompress',
                    deleteOriginFile: false
                })
            )
        }
    }
    return plugin
}
