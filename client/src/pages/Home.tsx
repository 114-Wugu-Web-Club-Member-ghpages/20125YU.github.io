import { useState } from "react";
import Navigation from "@/components/Navigation";
import ArtworkCard from "@/components/ArtworkCard";
import DiaryCard from "@/components/DiaryCard";
import TodaySection from "@/components/TodaySection";
import ArtworkModal from "@/components/ArtworkModal";

import artwork1 from "@assets/generated_images/Watercolor_garden_painting_55b5352f.png";
import artwork2 from "@assets/generated_images/Abstract_warm_tones_painting_3ddd9525.png";
import artwork3 from "@assets/generated_images/Still_life_with_vases_36dc5944.png";
import artwork4 from "@assets/generated_images/Sunset_ocean_painting_a897a4e1.png";
import diary1 from "@assets/generated_images/Ink_wash_mountain_landscape_6401f2f2.png";

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);

  // todo: remove mock functionality
  const mockArtworks = [
    {
      id: "1",
      title: "花園之夢",
      imageUrl: artwork1,
      date: "2024年11月",
      category: "水彩",
      description: "這幅水彩作品捕捉了春天花園的夢幻氛圍，使用柔和的色調營造出寧靜祥和的感覺。",
    },
    {
      id: "2",
      title: "溫暖的抽象",
      imageUrl: artwork2,
      date: "2024年10月",
      category: "油畫",
      description: "靈感來自秋天的溫暖色調，使用大地色系營造出寧靜而溫馨的氛圍。",
    },
    {
      id: "3",
      title: "靜物時光",
      imageUrl: artwork3,
      date: "2024年9月",
      category: "油畫",
      description: "通過簡單的花瓶和乾燥花卉，探索光影與形態的關係。",
    },
    {
      id: "4",
      title: "暮色海洋",
      imageUrl: artwork4,
      date: "2024年8月",
      category: "壓克力",
      description: "夕陽下的海洋，用柔和的粉色和桃色描繪出平靜的景象。",
    },
  ];

  // todo: remove mock functionality
  const mockDiaries = [
    {
      id: "1",
      title: "山中的寧靜時光",
      excerpt: "今天在工作室創作時，窗外飄來陣陣桂花香。秋天的氣息讓人特別平靜，筆下的線條也變得更加柔和。我喜歡這樣的時刻，讓心靈與畫布對話...",
      date: "2024年11月7日",
      mood: "calm" as const,
      imageUrl: diary1,
    },
    {
      id: "2",
      title: "創作的喜悅",
      excerpt: "今天完成了新的系列作品，心中充滿了成就感。每一筆都是情感的流露，每一個色彩都承載著故事。創作讓我感到如此充實。",
      date: "2024年11月5日",
      mood: "happy" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <TodaySection
        latestDiary={mockDiaries[0]}
        latestArtwork={mockArtworks[0]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">最新作品</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mockArtworks.slice(0, 3).map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                {...artwork}
                onClick={() => setSelectedArtwork(artwork)}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">最新日記</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {mockDiaries.map((diary) => (
              <DiaryCard key={diary.id} {...diary} />
            ))}
          </div>
        </section>
      </main>

      <ArtworkModal
        artwork={selectedArtwork}
        open={!!selectedArtwork}
        onOpenChange={(open) => !open && setSelectedArtwork(null)}
      />
    </div>
  );
}
