import { useContext } from "react";
import SectionTitle from "./SectionTitle";
import { darkModeContext, languageContext } from "@/context/context";
import { Desktop, DeviceMobileCamera, HardDrives } from "@phosphor-icons/react/dist/ssr";
import { motion } from 'framer-motion'

export default function WhatIDo() {
  const {isEnglish} = useContext(languageContext)
  const {darkMode} = useContext(darkModeContext)
  return (
    <div className="px-6 py-14">
      <SectionTitle 
        key="whatIDo"
        sectionTitle={isEnglish ? "What i do" : "O que eu faço"}
        sectionDescription={isEnglish ? "Areas of expertise" : "Áreas de atuação"}
      />
      <div className="flex items-center justify-center flex-wrap gap-14">
        {/* Serviço prestado Front end */}
        <motion.div 
          initial={{x: -300, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: .7}}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className={`${darkMode ? 'bg-image-dark' : 'bg-image-light'} p-4 rounded-xl max-w-max`}>
            <Desktop size={80} color="#0866FF" />
          </div>
          <div  className="flex flex-col items-center gap-4  max-w-96">
            <h3 
              className={` text-3xl font-bold
                ${darkMode ? 'text-bg-light' : 'text-bg-dark'}
              `}
            >
              Front-End
            </h3>
            <p
              className={` 
                ${darkMode ? 'text-bg-light' : 'text-bg-dark'}
              `}
            >
              {isEnglish 
                ? 'I create front-end graphical interfaces that combine functionality and aesthetics to provide engaging and intuitive digital experiences.' 
                : 'Crio interfaces gráficas front-end que combinam funcionalidade e estética para proporcionar experiências digitais envolventes e intuitivas.'
              }
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5581986632609"
              target="_blank"
              className={` border-2 py-2 px-6 rounded-full text-xl duration-200
                ${darkMode 
                  ? 'text-bg-light border-bg-light hover:text-bg-dark hover:bg-menu-light' 
                  : 'text-bg-dark border-bg-dark hover:text-bg-light hover:bg-menu-dark'
                }
              `}
            >
              {isEnglish ? 'Learn more' : 'Saiba mais'}
            </a>
          </div>
        </motion.div>

        {/* Serviço prestado Back end */}
        <motion.div 
           initial={{x: -300, opacity: 0}}
           whileInView={{x: 0, opacity: 1}}
           transition={{duration: .5}}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className={`${darkMode ? 'bg-image-dark' : 'bg-image-light'} p-4 rounded-xl max-w-max`}>
            <HardDrives size={80} color="#0866FF" />
          </div>
          <div  className="flex flex-col items-center gap-4  max-w-96">
            <h3 
              className={` text-3xl font-bold
                ${darkMode ? 'text-bg-light' : 'text-bg-dark'}
              `}
            >
              Back-End
            </h3>
            <p
              className={` 
                ${darkMode ? 'text-bg-light' : 'text-bg-dark'}
              `}
            >
              {isEnglish 
                ? 'I develop backend APIs with efficiency and quality to boost your application. seamless integration between systems.' 
                : 'Desenvolvo APIs backend com eficiência e qualidade para impulsionar sua aplicação. integração perfeita entre sistemas.'
              }
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5581986632609"
              target="_blank"
              className={` border-2 py-2 px-6 rounded-full text-xl duration-200
                ${darkMode 
                  ? 'text-bg-light border-bg-light hover:text-bg-dark hover:bg-menu-light' 
                  : 'text-bg-dark border-bg-dark hover:text-bg-light hover:bg-menu-dark'
                }
              `}
            >
              {isEnglish ? 'Learn more' : 'Saiba mais'}
            </a>
          </div>
        </motion.div>

        {/* Serviço prestado Mobile */}
        <motion.div 
           initial={{x: -300, opacity: 0}}
           whileInView={{x: 0, opacity: 1}}
           transition={{duration: .3}}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className={`${darkMode ? 'bg-image-dark' : 'bg-image-light'} p-4 rounded-xl max-w-max`}>
            <DeviceMobileCamera size={80} color="#0866FF" />
          </div>
          <div  className="flex flex-col items-center gap-4  max-w-96">
            <h3 
              className={` text-3xl font-bold
                ${darkMode ? 'text-bg-light' : 'text-bg-dark'}
              `}
            >
              Mobile
            </h3>
            <p
              className={` 
                ${darkMode ? 'text-bg-light' : 'text-bg-dark'}
              `}
            >
              {isEnglish 
                ? 'I develop mobile applications tailored to meet your needs, combining functionality and design efficiently.' 
                : 'Desenvolvo aplicativos mobile sob medida para atender às suas necessidades, combinando funcionalidade e design de forma eficiente.'
              }
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5581986632609"
              target="_blank"
              className={` border-2 py-2 px-6 rounded-full text-xl duration-200
                ${darkMode 
                  ? 'text-bg-light border-bg-light hover:text-bg-dark hover:bg-menu-light' 
                  : 'text-bg-dark border-bg-dark hover:text-bg-light hover:bg-menu-dark'
                }
              `}
            >
              {isEnglish ? 'Learn more' : 'Saiba mais'}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
