import { useAccount, useBalance } from 'wagmi'
import { formatEther } from 'viem'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, CheckCircle, AlertCircle } from "lucide-react"

export function WalletStatus() {
  const { address, isConnected, chain } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })

  if (!isConnected) {
    return (
      <Card className="border-dashed">
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center space-y-2">
            <Wallet className="h-8 w-8 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">请连接钱包以开始捐赠</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">钱包已连接</span>
          </div>
          <Badge variant="secondary">
            {chain?.name || '未知网络'}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">地址:</span>
            <span className="font-mono">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
          </div>
          
          {balance && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">余额:</span>
              <span className="font-medium">
                {parseFloat(formatEther(balance.value)).toFixed(4)} {balance.symbol}
              </span>
            </div>
          )}
        </div>

        {chain && chain.id !== 1 && (
          <div className="flex items-center space-x-2 text-sm text-yellow-600">
            <AlertCircle className="h-4 w-4" />
            <span>您当前连接的不是主网</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}