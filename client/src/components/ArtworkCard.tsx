import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArtworkCardProps {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
  category?: string;
  onClick?: () => void;
}

export default function ArtworkCard({
  title,
  imageUrl,
  date,
  category,
  onClick,
}: ArtworkCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all group"
      onClick={onClick}
      data-testid={`card-artwork-${title}`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg font-medium line-clamp-2" data-testid={`text-artwork-title-${title}`}>
            {title}
          </h3>
          {category && (
            <Badge variant="secondary" className="shrink-0 text-xs">
              {category}
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground" data-testid="text-artwork-date">
          {date}
        </p>
      </div>
    </Card>
  );
}
