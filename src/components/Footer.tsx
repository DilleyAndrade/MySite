import { darkModeContext, languageContext } from "@/context/context"
import { 
  GithubLogo, 
  InstagramLogo, 
  LinkedinLogo, 
  TelegramLogo, 
  WhatsappLogo 
} from "@phosphor-icons/react/dist/ssr"
import { useContext } from "react"
import { motion } from 'framer-motion'

export default function Footer() {
  const {isEnglish} = useContext(languageContext)
  const {darkMode} = useContext(darkModeContext)
  return (
    <footer id="contact" className="px-6 pt-14 pb-5">
      <div 
        className="flex flex-col px-5 justify-around 
         text-center"
      >
        <div className={` mb-10 border-t-2 ${darkMode ? 'border-menu-light' : 'border-menu-dark'}`}/>
        
        <motion.h1 
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: .3}}
          className={`text-5xl lg:text-7xl font-bold 
            ${darkMode 
              ? 'text-menu-light' 
              : 'text-menu-dark'
            }`
          }
        >
          Dilley Andrade
        </motion.h1>
        <motion.h5
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: .5}}
          className="text-main-color text-base lg:text-2xl mt-3"
        >
          Dev FullStack | ReactJs | NodeJs | Linux
        </motion.h5>

        
        <motion.div
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: .7}}
          className={`flex justify-center gap-6 mt-5 mb-9 
            ${darkMode 
              ? 'text-menu-light' 
              : 'text-menu-dark'
            }`
          }>
      
          <a 
            href="https://www.linkedin.com/in/dilley-andrade/" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <LinkedinLogo 
              size={46} 
              weight="fill" 
              className=" hover:text-main-color hover:scale-125 duration-300"
            />
          </a>
          
          <a 
            href="https://www.instagram.com/dilleyandrade/" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <InstagramLogo 
              size={46} 
              weight="fill" 
              className=" hover:text-main-color hover:scale-125 duration-300"
            />
          </a>

          <a 
            href="https://github.com/DilleyAndrade" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <GithubLogo 
              size={46} 
              weight="fill" 
              className=" hover:text-main-color hover:scale-125 duration-300"
            />
          </a>

          <a 
            href="https://api.whatsapp.com/send?phone=5581986632609" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <WhatsappLogo 
              size={46} 
              weight="fill" 
              className=" hover:text-main-color hover:scale-125 duration-300"
            />
          </a>

          <a 
            href="https://t.me/DilleyAndrade" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <TelegramLogo 
              size={46} 
              weight="fill" 
              className=" hover:text-main-color hover:scale-125 duration-300"
            />
          </a>

        </motion.div>
        <motion.h5
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: .9}}
          className="text-main-color text-2xl"
        >
          {isEnglish ? 'Professional contact' : 'Contato profissional'}
        </motion.h5>
        <motion.h5
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 1.1}}
          className={`text-2xl ${darkMode ? 'text-menu-light' : 'text-menu-dark'}`}
        >
          +55 (81) 986-632-609
        </motion.h5>
          <br />
        <motion.h5
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 1.3}}
          className="text-main-color text-2xl"
        >
          {isEnglish ? 'Say hello on Discord' : 'Diga olá no Discord'}
        </motion.h5>
        <motion.h5
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 1.5}}
          className={`text-2xl ${darkMode ? 'text-menu-light' : 'text-menu-dark'}`}
        >
            dilleyandrade
        </motion.h5>
      </div>
      
      <div className={` mb-5 mt-10 border-t-2 ${darkMode ? 'border-menu-light' : 'border-menu-dark'}`}/>
      <h5 
        className={`text-center text-sm lg:text-xl 
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
      </h5>
    </footer>
  )
}
