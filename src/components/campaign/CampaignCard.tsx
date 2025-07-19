import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, Users, Clock, ExternalLink } from "lucide-react"
import { DonationModal } from "@/components/donation/DonationModal"

interface CampaignCardProps {
  id: string
  title: string
  description: string
  image: string
  goal: number
  raised: number
  donors: number
  daysLeft: number
  category: string
  creator: string
}

export function CampaignCard({
  id,
  title,
  description,
  image,
  goal,
  raised,
  donors,
  daysLeft,
  category,
  creator
}: CampaignCardProps) {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false)
  const progressPercentage = (raised / goal) * 100

  const campaign = {
    id,
    title,
    description,
    image,
    goal,
    raised,
    donors,
    daysLeft,
    category,
    creator
  }

  return (
    <>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur">
              {category}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <div className="flex items-center space-x-1 rounded-full bg-background/90 backdrop-blur px-2 py-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs font-medium">{daysLeft}天</span>
            </div>
          </div>
        </div>

        <CardHeader className="pb-3">
          <h3 className="font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">已筹集</span>
              <span className="text-muted-foreground">
                {progressPercentage.toFixed(1)}%
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-primary">
                {raised.toLocaleString()} ETH
              </span>
              <span className="text-muted-foreground">
                目标 {goal.toLocaleString()} ETH
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{donors} 位捐赠者</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>创建者:</span>
              <span className="font-medium">{creator}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="flex w-full space-x-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Heart className="mr-1 h-4 w-4" />
              关注
            </Button>
            <Button 
              size="sm" 
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={() => setIsDonationModalOpen(true)}
            >
              立即捐赠
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>

      <DonationModal
        campaign={campaign}
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </>
  )
}