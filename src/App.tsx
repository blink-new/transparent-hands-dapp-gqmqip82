import { useEffect } from "react"
import { Web3Provider } from "@/providers/Web3Provider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/home/HeroSection"
import { CampaignGrid } from "@/components/home/CampaignGrid"
import { EnhancedToaster } from "@/components/ui/enhanced-toaster"
import { blink } from "@/blink/client"

function App() {
  useEffect(() => {
    // Initialize Blink SDK to prevent DataCloneError
    const initializeBlink = async () => {
      try {
        // Simple initialization to establish connection
        await blink.auth.isAuthenticated()
      } catch (error) {
        // Silently handle initialization errors
        console.debug('Blink SDK initialization:', error)
      }
    }
    
    initializeBlink()
  }, [])

  return (
    <Web3Provider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <CampaignGrid />
        </main>
        <Footer />
        <EnhancedToaster />
      </div>
    </Web3Provider>
  )
}

export default App