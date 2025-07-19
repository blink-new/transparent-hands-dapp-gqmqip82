import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react"

export function EnhancedToaster() {
  const { toasts } = useToast()

  const getIcon = (className: string) => {
    if (className?.includes("green")) {
      return <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
    }
    if (className?.includes("red") || className?.includes("destructive")) {
      return <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
    }
    if (className?.includes("yellow")) {
      return <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
    }
    if (className?.includes("blue")) {
      return <Info className="h-5 w-5 text-blue-600 flex-shrink-0" />
    }
    return null
  }

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, className, ...props }) {
        const icon = getIcon(className || "")
        
        return (
          <Toast key={id} className={className} {...props}>
            <div className="flex items-start gap-3 w-full">
              {icon}
              <div className="grid gap-1 flex-1 min-w-0">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}