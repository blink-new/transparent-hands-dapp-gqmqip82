import { useToast } from "./use-toast"
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react"

export function useNotification() {
  const { toast } = useToast()

  const success = (message: string, title?: string) => {
    toast({
      title: title || "成功",
      description: message,
      variant: "default",
      className: "border-green-200 bg-green-50 text-green-800",
    })
  }

  const error = (message: string, title?: string) => {
    toast({
      title: title || "错误",
      description: message,
      variant: "destructive",
    })
  }

  const warning = (message: string, title?: string) => {
    toast({
      title: title || "警告",
      description: message,
      variant: "default",
      className: "border-yellow-200 bg-yellow-50 text-yellow-800",
    })
  }

  const info = (message: string, title?: string) => {
    toast({
      title: title || "信息",
      description: message,
      variant: "default",
      className: "border-blue-200 bg-blue-50 text-blue-800",
    })
  }

  return {
    success,
    error,
    warning,
    info,
  }
}