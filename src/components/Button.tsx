import { darkModeContext, languageContext } from "@/context/context"
import { useContext } from "react"

export default function Button() {
  const {isEnglish} = useContext<any>(languageContext)
  const {darkMode} = useContext<any>(darkModeContext)
  return (
    <a 
      className={`border-2 border-main-color text-textLight ${darkMode ? 'text-white' : 'text-black'}
        text-2xl bg-none max-w-max py-3 px-14 rounded-xl hover:bg-main-color duration-300`}
      href="https://api.whatsapp.com/send?phone=5581986632609"
      target="_blank"
        >
          {isEnglish ? 'Talk to me' : 'Fale comigo'}
        </a>
  )
}
