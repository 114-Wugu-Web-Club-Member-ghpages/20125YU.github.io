import { useState } from "react";
import Navigation from "@/components/Navigation";
import ArtworkCard from "@/components/ArtworkCard";
import ArtworkModal from "@/components/ArtworkModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import artwork1 from "@assets/generated_images/Watercolor_garden_painting_55b5352f.png";
import artwork2 from "@assets/generated_images/Abstract_warm_tones_painting_3ddd9525.png";
import artwork3 from "@assets/generated_images/Still_life_with_vases_36dc5944.png";
import artwork4 from "@assets/generated_images/Sunset_ocean_painting_a897a4e1.png";
import artwork5 from "@assets/generated_images/Ink_wash_mountain_landscape_6401f2f2.png";

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);
  const [category, setCategory] = useState("all");

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
    {
      id: "5",
      title: "山嵐意境",
      imageUrl: artwork5,
      date: "2024年7月",
      category: "水墨",
      description: "傳統水墨畫風格，描繪雲霧繚繞的山景，意境深遠。",
    },
  ];

  const filteredArtworks =
    category === "all"
      ? mockArtworks
      : mockArtworks.filter((a) => a.category === category);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">作品集</h1>
          <p className="text-muted-foreground text-lg">我的創作旅程與藝術探索</p>
        </div>

        <Tabs value={category} onValueChange={setCategory} className="mb-8">
          <TabsList>
            <TabsTrigger value="all" data-testid="tab-all">全部</TabsTrigger>
            <TabsTrigger value="水彩" data-testid="tab-watercolor">水彩</TabsTrigger>
            <TabsTrigger value="油畫" data-testid="tab-oil">油畫</TabsTrigger>
            <TabsTrigger value="壓克力" data-testid="tab-acrylic">壓克力</TabsTrigger>
            <TabsTrigger value="水墨" data-testid="tab-ink">水墨</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              {...artwork}
              onClick={() => setSelectedArtwork(artwork)}
            />
          ))}
        </div>
      </main>

      <ArtworkModal
        artwork={selectedArtwork}
        open={!!selectedArtwork}
        onOpenChange={(open) => !open && setSelectedArtwork(null)}
      />
    </div>
  );
}
