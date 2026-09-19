"use client"

import { Component, type ReactNode } from "react"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black/5 text-muted-foreground p-8">
          <div className="text-4xl mb-4">⚠️</div>
          <p className="text-lg font-medium">3D 场景加载失败</p>
          <p className="text-sm mt-2 max-w-md text-center">
            Spline 3D 场景未能正确加载，请检查网络连接后刷新页面。
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
          >
            重试
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
