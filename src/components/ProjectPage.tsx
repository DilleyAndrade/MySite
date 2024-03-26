import { useContext } from "react";
import Project from "./Project";
import SectionTitle from "./SectionTitle";
import { languageContext } from "@/context/context";
import ProjectList from "./ProjectList";
import { motion } from 'framer-motion'

export default function ProjectPage() {

  const {isEnglish} = useContext(languageContext)

  return (
    <div
      id="projects" 
      className="px-6 py-14 overflow-hidden"
    >
      <SectionTitle
        key="Main projects"
        sectionTitle={isEnglish ? 'Main Projects' : 'Principais projetos'}
        sectionDescription={isEnglish ? 'Some of my projects' : 'Alguns dos meus projetos'}
      />
      <motion.div
        initial={{x: 200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: .7}}
        className="flex flex-wrap justify-center gap-6"
      >
        {ProjectList.map((project) => (
          <Project 
          key={project.name}
          projectImage={project.img}
          projectName={project.name}
          projectDescription={project.description}
          projectTech1={project.tech1}
          projectTech2={project.tech2}
          projectTech3={project.tech3}
          projectTech4={project.tech4}
          projectTech5={project.tech5}
          projectSite={project.siteLink}
          projectCode={project.siteCode}
        />
        ))}
        <a 
          href="https://github.com/DilleyAndrade" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-main-color font-semibold text-center w-full hover:text-blue-500 duration-300"
        >
          {isEnglish ? 'See more on my GitHub' : 'Veja mais no meu GitHub'}
        </a>
      </motion.div>
      
    </div>
  )
}
