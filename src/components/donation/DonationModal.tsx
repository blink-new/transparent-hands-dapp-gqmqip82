import { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther, formatEther } from 'viem'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Heart, Loader2, ExternalLink, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Campaign {
  id: string
  title: string
  description: string
  goal: number
  raised: number
  donors: number
  daysLeft: number
  image: string
  category: string
  creator: string
}

interface DonationModalProps {
  campaign: Campaign | null
  isOpen: boolean
  onClose: () => void
}

export function DonationModal({ campaign, isOpen, onClose }: DonationModalProps) {
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { address, isConnected } = useAccount()
  const { toast } = useToast()

  // 模拟的智能合约写入（实际项目中需要真实的合约地址和 ABI）
  const { writeContract, data: hash, error } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  })

  if (!campaign) return null

  const progress = (campaign.raised / campaign.goal) * 100

  const handleDonate = async () => {
    if (!isConnected) {
      toast({
        title: "请先连接钱包",
        description: "您需要连接钱包才能进行捐赠",
        variant: "destructive",
      })
      return
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "请输入有效金额",
        description: "捐赠金额必须大于 0",
        variant: "destructive",
      })
      return
    }

    try {
      setIsLoading(true)
      
      // 这里应该调用真实的智能合约
      // 目前使用模拟的延迟来演示流程
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "捐赠成功！",
        description: `您已成功捐赠 ${amount} ETH`,
      })
      
      setAmount('')
      onClose()
    } catch (err) {
      console.error('Donation failed:', err)
      toast({
        title: "捐赠失败",
        description: "交易失败，请重试",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const quickAmounts = ['0.01', '0.05', '0.1', '0.5', '1.0']

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            为项目捐赠
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* 项目信息 */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg leading-tight">{campaign.title}</h3>
                <Badge variant="secondary" className="mt-1">
                  {campaign.category}
                </Badge>
              </div>
            </div>

            {/* 进度信息 */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">筹款进度</span>
                <span className="font-medium">{progress.toFixed(1)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>已筹集: <span className="font-semibold">{campaign.raised} ETH</span></span>
                <span>目标: <span className="font-semibold">{campaign.goal} ETH</span></span>
              </div>
            </div>
          </div>

          <Separator />

          {/* 捐赠表单 */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">捐赠金额 (ETH)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                step="0.01"
                min="0"
              />
            </div>

            {/* 快速金额选择 */}
            <div className="space-y-2">
              <Label>快速选择</Label>
              <div className="flex gap-2 flex-wrap">
                {quickAmounts.map((quickAmount) => (
                  <Button
                    key={quickAmount}
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount(quickAmount)}
                    className="text-xs"
                  >
                    {quickAmount} ETH
                  </Button>
                ))}
              </div>
            </div>

            {/* 钱包状态 */}
            {isConnected ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>钱包已连接: {address?.slice(0, 6)}...{address?.slice(-4)}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <span>请先连接钱包</span>
              </div>
            )}

            {/* 预估费用 */}
            {amount && parseFloat(amount) > 0 && (
              <div className="bg-muted/50 rounded-lg p-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>捐赠金额:</span>
                  <span className="font-medium">{amount} ETH</span>
                </div>
                <div className="flex justify-between">
                  <span>预估 Gas 费:</span>
                  <span className="font-medium">~0.002 ETH</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>总计:</span>
                  <span>{(parseFloat(amount) + 0.002).toFixed(3)} ETH</span>
                </div>
              </div>
            )}
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              取消
            </Button>
            <Button 
              onClick={handleDonate} 
              disabled={!amount || parseFloat(amount) <= 0 || isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  处理中...
                </>
              ) : (
                <>
                  <Heart className="mr-2 h-4 w-4" />
                  确认捐赠
                </>
              )}
            </Button>
          </div>

          {/* 交易状态 */}
          {hash && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm">
                {isConfirming ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                    <span>交易确认中...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>交易成功！</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <span>交易已提交</span>
                  </>
                )}
                <Button variant="link" size="sm" className="ml-auto p-0 h-auto">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  查看交易
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}