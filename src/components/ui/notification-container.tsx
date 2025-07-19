import { Notification } from "./notification"
import { useNotification } from "@/hooks/use-notification"

export function NotificationContainer() {
  const { notifications, removeNotification } = useNotification()

  return (
    <>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          variant={notification.variant}
          title={notification.title}
          message={notification.message}
          autoClose={notification.autoClose}
          duration={notification.duration}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </>
  )
}