'use client'

import { useState } from "react";
import { darkModeContext, languageContext } from "@/context/context";
import Header from "@/components/Header";

export default function Home() {

  const [darkMode, setDarkMode] = useState<any>(true)
  const [isEnglish, setIsEnglish] = useState<any>(false)
  console.log(isEnglish)

  return (
    <darkModeContext.Provider value={{darkMode, setDarkMode}}>
      <languageContext.Provider value={{isEnglish, setIsEnglish}}>
        <div className={`${darkMode === true ? "bg-bg-dark" : "bg-bg-light"}`}>
          <Header />
        </div>
      </languageContext.Provider>
    </darkModeContext.Provider>
  );
}
