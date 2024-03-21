'use client'

import { useState } from "react";
import { darkModeContext, languageContext } from "@/context/context";
import HeaderMobile from "@/components/HeaderMobile";
import HeaderDesktop from "@/components/HeaderDesktop";
import HomePage from "@/components/HomePage";

export default function Home() {

  const [darkMode, setDarkMode] = useState<any>(true)
  const [isEnglish, setIsEnglish] = useState<any>(false)
  console.log(isEnglish)

  return (
    <darkModeContext.Provider value={{darkMode, setDarkMode}}>
      <languageContext.Provider value={{isEnglish, setIsEnglish}}>
        <header>
          <HeaderMobile />
          <HeaderDesktop />
        </header>
        <main className={`${darkMode ? "bg-bg-dark" : "bg-bg-light"}`}>
          <HomePage />
        </main>
      </languageContext.Provider>
    </darkModeContext.Provider>
  );
}
