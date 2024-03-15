/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-15 10:08:57
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-03-15 10:46:45
 * @Description: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // images: {
  //   loader: 'custom',
  //   loaderFile: './page.js',
  // },
};

export default nextConfig;
