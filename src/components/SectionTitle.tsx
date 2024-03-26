import { darkModeContext } from "@/context/context"
import { useContext } from "react"
import { motion } from 'framer-motion'

interface SectionTitleProps {
  sectionTitle?: String
  sectionDescription?: String
}

export default function SectionTitle({sectionTitle, sectionDescription}:SectionTitleProps) {
  const {darkMode} = useContext(darkModeContext)
  return (
    <motion.div 
      initial={{y: -100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: .3}}
      className="flex flex-col pb-14"
    >
      <div className="flex flex-col items-center text-center">
        <h3 className={`font-bold text-main-color text-4xl lg:text-5xl`}>
          {sectionTitle}
        </h3>
        <h4 className={`${darkMode ? 'text-bg-light' : 'text-bg-dark'} text-xl`}>
          {sectionDescription}
        </h4>
      </div>
      <div className="border-t-2 border-main-color w-8/12 mt-4"></div>
    </motion.div>
  )
}
