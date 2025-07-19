import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia, arbitrum, base, optimism } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Transparent Hands - 透明之手',
  projectId: 'YOUR_PROJECT_ID', // 从 WalletConnect Cloud 获取
  chains: [mainnet, sepolia, arbitrum, base, optimism],
  ssr: false, // 如果您的 dApp 使用服务器端渲染 (SSR)
})