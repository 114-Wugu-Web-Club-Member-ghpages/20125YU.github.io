import Navigation from "@/components/Navigation";
import DiaryCard from "@/components/DiaryCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import diary1 from "@assets/generated_images/Ink_wash_mountain_landscape_6401f2f2.png";

export default function Diary() {
  // todo: remove mock functionality
  const mockDiaries = [
    {
      id: "1",
      title: "山中的寧靜時光",
      excerpt: "今天在工作室創作時，窗外飄來陣陣桂花香。秋天的氣息讓人特別平靜，筆下的線條也變得更加柔和。我喜歡這樣的時刻，讓心靈與畫布對話，感受每一筆帶來的喜悅與寧靜。",
      date: "2024年11月7日",
      mood: "calm" as const,
      imageUrl: diary1,
    },
    {
      id: "2",
      title: "創作的喜悅",
      excerpt: "今天完成了新的系列作品，心中充滿了成就感。每一筆都是情感的流露，每一個色彩都承載著故事。創作讓我感到如此充實，也讓我更加了解自己內心的世界。",
      date: "2024年11月5日",
      mood: "happy" as const,
    },
    {
      id: "3",
      title: "尋找靈感的一天",
      excerpt: "今天到郊外寫生，大自然的美景總能激發我的創作靈感。陽光透過樹葉灑下斑駁的光影，微風輕拂，一切都如此美好。我拍了許多照片，準備回到工作室後開始新的創作。",
      date: "2024年11月3日",
      mood: "inspired" as const,
    },
    {
      id: "4",
      title: "雨天的思緒",
      excerpt: "窗外下著綿綿細雨，今天沒有創作，只是靜靜地坐在窗邊思考。有時候放慢腳步也是一種收穫，讓思緒沉澱，為下一次的創作積蓄能量。",
      date: "2024年11月1日",
      mood: "melancholic" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">創作日記</h1>
            <p className="text-muted-foreground text-lg">記錄每一天的創作與生活</p>
          </div>
          <Button className="gap-2 shrink-0" data-testid="button-new-diary">
            <Plus className="w-4 h-4" />
            寫日記
          </Button>
        </div>

        <div className="space-y-8">
          {mockDiaries.map((diary) => (
            <DiaryCard key={diary.id} {...diary} />
          ))}
        </div>
      </main>
    </div>
  );
}
