import { darkModeContext, languageContext } from "@/context/context";
import Image from "next/image";
import { useContext } from "react";

interface ProjectProps {
  projectImage: any
  projectName: String
  projectDescription: String
  projectTech1?: String
  projectTech2?: String
  projectTech3?: String
  projectTech4?: String
  projectTech5?: String
  projectSite: any
  projectCode: any
}

export default function Project(
  {
    projectImage,
    projectName, 
    projectDescription, 
    projectTech1, 
    projectTech2, 
    projectTech3, 
    projectTech4, 
    projectTech5,
    projectSite,
    projectCode
  }:ProjectProps) {

  const {isEnglish} = useContext(languageContext)
  const {darkMode} = useContext(darkModeContext)

  return (
    <div 
      className={`flex flex-col md:flex-row justify-center gap-4 max-w-max p-5 rounded-xl border-4
       hover:border-main-color hover:scale-105 duration-500 
        ${darkMode 
          ? 'bg-image-dark border-image-dark' 
          : 'bg-image-light border-image-light'
        }
      `}
    >
      <Image className="rounded-xl" src={projectImage} width={270} height={270} alt="Project Image" />
      <div className={`flex flex-col justify-between gap-3 w-72 ${darkMode ? 'text-menu-light' : 'text-menu-dark'}`}>
        <h3 
          className="text-2xl font-bold"
        >
          {projectName}
        </h3>

        <p 
          className="text-sm  text-justify"
        >
          {projectDescription}
        </p>
        <div className="flex gap-3">
          <p className="text-base border-b-2 border-main-color max-w-max font-bold">{projectTech1}</p>
          <p className="text-base border-b-2 border-main-color max-w-max font-bold">{projectTech2}</p>
          <p className="text-base border-b-2 border-main-color max-w-max font-bold">{projectTech3}</p>
          <p className="text-base border-b-2 border-main-color max-w-max font-bold">{projectTech4}</p>
          <p className="text-base border-b-2 border-main-color max-w-max font-bold">{projectTech5}</p>
        </div>
        <div className="flex gap-2">
          <a 
            href={projectSite} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-main-color border-2 border-main-color 
              hover:bg-blue-700 duration-300 px-6 py-3 rounded-lg text-base font-bold"
          >
            {isEnglish ? 'see website' : 'Ver site'}
          </a>

          <a 
            href={projectCode}
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-main-color 
              hover:bg-main-color duration-300 px-6 py-3 rounded-lg text-base font-bold"
          >
            {isEnglish ? 'see Code' : 'Ver Código'}
          </a>
          
        </div>
      </div>
    </div>
  )
}
