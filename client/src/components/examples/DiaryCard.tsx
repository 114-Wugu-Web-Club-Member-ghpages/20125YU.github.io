import DiaryCard from '../DiaryCard'
import diaryImage from '@assets/generated_images/Ink_wash_mountain_landscape_6401f2f2.png'

export default function DiaryCardExample() {
  return (
    <div className="max-w-2xl">
      <DiaryCard
        id="1"
        title="山中的寧靜時光"
        excerpt="今天在工作室創作時，窗外飄來陣陣桂花香。秋天的氣息讓人特別平靜，筆下的線條也變得更加柔和。我喜歡這樣的時刻，讓心靈與畫布對話..."
        date="2024年11月7日"
        mood="calm"
        imageUrl={diaryImage}
      />
    </div>
  )
}
