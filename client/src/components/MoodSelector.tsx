import { Button } from "@/components/ui/button";
import { Heart, CloudRain, Smile, Sparkles } from "lucide-react";

type Mood = "happy" | "calm" | "inspired" | "melancholic";

interface MoodSelectorProps {
  value?: Mood;
  onChange: (mood: Mood) => void;
}

const moods = [
  { value: "happy" as Mood, icon: Smile, label: "開心", color: "text-chart-2" },
  { value: "calm" as Mood, icon: Heart, label: "平靜", color: "text-chart-3" },
  { value: "inspired" as Mood, icon: Sparkles, label: "靈感", color: "text-chart-1" },
  { value: "melancholic" as Mood, icon: CloudRain, label: "憂鬱", color: "text-chart-4" },
];

export default function MoodSelector({ value, onChange }: MoodSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">今日心情</label>
      <div className="flex gap-2 flex-wrap">
        {moods.map((mood) => {
          const Icon = mood.icon;
          const isSelected = value === mood.value;
          
          return (
            <Button
              key={mood.value}
              variant={isSelected ? "secondary" : "outline"}
              className={`gap-2 ${isSelected ? 'toggle-elevate toggle-elevated' : ''}`}
              onClick={() => onChange(mood.value)}
              data-testid={`button-mood-${mood.value}`}
            >
              <Icon className={`w-4 h-4 ${mood.color}`} />
              {mood.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
