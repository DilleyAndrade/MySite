import { darkModeContext, languageContext } from '@/context/context'
import { Moon, Sun } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React, { useContext } from 'react'
import Button from './Button'

export default function HomePage() {
  const {darkMode, setDarkMode} = useContext<any>(darkModeContext)
  const {isEnglish,  setIsEnglish} = useContext<any>(languageContext)
  return (
    <div id='home' className="flex flex-col md:flex-row items-stretch justify-center  lg:ml-64">
      {/* Nome e imagem Dilley Andrade */}
      <div 
        className={` flex w-full md:w-6/12 justify-center pt-20 
          ${darkMode 
            ? 'bg-image-dark' 
            : 'bg-image-light'
          }`
        }
      >
        <div className='flex justify-center relative w-full box-content'>
          <Image 
            className='w-96 lg:w-auto'
            src="/myPhoto.png" 
            width={700} 
            height={700} 
            alt='Foto Dilley Andrade'
          />
          <div 
            className={`absolute z-10 bottom-6 text-center px-6
              ${darkMode 
                ? 'text-white' 
                : 'text-gray-900'
              }`
            }
          >
            <h1 className='text-4xl sm:text-6xl md:text-5xl xl:text-7xl 2xl:text-8xl font-bold '>
              Dilley Andrade
            </h1>
            <h4 className='text-xl sm:text-2xl'>Dev FullStack | ReactJs | NodeJs | Linux</h4>
          </div>
        </div>
        
      </div>

      {/* Frase inicial controles de cor e idioma */}
      <div className='flex flex-col justify-between items-center md:items-start w-full h-auto  md:w-6/12  md:pb-0 px-6 md:px-4 lg:pt-6  pt-20 '>
        <div className='hidden w-full lg:flex justify-end gap-3'>
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
                : 'bg-image-dark'}`
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
        {/* Texto inicial */}
        <div className='text-center md:text-start py-6 '>
          <h2  className='text-4xl sm:text-6xl md:text-5xl xl:text-7xl 2xl:text-8xl font-bold text-main-color'>
            {isEnglish 
              ? 'From Backend to Frontend, creating Innovative Solutions.'
              : 'Do Backend ao Frontend, criando Soluções Inovadoras.'
            }
          </h2>
          <h4 
            className={` text-xl sm:text-2xl mt-5 md:text-xl xl:text-2xl
              ${darkMode 
                ? 'text-white' 
                : 'text-gray-900'
              }`
            }
          >
            Dev FullStack | ReactJs | NodeJs | Linux</h4>
        </div>
        <Button />
        <div className="border-t-2 w-full mt-10 border-image-light"></div>
      </div>
    </div>
  )
}
