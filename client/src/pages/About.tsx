import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

import artistPhoto from "@assets/generated_images/Artist_portrait_in_studio_c525f3d6.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">關於我</h1>
          <p className="text-muted-foreground text-lg">畫家 · 創作者 · 生活記錄者</p>
        </div>

        <div className="grid md:grid-cols-[300px,1fr] gap-8 mb-12">
          <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
            <img
              src={artistPhoto}
              alt="Artist portrait"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                我是一位熱愛創作的畫家，專注於水彩、油畫和水墨等多種媒材的探索。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                創作對我來說不僅是技法的展現，更是心靈的對話。我喜歡在畫布上記錄生活的美好瞬間，
                用色彩和線條表達內心的感受。這個網站是我的創作日記，記錄著每一天的靈感與心情。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                我相信藝術源於生活，每一次創作都是對世界的重新認識。希望通過我的作品，
                能與你分享這份對美的追求與感動。
              </p>
            </div>
          </div>
        </div>

        <Card className="p-8">
          <h2 className="font-serif text-2xl font-medium mb-6">聯絡方式</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <a
                href="mailto:artist@example.com"
                className="text-primary hover:underline"
                data-testid="link-email"
              >
                artist@example.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-muted-foreground" />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                data-testid="link-instagram"
              >
                @artist_studio
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="font-serif text-lg font-medium mb-4">合作洽詢</h3>
            <p className="text-muted-foreground mb-4">
              歡迎各種形式的合作與交流，包括展覽、教學、委託創作等。
            </p>
            <Button data-testid="button-contact">聯絡我</Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
