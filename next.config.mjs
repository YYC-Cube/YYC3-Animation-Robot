/** @type {import('next').NextConfig} */

// 双模式构建：
// - 默认（Node 自托管）: cacheComponents 开启，next start 运行
// - BUILD_MODE=export（GitHub Pages 静态托管）: 产出 out/，
//   cacheComponents (PPR) 与 output:'export' 互斥，导出时禁用
const isStaticExport = process.env.BUILD_MODE === 'export'

const nextConfig = {
  transpilePackages: ['@yyc3/ui'],
  ...(isStaticExport ? { output: 'export' } : {}),
  ...(isStaticExport ? {} : { cacheComponents: true }),
  images: {
    unoptimized: true,
  },
  ...(isStaticExport ? { trailingSlash: true } : {}),
}

export default nextConfig
