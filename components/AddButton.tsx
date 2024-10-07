import { Button } from './ui/button'

import React from 'react'
type Array = {
  title: string
  src: string
  id: number
}

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  array: Array[]
}

const AddButton = ({ onClick, array }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      {array
        .filter((cr, inx, arr) => inx < arr.length / 6)
        .map((btn, inx) => (
          <Button
            key={inx}
            onClick={onClick}
            className="bg-primary hover:bg-primary/60 text-white focus:bg-primary/60"
            aria-label={'add button'}
          >
            {inx + 1}
          </Button>
        ))}
    </div>
  )
}

export default AddButton
