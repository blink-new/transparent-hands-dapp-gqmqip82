import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">透</span>
              </div>
              <div>
                <h3 className="font-semibold">Transparent Hands</h3>
                <p className="text-xs text-muted-foreground">透明之手</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              基于区块链技术的透明捐赠平台，让每一份善意都被看见，让每一笔捐赠都可追溯。
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-semibold">平台功能</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">发现项目</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">创建募捐</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">我的捐赠</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">项目管理</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">资金提取</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">帮助支持</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">使用指南</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">常见问题</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">安全说明</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">联系客服</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">意见反馈</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">法律条款</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">服务条款</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">免责声明</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">风险提示</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2024 Transparent Hands. All rights reserved.</span>
            <span>•</span>
            <span>基于以太坊 Layer 2 构建</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>网络状态: </span>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>正常</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}