'use client'

import { useState } from "react";
import { darkModeContext, languageContext } from "@/context/context";
import HeaderMobile from "@/components/HeaderMobile";
import HeaderDesktop from "@/components/HeaderDesktop";
import HomePage from "@/components/HomePage";
import WhatIDo from "@/components/WhatIDo";
import AboutMe from "@/components/AboutMe";

export default function Home() {

  const [darkMode, setDarkMode] = useState<any>(true)
  const [isEnglish, setIsEnglish] = useState<any>(false)

  return (
    <darkModeContext.Provider value={{darkMode, setDarkMode}}>
      <languageContext.Provider value={{isEnglish, setIsEnglish}}>
        <header>
          <HeaderMobile />
          <HeaderDesktop />
        </header>
        <main className={`${darkMode ? "bg-bg-dark" : "bg-bg-light"} lg:pl-64`}>
          <HomePage />
          <WhatIDo />
          <AboutMe />
        </main>
      </languageContext.Provider>
    </darkModeContext.Provider>
  );
}
