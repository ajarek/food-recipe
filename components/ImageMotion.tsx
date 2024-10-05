'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
const ImageMotion = () => {
  return (
    <div className='px-4'>
      <motion.div
        className=''
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Image
          src={'/images/cook-woman.png'}
          width={235}
          height={400}
          alt={'logo'}
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  )
}

export default ImageMotion