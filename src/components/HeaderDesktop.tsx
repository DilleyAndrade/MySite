import { darkModeContext, languageContext } from "@/context/context"
import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import { useContext } from "react"
import { motion, spring } from "framer-motion"

export default function HeaderDesktop() {
  const {darkMode} = useContext<any>(darkModeContext)
  const {isEnglish} = useContext<any>(languageContext)

  return (
    <motion.header
      initial={{x:-300}}
      animate={{x:-0}}
      transition={{duration: .2}}
      className={`hidden lg:flex flex-col items-center justify-between w-64 fixed h-screen p-6
        ${darkMode === true 
          ? 'bg-menu-dark' : 'bg-menu-light'
        } 
      `}>
      <div className="w-28 h-28 rounded-xl bg-image-light"></div>
      {/* Opções mobile Navegation */}
      <div>
        <ul
          className={`text-3xl flex w-full flex-col gap-3 text-center
            ${darkMode === true 
              ? 'text-menu-light' 
              : 'text-menu-dark'
            }
          `}
        >
          <motion.li
            initial={{x: -300, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: .3}}
            className="border-t-2 w-full pt-3 border-image-light"
          >
            <a 
              href="#home" 
              className="hover:text-main-color duration-300" 
            >
              {isEnglish === true ? 'Home' : 'Início'}
            </a>
          </motion.li>
          <motion.li
            initial={{x: -300, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: .4}}
            className="border-t-2 w-full pt-3 border-image-light"
          >
            <a 
              href="#aboutMe" 
              className="hover:text-main-color duration-300" 
            >
              {isEnglish === true ? 'About Me' : 'Sobre mim'}
            </a>
          </motion.li>
          <motion.li 
            initial={{x: -300, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: .4}}
            className="border-t-2 w-full pt-3 border-image-light"
          >
            <a 
              href="#skills" 
              className="hover:text-main-color duration-300" 
            >
              Skills
            </a>
          </motion.li>
          <motion.li
            initial={{x: -300, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: .5}}
            className="border-t-2 w-full pt-3 border-image-light"
          >
            <a 
              href="#projects" 
              className="hover:text-main-color duration-300" 
            >
              {isEnglish === true ? 'Projects' : 'Projetos'}
            </a>
          </motion.li>
          <motion.li
            initial={{x: -300, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: .7}}
            className="border-y-2 w-full py-3 border-image-light"
          >
            <a 
              href="#contact" 
              className="hover:text-main-color duration-300" 
            >
              {isEnglish === true ? 'Contact' : 'contato'}
            </a>
          </motion.li>
        </ul>
      </div>
      
      <div>
        {/* Opções Redes sociais */}
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/dilley-andrade/" target="_blank">
            <LinkedinLogo 
              size={30} 
              weight="fill"
              className={`${darkMode === true ? 'text-menu-light' : 'text-menu-dark'} 
                hover:scale-110 duration-300 hover:text-main-color`
              }
            />
          </a>
          <a href="https://www.instagram.com/dilleyandrade/" target="_blank">
            <InstagramLogo 
              size={30} 
              weight="fill"
              className={`${darkMode === true ? 'text-menu-light' : 'text-menu-dark'} 
                hover:scale-110 duration-300 hover:text-main-color`
              }
            />
          </a>
          <a href="https://github.com/DilleyAndrade" target="_blank">
            <GithubLogo 
              size={30} 
              weight="fill"
              className={`${darkMode === true ? 'text-menu-light' : 'text-menu-dark'} 
                hover:scale-110 duration-300 hover:text-main-color`
              }
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5581986632609" target="_blank">
            <WhatsappLogo 
              size={30} 
              weight="fill"
              className={`${darkMode === true ? 'text-menu-light' : 'text-menu-dark'} 
                hover:scale-110 duration-300 hover:text-main-color`
              }
            />
          </a>
          <a href="https://t.me/DilleyAndrade" target="_blank">
            <TelegramLogo 
              size={30} 
              weight="fill"
              className={`${darkMode === true ? 'text-menu-light' : 'text-menu-dark'} 
                hover:scale-110 duration-300 hover:text-main-color`
              }
            />
          </a>
        </div>
        {/* Opções Copy */}
        <div>
          <h6 
            className={`text-center mt-4 text-sm
              ${darkMode === true 
                ? 'text-menu-light' 
                : 'text-menu-dark'
              }`
            }
          >
            {isEnglish === true 
              ? '2024© All rights reserved. Developed by Dilley Andrade'
              : '2024© Todos os direitos reservados. Desenvolvido por Dilley Andrade'
            }
          </h6>
        </div>
      </div>
      
    </motion.header>
  )
}