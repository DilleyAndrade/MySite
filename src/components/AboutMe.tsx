import { darkModeContext, languageContext } from "@/context/context"
import Image from "next/image"
import { useContext } from "react"
import SectionTitle from "./SectionTitle"
import { motion } from 'framer-motion'

export default function AboutMe() {
  const {isEnglish} = useContext(languageContext)
  const {darkMode} = useContext(darkModeContext)
  return (
    <div id="aboutMe" className="py-16 px-6">
      <SectionTitle 
        key="AboutMe"
        sectionTitle={`${isEnglish ? 'About Me' : 'Sobre mim'}`}
        sectionDescription={`${isEnglish ? 'Get to know me better' : 'Me conheça melhor'}`}
      />
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 overflow-hidden">
        <motion.div
          initial={{x: -240, opacity:0}}
          whileInView={{x: 0, opacity:1}}
          transition={{duration: .6}}
          className="flex flex-col gap-3 items-center text-center justify-center md:items-start md:text-start max-w-80 xl:max-w-[600px]"
        >
          <h2 className="text-main-color text-2xl">
            {isEnglish ? 'Hello,' : 'Olá,'}
          </h2>
          <h2 className="text-main-color text-5xl font-bold">
            {isEnglish ? 'I am Dilley Andrade' : 'Eu sou Dilley Andrade,'}
          </h2>
          <p className={`${darkMode ? 'text-menu-light' : 'text-menu-dark'}`}>
            {isEnglish 
              ? 
                `A passionate Fullstack developer with a
                deep expertise in creating innovative and efficient web solutions.
                With a solid background in technologies such as React, Next.js, Node.js,
                JavaScript and TypeScript, I have dedicated my career to
                development of robust and scalable web applications that add
                value to end users.`
              :
                `Um apaixonado desenvolvedor Fullstack com uma
                profunda expertise em criar soluções web inovadoras e eficientes. 
                Com uma sólida formação em tecnologias como React, Next.js, Node.js, 
                JavaScript e TypeScript, tenho dedicado minha carreira ao 
                desenvolvimento de aplicações web robustas e escaláveis que agregam 
                valor aos usuários finais.`
            }
            
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=5581986632609"
              target="_blank"
              className={` border-2 py-2 px-6 rounded-full text-lg duration-200
                ${darkMode 
                  ? 'text-bg-light border-bg-light hover:text-bg-dark hover:bg-menu-light' 
                  : 'text-bg-dark border-bg-dark hover:text-bg-light hover:bg-menu-dark'
                }
              `}
            >
              {isEnglish ? 'Learn more' : 'Saiba mais'}
            </a>
            <a
              href="https://github.com/DilleyAndrade"
              target="_blank"
              className={` border-2 py-2 px-6 rounded-full text-lg duration-200
                ${darkMode 
                  ? 'text-bg-light border-bg-light hover:text-bg-dark hover:bg-menu-light' 
                  : 'text-bg-dark border-bg-dark hover:text-bg-light hover:bg-menu-dark'
                }
              `}
            >
              {isEnglish ? 'See GitHub' : 'Ver GitHub'}
            </a>
          </div>
          
        </motion.div>
        <motion.div
          initial={{x: 240, opacity:0}}
          whileInView={{x: 0, opacity:1}}
          transition={{duration: .6}}
        >
          <Image
            className="xl:w-[500px] "
            src="/myPhoto.png" 
            width={320} 
            height={320} 
            alt="My image" 
          />
        </motion.div>
      </div>
    </div>
  )
}
