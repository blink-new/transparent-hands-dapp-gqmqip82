import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Globe, Zap } from "lucide-react"
import { WalletStatus } from "@/components/wallet/WalletStatus"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                🚀 基于区块链的透明捐赠平台
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                让每一份
                <span className="text-primary"> 善意</span>
                <br />
                都被看见
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                通过区块链技术确保捐赠透明度，让每一笔资金流向都可追溯，
                重建捐赠者与受益人之间的信任桥梁。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                开始捐赠
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                创建募捐项目
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">完全透明</h3>
                  <p className="text-sm text-muted-foreground">链上记录</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">全球可达</h3>
                  <p className="text-sm text-muted-foreground">无边界捐赠</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                  <Zap className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">即时到账</h3>
                  <p className="text-sm text-muted-foreground">快速转账</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Wallet */}
          <div className="space-y-8">
            {/* Wallet Status */}
            <WalletStatus />

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1,234</div>
                <div className="text-sm text-muted-foreground">总捐赠项目</div>
              </div>
              <div className="bg-card border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">5,678</div>
                <div className="text-sm text-muted-foreground">活跃捐赠者</div>
              </div>
              <div className="bg-card border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">892</div>
                <div className="text-sm text-muted-foreground">ETH 总捐赠额</div>
              </div>
              <div className="bg-card border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">资金透明度</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold mb-4">最近捐赠活动</h3>
              <div className="space-y-3">
                {[
                  { donor: "0x1234...5678", amount: "0.5 ETH", project: "山区教育" },
                  { donor: "0x8765...4321", amount: "1.2 ETH", project: "动物救助" },
                  { donor: "0x9876...1234", amount: "0.8 ETH", project: "灾区重建" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-mono text-muted-foreground">{activity.donor}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{activity.amount}</div>
                      <div className="text-muted-foreground">{activity.project}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}