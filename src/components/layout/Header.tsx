import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Search, Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNotification } from "@/hooks/use-notification"

export function Header() {
  const { success, error, warning, info } = useNotification()

  const testNotifications = () => {
    setTimeout(() => success("捐赠成功！", "感谢您的慷慨"), 500)
    setTimeout(() => warning("请注意", "您的钱包余额不足"), 1500)
    setTimeout(() => error("交易失败", "网络连接超时，请重试"), 2500)
    setTimeout(() => info("新消息", "有新的募捐项目等待您的关注"), 3500)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">透</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold">Transparent Hands</h1>
              <p className="text-xs text-muted-foreground">透明之手</p>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索募捐项目..."
                className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                发现项目
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                创建募捐
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                我的捐赠
              </a>
            </nav>

            {/* Test Notifications Button */}
            <Button 
              variant="outline" 
              size="icon"
              onClick={testNotifications}
              className="hidden sm:flex"
              title="测试通知"
            >
              <Bell className="h-4 w-4" />
            </Button>

            {/* RainbowKit Connect Button */}
            <ConnectButton />

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}