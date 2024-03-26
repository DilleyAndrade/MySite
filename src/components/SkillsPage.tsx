import { darkModeContext, languageContext } from "@/context/context"
import SectionTitle from "./SectionTitle"
import Skills from "./Skills"
import SkillsList from "./SkillsList"
import { useContext } from "react"
import { motion } from 'framer-motion'
import { BookOpenText, ChartBar, ChatCircleText, ClockCountdown, PlusCircle, SneakerMove, UsersThree, WaveSine, Waveform, Wrench } from "@phosphor-icons/react/dist/ssr"

export default function SkillsPage() {
  const {darkMode} = useContext<any>(darkModeContext)
  const {isEnglish} = useContext<any>(languageContext)
  return (
    <div id="skills" className="px-6 py-14 w-full flex flex-col xl:flex-row justify-center gap-14">
      {/* Hard Skill */}
      <div>
        <SectionTitle
          key="Skills"
          sectionTitle="Hard Skills"
          sectionDescription={`${isEnglish ? 'Main technologies' : 'Principais tecnologias'}`}
        />
        <div className="flex flex-col items-center justify-center w-full gap-7">
          <motion.div 
          initial={{x: -50, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: .7}}
            className="flex justify-center flex-wrap max-w-[795px] gap-10"
          >
            {SkillsList.map((skill) => (
              <Skills
                key={skill.name}
                techUrl={skill.url}
                techName={skill.name}
              />
            ))}
          </motion.div>
          <motion.p 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: .7}}
            className={`text-sm max-w-[795px] text-justify
              ${darkMode ? 'text-menu-light' : 'text-menu-dark' }
            `}
          >
            {`${isEnglish 
                ? 
                  `I believe that a good professional is formed not only by the ability
                  technique, but also the way he interacts with his team and with
                  your daily problems. I strive to perform both areas with
                  excellence and caprice, after all, a company is formed not by a good
                  professional, but rather by a good team working together with
                  harmony and a defined main objective.` 
                :
                  `Acredito que um bom profissional é formado não apenas pela capacidade 
                  técnica, mas também pela forma como ele interage com sua equipe e com 
                  seus problemas diários. Me empenho para desempenhar ambas as áreas com
                  excelência e capricho, afinal,uma empresa é formada não por um bom 
                  profissional, mas sim por uma boa equipe trabalhando juntos com 
                  harmonia e um objetivo principal definido.`
              }`
            }
            
          </motion.p>
        </div>
      </div>

      {/* Soft Skill */}
      <div>
      <SectionTitle
        key="Soft Skills"
        sectionTitle="Soft Skills"
        sectionDescription={isEnglish ? 'Proven social skills' : 'Habilidades sociais comprovadas'}
      />
      <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-center justify-center text-md font-bold overflow-hidden">
        <ul
          className={`flex flex-col flex-wrap gap-6 items-start
            ${darkMode ? 'text-menu-light' : 'text-menu-dark'}
          `}
        >
          <motion.li 
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex gap-3 items-center"
          >
            <UsersThree size={30} /> {isEnglish ? 'Team work' : 'Trabalho em equipe'}
          </motion.li>

          <motion.li 
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex gap-3 items-center"
          >
            <ChatCircleText size={30} /> {isEnglish ? 'Effective communication' : 'Comunicação efetiva'}
          </motion.li>

          <motion.li 
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex gap-3 items-center"
          >
            <WaveSine size={30} /> {isEnglish ? 'Adaptability' : 'Adaptabilidade'}
          </motion.li>

          <motion.li 
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex gap-3 items-center"
          >
            <ChartBar size={30} /> {isEnglish ? 'Critical thinking' : 'Pensamento crítico'}
          </motion.li>

          <motion.li 
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex gap-3 items-center"
          >
            <Wrench size={30} /> {isEnglish ? 'Problem solving' : 'Resolução de problemas'}
          </motion.li>
        </ul>

        <ul
          className={`flex flex-col flex-wrap gap-6 items-start
            ${darkMode ? 'text-menu-light' : 'text-menu-dark'}
          `}
        >
          <motion.li 
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex gap-3 items-center"
          >
            <ClockCountdown size={30} /> {isEnglish ? 'Time management' : 'Gestão de tempo'}
          </motion.li>

          <motion.li 
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex gap-3 items-center"
          >
            <PlusCircle size={30} /> {isEnglish ? 'Positive attitude' : 'Atitude positiva'}
          </motion.li>

          <motion.li 
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex gap-3 items-center"
          >
            <SneakerMove size={30} /> {isEnglish ? 'Proactivity' : 'Proatividade'}
          </motion.li>

          <motion.li 
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex gap-3 items-center"
          >
            <BookOpenText size={30} /> {isEnglish ? 'Continuous learning' : 'Aprendizado contínuo'}
          </motion.li>

          <motion.li 
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex gap-3 items-center"
          >
            <Waveform size={30} /> {isEnglish ? 'Flexibility' : 'Flexibilidade'}
          </motion.li>
        </ul>
      </div>
      </div>

    </div>
  )
}
