import { Web3Provider } from "@/providers/Web3Provider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/home/HeroSection"
import { CampaignGrid } from "@/components/home/CampaignGrid"
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <Web3Provider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <CampaignGrid />
        </main>
        <Footer />
        <Toaster />
      </div>
    </Web3Provider>
  )
}

export default App