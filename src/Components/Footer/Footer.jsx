import { Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-10 py-5 mt-6 bg-neutral-900 text-center flex flex-col'>
        <p className='text-gray-400'>copyright-2026&copy;-All Right Reserved</p>
        <p className='flex items-center justify-center gap-1 text-gray-400'>Created by 
            <span> <Heart color='red' fill='red' size={18}/> </span>Me</p>
    </div>
  )
}

export default Footer