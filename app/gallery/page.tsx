import images from '@/data/data.json'
import { FocusCards } from '@/components/ui/focus-cards'

const cards = images.map((image) => ({
  title: image.name,
  src: image.image,
  id: image.id,
}))

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <FocusCards cards={cards} />
    </div>
  )
}

export default Gallery
