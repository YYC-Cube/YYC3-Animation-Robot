import * as React from "react"

type ToastActionElement = React.ReactElement<Record<string, unknown>>

type ToastProps = {
  id?: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  open?: boolean
  onOpenChange?: (open: boolean) => void
  variant?: "default" | "destructive"
}

export type { ToastActionElement, ToastProps }
