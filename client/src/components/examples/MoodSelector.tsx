import { useState } from 'react'
import MoodSelector from '../MoodSelector'

export default function MoodSelectorExample() {
  const [mood, setMood] = useState<"happy" | "calm" | "inspired" | "melancholic">()

  return (
    <div className="max-w-md p-8">
      <MoodSelector value={mood} onChange={setMood} />
      {mood && (
        <p className="mt-4 text-sm text-muted-foreground">
          已選擇: {mood}
        </p>
      )}
    </div>
  )
}
