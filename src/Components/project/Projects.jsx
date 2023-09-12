import React from 'react'
import { projectOne,  projectTwo,   projectThree, project5, project4, project6   } from "../../assets"
import ProjectsCard from './ProjectsCard';
import { motion } from "framer-motion"



const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20   pb-10"
    >
      <div className="flex justify-center items-center text-center text-4xl	font-bold ">
        <h1 className='text-violet-950 pb-20 text-4xl'>My Project</h1>
      </div>
      <motion.div 
              initial={{x:"-100%",opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{delay:0.1,duration:1}}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-20 f">
        <a href="https://esther-sunday-e-commence.netlify.app/">
        <ProjectsCard
          title="E-Commerce site "
          src={ projectOne }
        />
        </a>

        <a href="  https://delightful-fudge-334f31.netlify.app/">
       <ProjectsCard
          title="Client Website"
          src={projectTwo}
        />
       </a>

      <a href="https://brilliant-crostata-63bd05.netlify.app/">
      <ProjectsCard
          title="Personal Project"
          src={  projectThree }
        />
      </a>
    
     
       <a href="https://friendly-sunflower-d0a5e7.netlify.app/">
       <ProjectsCard
          title="Bootstrap Form"
          src={ project4 }
        />
       </a>

      <a href="https://snazzy-crostata-e7cdc6.netlify.app/">
      <ProjectsCard
          title="Figma Project"
          src={ project5 }
        />
      </a>

      <a href="https://esther-sunday-piggyvest-clone.netlify.app/">
      <ProjectsCard
          title="Piggyvest project"
          src={ project6 }
        />
      </a>
       
      </motion.div>
    </section>
  );
}

export default Projects
