"use client"

import type React from "react"

import { SplineScene } from "@yyc3/ui/components/splite"
import { Spotlight } from "@yyc3/ui/components/spotlight"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function NewYorkerSpline() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  return (
    <div
      className="h-screen w-full bg-white text-black relative overflow-hidden font-serif"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 flex flex-col">
        {/* Header */}
        <header className="z-30 px-6 py-4 flex justify-between items-center bg-black/90 text-white">
          <div className="text-xs uppercase tracking-[0.3em]">Est. 2025</div>
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold tracking-tight">YanYuCloudCube™</div>
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">YYC³ · Animation Robot</div>
          </div>
          <div className="text-xs uppercase tracking-[0.3em]">言启象限 · 语枢未来</div>
        </header>

        {/* Main content */}
        <div className="grow flex flex-col md:flex-row">
          {/* Left content - Editorial */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-8 md:p-16 relative z-10 overflow-hidden">
            <div
              className="absolute pointer-events-none bg-black rounded-full opacity-[0.07] blur-md transition-transform duration-300 ease-out"
              style={{
                width: "250px",
                height: "250px",
                left: `${mousePosition.x - 125}px`,
                top: `${mousePosition.y - 125}px`,
                transform: `translate(${(mousePosition.x - 125) * 0.02}px, ${(mousePosition.y - 125) * 0.02}px)`,
              }}
            />
            <div className="max-w-xl relative">
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                言启千行代码
              </h1>
              <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight tracking-tight mt-2 opacity-80">
                语枢万物智能
              </h2>

              <div className="my-8 border-t-2 border-b-2 border-black py-4">
                <p className="italic text-lg">
                  Words Initiate Quadrants, Language Serves as Core for Future
                </p>
              </div>

              <p className="text-lg md:text-xl leading-relaxed mb-6">
                万象归元于云枢，深栈智启新纪元。YanYuCloudCube 以五维驱动框架为核心，融合高可用、高性能、高安全、高扩展、高智能架构，构建下一代智能交互平台。
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                从标准化体系到智能化转型，从流程化治理到生态化协作 — YYC³
                不仅是技术栈的革新，更是人机协作范式的重塑。每一行代码，皆承载言启之力；每一次交互，皆驱动未来之枢。
              </p>

              <div className="mt-12 flex items-center">
                <div className="h-px bg-black grow mr-4"></div>
                <span className="text-sm uppercase tracking-widest">探索智能交互</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="w-full md:w-1/2 h-full relative bg-black overflow-hidden">
            <div className="absolute inset-0 grid-background"></div>
            <div className="relative z-10 w-full h-full">
              <Spotlight className="left-1/2 top-1/2" size={300} fill="white" />
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="z-20 px-6 py-4 flex justify-between items-center text-xs uppercase tracking-widest">
          <div>© 2025 YanYuCloudCube™ Team</div>
          <div className="flex items-center gap-3">
            <span>五高架构</span>
            <span className="opacity-40">|</span>
            <span>五标体系</span>
            <span className="opacity-40">|</span>
            <span>五化转型</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
