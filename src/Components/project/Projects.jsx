import React from 'react'
// import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';



const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20   pb-10"
    >
      <div className="flex justify-center items-center text-center text-4xl	font-bold ">
        <h1 className='text-violet-950 pb-20 text-4xl'>My Project</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-20 f">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          src={projectTwo}
          
        />
        <ProjectsCard
          title="Chatting App"
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          src={projectTwo}
        />

       
      </div>
    </section>
  );
}

export default Projects
