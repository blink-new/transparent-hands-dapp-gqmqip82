import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

const notificationVariants = cva(
  "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] flex items-center gap-3 rounded-lg border px-6 py-4 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-md w-full mx-4",
  {
    variants: {
      variant: {
        success: "bg-green-50/95 border-green-200 text-green-800 dark:bg-green-900/95 dark:border-green-700 dark:text-green-100",
        error: "bg-red-50/95 border-red-200 text-red-800 dark:bg-red-900/95 dark:border-red-700 dark:text-red-100",
        warning: "bg-yellow-50/95 border-yellow-200 text-yellow-800 dark:bg-yellow-900/95 dark:border-yellow-700 dark:text-yellow-100",
        info: "bg-blue-50/95 border-blue-200 text-blue-800 dark:bg-blue-900/95 dark:border-blue-700 dark:text-blue-100",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

const iconVariants = cva("h-5 w-5 flex-shrink-0", {
  variants: {
    variant: {
      success: "text-green-600 dark:text-green-400",
      error: "text-red-600 dark:text-red-400",
      warning: "text-yellow-600 dark:text-yellow-400",
      info: "text-blue-600 dark:text-blue-400",
    },
  },
})

interface NotificationProps extends VariantProps<typeof notificationVariants> {
  title?: string
  message: string
  onClose?: () => void
  autoClose?: boolean
  duration?: number
  className?: string
}

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
}

export function Notification({
  variant = "info",
  title,
  message,
  onClose,
  autoClose = true,
  duration = 4000,
  className,
}: NotificationProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const Icon = iconMap[variant || "info"]

  React.useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => {
          onClose?.()
        }, 300) // Wait for animation to complete
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [autoClose, duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose?.()
    }, 300)
  }

  if (!isVisible) {
    return (
      <div
        className={cn(
          notificationVariants({ variant }),
          "opacity-0 scale-95 pointer-events-none",
          className
        )}
      >
        <Icon className={iconVariants({ variant })} />
        <div className="flex-1 min-w-0">
          {title && (
            <div className="font-medium text-sm mb-1">{title}</div>
          )}
          <div className="text-sm">{message}</div>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <div
      className={cn(
        notificationVariants({ variant }),
        "animate-in fade-in-0 zoom-in-95 slide-in-from-top-4",
        className
      )}
    >
      <Icon className={iconVariants({ variant })} />
      <div className="flex-1 min-w-0">
        {title && (
          <div className="font-medium text-sm mb-1">{title}</div>
        )}
        <div className="text-sm">{message}</div>
      </div>
      <button
        onClick={handleClose}
        className="flex-shrink-0 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}