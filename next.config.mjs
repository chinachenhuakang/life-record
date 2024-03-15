/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-15 10:08:57
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-03-15 14:02:46
 * @Description: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
