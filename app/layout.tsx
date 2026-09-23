import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { EB_Garamond, Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'YanYuCloudCube™ · YYC³ 动画交互机器人',
  description: '言启千行代码，语枢万物智能 — YanYuCloudCube 基于五维驱动框架的智能动画交互平台',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/yyc3-icons/Web%20App/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/yyc3-icons/Web%20App/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/yyc3-icons/Web%20App/favicon-32.png',
    apple: '/yyc3-icons/Web%20App/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${ebGaramond.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
