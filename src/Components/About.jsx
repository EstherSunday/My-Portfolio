import React from 'react'
import { motion } from "framer-motion"
import { project7 } from "../assets"

function About() {

  // const handleDownloadClick = () =>{
  //   const fileUrl = ""

  //   const anchor = document.createElement("a")
  //   anchor.href = fileUrl;
  //   anchor.download = "Esther Sunday CV"

  //   anchor.click();

  //   anchor.remove()
  // };

  return (
    <section id='about' className='bg-violet-200  '>
        <div className='text-center  pt-6 text-4xl	font-bold text-violet-950  '>About</div>
       <div className='flex text-black px-20 py-10 sm:block  md:block lg:flex sm:text-center lg:text-justify'>
       <motion.div 
       initial={{x:"-100%",opacity:0}}
       whileInView={{x:0,opacity:1}}
       transition={{delay:0.8,duration:1}}
       className=''>
            <img src={ project7 } className='px-10 rounded-xl'  alt="image kara" srcset="" />
        </motion.div>

        
        <motion.div
                initial={{x:"100%",opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:0.8,duration:1}}>

             <p className='text-3xl text-violet-950 font-bold sm:pt-10'>Esther Sunday</p>
            <p className='font-bold py-2 '>Full Stack Developer</p>
            <p className='pb-9 text-black'> I am a full stack developer, but I specialize more on front end development. I thrive on creating a user-friendly and visually appealing websites. What really excite me is the opportunity to solve real world problems through web development.
          </p>
            <button   className='font-bold bg-violet-950 px-6 py-3 rounded text-white'>Download CV </button>
        </motion.div>
       </div>
    </section>
  )
}

export default About