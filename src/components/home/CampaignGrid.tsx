import { CampaignCard } from "@/components/campaign/CampaignCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, TrendingUp, Clock, Heart } from "lucide-react"

// Mock data for campaigns
const mockCampaigns = [
  {
    id: "1",
    title: "为山区儿童建设图书馆",
    description: "帮助偏远山区的孩子们获得更好的教育资源，建设一座现代化的图书馆。",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    goal: 50,
    raised: 32.5,
    donors: 156,
    daysLeft: 15,
    category: "教育",
    creator: "山区教育基金会"
  },
  {
    id: "2", 
    title: "救助流浪动物收容所",
    description: "为当地流浪动物收容所提供医疗设备和日常运营资金，让更多小动物得到救助。",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
    goal: 25,
    raised: 18.7,
    donors: 89,
    daysLeft: 8,
    category: "动物保护",
    creator: "爱心动物救助站"
  },
  {
    id: "3",
    title: "灾区重建家园计划",
    description: "帮助受灾地区的家庭重建家园，提供建筑材料和生活必需品。",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    goal: 100,
    raised: 67.3,
    donors: 234,
    daysLeft: 22,
    category: "灾难救助",
    creator: "红十字会"
  },
  {
    id: "4",
    title: "老人院医疗设备更新",
    description: "为养老院购买新的医疗设备，改善老年人的医疗护理条件。",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    goal: 30,
    raised: 12.8,
    donors: 67,
    daysLeft: 30,
    category: "医疗健康",
    creator: "夕阳红养老院"
  },
  {
    id: "5",
    title: "环保植树造林项目",
    description: "在荒漠化地区种植树木，改善生态环境，为地球贡献一份绿色力量。",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    goal: 75,
    raised: 45.2,
    donors: 178,
    daysLeft: 12,
    category: "环境保护",
    creator: "绿色地球组织"
  },
  {
    id: "6",
    title: "贫困学生助学金",
    description: "为家庭困难的优秀学生提供助学金，帮助他们完成学业。",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    goal: 40,
    raised: 28.9,
    donors: 145,
    daysLeft: 18,
    category: "教育",
    creator: "希望工程基金"
  }
]

export function CampaignGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="space-y-2 mb-6 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold">发现募捐项目</h2>
            <p className="text-muted-foreground">
              浏览正在进行的募捐项目，选择您关心的事业进行捐赠
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              筛选
            </Button>
            <Button variant="outline" size="sm">
              排序
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="trending" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="trending" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">热门</span>
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">最新</span>
            </TabsTrigger>
            <TabsTrigger value="ending" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">即将结束</span>
            </TabsTrigger>
            <TabsTrigger value="featured" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">精选</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCampaigns.map((campaign) => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCampaigns.slice(0, 3).map((campaign) => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ending" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCampaigns.filter(c => c.daysLeft <= 15).map((campaign) => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCampaigns.slice(2, 5).map((campaign) => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            加载更多项目
          </Button>
        </div>

        {/* Categories */}
        <div className="mt-16 pt-16 border-t">
          <h3 className="text-xl font-semibold mb-6">热门分类</h3>
          <div className="flex flex-wrap gap-3">
            {["教育", "医疗健康", "动物保护", "环境保护", "灾难救助", "扶贫济困", "科技创新", "文化艺术"].map((category) => (
              <Badge key={category} variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}