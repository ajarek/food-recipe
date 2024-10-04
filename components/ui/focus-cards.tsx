'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import AddButton from '../AddButton'

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
  }) => (
    <Link href={`/recipe/${card.id}`}>
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-72 w-full transition-all duration-300 ease-out',
        hovered !== null && hovered !== index && 'blur-sm scale-[0.98]'
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          'absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300',
          hovered === index ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
    </Link>
  )
)

Card.displayName = 'Card'

type Card = {
  title: string
  src: string
  id: number
}

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [end, setEnd] = React.useState(10)
  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement
    setEnd(+target.innerText * 6)
  }
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.filter((cr, idx) => idx < end && idx >= end - 6)
      .map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          
        />
      ))}
    </div>
    <AddButton array={cards} onClick={handleButton} />
    </>
  )
}
