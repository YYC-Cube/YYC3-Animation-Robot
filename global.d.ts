// 全局类型补充声明
// Next.js 仅内置 *.module.css 声明；纯 CSS 副作用导入（如 import './globals.css'）
// 由构建期处理，此处为 IDE 类型服务补充声明，消除 TS2307 误报。
declare module '*.css'
