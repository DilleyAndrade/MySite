'use client'

import { useState } from "react";
import { darkModeContext, languageContext } from "@/context/context";
import HeaderMobile from "@/components/HeaderMobile";
import HeaderDesktop from "@/components/HeaderDesktop";

export default function Home() {

  const [darkMode, setDarkMode] = useState<any>(true)
  const [isEnglish, setIsEnglish] = useState<any>(false)
  console.log(isEnglish)

  return (
    <darkModeContext.Provider value={{darkMode, setDarkMode}}>
      <languageContext.Provider value={{isEnglish, setIsEnglish}}>
        <div className={`${darkMode === true ? "bg-bg-dark" : "bg-bg-light"}`}>
          <HeaderMobile/>
          <HeaderDesktop />
        </div>
      </languageContext.Provider>
    </darkModeContext.Provider>
  );
}
