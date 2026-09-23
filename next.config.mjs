/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@yyc3/ui'],
  // Next 16 Cache Components：显式缓存模型（PPR + use cache）
  // 纯静态首页默认全预渲染，动态片段可渐进启用 'use cache'。
  cacheComponents: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
