import ArtworkCard from '../ArtworkCard'
import artworkImage from '@assets/generated_images/Watercolor_garden_painting_55b5352f.png'

export default function ArtworkCardExample() {
  return (
    <div className="max-w-sm">
      <ArtworkCard
        id="1"
        title="花園之夢"
        imageUrl={artworkImage}
        date="2024年11月"
        category="水彩"
        onClick={() => console.log('Artwork clicked')}
      />
    </div>
  )
}
