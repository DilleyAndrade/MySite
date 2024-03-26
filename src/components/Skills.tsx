import { darkModeContext } from '@/context/context'
import Image from 'next/image'
import React, { useContext } from 'react'

interface SkillsProps {
  techUrl: any
  techName: String
}

export default function Skills({techUrl, techName}:SkillsProps) {
  const {darkMode} = useContext(darkModeContext)
  return (
    <div
      className='flex flex-col items-center hover:scale-110 duration-300'
    >
      <Image 
        src={techUrl}
        width={90} 
        height={90} 
        alt='technology image'
        className='bg-main-color p-4 rounded-lg'
      />
      <p
        className={`${darkMode ? 'text-menu-light' : 'text-menu-dark' }`}
      >
        {techName}
      </p>
    </div>
  )
}
