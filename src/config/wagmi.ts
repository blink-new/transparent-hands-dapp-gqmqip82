import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia, arbitrum, base, optimism } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Transparent Hands - 透明之手',
  projectId: '2f5a6c8b9d3e1a4f7c0b8e5d2a9f6c3b', // 临时项目ID，生产环境需要真实ID
  chains: [mainnet, sepolia, arbitrum, base, optimism],
  ssr: false, // 如果您的 dApp 使用服务器端渲染 (SSR)
})