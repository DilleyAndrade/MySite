'use client'
import { darkModeContext, languageContext } from "@/context/context"
import { 
  GithubLogo, 
  InstagramLogo, 
  LinkedinLogo, 
  Moon, 
  Sun, 
  TelegramLogo, 
  WhatsappLogo 
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import { useContext, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function HeaderMobile() {
  const {darkMode, setDarkMode} = useContext<any>(darkModeContext)
  const {isEnglish, setIsEnglish} = useContext<any>(languageContext)
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState<any>(false)
  return (
    <header className="lg:hidden">
      <div 
        className={`flex fixed top-0 w-full justify-between items-center z-30
          px-6 py-4 border-b-4 border-main-color bg-opacity-90
          ${darkMode ? 'bg-menu-dark': 'bg-menu-light'}
        `}
      >
        {/* Botão menu Mobile */}
        <div className="flex items-center gap-3" >
          <button 
            onClick={() => {setMenuMobileIsOpen(true)}}
            className="flex flex-col gap-2"
          >
            <div className={`h-1 w-8 rounded-full  duration-300 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
            <div className={`h-1 w-8 rounded-full  duration-300 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
            <div className={`h-1 w-8 rounded-full  duration-300 ${darkMode ? 'bg-white' : 'bg-gray-900'}`}></div>
          </button>

          <h2 className={` ${darkMode ? 'text-menu-light' : 'text-menu-dark' }`}>
            Menu
          </h2>
        </div>

        <div className="flex gap-3">
          {/* Controle do idioma */}
          <div className="flex gap-3">
            <button 
              className="w-8 h-8 rounded-full bg-image-light"
              onClick={()=>{setIsEnglish(false)}}
            >
              pt
            </button>

            <button 
              className="w-8 h-8 rounded-full bg-image-light"
              onClick={()=>{setIsEnglish(true)}}
            >
              en
            </button>
          </div>
          {/* Controle do tema */}
          <div className={`w-16 h-8 rounded-full flex 
            ${darkMode 
              ? 'bg-white justify-start'
              : 'bg-gray-900 justify-end'} duration-300`
            }
          >
            <button
              className={`h-8 w-8 rounded-full flex items-center justify-center
                hover:scale-90 duration-300
                ${darkMode
                  ? 'bg-image-light'
                  : 'bg-image-dark'
                }`
              }
              onClick={()=> {
                if(darkMode === true) setDarkMode(false)
                if(darkMode === false) setDarkMode(true)
              }}
            >
              <div>
                {darkMode ? <Sun size={20} /> : <Moon size={20} color="#fff"/> }
              </div>
              
            </button>
          </div>
        </div>
      </div>
      {/* Opções Menu Mobile */}
      <AnimatePresence>
      {menuMobileIsOpen && (
        <div>
          <motion.div
            initial={{x:-1050}}
            animate={{x:0}}
            exit={{x:-1050}}
            transition={{ duration: 0.7 }}
            className={`flex flex-col items-center h-screen w-10/12 fixed z-50
              ${darkMode 
                ? 'bg-menu-dark' 
                : 'bg-menu-light'
              }`
            }
          >
            {/* Fechar opções mobile */}
            <div className="w-full flex justify-end">
              <button 
                onClick={() => {setMenuMobileIsOpen(false)}}
                className={`font-black text-center text-3xl w-10 h-10 
                  rounded-bl-2xl 
                  ${darkMode 
                    ? 'text-menu-light bg-image-dark' 
                    : 'text-menu-dark bg-image-light'}
                  `}
                >
                X
              </button>
            </div>
            {/* Opções mobile Imagem e nome */}
            <div className="flex items-center gap-2">
              <Image 
                className="rounded-full bg-image-light" 
                src="/myPhoto.png" 
                width={50} 
                height={50} 
                alt="My image"
              />
              <h2 
                className={`font-bold 
                  ${darkMode 
                    ? 'text-menu-light' 
                    : 'text-menu-dark'
                  }`
                }
              >
                Dilley Andrade
              </h2>
            </div>
            <div className="border-t-2 w-full my-10 border-image-light"></div>
            {/* Opções mobile Navegation */}
            <div>
              <ul 
                className={`text-xl flex flex-col gap-4 items-center
                  ${darkMode 
                    ? 'text-menu-light' 
                    : 'text-menu-dark'
                  }
                `}
              >
                <li>
                  <a 
                    href="#home" 
                    className="hover:text-main-color duration-300" 
                    onClick={() => {setMenuMobileIsOpen(false)}}
                  >
                    {isEnglish ? 'Home' : 'Início'}
                  </a>
                </li>
                <li>
                  <a 
                    href="#aboutMe" 
                    className="hover:text-main-color duration-300" 
                    onClick={() => {setMenuMobileIsOpen(false)}}
                  >
                    {isEnglish ? 'About Me' : 'Sobre mim'}
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className="hover:text-main-color duration-300" 
                    onClick={() => {setMenuMobileIsOpen(false)}}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="hover:text-main-color duration-300" 
                    onClick={() => {setMenuMobileIsOpen(false)}}
                  >
                    {isEnglish ? 'Projects' : 'Projetos'}
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="hover:text-main-color duration-300" 
                    onClick={() => {setMenuMobileIsOpen(false)}}
                  >
                    {isEnglish ? 'Contact' : 'contato'}
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-t-2 w-full my-10 border-image-light"></div>

            {/* Opções Redes sociais */}
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/dilley-andrade/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo 
                  size={30} 
                  weight="fill"
                  className={`${darkMode ? 'text-menu-light' : 'text-menu-dark'} 
                    hover:scale-110 duration-300 hover:text-main-color`
                  }
                />
              </a>
              <a 
                href="https://www.instagram.com/dilleyandrade/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo 
                  size={30} 
                  weight="fill"
                  className={`${darkMode ? 'text-menu-light' : 'text-menu-dark'} 
                    hover:scale-110 duration-300 hover:text-main-color`
                  }
                />
              </a>
              <a 
                href="https://github.com/DilleyAndrade" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo 
                  size={30} 
                  weight="fill"
                  className={`${darkMode ? 'text-menu-light' : 'text-menu-dark'} 
                    hover:scale-110 duration-300 hover:text-main-color`
                  }
                />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5581986632609" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo 
                  size={30} 
                  weight="fill"
                  className={`${darkMode ? 'text-menu-light' : 'text-menu-dark'} 
                    hover:scale-110 duration-300 hover:text-main-color`
                  }
                />
              </a>
              <a 
                href="https://t.me/DilleyAndrade" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramLogo 
                  size={30} 
                  weight="fill"
                  className={`${darkMode ? 'text-menu-light' : 'text-menu-dark'} 
                    hover:scale-110 duration-300 hover:text-main-color`
                  }
                />
              </a>
            </div>
            {/* Opções Copy */}
            <div>
              <h6 
                className={` text-center mt-4 w-64
                  ${darkMode 
                    ? 'text-menu-light' 
                    : 'text-menu-dark'
                  }`
                }
              >
                {isEnglish 
                  ? '2024© All rights reserved. Developed by Dilley Andrade'
                  : '2024© Todos os direitos reservados. Desenvolvido por Dilley Andrade'
                }
              </h6>
            </div>
          </motion.div>

          <motion.div
            className="bg-main-color h-screen w-11/12 fixed z-40"
            initial={{x:-1050}}
            animate={{x:0}}
            exit={{x:-1050}}
            transition={{ duration: 0.5 }}
          >
          </motion.div>

          <motion.div
            className="bg-menu-dark bg-opacity-90 h-screen w-full fixed z-30"
            initial={{x:-1050}}
            animate={{x:0}}
            exit={{x:-1050}}
            transition={{ duration: 0.3 }}
          >
          </motion.div>
        </div>
      )}
      </AnimatePresence>
      
    </header>
  )
}
