/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-15 10:08:57
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-03-15 17:48:21
 * @Description: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/life-record",
  images:{
    unoptimized: true,
  },
  distDir: 'out',
};

// module.exports = nextConfig;
export default nextConfig;
